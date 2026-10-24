import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, ThumbsUp } from "lucide-react";

import { Btn, SectionLabel } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";
import { ADDRESS, COMPANY, EMAIL, FACEBOOK, MAPS, PHONE, PHONE2, TEL, TEL2, WA, SITE_URL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contact — Vulcanizare La Uly Arad, non-stop" },
      {
        name: "description",
        content:
          "Sună la 0746 538 480 sau 0746 765 469. Vulcanizare La Uly, deschis non-stop pe Calea Zimandului nr. 14, Grădiște, Arad, cu deplasări la client 24/24.",
      },
      { property: "og:title", content: "Contact — Vulcanizare La Uly Arad" },
      {
        property: "og:description",
        content: "Telefon, WhatsApp și adresă — Vulcanizare La Uly, non-stop în Arad.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Stânga — titlu, text, acțiuni rapide */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Hai să <span className="text-brand">vorbim.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground lg:mt-5 lg:text-lg lg:leading-relaxed">
            Sună-ne pentru intervenții urgente sau trimite-ne mesajul direct pe WhatsApp — opțional cu locația ta
            exactă. Răspundem imediat, zi și noapte.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
            <Btn href={`tel:${TEL}`}>
              <Phone className="size-4" /> Sună acum
            </Btn>
            <Btn href={WA} variant="ghost" target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> WhatsApp
            </Btn>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-1 lg:gap-4">
            <a
              href={`tel:${TEL}`}
              className="rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card lg:p-6"
            >
              <Phone className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Telefon · WhatsApp</p>
              <p className="font-bold tabular-nums lg:text-lg">{PHONE}</p>
            </a>
            <a
              href={`tel:${TEL2}`}
              className="rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card lg:p-6"
            >
              <Phone className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Telefon 2</p>
              <p className="font-bold tabular-nums lg:text-lg">{PHONE2}</p>
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card lg:p-6"
            >
              <MapPin className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Vino la noi</p>
              <p className="font-bold lg:text-lg">{ADDRESS}</p>
            </a>
            <div className="rounded-3xl border border-border bg-card p-5 lg:p-6">
              <Clock className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Program</p>
              <p className="font-bold lg:text-lg">Non-stop, 24/24 · și deplasări la client</p>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card lg:p-6"
            >
              <Mail className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">E-mail</p>
              <p className="break-all font-bold lg:text-lg">{EMAIL}</p>
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card lg:p-6"
            >
              <ThumbsUp className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Facebook</p>
              <p className="font-bold lg:text-lg">Vulcanizare La Uly Non-Stop</p>
            </a>
          </div>
        </div>

        {/* Dreapta — formularul */}
        <div className="min-w-0">
          <ContactForm />
        </div>
      </div>
      <section className="divider-fade mt-12 pt-8">
        <h2 className="text-xl font-bold">Datele firmei</h2>
        <p className="mt-3 font-semibold">{COMPANY.name}</p>
        <dl className="mt-4 grid gap-x-10 gap-y-4 text-sm sm:grid-cols-2">
          {[
            ["CUI", COMPANY.cui],
            ["Nr. Registrul Comerțului", COMPANY.regCom],
            ["EUID", COMPANY.euid],
            ["Data înființării", COMPANY.foundedOn],
            ["Sediu social", COMPANY.registeredOffice],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="mt-1 break-words font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <a href={COMPANY.source} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          Profilul firmei pe ListaFirme
        </a>
      </section>
    </main>
  );
}
