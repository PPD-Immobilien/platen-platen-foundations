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
        Platzhalterseite: Die gesetzlich erforderlichen Angaben werden vor der Veröffentlichung ergänzt und rechtlich geprüft.
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Anbieter</h2>
          <p className="mt-3">Platen-Platen-Diehl eGbR</p>
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
          </p>
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
