import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-architektur.jpg";
import wohnhausImg from "../assets/wohnhaus.jpg";
import lukasFoto from "../assets/lukas.png.asset.json";
import danielPlatzhalter from "../assets/gruender-daniel.svg";
import lennartPlatzhalter from "../assets/gruender-lennart.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Platen-Platen-Diehl eGbR – Langfristig investieren. Werte erhalten." },
      {
        name: "description",
        content:
          "Wir investieren langfristig in Wohnimmobilien im Rhein-Main-Gebiet, halten sie im eigenen Bestand und entwickeln sie behutsam weiter.",
      },
      {
        property: "og:title",
        content: "Platen-Platen-Diehl eGbR – Langfristig investieren. Werte erhalten.",
      },
      {
        property: "og:description",
        content:
          "Langfristige Bestandshaltung von Wohnimmobilien im Rhein-Main-Gebiet – persönlich und verlässlich.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const gruender = [
  {
    img: lukasFoto.url,
    platzhalter: false,
    name: "Lukas Platen",
    role: "Ankauf und Objektauswahl",
    text: "Erster Ansprechpartner für Eigentümerinnen und Eigentümer und verantwortlich für die Einschätzung neuer Objekte.",
  },
  {
    img: danielPlatzhalter,
    platzhalter: true,
    datei: "src/assets/gruender-daniel.svg",
    name: "Daniel Platen",
    role: "Kaufmännische Steuerung und Finanzierung",
    text: "Verantwortlich für Kalkulation, Finanzierung und die Abstimmung mit Notariat und Banken.",
  },
  {
    img: lennartPlatzhalter,
    platzhalter: true,
    datei: "src/assets/gruender-lennart.svg",
    name: "Lennart Diehl",
    role: "Bestand und Objektentwicklung",
    text: "Begleitet die Objekte nach dem Ankauf: Instandhaltung, Vermietung und die behutsame Weiterentwicklung.",
  },
];

const strategie = [
  {
    t: "Langfristige Bestandshaltung",
    d: "Wir kaufen Immobilien für den eigenen Bestand und halten sie dauerhaft. Ein Weiterverkauf ist nicht unser Geschäftsmodell.",
  },
  {
    t: "Bestehendes erhalten",
    d: "Gewachsene Gebäude und gewachsene Nachbarschaften haben einen Wert. Wir pflegen die Substanz, statt sie auszutauschen.",
  },
  {
    t: "Nachhaltig entwickeln",
    d: "Wir verbessern unsere Objekte Schritt für Schritt – energetisch und baulich, in einem Tempo, das zum Haus und zu den Mietverhältnissen passt.",
  },
  {
    t: "Persönlicher Umgang",
    d: "Mit Eigentümerinnen, Eigentümern und Mietparteien sprechen immer dieselben Personen. Verlässlich, ruhig und auf Augenhöhe.",
  },
];

const wohnungen = [
  "Rhein-Main-Gebiet",
  "gute Mikrolage",
  "sofort vermietbar",
  "leichte Renovierungen möglich",
  "energetischer Sanierungsbedarf ausdrücklich interessant",
];

const mehrfamilienhaeuser = [
  "Rhein-Main-Gebiet",
  "sofort vermietbar",
  "leichte Renovierungen möglich",
  "energetischer Sanierungsbedarf ausdrücklich interessant",
  "umfassende Renovierungen möglich, aber nicht unser Schwerpunkt",
];

const ablauf = [
  {
    n: "01",
    t: "Erstes Gespräch",
    d: "Sie schildern uns Ihre Immobilie und Ihre Vorstellungen – telefonisch oder per E-Mail. Unverbindlich.",
  },
  {
    n: "02",
    t: "Objekt ansehen",
    d: "Wir sehen uns die Immobilie an und sichten gemeinsam die vorhandenen Unterlagen.",
  },
  {
    n: "03",
    t: "Angebot",
    d: "Sie erhalten ein nachvollziehbar hergeleitetes Kaufangebot ohne zeitlichen Druck.",
  },
  {
    n: "04",
    t: "Notartermin",
    d: "Wir übernehmen die Abstimmung mit dem Notariat und begleiten Sie bis zur Übergabe.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Platen-Platen-Diehl eGbR
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              Langfristig investieren. Werte erhalten.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Wir sind eine private Investorengemeinschaft und erwerben Wohnimmobilien im
              Rhein-Main-Gebiet für den eigenen langfristigen Bestand.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Was wir kaufen, halten wir: Wir pflegen die Substanz, entwickeln sie behutsam weiter
              und bleiben für alle Beteiligten persönlich ansprechbar.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Immobilie anbieten
              </Link>
              <Link
                to="/"
                hash="ueber-uns"
                className="rounded-sm border border-input px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Mehr über uns
              </Link>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Fassade eines Mehrfamilienhauses in ruhiger Wohnlage"
            width={1600}
            height={1008}
            className="h-full w-full rounded-sm object-cover"
          />
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Über uns</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Drei Freunde. Eine gemeinsame Vision.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Uns verbindet eine lange Freundschaft und die gemeinsame Überzeugung, dass
              Wohnimmobilien mehr sind als eine Anlageklasse. Aus dieser Überzeugung ist die
              Platen-Platen-Diehl eGbR entstanden.
            </p>
            <p>
              Wir investieren mit eigenem Kapital und einem langen Zeithorizont. Statt kurzfristiger
              Renditeziele steht für uns im Vordergrund, Gebäude in gutem Zustand zu halten und
              Mietverhältnisse verlässlich fortzuführen.
            </p>
            <p>
              Entscheidungen treffen wir gemeinsam und persönlich. Wer mit uns spricht, spricht
              direkt mit den Menschen, die auch nach dem Ankauf verantwortlich bleiben.
            </p>
          </div>
        </div>
      </section>

      {/* Strategie */}
      <section id="strategie" className="scroll-mt-24 border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Unsere Strategie
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Wir denken langfristig.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {strategie.map((s) => (
              <div key={s.t} className="rounded-sm border border-border bg-background p-7">
                <h3 className="text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was wir suchen */}
      <section id="was-wir-suchen" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Was wir suchen
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">
            Welche Immobilien zu uns passen
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Wir konzentrieren uns auf Wohnimmobilien im Rhein-Main-Gebiet. Die folgenden Kriterien
            geben Ihnen eine Orientierung, welche Objekte für uns in Frage kommen.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-border bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Eigentumswohnungen</h3>
              <p className="mt-2 text-sm text-primary">ca. 50–100 m²</p>
              <ul className="mt-6 space-y-3">
                {wohnungen.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Auch abweichende Größen können interessant sein.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">Mehrfamilienhäuser</h3>
              <p className="mt-2 text-sm text-primary">Schwerpunkt 3–8 Wohneinheiten</p>
              <ul className="mt-6 space-y-3">
                {mehrfamilienhaeuser.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Auch Objekte mit bis zu 12 Wohneinheiten können passen.
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Der Kaufpreis richtet sich nach Lage, Zustand und Ertrag des jeweiligen Objekts und wird
            individuell ermittelt.
          </p>
        </div>
      </section>

      {/* Ankaufprozess */}
      <section id="ankaufprozess" className="scroll-mt-24 border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Ankaufprozess
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                Vier Schritte, in Ruhe abgestimmt
              </h2>
              <ol className="mt-10 space-y-8">
                {ablauf.map((s) => (
                  <li key={s.n} className="flex gap-6">
                    <span className="pt-1 text-sm font-semibold tabular-nums text-primary">
                      {s.n}
                    </span>
                    <div className="w-full border-b border-border pb-6">
                      <h3 className="text-base font-semibold text-foreground">{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <img
              src={wohnhausImg}
              alt="Ruhige Wohnstraße mit Wohnhäusern"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gründer */}
      <section id="gruender" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Gründer</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Die Menschen hinter der GbR
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Hinter der Platen-Platen-Diehl eGbR stehen drei Personen, die gemeinsam entscheiden und
            gemeinsam Verantwortung tragen – vom ersten Gespräch bis weit über den Ankauf hinaus.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gruender.map((g) => (
              <article key={g.name} className="rounded-sm border border-border bg-background p-5">
                <img
                  src={g.img}
                  alt={
                    g.platzhalter
                      ? `Foto-Platzhalter für ${g.name} – bitte durch echtes Foto ersetzen`
                      : `Porträtfoto von ${g.name}`
                  }
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-sm bg-secondary object-cover"
                />
                {g.platzhalter && (
                  <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                    Platzhalter · Datei ersetzen: {g.datei}
                  </p>
                )}
                <h3 className="mt-3 text-base font-semibold text-foreground">{g.name}</h3>
                <p className="text-sm text-primary">{g.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt-Abschnitt */}
      <section id="kontakt" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-sm border border-border bg-primary px-8 py-14 text-primary-foreground md:px-14">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              Erzählen Sie uns von Ihrer Immobilie
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
              Ein kurzer Hinweis genügt. Wir melden uns persönlich und sagen Ihnen offen, ob und wie
              wir weitermachen können.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/kontakt"
                className="rounded-sm bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Immobilie anbieten
              </Link>
              <a
                href="mailto:platen-platen-diehl-gbr@gmx.de"
                className="text-sm text-primary-foreground/90 underline underline-offset-4"
              >
                platen-platen-diehl-gbr@gmx.de
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
