import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – Platen-Platen-Diehl eGbR" },
      {
        name: "description",
        content: "Informationen zum Datenschutz auf der Website der Platen-Platen-Diehl eGbR.",
      },
      { property: "og:title", content: "Datenschutz – Platen-Platen-Diehl eGbR" },
      { property: "og:description", content: "Datenschutzhinweise der Platen-Platen-Diehl eGbR." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/datenschutz" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Datenschutzerklärung
      </h1>
      <div className="mt-6 rounded-sm border border-dashed border-border bg-secondary p-5 text-sm text-muted-foreground">
        Platzhalterseite: Der Text ist vor Veröffentlichung an die tatsächliche Nutzung und den
        Hosting-Anbieter anzupassen und rechtlich zu prüfen.
      </div>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-base font-semibold text-foreground">Verantwortlicher</h2>
          <p className="mt-3">
            Platen-Platen-Diehl eGbR, E-Mail:{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:platen-platen-diehl-gbr@gmx.de"
            >
              platen-platen-diehl-gbr@gmx.de
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Kontaktformular</h2>
          <p className="mt-3">
            Das Kontaktformular dieser Website überträgt keine Daten an einen Server. Die Eingaben
            werden ausschließlich lokal in Ihrem Browser in eine E-Mail übernommen, die Sie in Ihrem
            eigenen E-Mail-Programm selbst absenden. Erst mit dem Versand erhalten wir Ihre Angaben
            per E-Mail; wir verarbeiten sie zur Beantwortung Ihrer Anfrage (Art. 6 Abs. 1 lit. b und
            f DSGVO).
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Server-Logfiles</h2>
          <p className="mt-3">
            Beim Aufruf der Website können vom Webserver technisch notwendige Zugriffsdaten
            gespeichert werden (z. B. IP-Adresse, Datum und Uhrzeit, abgerufene Seite).
            [Speicherdauer und Hosting-Angaben ergänzen.]
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Cookies und Tracking</h2>
          <p className="mt-3">
            Diese Website setzt keine Cookies zu Analyse- oder Marketingzwecken ein und bindet keine
            externen Tracking-Dienste ein.
          </p>
        </section>
        <section>
          <h2 className="text-base font-semibold text-foreground">Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem steht Ihnen ein
            Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu.
          </p>
        </section>
      </div>
    </div>
  );
}
