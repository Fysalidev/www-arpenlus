// URL publique du site et constantes partagées : base unique des
// URLs absolues (metadata, sitemap, robots). En production la
// variable d'environnement prime, sinon le domaine stable du projet
// Vercel (VERCEL_PROJECT_PRODUCTION_URL) — préférable à
// NEXT_PUBLIC_VERCEL_URL, qui change à chaque déploiement — et
// localhost en développement. À la mise en production : définir
// NEXT_PUBLIC_SITE_URL = https://www.arpenlus.fr dans les variables
// d'environnement Vercel.
export const URL_SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000");

// Constantes du site : squelette de démarrage (14/11/2026) — à
// compléter avec le contenu réel du client (activité, coordonnées,
// réseaux) au fil du projet.
export const NOM = "Arpenlus";
export const DESCRIPTION = "Site officiel d'Arpenlus.";
