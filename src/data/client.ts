/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-12T18:02:49.107Z
 * Kundennummer: 65
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Autohaus Peters GmbH",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "Rundum-Service",
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
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Rundum-Service",
    ueberschriftHighlight: "Rundum-Service",
    untertext: "Von Autoglasreparatur bis Achsvermessung – wir halten Ihr Fahrzeug sicher auf Kurs. Kompetent, zuverlässig und mit kostenlosem Ersatzwagen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://r2.kuwezu.de/kunden/65/ueber-uns.webp",
    ueberschrift: "Ihre verlässliche Autowerkstatt im Herzen von Warendorf",
    text1: "Das Autohaus Peters GmbH ist Ihr kompetenter Partner für alle Belange rund um Ihr Fahrzeug. Mit modernster Technik und erfahrenen Kfz-Mechanikern kümmern wir uns um Reparaturen, Wartungen und Sicherheitschecks. Ob Autoglas, Bremsen oder präzise Achsvermessung – wir arbeiten herstellerübergreifend und legen größten Wert auf Qualität.",
    text2: "Bei uns wird Ihr Auto nicht einfach nur repariert – wir nehmen uns Zeit für eine ehrliche Beratung und transparente Kostenvoranschläge. Damit Sie mobil bleiben, stellen wir Ihnen während der Reparatur gerne einen Ersatzwagen zur Verfügung.",
    tags: ["Meisterbetrieb", "Ersatzwagen kostenlos", "Alle Fabrikate", "Faire Preise"],
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
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren und tauschen Autoglas aller Hersteller fachgerecht aus. Schnell, sauber und mit direkter Abrechnung über Ihre Versicherung.",
      highlights: ["Steinschlagreparatur", "Scheibentausch alle Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Mit modernster 3D-Messtechnik vermessen wir Ihre Achsen millimetergenau. Das sorgt für optimales Fahrverhalten, gleichmäßigen Reifenverschleiß und mehr Sicherheit auf der Straße.",
      highlights: ["3D-Achsvermessung", "Spur- und Sturzeinstellung", "Reifenverschleiß minimieren"],
    },
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Ihre Bremsen sind das wichtigste Sicherheitssystem am Fahrzeug. Wir prüfen, warten und erneuern Bremsbeläge, Bremsscheiben und die komplette Bremsanlage mit Originalteilen oder hochwertigen Alternativen.",
      highlights: ["Bremsbeläge & Scheiben", "Bremsflüssigkeitswechsel", "Bremsenprüfung"],
    },
    {
      slug: "ersatzwagen",
      title: "Ersatzwagen",
      bild: "https://r2.kuwezu.de/bibliothek/Ersatzwagen/1777882571137-ersatzwagen_auto.webp",
      description: "Damit Sie während der Reparatur mobil bleiben, stellen wir Ihnen gerne einen Ersatzwagen zur Verfügung. Einfach bei der Terminvereinbarung anfragen – so bleiben Sie flexibel im Alltag.",
      highlights: ["Kostenlose Leihwagen", "Spontan verfügbar", "Mobilität garantiert"],
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
    mo_fr: "08:00 – 19:00" as string,
    sa:    "08:00 – 15:00" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 08:00 – 19:00", "Sa: 08:00 – 15:00"],
  },
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
