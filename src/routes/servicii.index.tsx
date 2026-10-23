import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { PHONE, TEL, WA, services } from "@/lib/site-data";

export const Route = createFileRoute("/servicii/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Servicii — Vulcanizare La Uly Arad — schimb anvelope de la 160 RON" },
      {
        name: "description",
        content:
          "Vulcanizare La Uly, non-stop în Arad: vulcanizare, schimb anvelope și echilibrare. 4 anvelope + echilibrare: 160 RON jante oțel, 180 RON jante aluminiu.",
      },
      { property: "og:title", content: "Servicii — Vulcanizare La Uly Arad" },
      {
        property: "og:description",
        content: "Vulcanizare, schimb anvelope și echilibrare roți, non-stop în Arad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaretimisoara.ro/servicii" }],
  }),
  component: ServiciiPage,
});

function ServiciiPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14">
      <SectionLabel>Servicii</SectionLabel>
      <h1 className="mt-3 max-w-2xl text-3xl font-extrabold sm:text-4xl tracking-tight">
        Tot ce ai nevoie, într-un singur loc.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        De la pene neașteptate pe drum până la întreținere programată — echipa noastră din Arad se
        ocupă de tot, 24/24.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.slug}
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
              <ServiceIcon name={s.icon} />
            </span>
            <h2 className="mt-5 text-lg font-bold">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <p className="mt-3 text-sm font-semibold">{s.price}</p>
            <BtnLink
              to="/servicii/$slug"
              params={{ slug: s.slug }}
              variant="ghost"
              className="mt-4 self-start px-4 py-2"
            >
              Află mai mult →
            </BtnLink>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta">
          <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
        </Btn>
        <Btn href={WA} variant="ghost">
          <MessageCircle className="size-4" /> WhatsApp
        </Btn>
      </div>
    </main>
  );
}
