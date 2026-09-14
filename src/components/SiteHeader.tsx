import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const nav = [
  { label: "Über uns", hash: "ueber-uns" },
  { label: "Unsere Strategie", hash: "strategie" },
  { label: "Was wir suchen", hash: "was-wir-suchen" },
  { label: "Ankaufprozess", hash: "ankaufprozess" },
  { label: "Gründer", hash: "gruender" },
  { label: "Kontakt", hash: "kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Platen-Platen-Diehl eGbR"
            className="h-12 w-auto md:h-14"
            width={466}
            height={330}
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
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
            Immobilie anbieten
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {nav.map((item) => (
              <Link
                key={item.hash}
                to="/"
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
              Immobilie anbieten
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
