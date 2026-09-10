import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Platen-Platen-Diehl eGbR" },
      {
        name: "description",
        content:
          "Nehmen Sie unverbindlich Kontakt zu Platen-Platen-Diehl eGbR auf. Wir melden uns persönlich zu Ihrer Immobilie zurück.",
      },
      { property: "og:title", content: "Kontakt – Platen-Platen-Diehl eGbR" },
      {
        property: "og:description",
        content: "Unverbindliche Anfrage zu Ihrer Immobilie – persönliche Rückmeldung.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

const EMAIL = "platen-platen-diehl-gbr@gmx.de";

type Fields = {
  name: string;
  email: string;
  personType: string;
  propertyType: string;
  location: string;
  area: string;
  units: string;
  message: string;
};

const empty: Fields = {
  name: "",
  email: "",
  personType: "",
  propertyType: "",
  location: "",
  area: "",
  units: "",
  message: "",
};

function KontaktPage() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Bitte geben Sie Ihren Namen an.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    if (!values.personType) next.personType = "Bitte wählen Sie eine Angabe aus.";
    if (!values.propertyType) next.propertyType = "Bitte wählen Sie einen Immobilientyp aus.";
    if (values.location.trim().length < 2) next.location = "Bitte geben Sie den Standort an.";
    if (values.area.trim().length < 1) next.area = "Bitte geben Sie die Wohnfläche an.";
    if (values.message.trim().length < 10)
      next.message = "Bitte beschreiben Sie Ihr Anliegen mit mindestens 10 Zeichen.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Anfrage über die Website – ${values.name.trim()}`;
    const body = [
      `Name: ${values.name.trim()}`,
      `E-Mail: ${values.email.trim()}`,
      `Ich bin: ${values.personType}`,
      `Immobilientyp: ${values.propertyType}`,
      `Standort: ${values.location.trim()}`,
      `Wohnfläche: ${values.area.trim()}`,
      `Anzahl Wohneinheiten: ${values.units.trim() || "—"}`,
      "",
      "Nachricht:",
      values.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary";

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kontakt</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Sie haben eine Immobilie anzubieten?
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Sie sind Eigentümer oder Makler und möchten eine Wohnimmobilie im Rhein-Main-Gebiet
          anbieten? Wir freuen uns über Ihre Nachricht und prüfen Ihr Angebot gerne persönlich.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            <Mail className="h-4 w-4" aria-hidden="true" /> E-Mail schreiben
          </a>
          <a href="https://wa.me/4915258928141" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-input px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Über WhatsApp kontaktieren
          </a>
        </div>
      </div>

      <form onSubmit={onSubmit} noValidate className="mt-12 grid max-w-2xl gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Name *
            </label>
            <input id="name" className={field} value={values.name} onChange={set("name")} />
            {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              E-Mail *
            </label>
            <input
              id="email"
              type="email"
              className={field}
              value={values.email}
              onChange={set("email")}
            />
            {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="personType" className="text-sm font-medium text-foreground">
              Ich bin: *
            </label>
            <select id="personType" className={field} value={values.personType} onChange={set("personType")}>
              <option value="">Bitte auswählen</option>
              <option>Privater Eigentümer</option><option>Privater Vermieter</option>
              <option>Eigentümer eines Mehrfamilienhauses</option><option>Immobilienmakler</option><option>Sonstiges</option>
            </select>
            {errors.personType && <p className="mt-2 text-sm text-destructive">{errors.personType}</p>}
          </div>
          <div>
            <label htmlFor="propertyType" className="text-sm font-medium text-foreground">
              Immobilientyp: *
            </label>
            <select id="propertyType" className={field} value={values.propertyType} onChange={set("propertyType")}>
              <option value="">Bitte auswählen</option>
              <option>Eigentumswohnung</option><option>Mehrfamilienhaus</option><option>Sonstiges</option>
            </select>
            {errors.propertyType && <p className="mt-2 text-sm text-destructive">{errors.propertyType}</p>}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="location" className="text-sm font-medium text-foreground">Standort *</label>
            <input id="location" className={field} value={values.location} onChange={set("location")} />
            {errors.location && <p className="mt-2 text-sm text-destructive">{errors.location}</p>}
          </div>
          <div>
            <label htmlFor="area" className="text-sm font-medium text-foreground">Wohnfläche *</label>
            <input id="area" className={field} value={values.area} onChange={set("area")} placeholder="z. B. 85 m²" />
            {errors.area && <p className="mt-2 text-sm text-destructive">{errors.area}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="units" className="text-sm font-medium text-foreground">Anzahl Wohneinheiten (optional)</label>
          <input id="units" className={field} value={values.units} onChange={set("units")} />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Ihre Nachricht *
          </label>
          <textarea
            id="message"
            rows={6}
            className={field}
            value={values.message}
            onChange={set("message")}
          />
          {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
        </div>
        <p className="border-l-2 border-primary pl-4 text-sm font-medium leading-relaxed text-foreground">
          Sie können uns Ihr Exposé und weitere Unterlagen gerne direkt per E-Mail zukommen lassen.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            E-Mail vorbereiten
          </button>
          {sent && (
            <p className="text-sm text-muted-foreground">
              Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die Nachricht dort ab.
            </p>
          )}
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Es werden keine Daten auf dieser Website gespeichert oder übertragen. Die Angaben werden
          ausschließlich in eine E-Mail in Ihrem eigenen E-Mail-Programm übernommen.
        </p>
      </form>
    </div>
  );
}
