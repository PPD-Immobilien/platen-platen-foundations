import { Link } from "@tanstack/react-router";
import logo from "../assets/logo.jpg";

export function SiteFooter() {
  const sectionLinks = [
    { label: "Über uns", hash: "ueber-uns" },
    { label: "Unsere Strategie", hash: "strategie" },
    { label: "Was wir suchen", hash: "was-wir-suchen" },
    { label: "Ankaufprozess", hash: "ankaufprozess" },
    { label: "Kontakt", hash: "kontakt" },
  ] as const;

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Platen-Platen-Diehl eGbR"
            className="h-14 w-auto"
            width={466}
            height={330}
            loading="lazy"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Wir investieren langfristig in Wohnimmobilien und erhalten Bestehendes.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">Platen-Platen-Diehl eGbR</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {sectionLinks.map((item) => (
              <li key={item.hash}>
                <Link to="/" hash={item.hash} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
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
          <p className="mt-3 text-sm text-muted-foreground">
            WhatsApp Business<br />
            <a
              className="underline underline-offset-4 hover:text-foreground"
              href="https://wa.me/4915258928141"
              target="_blank"
              rel="noreferrer"
            >
              +49 152 58928141
            </a>
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
