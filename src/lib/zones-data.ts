// Pagini locale: fiecare zonă are text propriu, scris separat (nu șablon cu numele înlocuit).
// Acoperire: Arad și localitățile din jur (~50 km) + autostrada A1 între Nădlac și Arad (vezi COVERAGE în site-data).

export type ZoneSection = { h2: string; p: string[] };
export type ZoneFaq = { q: string; a: string };

export type Zone = {
  slug: string;
  name: string;
  short: string;
  eta: string;
  etaMinutes: string;
  km: number;
  coords: [number, number];
  desc: string;
  intro: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  roads: string[];
  localities: string[];
  sections: ZoneSection[];
  serviceSlugs: string[];
  faqs: ZoneFaq[];
  blogSlugs: string[];
};

export const RADIUS_KM = 50;

const ATELIER_FAQ: ZoneFaq = {
  q: "Unde e atelierul și ce program are?",
  a: "Pe Calea Zimandului nr. 14, cartier Grădiște, Arad — lângă sensul giratoriu spre Oradea. Deschis non-stop, 24/24. Telefon: 0746 538 480 sau 0746 765 469.",
};

const PRICE_P =
  "Schimbul a 4 anvelope cu echilibrare costă 160 RON pe jante de oțel și 180 RON pe jante de aluminiu. Pentru deplasare și alte lucrări îți spunem prețul la telefon, înainte să plecăm.";

export const zones: Zone[] = [
  {
    slug: "vulcanizare-non-stop-arad",
    name: "Arad — Grădiște și tot orașul",
    short: "Arad",
    eta: "Sosire ~10–20 min",
    etaMinutes: "10–20 min",
    km: 0,
    coords: [46.2062954, 21.3472382],
    desc: "Atelier non-stop în Grădiște, pe Calea Zimandului nr. 14, aproape de Centura Aradului.",
    intro:
      "Vulcanizare La Uly te așteaptă pe Calea Zimandului nr. 14, în Grădiște, zi și noapte. Dacă roata e complet dezumflată, nu mai conduce până la noi: sună și venim noi oriunde în Arad.",
    metaTitle: "Vulcanizare non-stop Arad — Grădiște | 0746 538 480",
    metaDesc:
      "Vulcanizare non-stop în Arad, pe Calea Zimandului nr. 14, Grădiște. Schimb 4 anvelope + echilibrare de la 160 RON. Venim și la tine, 24/24.",
    h1: "Vulcanizare non-stop în Arad — atelier în Grădiște",
    roads: ["Calea Zimandului", "Centura Aradului", "Calea Aurel Vlaicu", "Calea Timișorii"],
    localities: ["Arad", "Grădiște", "Micălaca", "Aurel Vlaicu", "Centru", "Gai", "Bujac", "Aradul Nou", "Pârneava", "Sânnicolau Mic"],
    sections: [
      {
        h2: "Vii la atelier sau venim noi?",
        p: [
          "Atelierul e în Grădiște, lângă sensul giratoriu spre Oradea, așa că din Micălaca, Aurel Vlaicu sau Bujac ajungi repede, iar de pe Centură ești practic la noi. Dacă anvelopa încă ține aer, vino direct; dacă e la pământ, rămâi pe loc și te ajutăm acolo.",
        ],
      },
      {
        h2: "Prețuri clare",
        p: [
          PRICE_P,
          "Sună la 0746 538 480 și spune modelul mașinii, dimensiunea anvelopei și unde ești.",
        ],
      },
    ],
    serviceSlugs: ["vulcanizare-atelier-non-stop", "montaj-domiciliu", "vanzare-anvelope", "echilibrare-roti"],
    faqs: [
      { q: "În cât timp ajungeți în Arad?", a: "De obicei în 10–20 de minute, în funcție de cartier și de trafic. Îți confirmăm timpul la telefon." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-noaptea-ce-faci", "reparatie-sau-inlocuire-anvelopa", "cand-schimbi-anvelopele-de-iarna"],
  },
  {
    slug: "vulcanizare-mobila-zimandu-nou",
    name: "Zimandu Nou și Zimandcuz",
    short: "Zimandu Nou",
    eta: "Sosire ~15–25 min",
    etaMinutes: "15–25 min",
    km: 7,
    coords: [46.2553, 21.3817],
    desc: "Pe DN79, spre Oradea — chiar pe drumul care pleacă de lângă atelier.",
    intro:
      "Zimandu Nou și Zimandcuz sunt pe aceeași direcție cu atelierul: ieși din Grădiște pe Calea Zimandului și ești acolo. Pentru o pană acasă sau pe DN79, venim repede cu tot echipamentul.",
    metaTitle: "Vulcanizare mobilă Zimandu Nou 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Zimandu Nou, Zimandcuz și Andrei Șaguna, pe DN79 spre Oradea. Atelier la câțiva km, în Grădiște, Arad.",
    h1: "Vulcanizare mobilă în Zimandu Nou și Zimandcuz",
    roads: ["DN79 spre Oradea", "Calea Zimandului"],
    localities: ["Zimandu Nou", "Zimandcuz", "Andrei Șaguna"],
    sections: [
      {
        h2: "Aproape de atelier",
        p: [
          "Din Zimandcuz până la atelier sunt doar câțiva kilometri pe drumul drept. Dacă roata pierde încet aer, umflă-o și vino; dacă s-a dezumflat de tot, nu risca janta pe DN79 — venim noi.",
        ],
      },
      {
        h2: "Pană pe DN79, spre Oradea",
        p: [
          "Pe DN79 circulă multe camioane, așa că oprește doar unde ai loc, departe de bandă, și pune triunghiul. Trimite-ne locația pe WhatsApp și îți spunem în cât timp ajungem.",
        ],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "reparatii-pe-loc", "montaj-domiciliu", "vulcanizare-camioane"],
    faqs: [
      { q: "Veniți și pe DN79, în afara satului?", a: "Da, venim oriunde pe DN79 între Arad și Zimandu Nou, zi și noapte. Prețul deplasării ți-l spunem la telefon." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-noaptea-ce-faci", "valva-anvelopa-pierde-aer"],
  },
  {
    slug: "vulcanizare-mobila-livada-sanleani",
    name: "Livada și Sânleani",
    short: "Livada",
    eta: "Sosire ~15–25 min",
    etaMinutes: "15–25 min",
    km: 4,
    coords: [46.2192, 21.3874],
    desc: "La est de Grădiște, cartierele noi de case din Livada și Sânleani.",
    intro:
      "Livada și Sânleani sunt lipite de Grădiște. Mulți clienți de aici ne sună dimineața, când găsesc roata dezumflată în curte — venim la poartă și rezolvăm înainte să pleci la muncă.",
    metaTitle: "Vulcanizare mobilă Livada și Sânleani 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă în Livada și Sânleani, la câțiva km de atelierul din Grădiște, Arad. Pene, schimb anvelope și echilibrare, non-stop.",
    h1: "Vulcanizare mobilă în Livada și Sânleani",
    roads: ["Drumul Livada – Arad", "ieșirea de est din Grădiște"],
    localities: ["Livada", "Sânleani"],
    sections: [
      {
        h2: "Schimb de anvelope în curtea ta",
        p: [
          "Pe străzile noi din Sânleani și Livada e liniște și loc de lucru, așa că putem schimba roata direct în fața casei.",
          PRICE_P,
        ],
      },
      {
        h2: "Sau treci pe la noi",
        p: ["Atelierul e la câteva minute de mers. Dacă mașina rulează normal, vino oricând, inclusiv noaptea sau în weekend."],
      },
    ],
    serviceSlugs: ["montaj-domiciliu", "reparatii-pe-loc", "echilibrare-roti"],
    faqs: [
      { q: "Puteți schimba setul de iarnă la mine acasă?", a: "Da. Spune-ne la telefon dimensiunea și tipul jantelor și stabilim ora." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["schimb-anvelope-la-domiciliu-ghid", "cand-schimbi-anvelopele-de-iarna"],
  },
  {
    slug: "vulcanizare-mobila-sofronea-sanpaul",
    name: "Șofronea și Sânpaul",
    short: "Șofronea",
    eta: "Sosire ~15–30 min",
    etaMinutes: "15–30 min",
    km: 9,
    coords: [46.2778, 21.31],
    desc: "La nord de Arad, pe drumul spre Curtici.",
    intro:
      "Între Arad și Curtici, Șofronea și Sânpaul au drumuri mai liniștite, dar și mai puține ajutoare la miezul nopții. Ne suni, iar noi venim din Grădiște în câteva minute.",
    metaTitle: "Vulcanizare mobilă Șofronea și Sânpaul 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Șofronea și Sânpaul, la nord de Arad. Reparăm pana pe loc sau schimbăm roata.",
    h1: "Vulcanizare mobilă în Șofronea și Sânpaul",
    roads: ["Drumul Arad – Curtici"],
    localities: ["Șofronea", "Sânpaul"],
    sections: [
      {
        h2: "Pană pe drumul spre Curtici",
        p: ["Acostamentul e îngust pe alocuri. Oprește la o intrare în curte sau pe un drum lateral și pornește avariile. Locația pe WhatsApp ne ajută să te găsim imediat."],
      },
      {
        h2: "Ce putem face pe loc",
        p: ["Reparăm pana cu ciupercă sau plombă, schimbăm valva sau montăm roata de rezervă. Dacă anvelopa nu se mai poate repara, îți spunem sincer."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "reparatii-pe-loc", "montaj-domiciliu"],
    faqs: [
      { q: "Veniți și noaptea în Sânpaul?", a: "Da, venim non-stop. Sună la 0746 538 480 și îți spunem în cât timp ajungem." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-noaptea-ce-faci", "roata-rezerva-galet"],
  },
  {
    slug: "vulcanizare-mobila-curtici",
    name: "Curtici și Dorobanți",
    short: "Curtici",
    eta: "Sosire ~20–35 min",
    etaMinutes: "20–35 min",
    km: 16,
    coords: [46.3444, 21.3069],
    desc: "Orașul de lângă granița cu Ungaria, cu trafic de camioane spre vamă.",
    intro:
      "În Curtici și Dorobanți venim atât pentru autoturisme, cât și pentru camioanele care trec spre vamă. Spune-ne ce vehicul ai și ce dimensiune are roata, ca să venim pregătiți.",
    metaTitle: "Vulcanizare mobilă Curtici 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Curtici și Dorobanți, pentru autoturisme și camioane. Atelier în Grădiște, Arad.",
    h1: "Vulcanizare mobilă în Curtici și Dorobanți",
    roads: ["DJ709B", "drumul spre vama Curtici"],
    localities: ["Curtici", "Dorobanți"],
    sections: [
      {
        h2: "Camioane în zona vămii",
        p: ["Pentru camioane avem echipament potrivit și putem lucra la fața locului, într-o parcare sau pe un loc sigur lângă drum."],
      },
      {
        h2: "Autoturisme, acasă sau pe drum",
        p: ["Pentru mașini mici, reparăm pana sau schimbăm roata la tine acasă ori unde ai rămas. Prețul deplasării ți-l spunem înainte să plecăm."],
      },
    ],
    serviceSlugs: ["vulcanizare-camioane", "asistenta-rutiera", "reparatii-pe-loc"],
    faqs: [
      { q: "Lucrați și la camioane în Curtici?", a: "Da. Spune-ne dimensiunea roții și unde e camionul, iar noi îți confirmăm timpul de sosire." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["ce-sa-spui-cand-suni-la-vulcanizare", "pana-noaptea-ce-faci"],
  },
  {
    slug: "vulcanizare-mobila-santana",
    name: "Sântana și Caporal Alexa",
    short: "Sântana",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    km: 20,
    coords: [46.3458, 21.5046],
    desc: "Pe DN79, spre Oradea, cu multe camioane și utilaje agricole.",
    intro:
      "Sântana, Caporal Alexa și Comlăuș sunt pe DN79, același drum pe care se află atelierul. Venim pentru mașini, camioane și utilaje, zi și noapte.",
    metaTitle: "Vulcanizare mobilă Sântana 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Sântana, Caporal Alexa și Comlăuș, pe DN79 spre Oradea. Autoturisme și camioane.",
    h1: "Vulcanizare mobilă în Sântana și Caporal Alexa",
    roads: ["DN79 Arad – Oradea"],
    localities: ["Sântana", "Caporal Alexa", "Comlăuș"],
    sections: [
      {
        h2: "Pe DN79, oprește în siguranță",
        p: ["Dacă faci pană între Zimandu Nou și Sântana, nu opri pe bandă. Caută o parcare, o benzinărie sau o intrare largă și sună-ne de acolo."],
      },
      {
        h2: "Camioane și utilaje",
        p: ["Avem echipament pentru roți de camion și putem veni la ferme sau în zonele de depozitare din jurul Sântanei."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "vulcanizare-camioane", "reparatii-pe-loc"],
    faqs: [
      { q: "Cât costă deplasarea până în Sântana?", a: "Depinde de lucrare și de oră. Ți-l spunem la telefon, înainte să plecăm, fără surprize." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["anvelope-utilaje-agricole-pana", "ce-sa-spui-cand-suni-la-vulcanizare"],
  },
  {
    slug: "vulcanizare-mobila-vladimirescu",
    name: "Vladimirescu, Horia și Mândruloc",
    short: "Vladimirescu",
    eta: "Sosire ~15–30 min",
    etaMinutes: "15–30 min",
    km: 7,
    coords: [46.1638, 21.4063],
    desc: "La est de Arad, pe DN7 spre Deva.",
    intro:
      "Vladimirescu, Horia, Mândruloc și Cicir sunt aproape de oraș, pe DN7 spre Deva. Pentru o pană acasă sau pe drum, venim repede, iar dacă poți conduce, atelierul e la câteva minute.",
    metaTitle: "Vulcanizare mobilă Vladimirescu 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Vladimirescu, Horia, Mândruloc și Cicir, pe DN7 spre Deva. Schimb anvelope de la 160 RON.",
    h1: "Vulcanizare mobilă în Vladimirescu, Horia și Mândruloc",
    roads: ["DN7 spre Deva", "Centura Aradului"],
    localities: ["Vladimirescu", "Horia", "Mândruloc", "Cicir"],
    sections: [
      {
        h2: "Pe DN7, cu trafic intens",
        p: ["DN7 e aglomerat la orele de vârf. Dacă faci pană, ieși pe o stradă laterală din Vladimirescu, unde lucrăm în siguranță."],
      },
      {
        h2: "Schimb sezonier acasă",
        p: [PRICE_P],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "montaj-domiciliu", "reparatii-pe-loc", "echilibrare-roti"],
    faqs: [
      { q: "Veniți și în Cicir sau Mândruloc?", a: "Da, venim în toate satele comunei Vladimirescu, non-stop." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-pe-dn7-ce-faci", "schimb-anvelope-la-domiciliu-ghid"],
  },
  {
    slug: "vulcanizare-mobila-fantanele",
    name: "Fântânele, Tisa Nouă și Frumușeni",
    short: "Fântânele",
    eta: "Sosire ~20–30 min",
    etaMinutes: "20–30 min",
    km: 9,
    coords: [46.1244, 21.3811],
    desc: "La sud-est de Aradul Nou, comunele cu multe case noi.",
    intro:
      "În Fântânele, Tisa Nouă și Frumușeni venim pentru pene, schimb de anvelope sau echilibrare, direct la casă. Trecem Mureșul și ajungem la tine fără să-ți faci drum până în oraș.",
    metaTitle: "Vulcanizare mobilă Fântânele 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Fântânele, Tisa Nouă și Frumușeni, lângă Arad. Reparații pene și schimb anvelope la domiciliu.",
    h1: "Vulcanizare mobilă în Fântânele, Tisa Nouă și Frumușeni",
    roads: ["Drumul Aradul Nou – Fântânele", "DN69 (ieșirea spre sud)"],
    localities: ["Fântânele", "Tisa Nouă", "Frumușeni"],
    sections: [
      {
        h2: "Roata dezumflată în curte",
        p: ["Nu porni spre oraș cu roata goală — podul peste Mureș și traficul din Aradul Nou nu sunt locul potrivit pentru o oprire. Sună-ne și venim noi."],
      },
      {
        h2: "Ce aduci în calcul",
        p: [PRICE_P],
      },
    ],
    serviceSlugs: ["montaj-domiciliu", "reparatii-pe-loc", "asistenta-rutiera"],
    faqs: [
      { q: "Puteți veni în weekend în Frumușeni?", a: "Da, lucrăm non-stop, inclusiv în weekend și de sărbători." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["presiunea-corecta-in-anvelope", "schimb-anvelope-la-domiciliu-ghid"],
  },
  {
    slug: "vulcanizare-mobila-zadareni-vinga",
    name: "Zădăreni, Felnac și Vinga",
    short: "Zădăreni / Vinga",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    km: 12,
    coords: [46.1323, 21.219],
    desc: "La sud de Arad, pe DN69 spre Timișoara și pe drumurile spre Felnac.",
    intro:
      "Zădăreni și Felnac sunt aproape de oraș, iar Vinga e pe DN69, spre Timișoara. Dacă rămâi cu pana pe drum sau acasă, sună-ne și venim cu tot ce trebuie.",
    metaTitle: "Vulcanizare mobilă Zădăreni, Felnac, Vinga 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Zădăreni, Felnac, Vinga și Mailat, inclusiv pe DN69 spre Timișoara.",
    h1: "Vulcanizare mobilă în Zădăreni, Felnac și Vinga",
    roads: ["DN69 Arad – Timișoara", "drumul Zădăreni – Felnac"],
    localities: ["Zădăreni", "Felnac", "Vinga", "Mailat"],
    sections: [
      {
        h2: "Pană pe DN69",
        p: ["Pe DN69 se circulă repede. Oprește cât mai departe de bandă, pune vesta și triunghiul și stai în afara carosabilului până ajungem."],
      },
      {
        h2: "În sat, la tine acasă",
        p: ["În Zădăreni, Felnac sau Vinga reparăm pana sau schimbăm roata direct la poartă. Prețul deplasării îl afli la telefon."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "reparatii-pe-loc", "montaj-domiciliu"],
    faqs: [
      { q: "Ajungeți și până în Vinga?", a: "Da. Vinga e la aproximativ 25 km de atelier; îți spunem la telefon în cât timp ajungem." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["raza-acoperire-50-km", "pana-noaptea-ce-faci"],
  },
  {
    slug: "vulcanizare-mobila-pecica",
    name: "Pecica, Turnu și Sederhat",
    short: "Pecica",
    eta: "Sosire ~30–45 min",
    etaMinutes: "30–45 min",
    km: 22,
    coords: [46.1666, 21.0666],
    desc: "La vest de Arad, pe DN7 spre Nădlac.",
    intro:
      "Pecica e pe DN7, între Arad și Nădlac. Venim pentru mașini, camioane și utilaje agricole, în oraș, în Turnu, în Sederhat sau direct pe drum.",
    metaTitle: "Vulcanizare mobilă Pecica 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Pecica, Turnu și Sederhat, pe DN7 spre Nădlac. Autoturisme, camioane și utilaje.",
    h1: "Vulcanizare mobilă în Pecica, Turnu și Sederhat",
    roads: ["DN7 Arad – Nădlac", "drumul spre Turnu"],
    localities: ["Pecica", "Turnu", "Sederhat", "Bodrogu Nou"],
    sections: [
      {
        h2: "Pe DN7, spre Nădlac",
        p: ["DN7 are trafic greu de camioane. Dacă faci pană, ieși în Pecica sau pe un drum lateral și trimite-ne locația exactă pe WhatsApp."],
      },
      {
        h2: "Utilaje și ferme",
        p: ["În zona Pecica sunt multe ferme. Venim și la utilaje, dacă accesul permite — spune-ne dinainte cum arată drumul până acolo."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "vulcanizare-camioane", "reparatii-pe-loc"],
    faqs: [
      { q: "Veniți la utilaje agricole în câmp?", a: "Da, când accesul permite. Spune-ne tipul utilajului și dimensiunea anvelopei." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-pe-dn7-ce-faci", "anvelope-utilaje-agricole-pana"],
  },
  {
    slug: "vulcanizare-mobila-a1-nadlac-arad",
    name: "A1 între Nădlac și Arad",
    short: "A1 / Nădlac",
    eta: "Sosire ~30–50 min",
    etaMinutes: "30–50 min",
    km: 30,
    coords: [46.13, 20.95],
    desc: "Autostrada A1 de la vama Nădlac până la Arad, plus Centura Aradului.",
    intro:
      "Pe A1, între Nădlac și Arad, și pe Centura Aradului, intervenim zi și noapte. Pe autostradă siguranța e pe primul loc: ieși pe banda de urgență, pune vesta și treci în spatele parapetului.",
    metaTitle: "Vulcanizare mobilă A1 Nădlac – Arad 24/24 | 0746 538 480",
    metaDesc: "Pană pe A1 între Nădlac și Arad sau pe Centura Aradului? Vulcanizare mobilă non-stop pentru autoturisme și camioane.",
    h1: "Vulcanizare mobilă pe A1, între Nădlac și Arad",
    roads: ["A1 Nădlac – Arad", "Centura Aradului", "DN7"],
    localities: ["Nădlac", "Semlac", "Pecica", "Centura Aradului"],
    sections: [
      {
        h2: "Pe autostradă: întâi siguranța",
        p: ["Oprește pe banda de urgență cât mai la dreapta, pornește avariile, îmbracă vesta și ieși din mașină pe partea dreaptă. Toți pasagerii stau în spatele parapetului."],
      },
      {
        h2: "Ce ne spui la telefon",
        p: ["Kilometrul sau ultimul nod trecut, sensul de mers, modelul mașinii și ce roată e afectată. Cu locația pe WhatsApp te găsim mai repede."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "vulcanizare-camioane", "reparatii-pe-loc"],
    faqs: [
      { q: "Veniți și pentru camioane pe A1?", a: "Da, avem echipament pentru camioane. Spune-ne dimensiunea roții și kilometrul." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["ce-sa-spui-cand-suni-la-vulcanizare", "raza-acoperire-50-km"],
  },
  {
    slug: "vulcanizare-mobila-siria-pancota",
    name: "Șiria, Pâncota și Covăsânț",
    short: "Șiria / Pâncota",
    eta: "Sosire ~35–50 min",
    etaMinutes: "35–50 min",
    km: 25,
    coords: [46.2673, 21.6385],
    desc: "Spre podgoria Aradului, pe DN79A, la poalele dealurilor.",
    intro:
      "În Șiria, Pâncota, Galșa și Covăsânț venim pentru pene și schimb de anvelope, acasă sau pe drum. Spune-ne exact unde ești, mai ales dacă ești pe un drum de deal.",
    metaTitle: "Vulcanizare mobilă Șiria și Pâncota 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Șiria, Pâncota, Galșa și Covăsânț, pe DN79A. Atelier în Grădiște, Arad.",
    h1: "Vulcanizare mobilă în Șiria, Pâncota și Covăsânț",
    roads: ["DN79A", "drumul podgoriei"],
    localities: ["Șiria", "Pâncota", "Galșa", "Covăsânț"],
    sections: [
      {
        h2: "Pe drumurile din podgorie",
        p: ["Între Covăsânț și Șiria drumul are curbe și acostament îngust. Oprește doar unde te vede bine cine vine din spate și sună-ne de acolo."],
      },
      {
        h2: "Mai departe de oraș, tot non-stop",
        p: ["Distanța e mai mare, dar venim zi și noapte. Prețul deplasării ți-l spunem înainte, la telefon."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "reparatii-pe-loc", "montaj-domiciliu"],
    faqs: [
      { q: "Veniți până în Pâncota noaptea?", a: "Da, venim non-stop. Îți spunem la telefon în cât timp ajungem." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["raza-acoperire-50-km", "adancime-profil-anvelope"],
  },
  {
    slug: "vulcanizare-mobila-ghioroc-lipova",
    name: "Ghioroc, Păuliș și Lipova",
    short: "Ghioroc / Lipova",
    eta: "Sosire ~30–50 min",
    etaMinutes: "30–50 min",
    km: 22,
    coords: [46.1558, 21.5954],
    desc: "Pe DN7, spre Deva, pe valea Mureșului.",
    intro:
      "Ghioroc, Păuliș, Lipova și Zăbrani sunt pe DN7, spre Deva. Pe acest drum circulă mult trafic de tranzit, așa că venim și pentru camioane, nu doar pentru autoturisme.",
    metaTitle: "Vulcanizare mobilă Ghioroc și Lipova 24/24 | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Ghioroc, Păuliș, Lipova și Zăbrani, pe DN7 spre Deva. Autoturisme și camioane.",
    h1: "Vulcanizare mobilă în Ghioroc, Păuliș și Lipova",
    roads: ["DN7 Arad – Deva", "drumul Lipova – Zăbrani"],
    localities: ["Ghioroc", "Păuliș", "Lipova", "Zăbrani"],
    sections: [
      {
        h2: "Pană pe DN7, pe valea Mureșului",
        p: ["Drumul are porțiuni înguste între Păuliș și Lipova. Oprește doar într-o parcare sau la intrarea într-o localitate și semnalizează corect."],
      },
      {
        h2: "Și pentru camioane",
        p: ["Avem echipament pentru roți de camion și venim la fața locului. Spune-ne dimensiunea roții ca să venim pregătiți."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "vulcanizare-camioane", "reparatii-pe-loc"],
    faqs: [
      { q: "Veniți până în Lipova?", a: "Da. Lipova e la aproximativ 30 km de atelier; îți confirmăm timpul și prețul la telefon." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-pe-dn7-ce-faci", "ce-sa-spui-cand-suni-la-vulcanizare"],
  },
  {
    slug: "vulcanizare-micalaca-arad",
    name: "Micălaca (Arad)",
    short: "Micălaca",
    eta: "Sosire ~10–20 min",
    etaMinutes: "10–20 min",
    km: 4,
    coords: [46.1736, 21.357],
    desc: "Cel mai mare cartier al Aradului, la câteva minute de atelierul din Grădiște.",
    intro:
      "Micălaca e chiar lângă Grădiște. Dacă găsești roata dezumflată în parcarea blocului, nu mai conduce pe ea: sună-ne și venim în parcare, sau, dacă roata ține aer, vino direct la atelier, pe Calea Zimandului nr. 14.",
    metaTitle: "Vulcanizare Micălaca Arad non-stop | 0746 538 480",
    metaDesc: "Vulcanizare non-stop pentru Micălaca, Arad: atelier la 5 minute, în Grădiște, și deplasare în parcarea blocului. Schimb 4 anvelope de la 160 RON.",
    h1: "Vulcanizare în Micălaca — atelier la câteva minute și venim la bloc",
    roads: ["Calea Aurel Vlaicu", "Str. Andrei Șaguna", "Calea Zimandului"],
    localities: ["Micălaca", "Micălaca Nouă", "zona Confecții", "zona Alfa"],
    sections: [
      {
        h2: "Pană în parcarea blocului",
        p: ["În parcările din Micălaca e loc de lucru, așa că reparăm pana sau schimbăm roata acolo unde e mașina. Trimite-ne blocul și scara pe WhatsApp."],
      },
      { h2: "Prețuri clare", p: [PRICE_P] },
    ],
    serviceSlugs: ["reparatii-pe-loc", "montaj-domiciliu", "vanzare-anvelope", "echilibrare-roti"],
    faqs: [
      { q: "Cât de departe e atelierul de Micălaca?", a: "Câteva minute cu mașina: atelierul e în Grădiște, pe Calea Zimandului nr. 14, lângă sensul giratoriu spre Oradea." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-noaptea-ce-faci", "valva-anvelopa-pierde-aer"],
  },
  {
    slug: "vulcanizare-aradul-nou",
    name: "Aradul Nou (Arad)",
    short: "Aradul Nou",
    eta: "Sosire ~15–25 min",
    etaMinutes: "15–25 min",
    km: 7,
    coords: [46.1448, 21.3349],
    desc: "Cartierul de peste Mureș, pe Calea Timișorii.",
    intro:
      "Aradul Nou e de cealaltă parte a Mureșului, pe Calea Timișorii. Ca să nu traversezi podul cu roata goală, venim noi la tine, zi și noapte.",
    metaTitle: "Vulcanizare Aradul Nou non-stop | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Aradul Nou: reparații pene, schimb și echilibrare anvelope la tine acasă. Atelier în Grădiște, Arad.",
    h1: "Vulcanizare în Aradul Nou — venim noi peste Mureș",
    roads: ["Calea Timișorii", "podul Traian / podul Decebal", "DN69"],
    localities: ["Aradul Nou", "zona Calea Timișorii", "Mureșel"],
    sections: [
      {
        h2: "Nu trece podul pe roata goală",
        p: ["Pe poduri și pe Calea Timișorii traficul e intens și nu ai unde opri în siguranță. Rămâi pe loc și trimite-ne locația — venim noi."],
      },
      { h2: "Schimb sezonier acasă", p: [PRICE_P] },
    ],
    serviceSlugs: ["asistenta-rutiera", "montaj-domiciliu", "reparatii-pe-loc"],
    faqs: [
      { q: "Veniți în Aradul Nou și noaptea?", a: "Da, venim non-stop. Îți spunem la telefon în cât timp ajungem." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["schimb-anvelope-la-domiciliu-ghid", "pana-noaptea-ce-faci"],
  },
  {
    slug: "vulcanizare-gai-bujac-arad",
    name: "Gai, Bujac și Pârneava (Arad)",
    short: "Gai / Bujac",
    eta: "Sosire ~15–25 min",
    etaMinutes: "15–25 min",
    km: 6,
    coords: [46.2023, 21.2795],
    desc: "Cartierele din vestul Aradului, spre ieșirea către Pecica și Curtici.",
    intro:
      "În Gai, Bujac și Pârneava venim pentru pene, schimb de anvelope și echilibrare, la casă sau la bloc. Pe Centura Aradului ajungem repede din Grădiște.",
    metaTitle: "Vulcanizare Gai, Bujac, Pârneava Arad | 0746 538 480",
    metaDesc: "Vulcanizare non-stop pentru Gai, Bujac și Pârneava, Arad: deplasare la domiciliu sau atelier în Grădiște. Schimb anvelope de la 160 RON.",
    h1: "Vulcanizare în Gai, Bujac și Pârneava",
    roads: ["Centura Aradului", "Calea 6 Vânători", "Str. Poetului"],
    localities: ["Gai", "Bujac", "Pârneava", "Sânnicolau Mic"],
    sections: [
      {
        h2: "Pe Centură ajungem repede",
        p: ["Atelierul e la 150 m de Centura Aradului, așa că pentru vestul orașului plecăm imediat. Spune-ne strada și ce roată e afectată."],
      },
      { h2: "La atelier sau acasă", p: [PRICE_P] },
    ],
    serviceSlugs: ["montaj-domiciliu", "reparatii-pe-loc", "vanzare-anvelope"],
    faqs: [
      { q: "Pot veni direct la atelier din Gai?", a: "Da, dacă roata ține aer. Pe Centură ajungi repede în Grădiște, pe Calea Zimandului nr. 14." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["presiunea-corecta-in-anvelope", "reparatie-sau-inlocuire-anvelopa"],
  },
  {
    slug: "vulcanizare-mobila-nadlac",
    name: "Nădlac, Șeitin și Semlac",
    short: "Nădlac",
    eta: "Sosire ~40–60 min",
    etaMinutes: "40–60 min",
    km: 45,
    coords: [46.1667, 20.75],
    desc: "Orașul de la granița cu Ungaria, cu vama de pe A1 și DN7.",
    intro:
      "La Nădlac trec zilnic mii de camioane și mașini spre vamă. Dacă faci pană în oraș, în parcările de lângă vamă sau în Șeitin și Semlac, venim non-stop din Arad.",
    metaTitle: "Vulcanizare mobilă Nădlac non-stop | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Nădlac, Șeitin și Semlac, inclusiv în parcările de lângă vama Nădlac. Autoturisme și camioane.",
    h1: "Vulcanizare mobilă în Nădlac, Șeitin și Semlac",
    roads: ["A1 – vama Nădlac", "DN7 Arad – Nădlac"],
    localities: ["Nădlac", "Șeitin", "Semlac"],
    sections: [
      {
        h2: "Lângă vamă",
        p: ["Dacă aștepți la vamă sau în parcările de camioane, spune-ne exact parcarea și numărul de înmatriculare. Venim cu echipament pentru camioane."],
      },
      {
        h2: "Distanța și prețul",
        p: ["Nădlac e la aproximativ 45 km de atelier. Prețul deplasării și timpul de sosire ți le spunem la telefon, înainte să plecăm."],
      },
    ],
    serviceSlugs: ["vulcanizare-camioane", "asistenta-rutiera", "reparatii-pe-loc"],
    faqs: [
      { q: "Veniți până la vama Nădlac?", a: "Da, venim non-stop. Spune-ne parcarea exactă și tipul vehiculului." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["ce-sa-spui-cand-suni-la-vulcanizare", "anvelope-utilaje-agricole-pana"],
  },
  {
    slug: "vulcanizare-mobila-macea-sanmartin",
    name: "Macea și Sânmartin",
    short: "Macea",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    km: 21,
    coords: [46.3868, 21.3109],
    desc: "La nord de Curtici, spre granița cu Ungaria.",
    intro:
      "Macea și Sânmartin sunt mai departe de oraș, dar venim și aici zi și noapte pentru pene, schimb de anvelope sau roți de camion.",
    metaTitle: "Vulcanizare mobilă Macea și Sânmartin | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Macea și Sânmartin, județul Arad. Reparații pene, schimb anvelope și echilibrare la fața locului.",
    h1: "Vulcanizare mobilă în Macea și Sânmartin",
    roads: ["DJ709B Curtici – Macea", "drumul Macea – Sânmartin"],
    localities: ["Macea", "Sânmartin"],
    sections: [
      {
        h2: "Departe de un atelier deschis",
        p: ["Noaptea, în Macea sau Sânmartin, cel mai apropiat ajutor vine din Arad. Sună-ne și pornim imediat."],
      },
      {
        h2: "Ce putem face pe loc",
        p: ["Reparăm pana cu plug sau petic, schimbăm valva sau montăm roata de rezervă. Prețul îl afli la telefon."],
      },
    ],
    serviceSlugs: ["asistenta-rutiera", "reparatii-pe-loc", "vulcanizare-camioane"],
    faqs: [
      { q: "Veniți până în Sânmartin?", a: "Da. Îți spunem la telefon în cât timp ajungem și cât costă deplasarea." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-noaptea-ce-faci", "roata-rezerva-galet"],
  },
  {
    slug: "vulcanizare-mobila-iratosu-variasu",
    name: "Iratoșu, Variașu Mare și Variașu Mic",
    short: "Iratoșu",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    km: 17,
    coords: [46.3174, 21.207],
    desc: "Comunele dintre Arad, Curtici și Pecica, cu multe ferme.",
    intro:
      "În Iratoșu și Variaș venim pentru mașini, dube și utilaje agricole. Spune-ne cum se ajunge la vehicul, mai ales dacă e pe un drum de câmp.",
    metaTitle: "Vulcanizare mobilă Iratoșu, Variaș | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Iratoșu, Variașu Mare și Variașu Mic: pene, schimb anvelope, utilitare și camioane.",
    h1: "Vulcanizare mobilă în Iratoșu, Variașu Mare și Variașu Mic",
    roads: ["DJ682 spre Variaș", "drumurile dintre ferme"],
    localities: ["Iratoșu", "Variașu Mare", "Variașu Mic"],
    sections: [
      { h2: "La fermă sau în sat", p: ["Pentru utilaje și camioane, spune-ne dimensiunea roții și cum arată drumul până la ele. Venim pregătiți."] },
      { h2: "Prețul, înainte să plecăm", p: ["Distanța e mai mare decât în oraș, așa că îți spunem prețul deplasării la telefon, fără surprize."] },
    ],
    serviceSlugs: ["asistenta-rutiera", "vulcanizare-camioane", "reparatii-pe-loc"],
    faqs: [
      { q: "Veniți la utilaje în câmp?", a: "Da, când accesul permite. Spune-ne tipul utilajului și cum se ajunge la el." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["anvelope-utilaje-agricole-pana", "ce-sa-spui-cand-suni-la-vulcanizare"],
  },
  {
    slug: "vulcanizare-mobila-sagu-firiteaz",
    name: "Șagu, Firiteaz și Cruceni",
    short: "Șagu",
    eta: "Sosire ~25–40 min",
    etaMinutes: "25–40 min",
    km: 17,
    coords: [46.0634, 21.2814],
    desc: "La sud de Arad, între DN69 și Fântânele.",
    intro:
      "Șagu, Firiteaz, Cruceni și Fiscut sunt sate liniștite la sud de oraș. Pentru o pană în curte sau pe drum, venim noi, non-stop.",
    metaTitle: "Vulcanizare mobilă Șagu, Firiteaz | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Șagu, Firiteaz, Cruceni și Fiscut, la sud de Arad. Pene, schimb și echilibrare anvelope la domiciliu.",
    h1: "Vulcanizare mobilă în Șagu, Firiteaz și Cruceni",
    roads: ["DN69 Arad – Timișoara", "DJ692 spre Firiteaz"],
    localities: ["Șagu", "Firiteaz", "Cruceni", "Fiscut"],
    sections: [
      { h2: "Pană acasă, la sat", p: ["Spune-ne adresa exactă și dacă mașina e în curte. Reparăm sau schimbăm roata acolo."] },
      { h2: "Schimb sezonier", p: [PRICE_P] },
    ],
    serviceSlugs: ["montaj-domiciliu", "reparatii-pe-loc", "asistenta-rutiera"],
    faqs: [
      { q: "Veniți în Firiteaz sau Fiscut?", a: "Da, venim în toate satele comunei Șagu, zi și noapte." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["schimb-anvelope-la-domiciliu-ghid", "adancime-profil-anvelope"],
  },
  {
    slug: "vulcanizare-mobila-sanpetru-german-secusigiu",
    name: "Sânpetru German, Secusigiu și Munar",
    short: "Sânpetru German",
    eta: "Sosire ~30–45 min",
    etaMinutes: "30–45 min",
    km: 25,
    coords: [46.1149, 21.0491],
    desc: "La sud-vest de Pecica, între A1 și Mureș.",
    intro:
      "Sânpetru German, Secusigiu, Munar și Satu Mare sunt aproape de A1, între Arad și Nădlac. Venim pentru pene acasă, pe drum sau la ferme.",
    metaTitle: "Vulcanizare Sânpetru German, Secusigiu | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Sânpetru German, Secusigiu și Munar, aproape de A1. Autoturisme, utilitare și utilaje.",
    h1: "Vulcanizare mobilă în Sânpetru German, Secusigiu și Munar",
    roads: ["A1 Arad – Nădlac", "DJ682 spre Secusigiu"],
    localities: ["Sânpetru German", "Secusigiu", "Munar", "Satu Mare"],
    sections: [
      { h2: "Aproape de A1", p: ["Dacă ai ieșit de pe A1 cu o roată care pierde aer, oprește în primul sat și trimite-ne locația."] },
      { h2: "Ce ne spui", p: ["Modelul mașinii, dimensiunea anvelopei și dacă ai rezervă. Prețul și timpul de sosire ți le spunem la telefon."] },
    ],
    serviceSlugs: ["asistenta-rutiera", "reparatii-pe-loc", "vulcanizare-camioane"],
    faqs: [
      { q: "Ajungeți și în Munar?", a: "Da. Îți confirmăm la telefon timpul și prețul deplasării." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["raza-acoperire-50-km", "roata-rezerva-galet"],
  },
  {
    slug: "vulcanizare-mobila-chisineu-cris",
    name: "Chișineu-Criș, Șimand și Nădab",
    short: "Chișineu-Criș",
    eta: "Sosire ~35–55 min",
    etaMinutes: "35–55 min",
    km: 37,
    coords: [46.5245, 21.5166],
    desc: "Pe DN79, spre Oradea, la nord de Sântana.",
    intro:
      "Chișineu-Criș, Șimand, Nădab și Socodor sunt pe drumul spre Oradea. Pe DN79 circulă multe camioane, așa că venim pregătiți pentru orice roată.",
    metaTitle: "Vulcanizare mobilă Chișineu-Criș | 0746 538 480",
    metaDesc: "Vulcanizare mobilă non-stop în Chișineu-Criș, Șimand, Nădab și Socodor, pe DN79 Arad – Oradea. Autoturisme și camioane.",
    h1: "Vulcanizare mobilă în Chișineu-Criș, Șimand și Nădab",
    roads: ["DN79 Arad – Oradea", "DJ792 spre Socodor"],
    localities: ["Chișineu-Criș", "Șimand", "Nădab", "Socodor"],
    sections: [
      { h2: "Pe DN79, spre Oradea", p: ["Dacă faci pană pe DN79, oprește într-o parcare sau benzinărie și spune-ne sensul de mers. Atelierul e chiar pe acest drum, la ieșirea din Arad."] },
      { h2: "Mai departe de oraș", p: ["Distanța e mai mare, dar venim non-stop. Prețul deplasării ți-l spunem înainte, la telefon."] },
    ],
    serviceSlugs: ["asistenta-rutiera", "vulcanizare-camioane", "reparatii-pe-loc"],
    faqs: [
      { q: "Veniți până în Chișineu-Criș noaptea?", a: "Da, venim non-stop. Îți spunem la telefon în cât timp ajungem." },
      ATELIER_FAQ,
    ],
    blogSlugs: ["pana-noaptea-ce-faci", "ce-sa-spui-cand-suni-la-vulcanizare"],
  },
];

// URL-uri vechi (fostul site din Timișoara) → 301 spre pagina principală din Arad.
const OLD = [
  "vulcanizare-non-stop-timisoara", "vulcanizare-mobila-dumbravita", "vulcanizare-mobila-giroc", "vulcanizare-mobila-ghiroda",
  "vulcanizare-mobila-mosnita-noua", "vulcanizare-mobila-sacalaz", "vulcanizare-mobila-dudestii-noi", "vulcanizare-mobila-recas-a1",
  "vulcanizare-mobila-sanandrei", "vulcanizare-mobila-giarmata", "vulcanizare-mobila-remetea-mare", "vulcanizare-mobila-sag",
  "vulcanizare-mobila-utvin", "vulcanizare-mobila-bucovat", "vulcanizare-mobila-jimbolia", "vulcanizare-mobila-deta",
  "vulcanizare-mobila-buzias", "vulcanizare-mobila-ortisoara", "vulcanizare-mobila-dragodana", "vulcanizare-mobila-gaesti",
  "vulcanizare-mobila-matasaru", "vulcanizare-mobila-targoviste", "vulcanizare-mobila-topoloveni", "vulcanizare-mobila-titu",
  "vulcanizare-mobila-racari", "vulcanizare-mobila-moreni", "vulcanizare-mobila-pucioasa", "vulcanizare-mobila-pitesti",
  "dragodana-gaesti", "targoviste", "titu", "topoloveni", "autostrada-a1", "pitesti", "bucuresti-vest", "ploiesti",
  "moreni", "pucioasa-fieni", "racari", "bolintin", "videle", "campulung",
];

export const zoneRedirects: Record<string, string> = Object.fromEntries(
  OLD.map((slug) => [slug, slug === "autostrada-a1" ? "/zone/vulcanizare-mobila-a1-nadlac-arad" : "/zone/vulcanizare-non-stop-arad"]),
);

/** Localități deservite afișate ca puncte pe hartă (coordonate OpenStreetMap). */
export const servedPoints: { name: string; coords: [number, number] }[] = [
  { name: "Andrei Șaguna", coords: [46.2917, 21.3926] },
  { name: "Aradul Nou", coords: [46.1448, 21.3349] },
  { name: "Bodrogu Nou", coords: [46.1281, 21.198] },
  { name: "Bujac", coords: [46.194, 21.2822] },
  { name: "Caporal Alexa", coords: [46.3379, 21.5832] },
  { name: "Chișineu-Criș", coords: [46.5245, 21.5166] },
  { name: "Cicir", coords: [46.1453, 21.4807] },
  { name: "Comlăuș", coords: [46.3613, 21.5202] },
  { name: "Covăsânț", coords: [46.2061, 21.6131] },
  { name: "Cruceni", coords: [46.0691, 21.3359] },
  { name: "Curtici", coords: [46.3444, 21.3069] },
  { name: "Dorobanți", coords: [46.35, 21.2427] },
  { name: "Felnac", coords: [46.1167, 21.15] },
  { name: "Firiteaz", coords: [46.0194, 21.3729] },
  { name: "Fiscut", coords: [46.0282, 21.3958] },
  { name: "Frumușeni", coords: [46.1018, 21.4603] },
  { name: "Fântânele", coords: [46.1244, 21.3811] },
  { name: "Gai", coords: [46.2107, 21.2767] },
  { name: "Galșa", coords: [46.2881, 21.6513] },
  { name: "Ghioroc", coords: [46.1559, 21.5954] },
  { name: "Grădiște", coords: [46.2063, 21.3472] },
  { name: "Grăniceri", coords: [46.5198, 21.3044] },
  { name: "Horia", coords: [46.2085, 21.4628] },
  { name: "Iratoșu", coords: [46.3174, 21.207] },
  { name: "Lipova", coords: [46.0913, 21.6936] },
  { name: "Livada", coords: [46.2259, 21.3862] },
  { name: "Macea", coords: [46.3868, 21.3109] },
  { name: "Mailat", coords: [46.0441, 21.1065] },
  { name: "Micălaca", coords: [46.1736, 21.357] },
  { name: "Mișca", coords: [46.6011, 21.5992] },
  { name: "Munar", coords: [46.1035, 21.0195] },
  { name: "Mândruloc", coords: [46.1471, 21.4643] },
  { name: "Nădab", coords: [46.4827, 21.5111] },
  { name: "Nădlac", coords: [46.1667, 20.75] },
  { name: "Pecica", coords: [46.1666, 21.0666] },
  { name: "Peregu Mare", coords: [46.2328, 20.9084] },
  { name: "Pâncota", coords: [46.323, 21.6887] },
  { name: "Pârneava", coords: [46.1747, 21.3009] },
  { name: "Păuliș", coords: [46.1169, 21.5928] },
  { name: "Secusigiu", coords: [46.0879, 20.9842] },
  { name: "Sederhat", coords: [46.214, 21.1569] },
  { name: "Semlac", coords: [46.1471, 20.9284] },
  { name: "Socodor", coords: [46.5101, 21.4413] },
  { name: "Sânleani", coords: [46.2124, 21.3886] },
  { name: "Sânmartin", coords: [46.4165, 21.3482] },
  { name: "Sânpaul", coords: [46.2579, 21.2686] },
  { name: "Sânpetru German", coords: [46.1149, 21.0491] },
  { name: "Sântana", coords: [46.3458, 21.5046] },
  { name: "Tisa Nouă", coords: [46.0826, 21.374] },
  { name: "Turnu", coords: [46.2569, 21.1261] },
  { name: "Variașu Mare", coords: [46.276, 21.1728] },
  { name: "Variașu Mic", coords: [46.2933, 21.1828] },
  { name: "Vinga", coords: [46.0161, 21.2157] },
  { name: "Vladimirescu", coords: [46.1638, 21.4063] },
  { name: "Zerind", coords: [46.6235, 21.517] },
  { name: "Zimandcuz", coords: [46.2553, 21.3817] },
  { name: "Zimandu Nou", coords: [46.281, 21.4002] },
  { name: "Zăbrani", coords: [46.0707, 21.5552] },
  { name: "Zădăreni", coords: [46.1323, 21.219] },
  { name: "Șagu", coords: [46.0634, 21.2814] },
  { name: "Șeitin", coords: [46.1091, 20.8399] },
  { name: "Șimand", coords: [46.4286, 21.4547] },
  { name: "Șiria", coords: [46.2673, 21.6385] },
  { name: "Șofronea", coords: [46.2778, 21.31] },
];
