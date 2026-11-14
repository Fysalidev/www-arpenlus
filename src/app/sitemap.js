import { URL_SITE } from "@/lib/site";

// Plan du site : les pages publiques, rafraîchies à la date du
// build. Squelette de démarrage : accueil seul, à compléter au fil
// de la création des pages.
export default function sitemap() {
  return [""].map((chemin) => ({
    url: `${URL_SITE}${chemin}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
