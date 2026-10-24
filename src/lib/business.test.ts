import { describe, expect, test } from "vitest";
import { ADDRESS, BRAND, COMPANY, PHONE, PHONE2, PRICES, TEL, TEL2, WA, WA_NUMBER, faqs, services } from "./site-data";

describe("Vulcanizare La Uly — date de contact", () => {
  test("numele comercial este Vulcanizare La Uly", () => {
    expect(BRAND).toBe("Vulcanizare La Uly");
  });
  test("firma este AUTOZIAN G&G SRL", () => {
    expect(COMPANY.name).toBe("AUTOZIAN G&G SRL");
  });
  test("telefonul principal este 0746 538 480", () => {
    expect(PHONE.replaceAll(" ", "")).toBe("0746538480");
    expect(TEL).toBe("+40746538480");
  });
  test("al doilea telefon este 0746 765 469", () => {
    expect(PHONE2.replaceAll(" ", "")).toBe("0746765469");
    expect(TEL2).toBe("+40746765469");
  });
  test("WhatsApp folosește numărul principal", () => {
    expect(WA_NUMBER).toBe("40746538480");
    expect(new URL(WA).pathname).toBe("/40746538480");
  });
  test("adresa este Calea Zimandului nr. 14, Grădiște, Arad", () => {
    expect(ADDRESS).toBe("Calea Zimandului nr. 14, Grădiște, Arad");
  });
});

describe("prețuri schimb 4 anvelope cu echilibrare", () => {
  test("jante oțel: 160 RON", () => {
    expect(PRICES.steel).toBe("160 RON");
  });
  test("jante aluminiu: 180 RON", () => {
    expect(PRICES.alloy).toBe("180 RON");
  });
  test("pagina de schimb anvelope arată ambele prețuri", () => {
    const tire = services.find((s) => s.slug === "montaj-domiciliu");
    expect(tire?.pricing?.map((p) => p.value)).toEqual(["160 RON", "180 RON"]);
  });
  test("program non-stop", () => {
    expect(JSON.stringify(faqs)).toMatch(/non-stop, 24\/24/);
  });
});

import { COVERAGE, zones, zoneRedirects } from "./site-data";
import { posts } from "./blog-data";

describe("zone deservite: Arad și împrejurimi", () => {
  test("acoperirea este Arad + A1 Nădlac – Arad", () => {
    expect(COVERAGE.county).toBe("Arad");
    expect(COVERAGE.highwayFrom).toMatch(/Nădlac/);
    expect(COVERAGE.highwayTo).toBe("Arad");
  });
  test("prima zonă este atelierul din Arad", () => {
    expect(zones[0]!.slug).toBe("vulcanizare-non-stop-arad");
    expect(zones[0]!.km).toBe(0);
  });
  test("vechile pagini din Timișoara duc spre Arad", () => {
    expect(zoneRedirects["vulcanizare-non-stop-timisoara"]).toBe("/zone/vulcanizare-non-stop-arad");
  });
  test("niciun articol sau zonă nu mai are numărul vechi 0725 138 493", () => {
    expect(JSON.stringify({ zones, posts })).not.toMatch(/0725/);
  });
  test("fiecare articol local aparține unei zone existente", () => {
    const slugs = new Set(zones.map((z) => z.slug));
    for (const p of posts) if (p.area) expect(slugs.has(p.area)).toBe(true);
    for (const p of posts) for (const l of p.links.filter((x) => x.to.startsWith("/zone/"))) expect(slugs.has(l.to.slice(6))).toBe(true);
  });
});

import { MAPS, EMAIL } from "./site-data";
describe("profiluri publice", () => {
  test("butonul Locație duce la profilul Google trimis de proprietar", () => {
    expect(MAPS).toBe("https://share.google/cb4eBtqPmz10uTivD");
  });
  test("e-mailul firmei este autoziangg@yahoo.com", () => {
    expect(EMAIL).toBe("autoziangg@yahoo.com");
  });
  test("se oferă și vânzare de anvelope", () => {
    expect(services.some((s) => s.slug === "vanzare-anvelope")).toBe(true);
  });
});

describe("pagini unice pentru Google", () => {
  test("fiecare zonă are adresă (slug) unică", () => {
    expect(new Set(zones.map((z) => z.slug)).size).toBe(zones.length);
  });
  test("fiecare articol are adresă (slug) unică", () => {
    expect(new Set(posts.map((p) => p.slug)).size).toBe(posts.length);
  });
  test("fiecare zonă are titlu și descriere proprii", () => {
    expect(new Set(zones.map((z) => z.metaTitle)).size).toBe(zones.length);
    expect(new Set(zones.map((z) => z.metaDesc)).size).toBe(zones.length);
  });
  test("cel puțin 20 de zone deservite", () => {
    expect(zones.length).toBeGreaterThanOrEqual(20);
  });
});
