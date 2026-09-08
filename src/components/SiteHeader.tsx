import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Über uns", to: "/", hash: "ueber-uns" },
  { label: "Ankaufsprofil", to: "/", hash: "ankaufsprofil" },
  { label: "Ablauf", to: "/", hash: "ablauf" },
  { label: "Gründer", to: "/", hash: "gruender" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* Logo-Platzhalter: hier später echtes Logo einsetzen */}
          <span
            aria-label="Logo-Platzhalter"
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary/25 bg-primary text-xs font-semibold tracking-widest text-primary-foreground"
          >
            PPD
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-foreground">
              Platen-Platen-Diehl eGbR
            </span>
            <span className="block text-xs text-muted-foreground">Immobilienankauf</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to={item.to}
              hash={item.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {nav.map((item) => (
              <Link
                key={item.hash}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="my-4 rounded-sm bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
