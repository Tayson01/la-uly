import { ChevronUp } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck, Camera, ChevronLeft, ChevronRight, ExternalLink, Star, X } from "lucide-react";

import { GoogleMark } from "@/components/site/GoogleMark";
import { SectionLabel } from "@/components/site/ui";
import { BRAND, GOOGLE_RATING, GOOGLE_REVIEWS, MAPS } from "@/lib/site-data";

const GOOGLE_URL = MAPS;
const RATING = GOOGLE_RATING;
const COUNT = GOOGLE_REVIEWS;

const owner = { name: BRAND };

const images = import.meta.glob<string>("@/assets/la-uly/foto-*.webp", { eager: true, import: "default" });
const sizes: [number, number][] = [
  [3, 4], [3, 4], [4, 3], [3, 4], [3, 4], [3, 4], [4, 3], [3, 4], [3, 4],
];

/** Fotografii reale din atelierul de pe Calea Zimandului nr. 14 și de la intervenții (Facebook / Google). */
const photos = sizes.map(([w, h], i) => ({
  src: images[`/src/assets/la-uly/foto-${String(i + 1).padStart(2, "0")}.webp`]!,
  w,
  h,
  author: owner,
}));

/** Recenzii reale de pe profilul Google Maps al atelierului. */
const reviews: { name: string; when: string; text: string; note?: string; rating?: number; avatar?: string }[] = [
  {
    name: "Radu Jitariu",
    when: "acum 3 luni",
    text: "Recomand călduros… am nimerit un băiat foarte profesionist care mi-a rezolvat problema foarte repede. Menționez că am fost într-o luni dimineață la ora 02:00, când restul vulcanizărilor din Arad dorm.",
  },
  {
    name: "Jeny Budau",
    when: "acum 5 luni",
    text: "De câte ori am avut nevoie de ajutorul vostru ați fost amabili, punctuali și profesioniști! Vă mulțumesc și sper din suflet să fiți apreciați și solicitați!",
  },
  {
    name: "Bernd P",
    when: "pe Google",
    note: "tradus din germană",
    text: "Rapid și ieftin. Eram în drum spre Germania și am prins un șurub în roata din spate, pierdea aer încet. Anvelopa a fost reparată repede, cu un petic. Am ajuns cu bine, anvelopa ține. Mulțumesc încă o dată!",
  },
];

/** Ce menționează cel mai des clienții în recenziile Google (etichete generate de Google). */
const highlights = [
  { label: "Personal amabil", count: 34 },
  { label: "Promptitudine", count: 10 },
  { label: "Eficiență", count: 5 },
  { label: "Personal priceput", count: 4 },
];

function Stars({ value, className = "size-4" }: { value: number; className?: string }) {
  return (
    <span role="img" className="inline-flex gap-0.5" aria-label={`${value} din 5 stele`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`${className} ${value > 0 ? "fill-star text-star" : "fill-muted text-muted"}`} />
      ))}
    </span>
  );
}

function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (d: number) => void }) {
  const p = photos[index] ?? photos[0]!;
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onMove(1);
      if (e.key === "ArrowLeft") onMove(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onMove]);

  return (
    <div className="gallery-lightbox fixed inset-0 z-[1000] flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={onClose}>
      <button type="button" aria-label="Închide" className="gallery-lb-btn absolute right-4 top-4" onClick={onClose}>
        <X className="size-5" />
      </button>
      <button type="button" aria-label="Fotografia anterioară" className="gallery-lb-btn absolute left-3 top-1/2 -translate-y-1/2 sm:left-6" onClick={(e) => { e.stopPropagation(); onMove(-1); }}>
        <ChevronLeft className="size-6" />
      </button>
      <figure className="relative max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={p.src} alt={`Vulcanizare La Uly, Arad — fotografie ${index + 1}`} className="max-h-[80svh] w-auto rounded-2xl object-contain" />
        <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm text-gallery-lb-foreground">
          <span className="flex items-center gap-2">
            <span aria-hidden className="grid size-7 shrink-0 place-items-center rounded-full border-2 border-card bg-brand text-[13px] font-black italic text-brand-foreground shadow-card">V</span>
            Foto: {p.author.name}
          </span>
          <span className="tabular-nums opacity-70">{index + 1} / {photos.length}</span>
        </figcaption>
      </figure>
      <button type="button" aria-label="Fotografia următoare" className="gallery-lb-btn absolute right-3 top-1/2 -translate-y-1/2 sm:right-6" onClick={(e) => { e.stopPropagation(); onMove(1); }}>
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
}

export function InterventionsGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const move = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + photos.length) % photos.length)), []);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="galerie" className="gallery-section relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Antet + scor Google */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Galerie · Atelierul din Grădiște</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-[2.5rem]">
              Lucrări reale, clienți <span className="text-brand">reali.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Fotografii din atelierul de pe Calea Zimandului și de la intervențiile la camioane, plus recenzii reale de pe Google Maps.
            </p>
          </div>

          <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 self-start rounded-full border border-border bg-card py-3 pl-5 pr-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-float">
            <p className="text-4xl font-black leading-none tracking-tighter">{RATING.toFixed(1).replace(".", ",")}</p>
            <span className="h-9 w-px bg-border" aria-hidden="true" />
            <div className="min-w-0">
              <Stars value={RATING} className="size-3.5" />
              <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <GoogleMark className="size-3.5 shrink-0" /> {COUNT} recenzii Google
                <ExternalLink className="size-3 text-brand transition-transform group-hover:translate-x-0.5" />
              </p>
            </div>
          </a>
        </div>

        {/* Galerie bento — peste tot apar doar primele poze, restul se deschid cu butonul */}
        <div className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
          {photos.map((p, i) => {
            const hidden = !expanded && i >= 4;
            const isLastVisible = !expanded && i === 3;
            return (
              <button
                key={i}
                type="button"
                onClick={() => (isLastVisible ? setExpanded(true) : setOpen(i))}
                className={`gallery-tile group relative mb-3 block w-full break-inside-avoid-column overflow-hidden rounded-2xl sm:mb-4 ${hidden ? "hidden" : ""}`}
                style={{ aspectRatio: `${p.w} / ${p.h}` }}
                aria-label={isLastVisible ? undefined : `Deschide fotografia ${i + 1}`}
              >
                <img src={p.src} alt={`Vulcanizare La Uly — lucrare în atelier, fotografia ${i + 1}`} width={p.w * 300} height={p.h * 300} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="gallery-tile-shade absolute inset-0" aria-hidden="true" />
                {isLastVisible ? (
                  <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-background/70 text-foreground backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-background/55">
                    <span className="text-2xl font-black tabular-nums sm:text-3xl">+{photos.length - 4}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">fotografii</span>
                  </span>
                ) : (
                  <>
                    <span className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 p-3 text-xs font-semibold text-gallery-lb-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span aria-hidden className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-card bg-brand text-[11px] font-black italic text-brand-foreground shadow-card">V</span>
                      {p.author.name}
                    </span>
                    <span className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-card/85 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <Camera className="size-4" />
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-2 flex justify-center">
          {expanded ? (
            <button
              type="button"
              onClick={() => {
                setExpanded(false);
                document.getElementById("galerie")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-float sm:w-auto sm:min-w-[320px]"
            >
              <ChevronUp className="size-4" /> Afișează mai puțin
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-float sm:w-auto sm:min-w-[320px]"
            >
              <Camera className="size-4" /> Vezi toate fotografiile ({photos.length})
            </button>
          )}
        </div>

        <ReviewsCarousel />
      </div>

      {open !== null && <Lightbox index={open} onClose={close} onMove={move} />}
    </section>
  );
}

function ReviewsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let step = 0;
    let raf = 0;
    const measure = () => {
      const card = el.firstElementChild as HTMLElement | null;
      step = card ? card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : 0;
    };
    const update = () => {
      raf = 0;
      if (step > 0) setActive(Math.min(reviews.length - 1, Math.round(el.scrollLeft / step)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(() => {
      measure();
      onScroll();
    });
    observer.observe(el);
    measure();
    update();
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const go = useCallback((i: number) => {
    const el = ref.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  // derulare automată, oprită la atingere / hover
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(active >= reviews.length - 1 ? 0 : active + 1), 5500);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  return (
    <div className="mt-16" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}>
      <div className="rv-head relative overflow-hidden rounded-[28px] border border-border bg-card p-5 sm:p-8">
        <div className="relative grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-brand">
              <GoogleMark className="size-3.5" /> Recenzii Google
            </p>
            <h3 className="mt-3 text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl">
              Ce spun <span className="text-brand">clienții</span>
            </h3>
          </div>
          <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className="rv-score group flex items-center gap-4 rounded-2xl border border-border bg-background px-4 py-3 transition hover:border-brand">
            <span className="text-4xl font-black leading-none tabular-nums">{RATING.toFixed(1).replace(".", ",")}</span>
            <span className="min-w-0">
              <Stars value={RATING} className="size-4" />
              <span className="mt-1 block text-xs font-semibold text-muted-foreground">
                {COUNT} recenzii pe Google <ExternalLink className="inline size-3 transition group-hover:text-brand" />
              </span>
            </span>
          </a>
        </div>
        <ul className="relative mt-5 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <li key={h.label} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              {h.label} <span className="font-black text-brand tabular-nums">· {h.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div ref={ref} className="gallery-reviews -mx-5 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-5 pb-3 sm:mx-0 sm:gap-4 sm:px-0">
        {reviews.map((r, i) => (
          <article
            key={i}
            className={`rv-card relative flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-500 sm:w-[340px] lg:w-[380px] lg:p-7 ${
              i === active ? "is-active border-brand/40" : "border-border/70"
            }`}
          >
            <span aria-hidden="true" className="rv-quote pointer-events-none absolute -right-2 -top-6 select-none font-black leading-none text-brand/10">“</span>
            <div className="relative flex items-center gap-3">
              {r.avatar ? (
                <img src={r.avatar} alt="" width={44} height={44} loading="lazy" decoding="async" className="size-11 shrink-0 rounded-full object-cover ring-2 ring-background shadow-card" />
              ) : (
                <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-brand text-lg font-black uppercase text-brand-foreground">{r.name.trim()[0]}</span>
              )}
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1 truncate text-[15px] font-extrabold">
                  {r.name} <BadgeCheck className="size-4 shrink-0 text-brand" />
                </p>
                <div className="mt-0.5 flex items-center gap-2">
                  {r.rating ? <Stars value={r.rating} className="size-3.5" /> : <GoogleMark className="size-3.5" />}
                  <span className="text-[11px] text-muted-foreground">{r.when}{r.note ? ` · ${r.note}` : ""}</span>
                </div>
              </div>
            </div>
            <p className="relative mt-5 flex-1 text-[15px] font-medium leading-relaxed text-foreground lg:text-base">{r.text}</p>
            <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className="relative mt-5 inline-flex items-center gap-1.5 self-start text-xs font-bold text-muted-foreground transition hover:text-brand">
              <GoogleMark className="size-3.5" /> Citește pe Google
            </a>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => go(Math.max(0, active - 1))} aria-label="Recenzia anterioară" disabled={active === 0} className="grid size-10 place-items-center rounded-full border border-border bg-card transition hover:border-brand hover:text-brand disabled:opacity-40">
            <ChevronLeft className="size-4" />
          </button>
          <button type="button" onClick={() => go(Math.min(reviews.length - 1, active + 1))} aria-label="Recenzia următoare" disabled={active === reviews.length - 1} className="grid size-10 place-items-center rounded-full border border-border bg-card transition hover:border-brand hover:text-brand disabled:opacity-40">
            <ChevronRight className="size-4" />
          </button>
          <div className="ml-2 hidden h-1 w-28 overflow-hidden rounded-full bg-border sm:block">
            <div className="h-full rounded-full bg-brand transition-[width] duration-500" style={{ width: `${((active + 1) / reviews.length) * 100}%` }} />
          </div>
          <span className="ml-1 text-xs font-bold tabular-nums text-muted-foreground">{active + 1}/{reviews.length}</span>
        </div>
        <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-brand-foreground shadow-glow transition hover:brightness-110">
          <Star className="size-3.5 fill-current" /> Lasă o recenzie
        </a>
      </div>
    </div>
  );
}
