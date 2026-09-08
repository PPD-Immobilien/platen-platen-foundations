import { useState } from "react";
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
  phone: string;
  object: string;
  message: string;
};

const empty: Fields = { name: "", email: "", phone: "", object: "", message: "" };

function KontaktPage() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Bitte geben Sie Ihren Namen an.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
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
      `Telefon: ${values.phone.trim() || "—"}`,
      `Objekt / Adresse: ${values.object.trim() || "—"}`,
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
          Sprechen Sie uns an
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Schreiben Sie uns kurz, worum es geht. Wir melden uns persönlich zurück – unverbindlich
          und ohne Verkaufsdruck. Das Formular öffnet Ihr E-Mail-Programm mit einer vorbereiteten
          Nachricht an{" "}
          <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          .
        </p>
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
            <label htmlFor="phone" className="text-sm font-medium text-foreground">
              Telefon (optional)
            </label>
            <input id="phone" className={field} value={values.phone} onChange={set("phone")} />
          </div>
          <div>
            <label htmlFor="object" className="text-sm font-medium text-foreground">
              Objekt / Ort (optional)
            </label>
            <input id="object" className={field} value={values.object} onChange={set("object")} />
          </div>
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
