import { Link, createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";

import { BtnLink, SectionLabel } from "@/components/site/ui";
import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { PHONE, TEL, zones } from "@/lib/site-data";

const TITLE = "Zone deservite — Vulcanizare La Uly, Arad și împrejurimi + A1";
const DESC =
  "Unde vine echipa mobilă Vulcanizare La Uly: tot Aradul, Zimandu Nou, Livada, Vladimirescu, Curtici, Sântana, Pecica, Lipova și localitățile din jur (~50 km), plus A1 Nădlac – Arad. Non-stop.";

export const Route = createFileRoute("/zone/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://vulcanizaretimisoara.ro/zone" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaretimisoara.ro/zone" }],
  }),
  component: ZonePage,
});

const Z = (slug: string, label: string) => (
  <Link to="/zone/$slug" params={{ slug }} className="font-semibold text-brand underline-offset-4 hover:underline">
    {label}
  </Link>
);

const groups = [
  {
    h2: "În Arad: toate cartierele",
    list: ["Grădiște", "Micălaca", "Aurel Vlaicu", "Centru", "Gai", "Bujac", "Aradul Nou", "Pârneava", "Sânnicolau Mic"],
    body: (
      <p>
        Atelierul e pe Calea Zimandului nr. 14, în Grădiște, lângă sensul giratoriu spre Oradea și la aproximativ 150 m
        de Centura Aradului. Dacă poți conduce, vino direct: fără programare, zi și noapte. Dacă nu, venim noi oriunde în oraș.
      </p>
    ),
  },
  {
    h2: "Spre nord: Zimandu Nou, Sântana, Curtici",
    list: ["Zimandu Nou", "Zimandcuz", "Livada", "Sânleani", "Șofronea", "Sânpaul", "Curtici", "Sântana", "Caporal Alexa"],
    body: (
      <p>
        Pe DN79 spre Oradea și pe drumul spre Curtici venim pentru autoturisme, utilitare și camioane. Livada și Sânleani
        sunt chiar lângă Grădiște.
      </p>
    ),
  },
  {
    h2: "Spre est și sud: Vladimirescu, Lipova, Fântânele, Vinga",
    list: ["Vladimirescu", "Horia", "Mândruloc", "Ghioroc", "Lipova", "Șiria", "Pâncota", "Fântânele", "Frumușeni", "Zădăreni", "Vinga"],
    body: (
      <p>
        Pe DN7 spre Deva, pe DN69 spre Timișoara și în podgorie, la Șiria și Pâncota, venim non-stop. Timpul și prețul
        ți le spunem la telefon, înainte să plecăm.
      </p>
    ),
  },
  {
    h2: "Spre vest: Pecica și A1 până la Nădlac",
    list: ["Pecica", "Turnu", "Sederhat", "Nădlac", "A1 Nădlac – Arad", "Centura Aradului"],
    body: (
      <p>
        Pe DN7 spre Pecica și pe autostrada A1 între Nădlac și Arad intervenim zi și noapte, inclusiv pentru camioane.
      </p>
    ),
  },
];

function ZonePage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-5 pt-14">
        <SectionLabel>Zone acoperite</SectionLabel>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Unde venim: Arad și împrejurimi + A1
        </h1>
        <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Pornim din atelierul de pe Calea Zimandului nr. 14, din Grădiște, Arad, și venim în tot orașul și în localitățile din jur, pe o rază de aproximativ 50 km, plus pe autostrada A1 între Nădlac și Arad. Prețul deplasării îl afli la telefon, înainte de plecare. Mai jos
            găsești localitățile grupate pe direcții, cu distanța aproximativă și timpul estimat de sosire.
          </p>
          <p>
            Timpii sunt orientativi. Traficul, vremea și ora din zi pot schimba durata drumului, așa că îți spunem la
            telefon, înainte de plecare, cât durează și cât costă intervenția.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => (
            <div key={z.slug} className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <p className="inline-flex items-center gap-2 font-bold">
                <MapPin className="size-4 shrink-0 text-brand" /> {z.name}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{z.desc}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Clock className="size-3.5 shrink-0 text-brand" /> {z.etaMinutes} · {z.km === 0 ? "sediul atelierului" : `~${z.km} km`}
              </p>
              <BtnLink to="/zone/$slug" params={{ slug: z.slug }} variant="ghost" className="mt-4 self-start px-4 py-2">
                Vezi pagina {z.name} →
              </BtnLink>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl space-y-12">
          {groups.map((g) => (
            <section key={g.h2}>
              <h2 className="text-xl font-bold sm:text-2xl">{g.h2}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{g.body}</div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.list.map((l) => (
                  <li key={l} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">{l}</li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold sm:text-2xl">Dacă localitatea ta nu e în listă</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Lista nu cuprinde fiecare sat. Dacă te afli între localitățile de mai sus și pe o rază de aproximativ 50 km în jurul Aradului sau pe A1 între Nădlac și Arad, venim. Sună la{" "}
                <a href={`tel:${TEL}`} className="font-semibold text-foreground">{PHONE}</a> sau trimite locația pe
                WhatsApp și îți confirmăm imediat.
              </p>
              <p>
                Pentru distanțe mai mari, îți recomandăm cinstit să cauți un service mai apropiat: vei aștepta mai puțin
                și vei plăti mai puțin pentru deplasare. Dacă poți conduce, atelierul nostru e deschis non-stop, fără
                programare. Citește și sfaturile noastre din <Link to="/blog" className="font-semibold text-brand hover:underline">blog</Link>{" "}
                sau răspunsurile din <Link to="/intrebari-frecvente" className="font-semibold text-brand hover:underline">întrebările frecvente</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CoverageMapSection />
    </main>
  );
}
