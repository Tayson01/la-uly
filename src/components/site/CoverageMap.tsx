import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Circle, CircleMarker, MapContainer, Marker, Polyline, TileLayer, Tooltip, useMap, useMapEvents } from "react-leaflet";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Loader2, Locate, MessageCircle, Maximize, Minus, Navigation, Phone, Plus, X } from "lucide-react";

import { BASE, TEL, mapRings, servedPoints, waLink, zones } from "@/lib/site-data";

type LL = [number, number];

const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas";
const TILES = {
  light: { base: `${ESRI}/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`, ref: `${ESRI}/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}` },
  dark: { base: `${ESRI}/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}`, ref: `${ESRI}/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}` },
};

const baseIcon = L.divIcon({
  className: "",
  html: `<span class="cm-base"><span class="cm-radar"></span><span class="cm-radar cm-radar-2"></span><span class="cm-radar cm-radar-3"></span><span class="cm-base-ring"></span><span class="cm-base-pin">V</span><span class="cm-base-tag">Atelier non-stop</span></span>`,
  iconSize: [44, 44],
  iconAnchor: [22, 22],
});

const zoneIcon = (label: string, active: boolean, showLabel: boolean) =>
  L.divIcon({
    className: "",
    html: showLabel || active
      ? `<span class="cm-chip${active ? " is-active" : ""}"><span class="cm-chip-dot"></span>${label}</span>`
      : `<span class="cm-zone${active ? " is-active" : ""}"><span class="cm-zone-dot"></span></span>`,
    iconSize: showLabel || active ? [0, 0] : [12, 12],
    iconAnchor: showLabel || active ? [0, 0] : [6, 6],
  });

const ringLabel = (text: string) =>
  L.divIcon({ className: "", html: `<span class="cm-ring-label">${text}</span>`, iconSize: [0, 0], iconAnchor: [0, 0] });

const userIcon = L.divIcon({
  className: "",
  html: `<span class="cm-user"></span>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function km(a: LL, b: LL) {
  return L.latLng(a).distanceTo(L.latLng(b)) / 1000;
}
function eta(d: number) {
  const road = d * 1.25;
  return `${Math.round(12 + road * 0.95)}–${Math.round(18 + road * 1.4)} min`;
}

function useIsDark() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const u = () => setDark(el.classList.contains("dark"));
    u();
    const o = new MutationObserver(u);
    o.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => o.disconnect();
  }, []);
  return dark;
}

function useBrand() {
  const [c, setC] = useState("#dc2626");
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue("--brand").trim();
    if (v) setC(v);
  }, []);
  return c;
}

function Bridge({ onMap, onZoom, onTap, onMove }: { onMap: (m: L.Map) => void; onZoom: (z: number) => void; onTap: () => void; onMove: () => void }) {
  const map = useMap();
  useMapEvents({ zoomend: () => onZoom(map.getZoom()), moveend: onMove, resize: onMove, click: onTap });
  useEffect(() => {
    onMap(map);
    onZoom(map.getZoom());
    const fix = () => map.invalidateSize({ animate: false });
    const ro = new ResizeObserver(fix);
    ro.observe(map.getContainer());
    map.scrollWheelZoom.disable();
    const on = () => map.scrollWheelZoom.enable();
    const off = () => map.scrollWheelZoom.disable();
    map.on("focus", on);
    map.on("mousedown", on);
    map.on("mouseout", off);
    return () => {
      ro.disconnect();
      map.off("focus", on);
      map.off("mousedown", on);
      map.off("mouseout", off);
    };
  }, [map, onMap, onZoom]);
  return null;
}

export default function CoverageMap() {
  const dark = useIsDark();
  const brand = useBrand();
  const mapRef = useRef<L.Map | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(9);
  const [active, setActive] = useState<string | null>(null);
  const [user, setUser] = useState<LL | null>(null);
  const [geoErr, setGeoErr] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);
  const [acc, setAcc] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [view, setView] = useState(0);
  const onMove = useCallback(() => setView((v) => v + 1), []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setMobile(mq.matches);
    setCanFullscreen(!mq.matches && !!document.fullscreenEnabled);
  }, []);

  const zone = useMemo(() => zones.find((z) => z.slug === active) ?? null, [active]);
  const bounds = useMemo(() => L.latLngBounds([BASE, ...zones.map((z) => z.coords as LL)]).pad(0.12), []);
  const nearBounds = useMemo(
    () => L.latLngBounds([BASE, ...zones.filter((z) => km(BASE, z.coords as LL) < 16).map((z) => z.coords as LL)]).pad(0.1),
    [],
  );

  const onMap = useCallback((m: L.Map) => {
    mapRef.current = m;
  }, []);

  const fit = () => {
    mapRef.current?.flyToBounds(bounds, { duration: 0.8 });
    setActive(null);
  };

  const selectZone = (slug: string, coords: LL) => {
    setActive(slug);
    const m = mapRef.current;
    if (!m) return;
    const z = Math.max(zoom, 11);
    const c = m.unproject(m.project(coords, z).add([0, 110]), z);
    m.flyTo(c, z, { duration: 0.7 });
  };

  const locate = useCallback((silent = false) => {
    setGeoErr(null);
    if (!("geolocation" in navigator)) return setGeoErr("Telefonul nu permite locația.");
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const ll: LL = [p.coords.latitude, p.coords.longitude];
        setUser(ll);
        setAcc(p.coords.accuracy);
        setActive(null);
        setLocating(false);
        mapRef.current?.flyToBounds(L.latLngBounds([ll, BASE]), { duration: 0.9, paddingTopLeft: [40, 80], paddingBottomRight: [80, 250] });
      },
      (e) => {
        setLocating(false);
        if (!silent)
          setGeoErr(e.code === 1 ? "Ai refuzat locația. Activeaz-o din setările browserului." : "Nu am putut afla locația. Încearcă din nou.");
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
    );
  }, []);

  // dacă vizitatorul a permis deja locația, o luăm automat
  useEffect(() => {
    navigator.permissions?.query({ name: "geolocation" as PermissionName }).then((r) => {
      if (r.state === "granted") locate(true);
    }).catch(() => {});
  }, [locate]);

  const nearest = useMemo(() => {
    if (!user) return null;
    return zones.reduce((b, z) => (km(user, z.coords as LL) < km(user, b.coords as LL) ? z : b), zones[0]!);
  }, [user]);

  const waLocation = user
    ? waLink(`Bună ziua! Am nevoie de vulcanizare. Locația mea: https://maps.google.com/?q=${user[0].toFixed(6)},${user[1].toFixed(6)}`)
    : null;

  const fullscreen = () => {
    const el = wrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  const target: LL | null = zone ? (zone.coords as LL) : user;
  const dist = target ? km(BASE, target) : null;
  const showLabels = zoom >= 10;

  // Anti-suprapunere: la zoom-ul curent calculăm în pixeli unde cade fiecare etichetă.
  // Etichetele care s-ar suprapune devin puncte (cu numele la hover/atingere),
  // iar punctele mici dublate sau acoperite de o etichetă nu se mai desenează.
  const layout = useMemo(() => {
    type Box = { x1: number; y1: number; x2: number; y2: number };
    const m = mapRef.current;
    const px = (ll: LL) => (m ? m.latLngToContainerPoint(L.latLng(ll)) : L.CRS.EPSG3857.latLngToPoint(L.latLng(ll), zoom));
    const box = (ll: LL, w: number, h: number, dy = 0, pad = 3): Box => {
      const p = px(ll);
      return { x1: p.x - w / 2 - pad, y1: p.y - h / 2 + dy - pad, x2: p.x + w / 2 + pad, y2: p.y + h / 2 + dy + pad };
    };
    const hit = (a: Box, b: Box) => a.x1 < b.x2 && a.x2 > b.x1 && a.y1 < b.y2 && a.y2 > b.y1;
    const taken: Box[] = [box(BASE, 44, 44), box(BASE, 140, 22, 35)];
    const overlays: Box[] = [];
    // butoanele, banda de sus și cardul de jos acoperă harta: nu punem etichete sub ele
    const wrap = wrapRef.current;
    if (m && wrap) {
      const w = wrap.getBoundingClientRect();
      wrap.querySelectorAll<HTMLElement>("[data-cm-overlay]").forEach((el) => {
        const r = el.getBoundingClientRect();
        overlays.push({ x1: r.left - w.left - 4, y1: r.top - w.top - 4, x2: r.right - w.left + 4, y2: r.bottom - w.top + 4 });
      });
    }
    // butoanele, banda de sus și cardul de jos acoperă harta: nu punem etichete sub ele
    const wrap = wrapRef.current;
    if (m && wrap) {
      const w = wrap.getBoundingClientRect();
      wrap.querySelectorAll<HTMLElement>("[data-cm-overlay]").forEach((el) => {
        const r = el.getBoundingClientRect();
        overlays.push({ x1: r.left - w.left - 4, y1: r.top - w.top - 4, x2: r.right - w.left + 4, y2: r.bottom - w.top + 4 });
      });
    }
    const ringVisible = mapRings.map((r) => {
      const b = box([BASE[0] + r.radius / 111320, BASE[1]], 80, 20);
      if (overlays.some((o) => hit(o, b))) return false;
      taken.push(b);
      return true;
    });
    taken.push(...overlays);
    const base = px(BASE);
    const order = [...zones].sort((a, b) =>
      a.slug === active ? -1 : b.slug === active ? 1 : km(BASE, a.coords as LL) - km(BASE, b.coords as LL),
    );
    const labeled = new Set<string>();
    const dots = new Set<string>();
    for (const z of order) {
      const c = z.coords as LL;
      const p = px(c);
      const nearBase = Math.hypot(p.x - base.x, p.y - base.y) < 30;
      if (nearBase) continue; // e chiar sub pinul atelierului (ex. Arad / Grădiște)
      if (showLabels || z.slug === active) {
        const b = box(c, z.short.length * 6.8 + 30, 26);
        if (z.slug === active || !taken.some((t) => hit(t, b))) {
          taken.push(b);
          labeled.add(z.slug);
          continue;
        }
      }
      const d = box(c, 12, 12, 0, 1);
      if (z.slug !== active && taken.some((t) => hit(t, d))) continue; // nu desenăm puncte peste pin, eticheta atelierului sau etichetele inelelor
      dots.add(z.slug);
      taken.push(d);
    }
    const points = servedPoints.filter((sp) => {
      if (km(sp.coords, BASE) < 1.5) return false;
      if (zones.some((z) => km(sp.coords, z.coords as LL) < 1.5)) return false;
      const b = box(sp.coords, 8, 8, 0, 0);
      return !taken.some((t) => hit(t, b));
    });
    return { labeled, dots, points, ringVisible };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom, active, showLabels, view, user]);

  return (
    <div ref={wrapRef} className="cm-wrap relative isolate z-0 overflow-hidden h-[72svh] min-h-[480px] w-full bg-surface sm:h-[620px]">
      <MapContainer
        bounds={nearBounds}
        zoomControl={false}
        attributionControl={false}
        dragging={!mobile}
        touchZoom
        className="cm-map h-full w-full"
      >
        <Bridge onMap={onMap} onZoom={setZoom} onTap={() => setActive(null)} onMove={onMove} />
        <TileLayer
          key={dark ? "d" : "l"}
          url={dark ? TILES.dark.base : TILES.light.base}
          maxZoom={16}
          attribution="&copy; Esri, HERE, OpenStreetMap"
        />

        {mapRings.map((r, i) => (
          <Circle
            key={r.km}
            center={BASE}
            radius={r.radius}
            interactive={false}
            pathOptions={{
              color: brand,
              weight: i === 0 ? 2 : 1.25,
              opacity: i === 0 ? 0.7 : 0.4,
              dashArray: i === 0 ? undefined : "1 7",
              lineCap: "round",
              fillColor: brand,
              fillOpacity: i === 0 ? 0.05 : 0,
            }}
          />
        ))}
        {mapRings.filter((_, i) => layout.ringVisible[i]).map((r) => (
          <Marker
            key={`l${r.km}`}
            position={[BASE[0] + r.radius / 111320, BASE[1]]}
            icon={ringLabel(r.minutes.split(" · ")[1] ?? `${r.km} km`)}
            interactive={false}
          />
        ))}


        {target && (
          <>
            <Polyline positions={[BASE, target]} interactive={false} pathOptions={{ color: brand, weight: 8, opacity: 0.15, lineCap: "round" }} />
            <Polyline positions={[BASE, target]} interactive={false} pathOptions={{ color: brand, weight: 3, opacity: 1, dashArray: "8 10", lineCap: "round", className: "cm-route" }} />
          </>
        )}

        {/* Toate localitățile deservite, ca puncte mici */}
        {layout.points.map((p) => (
          <CircleMarker
            key={p.name}
            center={p.coords}
            radius={4}
            pathOptions={{ color: brand, weight: 1.5, opacity: 0.9, fillColor: brand, fillOpacity: 0.55 }}
          >
            <Tooltip direction="top" offset={[0, -4]}>{p.name} · venim non-stop</Tooltip>
          </CircleMarker>
        ))}

        {zones.filter((z) => layout.labeled.has(z.slug) || layout.dots.has(z.slug)).map((z) => {
          const asLabel = layout.labeled.has(z.slug);
          return (
            <Marker
              key={`${z.slug}-${asLabel ? "l" : "d"}`}
              position={z.coords as LL}
              icon={zoneIcon(z.short, active === z.slug, asLabel)}
              eventHandlers={{ click: () => selectZone(z.slug, z.coords as LL) }}
              zIndexOffset={active === z.slug ? 1000 : asLabel ? 500 : 0}
            >
              {!asLabel && <Tooltip direction="top" offset={[0, -6]}>{z.name}</Tooltip>}
            </Marker>
          );
        })}

        {user && acc && acc < 3000 && (
          <Circle center={user} radius={acc} interactive={false} pathOptions={{ color: "#3b82f6", weight: 1, opacity: 0.4, fillOpacity: 0.1 }} />
        )}
        {user && <Marker position={user} icon={userIcon} zIndexOffset={1500} />}
        <Marker position={BASE} icon={baseIcon} zIndexOffset={2000} />
      </MapContainer>

      {/* Alegere rapidă localitate */}
      <div data-cm-overlay className="cm-strip absolute left-0 right-16 top-3 z-[500] flex gap-1.5 overflow-x-auto px-3 pb-1">
        {[...zones].sort((a, b) => km(BASE, a.coords as LL) - km(BASE, b.coords as LL)).map((z) => (
          <button
            key={z.slug}
            type="button"
            onClick={() => selectZone(z.slug, z.coords as LL)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition ${
              active === z.slug ? "bg-foreground text-background" : "cm-glass hover:text-brand"
            }`}
          >
            {z.short}
          </button>
        ))}
      </div>

      {/* Controale */}
      <div data-cm-overlay className="absolute right-3 top-3 z-[501] flex flex-col gap-2">
        <div className="cm-glass flex flex-col overflow-hidden rounded-2xl">
          <button type="button" aria-label="Mărește" onClick={() => mapRef.current?.zoomIn()} className="cm-btn"><Plus className="size-4" /></button>
          <span className="h-px bg-border" />
          <button type="button" aria-label="Micșorează" onClick={() => mapRef.current?.zoomOut()} className="cm-btn"><Minus className="size-4" /></button>
        </div>
        <button type="button" aria-label="Locația mea" onClick={() => locate()} className="cm-glass cm-btn rounded-2xl">{locating ? <Loader2 className="size-4 animate-spin" /> : <Locate className="size-4" />}</button>
        <button type="button" aria-label="Vezi toată zona" onClick={fit} className="cm-glass cm-btn rounded-2xl"><Navigation className="size-4" /></button>
        {canFullscreen && (
          <button type="button" aria-label="Ecran complet" onClick={fullscreen} className="cm-glass cm-btn rounded-2xl"><Maximize className="size-4" /></button>
        )}
      </div>

      {/* Card info */}
      <div className="absolute inset-x-3 bottom-3 z-[500] sm:left-auto sm:right-3 sm:w-[340px]">
        <div data-cm-overlay className="cm-glass rounded-3xl p-3 sm:p-4">
          {target && dist !== null ? (
            <>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">{zone ? "Localitate" : "Locația ta"}</p>
                  <p className="mt-1 truncate text-lg font-black leading-tight">{zone ? zone.name : nearest && user && km(user, nearest.coords as LL) < 8 ? `Lângă ${nearest.short}` : "Poziția ta"}</p>
                </div>
                <button type="button" aria-label="Închide" onClick={() => { setActive(null); setUser(null); }} className="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground hover:text-foreground">
                  <X className="size-4" />
                </button>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-2xl bg-muted px-3 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Sosire</p>
                  <p className="text-base font-black tabular-nums">~{zone ? zone.etaMinutes : nearest && user && km(user, nearest.coords as LL) < 8 ? nearest.etaMinutes : eta(dist)}</p>
                </div>
                <div className="rounded-2xl bg-muted px-3 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Distanță</p>
                  <p className="text-base font-black tabular-nums">{zone ? (zone.km === 0 ? "atelier" : `~${zone.km} km`) : `${Math.round(dist * 1.25)} km`}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <a href={`tel:${TEL}`} className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3 text-sm font-black text-brand-foreground shadow-glow">
                  <Phone className="size-4" /> Sună acum
                </a>
                {!zone && waLocation && (
                  <a href={waLocation} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 rounded-2xl border border-border bg-card px-3 text-sm font-bold">
                    <MessageCircle className="size-4 text-brand" /> Trimite locația
                  </a>
                )}
                {zone && (
                  <Link to="/zone/$slug" params={{ slug: zone.slug }} className="flex items-center gap-1 rounded-2xl border border-border bg-card px-3 text-sm font-bold">
                    Detalii <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            </>
          ) : (
            <div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => locate()}
                  disabled={locating}
                  className="cm-locate flex min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand px-3 py-3 text-sm font-black text-brand-foreground shadow-glow disabled:opacity-80"
                >
                  {locating ? <Loader2 className="size-4 shrink-0 animate-spin" /> : <Locate className="size-4 shrink-0" />}
                  <span className="truncate">{locating ? "Căutăm locația…" : "Cât durează până la mine?"}</span>
                </button>
                <a href={`tel:${TEL}`} aria-label="Sună" className="grid size-12 shrink-0 place-items-center rounded-2xl border border-border bg-card text-brand">
                  <Phone className="size-4" />
                </a>
              </div>
              {geoErr && <p className="mt-2 text-center text-[11px] leading-snug text-destructive">{geoErr}</p>}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
