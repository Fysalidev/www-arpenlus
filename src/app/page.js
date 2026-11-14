// Accueil : page vœux d'anniversaire pour Arthur — deux sites sur
// mesure offerts, dont celui-ci (mise en ligne dimanche soir). Le
// contenu du site Arpenlus prendra cette page en base plus tard.
// Fond zèbre : classe fond-zebre (globals.css), filigrane plein
// page derrière le texte.
const INTRO = "Bon pour 2 sites sur mesure\u00A0:";
const LIGNE_1 =
  "www.arthurgrimpepartout.fr quand tu auras décidé de travailler 🤭";
const LIGNE_2 =
  "et un site www.arpenlus.fr qu'on peut mettre en ligne dimanche soir 🚀";

export default function Accueil() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div aria-hidden="true" className="fond-zebre" />
      <p className="text-5xl" aria-hidden="true">
        🍌
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        JOYEUX Anniversaire ARTHUR
      </h1>
      <div className="mt-10 max-w-xl space-y-2 text-lg text-stone-600">
        <p>{INTRO}</p>
        <p>{LIGNE_1}</p>
        <p>{LIGNE_2}</p>
      </div>
    </main>
  );
}
