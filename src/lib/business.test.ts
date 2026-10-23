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
