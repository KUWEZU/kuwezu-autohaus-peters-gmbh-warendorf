/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-12T18:12:58.788Z
 * Kundennummer: 65
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Autohaus Peters GmbH",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "zuverlässige Autowerkstatt",
  adresse: "Waterstroate 22, 48231 Warendorf",
  telefon: "02581 7894670",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/kunden/65/logo.png",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#90c030",
    secondary: "#787878",
    accent: "#c0c0c0",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://r2.kuwezu.de/kunden/65/hero.webp",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre zuverlässige Autowerkstatt in Warendorf",
    ueberschriftHighlight: "zuverlässige Autowerkstatt",
    untertext: "Von Bremsen über Achsvermessung bis Autoglas – wir bringen Ihr Fahrzeug wieder sicher auf die Straße. Schnell, kompetent und fair.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/65/ueber-uns.webp",
    ueberschrift: "Autohaus Peters – Ihr Partner für Autowerkstatt in Warendorf",
    text1: "Als etablierte Autowerkstatt in Warendorf sind wir Ihre erste Adresse für alle Reparaturen und Services rund um Ihr Fahrzeug. Von präziser Achsvermessung über Bremsenwartung bis zum professionellen Autoglasservice – wir decken alle wichtigen Leistungen ab. Damit Sie bei uns keine Minute ohne Mobilität sind, stellen wir Ihnen bei Bedarf einen Ersatzwagen zur Verfügung.",
    text2: "Qualität, Termintreue und ehrliche Beratung sind für uns selbstverständlich. Wir nehmen uns Zeit für Ihre Anliegen und arbeiten mit moderner Technik sowie geschulten Fachkräften. Ihr Auto ist bei uns in guten Händen.",
    tags: ["Meisterbetrieb", "Ersatzwagen inklusive", "Moderne Diagnosetechnik", "Faire Preise"],
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
      description: "Von kleinen Steinschlägen bis zum kompletten Scheibentausch – wir reparieren und erneuern Ihr Autoglas fachgerecht. Schnelle Terminvergabe und direkte Abwicklung mit Ihrer Versicherung.",
      highlights: ["Steinschlagreparatur in 30 Minuten", "Scheibentausch aller Marken", "Versicherungsabwicklung inklusive"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Eine präzise Achsvermessung sorgt für optimalen Geradeauslauf, gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten. Mit modernster 3D-Technik vermessen wir Ihr Fahrzeug millimetergenau.",
      highlights: ["3D-Achsvermessung computergestützt", "Präzise Spureinstellung", "Reduziert Reifenverschleiß"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Bremsen sind das wichtigste Sicherheitssystem am Fahrzeug. Wir prüfen, warten und erneuern Bremsbeläge, Bremsscheiben und die komplette Bremsanlage – für maximale Sicherheit.",
      highlights: ["Bremsbeläge und Bremsscheiben", "Bremsenprüfung und Wartung", "Qualitätsteile aller Marken"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur kostengünstig einen Ersatzwagen zur Verfügung. Einfach bei Terminvereinbarung mitbuchen – wir kümmern uns um den Rest.",
      highlights: ["Günstige Tagespauschalen", "Gepflegte Fahrzeuge", "Sofort verfügbar bei Terminbuchung"],
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
