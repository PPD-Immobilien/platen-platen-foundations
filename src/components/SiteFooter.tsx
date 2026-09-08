import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-foreground">Platen-Platen-Diehl eGbR</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Wir kaufen Wohnimmobilien – persönlich, ruhig und verlässlich.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Kontakt</p>
          <p className="mt-3 text-sm text-muted-foreground">
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="mailto:platen-platen-diehl-gbr@gmx.de"
            >
              platen-platen-diehl-gbr@gmx.de
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Postanschrift und Telefonnummer werden ergänzt.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Rechtliches</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/impressum" className="hover:text-foreground">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:text-foreground">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Platen-Platen-Diehl eGbR
        </p>
      </div>
    </footer>
  );
}
