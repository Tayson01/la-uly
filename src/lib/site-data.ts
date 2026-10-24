export const BRAND = "Vulcanizare La Uly";
export const CITY = "Arad";
export const PHONE = "0746 538 480";
export const TEL = "+40746538480";
export const PHONE2 = "0746 765 469";
export const TEL2 = "+40746765469";
export const WA_NUMBER = "40746538480";
export const WA =
  "https://wa.me/40746538480?text=Bun%C4%83%20ziua!%20Am%20nevoie%20de%20vulcanizare.";
export const MAPS = "https://share.google/cb4eBtqPmz10uTivD";
export const REVIEWS = MAPS;
export const FACEBOOK = "https://www.facebook.com/profile.php?id=100094523259204";
export const EMAIL = "autoziangg@yahoo.com";
/** Scorul public de pe Google Maps (verificat 24.10.2026). */
export const GOOGLE_RATING = 4.2;
export const GOOGLE_REVIEWS = 461;
export const PRICES = {
  steel: "160 RON",
  alloy: "180 RON",
};

export const COVERAGE = {
  county: "Arad",
  highway: "A1",
  highwayFrom: "Nădlac (vamă)",
  highwayTo: "Arad",
  label: "Arad și localitățile din jur (~50 km) + A1 (Nădlac – Arad)",
};

export const BASE: [number, number] = [46.2062954, 21.3472382];

export type Service = {
  slug: string;
  icon:
    | "lifebuoy"
    | "wrench"
    | "circle"
    | "gauge"
    | "truck"
    | "navigation";
  title: string;
  desc: string;
  intro: string;
  price: string;
  priceFrom: string;
  priceNote?: string;
  pricing?: { label: string; value: string; note?: string }[];
  duration: string;
  bullets: string[];
  steps: string[];
};

export type FAQ = {
  q: string;
  a: string;
  category: "prețuri" | "disponibilitate" | "timp-sosire" | "servicii" | "plată" | "siguranță";
};

export const services: Service[] = [
  {
    slug: "vulcanizare-atelier-non-stop",
    icon: "wrench",
    title: "Vulcanizare non-stop în atelier",
    desc: "Atelier deschis 24/24 pe Calea Zimandului nr. 14, Arad — vii oricând, fără programare.",
    intro:
      "Atelierul nostru din Grădiște, Arad, pe Calea Zimandului nr. 14, este deschis zi și noapte, inclusiv în weekend și de sărbători. Vii cu mașina oricând și rezolvăm pe loc pene, schimb de anvelope sau echilibrare.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "fără programare, 24/24",
    pricing: [
      { label: "Reparație pană", value: "la telefon", note: "în funcție de defect" },
    ],
    duration: "15–60 minute, în funcție de lucrare",
    bullets: [
      "Deschis 24/24, 7 zile din 7",
      "Montaj, demontaj și echilibrare electronică",
      "Reparații pene și schimb valve",
      "Autoturisme, SUV-uri, utilitare și camioane",
    ],
    steps: [
      "Vii pe Calea Zimandului nr. 14, Arad, oricând",
      "Verificăm anvelopele și îți spunem prețul",
      "Facem lucrarea pe loc",
      "Plătești și pleci în siguranță",
    ],
  },
  {
    slug: "asistenta-rutiera",
    icon: "lifebuoy",
    title: "Deplasare la client 24/24",
    desc: "Ai pană și nu poți ajunge la atelier? Venim noi la tine, non-stop, în Arad și împrejurimi.",
    intro:
      "Rămâi cu pana acasă, la birou sau pe drum? Sună-ne sau trimite locația pe WhatsApp și venim la tine, la orice oră din zi sau din noapte, ca să rezolvăm pe loc.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "în funcție de distanță",
    pricing: [
      { label: "Deplasare", value: "la telefon", note: "în funcție de distanță" },
    ],
    duration: "în funcție de distanță",
    bullets: [
      "Disponibil non-stop, 24/24",
      "Sculărie profesională și compresor",
      "Reparație pană sau montaj roată de rezervă pe loc",
      "Prețul îl afli la telefon, înainte să plecăm",
    ],
    steps: [
      "Ne suni sau trimiți locația pe WhatsApp",
      "Îți spunem în cât timp ajungem și cât costă",
      "Ajungem la tine și reparăm pe loc",
      "Plătești și pleci mai departe",
    ],
  },
  {
    slug: "reparatii-pe-loc",
    icon: "wrench",
    title: "Reparație pană",
    desc: "Pene, tăieturi ușoare sau valve defecte — reparate rapid, în atelier sau la fața locului.",
    intro:
      "Reparăm pana cu plombă internă sau ciupercă, schimbăm valva sau resigilăm janta. Îți spunem sincer dacă anvelopa se poate repara în siguranță.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "reparație simplă",
    duration: "15–30 minute",
    bullets: [
      "Plug sau petic (ciupercă) — reparație permanentă",
      "Reparație tăieturi ușoare, unde e sigur",
      "Schimb valve",
      "Verificare presiune la toate roțile",
    ],
    steps: [
      "Verificăm anvelopa",
      "Îți spunem dacă reparația e sigură sau e nevoie de anvelopă nouă",
      "Reparăm, umflăm și verificăm etanșeitatea",
      "Pleci în siguranță",
    ],
  },
  {
    slug: "montaj-domiciliu",
    icon: "circle",
    title: "Schimb anvelope",
    desc: "Schimb 4 anvelope cu echilibrare: 160 RON jante oțel, 180 RON jante aluminiu.",
    intro:
      "Schimbăm setul de vară sau de iarnă rapid, cu echilibrare inclusă. Pentru 4 anvelope plătești 160 RON pe jante de oțel și 180 RON pe jante de aluminiu.",
    price: "de la 160 RON",
    priceFrom: "160 RON",
    priceNote: "set 4 anvelope, echilibrare inclusă",
    pricing: [
      { label: "4 anvelope + echilibrare, jante oțel", value: "160 RON" },
      { label: "4 anvelope + echilibrare, jante aluminiu", value: "180 RON" },
    ],
    duration: "aproximativ o oră pentru un set complet",
    bullets: [
      "Montaj și demontaj pe jantă",
      "Echilibrare electronică inclusă",
      "Jante de oțel sau de aluminiu",
      "Deplasare la client la cerere, non-stop",
    ],
    steps: [
      "Vii la atelier sau ne suni să venim noi",
      "Demontăm și montăm anvelopele",
      "Echilibrăm fiecare roată",
      "Verificăm presiunile și strângem roțile corect",
    ],
  },
  {
    slug: "echilibrare-roti",
    icon: "gauge",
    title: "Echilibrare roți",
    desc: "Echilibrare electronică precisă pentru rulare lină și uzură uniformă.",
    intro:
      "Vibrațiile în volan la viteză mare vin aproape mereu de la roți neechilibrate. Facem echilibrare electronică pentru jante de oțel și de aluminiu, la autoturisme și camioane.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "inclusă la schimbul de 4 anvelope",
    duration: "10 minute pe roată",
    bullets: [
      "Echilibrare pentru toate dimensiunile, de la autoturisme la camioane",
      "Contragreutăți adezive pentru jante de aluminiu",
      "Verificare deformări de jantă și uzură neuniformă",
      "Inclusă în prețul schimbului de 4 anvelope",
    ],
    steps: [
      "Verificăm vibrațiile și starea roților",
      "Echilibrăm fiecare roată pe aparat",
      "Remontăm roțile corect",
      "Test scurt, dacă e nevoie",
    ],
  },
  {
    slug: "vanzare-anvelope",
    icon: "circle",
    title: "Vânzare anvelope",
    desc: "Anvelope de vară, iarnă și all season, noi și second-hand, montate pe loc.",
    intro:
      "În atelierul din Grădiște avem pe stoc anvelope de vară, de iarnă și all season, noi și second-hand, pentru autoturisme, SUV-uri, utilitare și camioane. Alegi anvelopele și ți le montăm și echilibrăm pe loc.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "în funcție de dimensiune și marcă",
    duration: "montaj pe loc, aproximativ o oră pentru 4 anvelope",
    bullets: [
      "Anvelope de vară, iarnă și all season",
      "Noi și second-hand, verificate",
      "Ventile și accesorii",
      "Montaj și echilibrare pe loc",
    ],
    steps: [
      "Ne suni cu dimensiunea anvelopei (ex. 205/55 R16)",
      "Îți spunem ce avem pe stoc și prețul",
      "Vii la atelier sau venim noi la tine",
      "Montăm, echilibrăm și verificăm presiunea",
    ],
  },
  {
    slug: "vulcanizare-camioane",
    icon: "truck",
    title: "Vulcanizare camioane",
    desc: "Vulcanizare și echilibrare pentru camioane și autoutilitare, non-stop.",
    intro:
      "Avem echipament pentru camioane și autoutilitare: reparații, schimb și echilibrare roți, în atelier sau la fața locului, zi și noapte.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "în funcție de lucrare",
    duration: "30–60 minute pe roată",
    bullets: [
      "Reparații și schimb pentru roți de camion și remorcă",
      "Echilibrare roți camioane",
      "Atelier aproape de Centura Aradului",
      "Disponibil non-stop, 24/24",
    ],
    steps: [
      "Ne suni și ne spui dimensiunea roții",
      "Vii la atelier sau venim noi la tine",
      "Facem lucrarea pe loc",
      "Pleci mai departe în siguranță",
    ],
  },
];

export { zones, zoneRedirects, RADIUS_KM } from "./zones-data";
export type { Zone } from "./zones-data";

export const mapRings = [
  { minutes: "Arad oraș · 10–20 min", km: 10, radius: 10000 },
  { minutes: "Comunele din jur · 20–35 min", km: 25, radius: 25000 },
  { minutes: "Până la ~50 km + A1 · 35–60 min", km: 50, radius: 50000 },
];

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const ADDRESS = "Calea Zimandului nr. 14, Grădiște, Arad";
export const ADDRESS_FULL = "Calea Zimandului nr. 14, cartier Grădiște, Arad, județul Arad";

export const stats = [
  { value: "15 min", label: "Timp mediu de răspuns în oraș" },
  { value: "2.000+", label: "Clienți ajutați cu pene și anvelope" },
  { value: "365 zile", label: "Intervenții fără programare" },
  { value: "100%", label: "Prețuri clare, fără costuri ascunse" },
];

export const reviews = [
  {
    initials: "LS",
    name: "Laur Solomon",
    when: "Timișoara",
    text: "Cel mai bun pe cuvânt și punctual, lucrează cel mai bine și cel mai rapid oriunde ai fi.",
  },
  {
    initials: "CI",
    name: "Ciprian",
    when: "Timișoara",
    text: "A fost la fața locului în 15 minute. Politicos și corect, prețul foarte rezonabil. Pneul a fost reparat în 10 minute.",
  },
  {
    initials: "AM",
    name: "Andrei M.",
    when: "acum 3 săptămâni",
    text: "Pană pe Centură la 23:00. Au ajuns rapid, montaj profesionist, preț corect. Salvatori!",
  },
  {
    initials: "EP",
    name: "Elena P.",
    when: "acum o lună",
    text: "Mi-au schimbat setul de iarnă direct în curte. Punctuali, curați, recomand cu încredere.",
  },
];

export const faqs = [
  {
    q: "Cât costă schimbul de anvelope la Vulcanizare La Uly?",
    a: "Schimbul a 4 anvelope cu echilibrare costă 160 RON pentru jante de oțel și 180 RON pentru jante de aluminiu. Pentru alte lucrări sau pentru deplasare la tine, îți spunem prețul la telefon, înainte de lucrare.",
    category: "prețuri",
  },
  {
    q: "Sunteți deschiși și noaptea sau în weekend?",
    a: "Da, suntem deschiși non-stop, 24/24, inclusiv noaptea, sâmbăta, duminica și de sărbători. Vii oricând pe Calea Zimandului nr. 14, în Grădiște, Arad.",
    category: "disponibilitate",
  },
  {
    q: "Veniți și la mine, dacă am pană?",
    a: "Da, pe lângă atelier facem și deplasări la client, non-stop. Sună-ne sau trimite locația pe WhatsApp și îți spunem în cât timp ajungem și cât costă.",
    category: "timp-sosire",
  },
  {
    q: "Unde sunteți exact?",
    a: "Pe Calea Zimandului nr. 14, cartier Grădiște, Arad — lângă sensul giratoriu spre Oradea, la aproximativ 150 m de Centura Aradului.",
    category: "disponibilitate",
  },
  {
    q: "Ce servicii faceți?",
    a: "Vulcanizare (reparații pene, valve), schimb anvelope și echilibrare roți, pentru autoturisme, SUV-uri, utilitare și camioane.",
    category: "servicii",
  },
  {
    q: "Lucrați și cu camioane?",
    a: "Da, facem vulcanizare și echilibrare și pentru camioane, în atelier sau la fața locului.",
    category: "servicii",
  },
  {
    q: "Vindeți și anvelope?",
    a: "Da. Avem anvelope de vară, iarnă și all season, noi și second-hand. Sună-ne cu dimensiunea (scrisă pe flanc, ex. 205/55 R16) și îți spunem ce avem pe stoc și prețul.",
    category: "servicii",
  },
  {
    q: "Dacă anvelopa nu poate fi reparată, ce fac?",
    a: "Îți spunem de la început dacă reparația e sigură sau dacă e nevoie de anvelopă nouă. Dacă nu se poate repara, montăm roata de rezervă sau o anvelopă nouă, ca să pleci în siguranță.",
    category: "servicii",
  },
];

export const COMPANY = {
  name: "AUTOZIAN G&G SRL",
  cui: "31974719",
  regCom: "J2013000745028",
  euid: "ROONRC.J2013000745028",
  registeredOffice: "Sat Zimandcuz nr. 745, Com. Zimandu Nou, județul Arad, cod poștal 317427",
  foundedOn: "05.07.2013",
  source: "https://listafirme.eu/autozian-srl-31974719/",
};

// Traseu aproximativ A1 pe tronsonul acoperit: vama Nădlac → Arad.
export const A1_ROUTE: [number, number][] = [
  [46.155, 20.73], [46.15, 20.9], [46.135, 21.05], [46.125, 21.2], [46.135, 21.26], [46.11, 21.33],
];

// Contur aproximativ al județului Arad (orientativ, pentru hartă).
export const COUNTY_OUTLINE: [number, number][] = [
  [46.2, 20.7], [46.27, 20.98], [46.4, 21.18], [46.5, 21.3], [46.55, 21.55], [46.6, 21.8], [46.62, 22.05],
  [46.5, 22.3], [46.4, 22.55], [46.25, 22.65], [46.1, 22.55], [46.03, 22.3], [45.98, 22.05], [46.0, 21.8],
  [46.03, 21.55], [45.97, 21.3], [46.05, 21.1], [46.1, 20.9], [46.15, 20.75],
];

// Drumuri principale pe care intervenim, cu etichetă pe hartă.
export const ROADS: { name: string; desc: string; at: [number, number]; path: [number, number][] }[] = [
  { name: "DN7 Vest", desc: "Arad – Pecica – Nădlac", at: [46.175, 21.0], path: [[46.18, 21.29], [46.17, 21.07], [46.17, 20.75]] },
  { name: "DN7 Est", desc: "Arad – Lipova – Deva", at: [46.165, 21.55], path: [[46.18, 21.4], [46.16, 21.6], [46.09, 21.69]] },
  { name: "DN79", desc: "Arad – Sântana – Oradea", at: [46.31, 21.45], path: [[46.21, 21.35], [46.28, 21.4], [46.35, 21.5], [46.45, 21.55]] },
  { name: "DN69", desc: "Arad – Vinga – Timișoara", at: [46.07, 21.24], path: [[46.17, 21.31], [46.1, 21.25], [46.0, 21.22]] },
  { name: "Curtici", desc: "Arad – Șofronea – Curtici", at: [46.3, 21.31], path: [[46.22, 21.32], [46.28, 21.31], [46.34, 21.31]] },
];
