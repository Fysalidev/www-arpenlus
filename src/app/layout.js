import { DESCRIPTION, NOM, URL_SITE } from "@/lib/site";
import "./globals.css";

// Métadonnées mère : titre (gabarit « Page — Arpenlus » pour les
// pages filles), description et Open Graph. Les pages filles
// n'ont plus qu'à donner leur titre court ; l'openGraph d'une page
// remplace celui du layout, il ne fusionne pas.
export const metadata = {
  metadataBase: new URL(URL_SITE),
  title: {
    default: `${NOM} — Site officiel`,
    template: `%s — ${NOM}`,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: NOM,
    title: `${NOM} — Site officiel`,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only z-60 focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
        >
          Aller au contenu
        </a>
        <div
          id="contenu"
          tabIndex={-1}
          className="flex w-full flex-1 flex-col focus:outline-none"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
