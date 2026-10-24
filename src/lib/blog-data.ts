export type BlogPost = {
  slug: string;
  title: string;
  keyword: string;
  intent: string;
  desc: string;
  date: string;
  sections: { h2: string; p: string[] }[];
  cta: string;
  links: { label: string; to: string }[];
  /** Slug-ul zonei din zones-data, pentru articole locale. */
  area?: string;
  category?: "Urgență" | "Sfaturi" | "Ghid local";
};

const ZD = "/zone/vulcanizare-non-stop-arad";
const ZG = "/zone/vulcanizare-mobila-zimandu-nou";

const basePosts: BlogPost[] = [
  {
    slug: "pana-pe-dn7-ce-faci",
    title: "Pană pe DN7 în zona Arad: ce faci înainte să chemi ajutor",
    keyword: "pană pe DN7 Arad",
    intent: "Urgență: pași de siguranță și solicitarea unei intervenții.",
    desc: "Ai pană pe DN7 spre Pecica, Vladimirescu sau zona Ghioroc? Cum oprești în siguranță și ce informații transmiți vulcanizării mobile.",
    date: "2026-10-24",
    sections: [
      { h2: "Oprește cât mai sigur", p: ["Redu treptat viteza, fără manevre bruște. Caută un loc în afara benzii de circulație, fără să continui deplasarea pe anvelopa dezumflată mai mult decât este necesar pentru siguranță."] },
      { h2: "Protejează pasagerii", p: ["Pornește avariile. Dacă poți coborî în siguranță, îmbracă vesta reflectorizantă și ieși pe partea opusă traficului. Semnalizează conform regulilor rutiere, fără să te expui vehiculelor care trec."] },
      { h2: "Spune pe ce sens te afli", p: ["Pe DN7, precizează dacă mergi spre Pecica și Nădlac sau spre Vladimirescu și Deva. În zona Ghioroc, trimite poziția exactă și spune dacă ești pe DN7 sau pe un drum de legătură."] },
      { h2: "Confirmă intervenția la telefon", p: ["Trimite locația pe WhatsApp, dimensiunea anvelopei și o fotografie a defectului. Spune dacă ai rezervă. Confirmăm la telefon costul și în cât timp ajungem."] },
    ],
    cta: "Pană pe DN7 lângă Arad? Sună la 0746 538 480 sau trimite locația pe WhatsApp.",
    links: [
      { label: "Vulcanizare mobilă Pecica", to: "/zone/vulcanizare-mobila-pecica" },
      { label: "Vulcanizare mobilă Vladimirescu", to: "/zone/vulcanizare-mobila-vladimirescu" },
      { label: "Vulcanizare mobilă Ghioroc–Lipova", to: "/zone/vulcanizare-mobila-ghioroc-lipova" },
    ],
  },
  {
    slug: "reparatie-sau-inlocuire-anvelopa",
    title: "Repari sau înlocuiești anvelopa? Ce trebuie verificat",
    keyword: "reparație anvelope Arad",
    intent: "Informațional: evaluarea unei anvelope deteriorate.",
    desc: "De ce contează locul perforației, starea flancului și rularea fără aer înainte să decizi dacă anvelopa poate fi reparată.",
    date: "2026-10-24",
    sections: [
      { h2: "O perforație nu înseamnă automat înlocuire", p: ["Unele perforații din banda de rulare pot fi reparate. Decizia depinde de poziție, dimensiune și starea anvelopei, inclusiv la interior."] },
      { h2: "Flancul deteriorat cere atenție", p: ["O umflătură, o tăietură pe flanc sau fire vizibile pot indica deteriorarea structurii. Nu continua drumul presupunând că simpla umflare rezolvă problema."] },
      { h2: "Spune dacă ai mers fără aer", p: ["Rularea cu presiune foarte mică poate produce deteriorări ascunse. La Vulcanizare La Uly, în Arad, verificăm anvelopa și îți spunem sincer dacă reparația e sigură."] },
    ],
    cta: "Ai o anvelopă deteriorată? Sună la 0746 538 480 pentru detalii.",
    links: [
      { label: "Reparație pană", to: "/servicii/reparatii-pe-loc" },
      { label: "Atelier non-stop în Arad", to: ZD },
    ],
  },
  {
    slug: "cand-schimbi-anvelopele-de-iarna",
    title: "Schimbul sezonier de anvelope în Arad: când îl faci și cât costă",
    keyword: "schimb anvelope Arad",
    intent: "Informațional sezonier și solicitarea serviciului.",
    desc: "Cum pregătești anvelopele pentru sezon: profil, marcaje și prețurile pentru schimbul a 4 anvelope cu echilibrare.",
    date: "2026-10-24",
    sections: [
      { h2: "Urmărește vremea și traseele tale", p: ["Nu aștepta prima ninsoare ca să verifici setul de iarnă. Pentru drumurile din jurul Aradului, ia în calcul temperaturile scăzute, poleiul și deplasările de dimineață. Pe drumuri acoperite cu zăpadă, gheață sau polei sunt obligatorii anvelopele de iarnă."] },
      { h2: "Verifică marcajele și starea", p: ["Simbolul 3PMSF indică testarea pentru aderență pe zăpadă. Verifică și profilul, fisurile, deformările și dimensiunile aprobate pentru mașină; marcajul nu compensează uzura."] },
      { h2: "Preț pentru 4 anvelope și echilibrare", p: ["Schimbul a 4 anvelope cu echilibrare costă 160 RON pentru jante de oțel și 180 RON pentru jante de aluminiu. Costul deplasării, dacă venim la tine, îl afli la telefon."] },
      { h2: "Atelier sau deplasare la client", p: ["Atelierul este pe Calea Zimandului nr. 14, în Grădiște, Arad, deschis non-stop. Pentru schimb la domiciliu, spune-ne locația, dimensiunea anvelopelor și tipul jantelor."] },
    ],
    cta: "Pentru schimbul sezonier, sună la 0746 538 480.",
    links: [
      { label: "Schimb anvelope", to: "/servicii/montaj-domiciliu" },
      { label: "Echilibrare roți", to: "/servicii/echilibrare-roti" },
      { label: "Atelier Arad", to: ZD },
    ],
  },
  {
    slug: "schimb-anvelope-la-domiciliu-ghid",
    title: "Schimb anvelope la domiciliu în Arad: ce pregătești",
    keyword: "schimb anvelope la domiciliu Arad",
    intent: "Comercial: pregătirea unei deplasări la client.",
    desc: "Ce informații și ce spațiu sunt necesare pentru schimbul anvelopelor la domiciliu în Arad și împrejurimi.",
    date: "2026-10-24",
    sections: [
      { h2: "Spune-ne datele roților", p: ["Spune modelul mașinii, dimensiunea anvelopelor și dacă ai jante de oțel sau aluminiu. Precizează dacă schimbi anvelopele pe jante sau ai un al doilea set de roți complete."] },
      { h2: "Pregătește un loc sigur", p: ["E nevoie de un spațiu plan și stabil, cu acces în jurul mașinii, fără să blocăm circulația. Trimite o fotografie dacă nu ești sigur că locul e potrivit."] },
      { h2: "Ține accesoriile la îndemână", p: ["Pregătește anvelopele și cheia pentru șuruburile antifurt, dacă există. Pentru Arad, Zimandu Nou sau altă localitate apropiată, trimite adresa exactă."] },
      { h2: "Prețul și ora, la telefon", p: ["Schimbul a 4 anvelope cu echilibrare costă 160 RON pe jante de oțel și 180 RON pe jante de aluminiu. Costul deplasării și ora la care ajungem le stabilim la telefon."] },
    ],
    cta: "Cere schimbul la domiciliu la 0746 538 480.",
    links: [
      { label: "Schimb anvelope", to: "/servicii/montaj-domiciliu" },
      { label: "Vulcanizare mobilă Zimandu Nou", to: ZG },
    ],
  },
  {
    slug: "presiunea-corecta-in-anvelope",
    title: "Presiunea corectă în anvelope: verificarea înainte de drum",
    keyword: "presiune anvelope",
    intent: "Informațional: întreținere preventivă.",
    desc: "Unde găsești presiunea recomandată și de ce verificarea la rece contează înainte de navetă sau de un drum pe A1.",
    date: "2026-10-24",
    sections: [
      { h2: "Folosește valorile mașinii", p: ["Consultă eticheta de pe mașină sau manualul. Valorile pot fi diferite în funcție de încărcare și de punte. Presiunea maximă înscrisă pe anvelopă nu este recomandarea pentru mașina ta."] },
      { h2: "Măsoară la rece", p: ["Verifică presiunea înainte de plecare și înaintea unui drum mai lung din Arad. Nu scoate aer dintr-o anvelopă încălzită doar pentru că valoarea e mai mare decât la rece."] },
      { h2: "O pierdere repetată trebuie verificată", p: ["Dacă aceeași roată pierde constant aer, pot exista probleme la valvă, la etanșarea pe jantă sau o perforație. Umflarea repetată nu înlătură cauza."] },
    ],
    cta: "Roata pierde aer? Sună la 0746 538 480 sau vino la atelierul de pe Calea Zimandului nr. 14, Arad.",
    links: [
      { label: "Atelier non-stop Arad", to: ZD },
      { label: "Reparație pană", to: "/servicii/reparatii-pe-loc" },
    ],
  },
  {
    slug: "pana-noaptea-ce-faci",
    title: "Pană noaptea în Arad și împrejurimi: cum ceri ajutor",
    keyword: "vulcanizare non stop Arad",
    intent: "Urgență nocturnă.",
    desc: "Cum îți trimiți poziția și cum te ferești de trafic când ai pană noaptea în zona Aradului.",
    date: "2026-10-24",
    sections: [
      { h2: "Fii vizibil, dar nu te expune", p: ["Pornește avariile și poartă vesta dacă poți coborî în siguranță. Nu încerca să schimbi roata lângă traficul în mișcare sau într-un loc fără spațiu suficient."] },
      { h2: "Trimite poziția și sensul", p: ["Pe Centura Aradului ori pe A1 între Nădlac și Arad, trimite locația și sensul de mers. Un reper sau kilometrul drumului ne ajută să te găsim."] },
      { h2: "Confirmăm la telefon", p: ["Vulcanizare La Uly are atelier și deplasări la client non-stop. Îți spunem la telefon în cât timp ajungem și cât costă."] },
    ],
    cta: "Ai pană noaptea? Sună la 0746 538 480.",
    links: [
      { label: "Deplasare la client 24/24", to: "/servicii/asistenta-rutiera" },
      { label: "A1 Nădlac–Arad", to: "/zone/vulcanizare-mobila-a1-nadlac-arad" },
    ],
  },
  {
    slug: "roata-rezerva-galet",
    title: "Roata de rezervă tip galet: limite și verificări",
    keyword: "roată de rezervă galet",
    intent: "Informațional: folosirea temporară a rezervei.",
    desc: "Ce verifici înainte să folosești roata galet și de ce trebuie să respecți limitele stabilite de producător.",
    date: "2026-10-24",
    sections: [
      { h2: "Este o soluție temporară", p: ["Roata galet nu înlocuiește permanent o roată obișnuită. Respectă viteza, distanța și restricțiile din manual și de pe roată."] },
      { h2: "Verifică presiunea rezervei", p: ["Rezerva poate pierde aer chiar dacă nu e folosită. Verifică presiunea recomandată pentru ea, care poate fi diferită de cea a roților normale."] },
      { h2: "Rezolvă problema roții principale", p: ["Dacă ești în zona Pecica sau revii spre Arad, adu anvelopa deteriorată la verificat cât mai curând. Dacă montarea rezervei nu e sigură, cheamă-ne la tine."] },
    ],
    cta: "Ai nevoie de ajutor pentru roata principală? Sună la 0746 538 480.",
    links: [
      { label: "Reparație pană", to: "/servicii/reparatii-pe-loc" },
      { label: "Vulcanizare mobilă Pecica", to: "/zone/vulcanizare-mobila-pecica" },
    ],
  },
  {
    slug: "valva-anvelopa-pierde-aer",
    title: "Anvelopa pierde aer încet: valvă, perforație sau etanșare?",
    keyword: "anvelopa pierde aer",
    intent: "Diagnostic: găsirea cauzei unei pierderi de presiune.",
    desc: "Cauzele unei pierderi lente de aer și ce e bine să știi înainte să aduci roata la atelierul din Arad.",
    date: "2026-10-24",
    sections: [
      { h2: "Nu scoate obiectul găsit în anvelopă", p: ["Un cui sau un șurub poate produce o pierdere lentă. Dacă îl scoți, roata se poate dezumfla mai repede; adu-o întâi la verificat."] },
      { h2: "Valva și zona de contact cu janta", p: ["Aerul se poate pierde pe la valvă sau între anvelopă și jantă. Găsim locul exact înainte să alegem reparația."] },
      { h2: "Notează cât de repede scade presiunea", p: ["Spune-ne dacă pierderea apare în câteva ore sau în mai multe zile și dacă roata a primit o lovitură. Atelierul La Uly e în Grădiște, pe Calea Zimandului nr. 14."] },
    ],
    cta: "Pentru verificarea unei roți care pierde aer, sună la 0746 538 480.",
    links: [
      { label: "Atelier Arad", to: ZD },
      { label: "Reparație pană", to: "/servicii/reparatii-pe-loc" },
    ],
  },
  {
    slug: "adancime-profil-anvelope",
    title: "Adâncimea profilului: cum verifici uzura anvelopelor",
    keyword: "adâncime profil anvelope",
    intent: "Informațional: verificarea preventivă a uzurii.",
    desc: "Cum folosești indicatorii de uzură și de ce o anvelopă trebuie verificată în mai multe puncte.",
    date: "2026-10-24",
    sections: [
      { h2: "Caută indicatorii TWI", p: ["Indicatorii din canalele profilului arată când te apropii de limita de uzură. Pentru autoturisme, limita legală a adâncimii profilului este 1,6 mm."] },
      { h2: "Măsoară în mai multe locuri", p: ["O singură măsurătoare nu arată uzura de pe toată anvelopa. Compară marginea interioară, centrul și marginea exterioară, în mai multe puncte."] },
      { h2: "Gândește-te la drumurile ude", p: ["Profilul uzat evacuează mai greu apa. Înainte de un drum pe A1 între Nădlac și Arad, verifică și presiunea, fisurile sau umflăturile, nu doar profilul."] },
    ],
    cta: "Ai dubii despre starea anvelopelor? Sună la 0746 538 480.",
    links: [
      { label: "Atelier non-stop Arad", to: ZD },
      { label: "Schimb anvelope", to: "/servicii/montaj-domiciliu" },
    ],
  },
  {
    slug: "uzura-neuniforma-anvelope",
    title: "Uzura neuniformă a anvelopelor: ce poate indica",
    keyword: "uzură neuniformă anvelope",
    intent: "Diagnostic: înțelegerea tiparelor de uzură.",
    desc: "De ce uzura pe margini, pe centru sau pe o singură parte cere verificări diferite.",
    date: "2026-10-24",
    sections: [
      { h2: "Margini sau centru uzate", p: ["Presiunea greșită poate duce la uzură neuniformă. Compară presiunea la rece cu cea recomandată pentru mașină și pentru încărcarea obișnuită."] },
      { h2: "Uzură pe o singură parte", p: ["Poate avea legătură cu geometria roților. E nevoie de o verificare de specialitate; echilibrarea nu înlocuiește geometria."] },
      { h2: "Vibrațiile au mai multe cauze", p: ["Roțile neechilibrate sunt o cauză frecventă, dar o anvelopă deformată sau o jantă lovită trebuie verificate separat. La atelierul din Arad facem echilibrarea roților."] },
    ],
    cta: "Simți vibrații în mers? Sună la 0746 538 480 pentru echilibrare.",
    links: [
      { label: "Echilibrare roți", to: "/servicii/echilibrare-roti" },
      { label: "Atelier Arad", to: ZD },
    ],
  },
  {
    slug: "ce-sa-spui-cand-suni-la-vulcanizare",
    title: "Ce ne spui când chemi vulcanizarea mobilă",
    keyword: "vulcanizare mobilă Arad",
    intent: "Pregătirea apelului pentru o intervenție.",
    desc: "Locația, sensul de mers, dimensiunea anvelopei și câteva poze ne ajută să venim pregătiți oriunde în zona Aradului.",
    date: "2026-10-24",
    sections: [
      { h2: "Începe cu poziția exactă", p: ["Trimite locația pe WhatsApp. Pe DN79 spre Zimandu Nou sau Sântana, spune sensul de mers și un reper. Într-o localitate, spune strada și cum se ajunge la mașină."] },
      { h2: "Spune ce vehicul și ce anvelopă", p: ["Spune dacă e autoturism, utilitară sau camion. Citește dimensiunea de pe flanc și spune ce roată e afectată."] },
      { h2: "Arată problema și locul", p: ["O poză cu anvelopa și una cu locul din jurul mașinii ne ajută mult. Spune dacă ai rezervă și cheie antifurt. Prețul și timpul de sosire ți le confirmăm la telefon."] },
    ],
    cta: "Sună la 0746 538 480 sau trimite informațiile pe WhatsApp.",
    links: [
      { label: "Deplasare la client 24/24", to: "/servicii/asistenta-rutiera" },
      { label: "Zimandu Nou", to: ZG },
      { label: "Sântana", to: "/zone/vulcanizare-mobila-santana" },
    ],
  },
  {
    slug: "anvelope-utilaje-agricole-pana",
    title: "Pană la utilitară sau camion în zona Aradului: ce ne spui",
    keyword: "vulcanizare utilitare camioane Arad",
    intent: "Comercial: pregătirea unei intervenții pentru vehicule de lucru.",
    desc: "Ce trebuie să știm când o utilitară sau un camion face pană în Arad, spre Curtici ori pe A1 Nădlac–Arad.",
    date: "2026-10-24",
    sections: [
      { h2: "Vehiculul și roata", p: ["Spune tipul vehiculului, dimensiunea anvelopei și poziția roții afectate. La camion, spune dacă e o roată simplă sau o roată dublă."] },
      { h2: "Cum se ajunge la tine", p: ["Spre Curtici și Dorobanți, spune dacă ești pe DJ709B, într-o parcare sau într-o curte. Pe A1 între Nădlac și Arad, trimite poziția și sensul de mers."] },
      { h2: "Nu improviza ridicarea", p: ["Nu folosi cricuri nepotrivite pentru greutatea vehiculului. Trimite poze și confirmăm la telefon prețul și timpul de sosire."] },
    ],
    cta: "Pană la utilitară sau camion? Sună la 0746 538 480.",
    links: [
      { label: "Vulcanizare camioane", to: "/servicii/vulcanizare-camioane" },
      { label: "Vulcanizare mobilă Curtici", to: "/zone/vulcanizare-mobila-curtici" },
      { label: "A1 Nădlac–Arad", to: "/zone/vulcanizare-mobila-a1-nadlac-arad" },
    ],
  },
  {
    slug: "raza-acoperire-50-km",
    title: "Pe ce rază venim la tine: Arad și împrejurimi + A1 Nădlac–Arad",
    keyword: "vulcanizare mobilă raza de acoperire Arad",
    intent: "Informațional local: șoferul vrea să știe dacă ajungem la el.",
    desc: "Deplasări non-stop în Arad și localitățile din jur, pe o rază de aproximativ 50 km, plus A1 între Nădlac și Arad.",
    date: "2026-10-24",
    sections: [
      { h2: "Arad: atelier și deplasări", p: ["Atelierul e pe Calea Zimandului nr. 14, în Grădiște, lângă sensul giratoriu spre Oradea, la aproximativ 150 m de Centura Aradului. În oraș venim în Grădiște, Micălaca, Aurel Vlaicu, Centru, Gai, Bujac, Aradul Nou, Pârneava și Sânnicolau Mic."] },
      { h2: "Nord și nord-est", p: ["Pe DN79 spre Oradea: Zimandu Nou, Zimandcuz, Andrei Șaguna, Sântana, Caporal Alexa și Comlăuș. Spre Curtici: Șofronea și Sânpaul, apoi Curtici și Dorobanți. Livada și Sânleani sunt chiar la ieșirea de est din Grădiște."] },
      { h2: "Est și zona podgoriei", p: ["Pe DN7 spre Deva: Vladimirescu, Horia, Mândruloc și Cicir, apoi Ghioroc, Păuliș, Lipova și Zăbrani. Venim și în Șiria, Pâncota, Galșa și Covăsânț."] },
      { h2: "Sud și sud-est", p: ["Venim în Fântânele, Tisa Nouă și Frumușeni, precum și în Zădăreni, Felnac, Vinga și Mailat, pe DN69."] },
      { h2: "Vest și A1 Nădlac–Arad", p: ["Spre vest: Pecica, Turnu și Sederhat, pe DN7 spre Nădlac. Intervenim și pe A1 între Nădlac și Arad și pe Centura Aradului. Pe autostradă, spune-ne sensul de mers și poziția exactă."] },
      { h2: "Confirmarea se face la telefon", p: ["Raza e de aproximativ 50 km în jurul Aradului, plus A1 Nădlac–Arad. Trimite locația: îți spunem dacă ajungem, cât costă deplasarea și în cât timp suntem acolo."] },
    ],
    cta: "Verifică dacă ajungem la tine: sună la 0746 538 480 sau scrie pe WhatsApp.",
    links: [
      { label: "Atelier Arad", to: ZD },
      { label: "Zimandu Nou", to: ZG },
      { label: "A1 Nădlac–Arad", to: "/zone/vulcanizare-mobila-a1-nadlac-arad" },
      { label: "Deplasare la client 24/24", to: "/servicii/asistenta-rutiera" },
    ],
  },
];

import { localPosts } from "./blog-local";
import { localPosts2 } from "./blog-local-2";

export const posts: BlogPost[] = [...localPosts, ...localPosts2, ...basePosts].sort((a, b) => b.date.localeCompare(a.date));

export const postCategory = (p: BlogPost) => p.category ?? (p.area ? "Ghid local" : /pană|noaptea|spui/i.test(p.title) ? "Urgență" : "Sfaturi");
