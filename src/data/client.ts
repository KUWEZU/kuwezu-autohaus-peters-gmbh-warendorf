/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-12T18:54:41.590Z
 * Kundennummer: 65
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Autohaus Peters GmbH",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "mit Herz",
  adresse: "Waterstroate 22, 48231 Warendorf",
  telefon: "02581 7894670",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/65/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#e30613",
    secondary: "#000000",
    accent: "#b1b2b3",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/65/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Herz",
    ueberschriftHighlight: "mit Herz",
    untertext: "Vom Autoglas bis zur Bremse – bei uns ist Ihr Fahrzeug in den besten Händen. Qualität und Service seit Jahren.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/65/ueber-uns.webp",
    ueberschrift: "Autohaus Peters – Ihre Werkstatt in Warendorf",
    text1: "Seit vielen Jahren ist das Autohaus Peters GmbH Ihr zuverlässiger Partner rund ums Auto in Warendorf. Von der professionellen Achsvermessung über Bremsenwartung bis zum Autoglasservice bieten wir Ihnen alle wichtigen Werkstattleistungen unter einem Dach. Unser erfahrenes Team kümmert sich um Ihr Fahrzeug, als wäre es unser eigenes.",
    text2: "Wir setzen auf ehrliche Beratung, transparente Preise und saubere Arbeit. Bei uns bekommen Sie nicht nur fachmännischen Service, sondern auch einen Ersatzwagen, damit Sie mobil bleiben. Vertrauen Sie auf unsere Kompetenz.",
    tags: ["Familiengeführt", "Erfahrenes Team", "Faire Preise", "Schneller Service"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Ob Steinschlag oder Riss – wir reparieren und tauschen Ihre Autoscheiben fachgerecht aus. Schnell, sauber und mit hochwertigen Materialien für klare Sicht und Ihre Sicherheit.",
      highlights: ["Steinschlagreparatur", "Scheibentausch", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit modernster Technik für optimalen Geradeauslauf und gleichmäßigen Reifenverschleiß. Wir stellen Ihre Spur exakt ein und sorgen für sicheres Fahrverhalten.",
      highlights: ["3D-Vermessungstechnik", "Spureinstellung", "Verschleißprävention"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Sicherheit liegt uns am Herzen. Wir prüfen, warten und erneuern Bremsanlagen aller Fabrikate – von Bremsbelägen über Bremsscheiben bis zur kompletten Bremsflüssigkeit.",
      highlights: ["Bremsbeläge & -scheiben", "Bremsflüssigkeitswechsel", "Alle Fahrzeugmarken"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie auch während der Reparatur mobil bleiben, stellen wir Ihnen gerne einen Ersatzwagen zur Verfügung. Unkompliziert und zu fairen Konditionen.",
      highlights: ["Sofort verfügbar", "Faire Tagespreise", "Unkomplizierte Abwicklung"],
    }
  ],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Fachkraft (m/w/d)",       type: "Vollzeit",   experience: "Berufserfahrung erwünscht"  },
      { title: "Auszubildende (m/w/d)",    type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: false as boolean,
  oeffnungszeiten: {
    mo_fr: "" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Nach Vereinbarung"],
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
