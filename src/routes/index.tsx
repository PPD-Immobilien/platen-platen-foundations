import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-architektur.jpg";
import wohnhausImg from "../assets/wohnhaus.jpg";
import gruender1 from "../assets/gruender-1.svg";
import gruender2 from "../assets/gruender-2.svg";
import gruender3 from "../assets/gruender-3.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Platen-Platen-Diehl eGbR – Immobilienankauf mit Ruhe und Verlässlichkeit" },
      {
        name: "description",
        content:
          "Wir kaufen Wohnimmobilien direkt und dauerhaft: persönlich, diskret und ohne Verkaufsdruck. Erfahren Sie mehr über unser Ankaufsprofil und den Ablauf.",
      },
      {
        property: "og:title",
        content: "Platen-Platen-Diehl eGbR – Immobilienankauf mit Ruhe und Verlässlichkeit",
      },
      {
        property: "og:description",
        content:
          "Direkter Ankauf von Wohnimmobilien – persönlich, diskret und ohne Verkaufsdruck.",
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
    img: gruender1,
    name: "[Vorname Nachname]",
    role: "Gesellschafter",
    text: "Verantwortlich für die erste Einschätzung und den persönlichen Kontakt zu Eigentümerinnen und Eigentümern.",
  },
  {
    img: gruender2,
    name: "[Vorname Nachname]",
    role: "Gesellschafter",
    text: "Kümmert sich um Bewertung, Unterlagen und die Abstimmung mit Notariat und Behörden.",
  },
  {
    img: gruender3,
    name: "[Vorname Nachname]",
    role: "Gesellschafter",
    text: "Begleitet die Objekte nach dem Ankauf: Instandhaltung, Vermietung und langfristiger Erhalt.",
  },
];

const profil = [
  {
    t: "Ein- und Mehrfamilienhäuser",
    d: "Bestandsobjekte, auch mit Renovierungsstau oder unklarer Nutzung.",
  },
  {
    t: "Eigentumswohnungen",
    d: "Vermietet oder frei, gerne auch kleinere Einheiten in einfachen Lagen.",
  },
  {
    t: "Erbengemeinschaften",
    d: "Wir sprechen mit allen Beteiligten und lassen die nötige Zeit für Entscheidungen.",
  },
  {
    t: "Besondere Situationen",
    d: "Wohnrecht, Nießbrauch, laufende Mietverhältnisse oder Sanierungsbedarf.",
  },
];

const ablauf = [
  { n: "01", t: "Erstes Gespräch", d: "Sie schildern uns Ihre Situation – telefonisch oder per E-Mail. Unverbindlich." },
  { n: "02", t: "Objekt ansehen", d: "Wir sehen uns die Immobilie an und sichten gemeinsam die vorhandenen Unterlagen." },
  { n: "03", t: "Angebot", d: "Sie erhalten ein nachvollziehbar hergeleitetes Kaufangebot ohne zeitlichen Druck." },
  { n: "04", t: "Notartermin", d: "Wir übernehmen die Abstimmung mit dem Notariat und begleiten Sie bis zur Übergabe." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Immobilienankauf
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              Wir kaufen Ihre Immobilie – in Ruhe und auf Augenhöhe.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Die Platen-Platen-Diehl eGbR erwirbt Wohnimmobilien für den eigenen Bestand. Kein
              Maklerauftrag, keine Besichtigungstermine mit Fremden, keine Provision. Nur ein
              Gespräch, ein klares Angebot und ein verlässlicher Ablauf.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Unverbindlich anfragen
              </Link>
              <Link
                to="/"
                hash="ablauf"
                className="rounded-sm border border-input px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                So läuft es ab
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
              Drei Personen, ein langfristiger Bestand
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Wir sind eine kleine Gesellschaft aus drei Gesellschaftern. Wir kaufen Wohnimmobilien
              nicht, um sie kurzfristig weiterzuverkaufen, sondern um sie zu halten, instand zu
              halten und weiterhin zu vermieten.
            </p>
            <p>
              Das prägt, wie wir arbeiten: Wir hören zuerst zu, wir rechnen offen, und wir sagen
              auch ab, wenn ein Objekt nicht zu uns passt. Eigentümerinnen und Eigentümer sprechen
              bei uns immer mit denselben Ansprechpartnern – von der ersten Nachricht bis zum
              Notartermin.
            </p>
            <p>
              Wir arbeiten diskret. Es gibt keine Exposés, keine öffentlichen Inserate und keine
              Besichtigungen mit fremden Interessenten.
            </p>
          </div>
        </div>
      </section>

      {/* Ankaufsprofil */}
      <section id="ankaufsprofil" className="scroll-mt-24 border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ankaufsprofil</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-foreground">
            Was wir kaufen
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {profil.map((p) => (
              <div key={p.t} className="rounded-sm border border-border bg-background p-7">
                <h3 className="text-base font-semibold text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Sie sind unsicher, ob Ihre Immobilie passt? Fragen Sie einfach nach – eine kurze
            Einschätzung kostet Sie nichts.
          </p>
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ablauf</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                Vier Schritte, kein Druck
              </h2>
              <ol className="mt-10 space-y-8">
                {ablauf.map((s) => (
                  <li key={s.n} className="flex gap-6">
                    <span className="pt-1 text-sm font-semibold tabular-nums text-primary">
                      {s.n}
                    </span>
                    <div className="border-b border-border pb-6">
                      <h3 className="text-base font-semibold text-foreground">{s.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <img
              src={wohnhausImg}
              alt="Ruhige Wohnstraße mit Einfamilienhäusern"
              width={1200}
              height={912}
              loading="lazy"
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gründer */}
      <section id="gruender" className="scroll-mt-24 border-b border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Gründer</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Die Menschen hinter der Gesellschaft
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gruender.map((g, i) => (
              <article key={i} className="rounded-sm border border-border bg-background p-5">
                <img
                  src={g.img}
                  alt={`Foto-Platzhalter für Gründer ${i + 1} – bitte durch echtes Foto ersetzen`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full rounded-sm object-cover"
                />
                <p className="mt-4 text-[11px] uppercase tracking-wider text-muted-foreground">
                  Platzhalter · Datei ersetzen: src/assets/gruender-{i + 1}.svg
                </p>
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
              Ein kurzer Hinweis genügt. Wir melden uns persönlich und sagen Ihnen ehrlich, ob und
              wie wir weitermachen können.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                to="/kontakt"
                className="rounded-sm bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Zum Kontaktformular
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
