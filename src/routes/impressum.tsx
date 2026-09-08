import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Platen-Platen-Diehl eGbR" },
      {
        name: "description",
        content: "Impressum und Anbieterkennzeichnung der Platen-Platen-Diehl eGbR.",
      },
      { property: "og:title", content: "Impressum – Platen-Platen-Diehl eGbR" },
      { property: "og:description", content: "Anbieterkennzeichnung der Platen-Platen-Diehl eGbR." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/impressum" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">Impressum</h1>
      <div className="mt-6 rounded-sm border border-dashed border-border bg-secondary p-5 text-sm text-muted-foreground">
        Platzhalterseite: Die folgenden Angaben sind noch zu ergänzen bzw. rechtlich zu prüfen.
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            Platen-Platen-Diehl eGbR
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ Ort]
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Vertreten durch</h2>
          <p className="mt-3">
            [Vorname Nachname], [Vorname Nachname], [Vorname Nachname] – Gesellschafter
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Kontakt</h2>
          <p className="mt-3">
            E-Mail:{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:platen-platen-diehl-gbr@gmx.de"
            >
              platen-platen-diehl-gbr@gmx.de
            </a>
            <br />
            Telefon: [Telefonnummer]
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Registereintrag</h2>
          <p className="mt-3">
            Gesellschaftsregister: [Registergericht]
            <br />
            Registernummer: [GsR-Nummer]
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Umsatzsteuer-ID</h2>
          <p className="mt-3">[USt-IdNr. gemäß § 27a UStG, falls vorhanden]</p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Streitbeilegung</h2>
          <p className="mt-3">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
