// Accueil : page vœux d'anniversaire pour Arthur — deux sites sur
// mesure offerts, dont celui-ci (mise en ligne dimanche soir). Le
// contenu du site Arpenlus prendra cette page en base plus tard.
const INTRO = "Bon pour 2 sites sur mesure\u00A0:";
const LIGNE_1 =
  "www.arthurgrimpepartout.fr quand tu auras décidé de travailler 🤭";
const LIGNE_2 =
  "et un site www.arpenlus.fr en attendant qu'on peut mettre en ligne dimanche soir 🚀";

export default function Accueil() {
  return (
    <main className="fond-zebre relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="apparition text-5xl" aria-hidden="true">
        🍌
      </p>
      <h1 className="apparition apparition-2 halo-blanc mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        JOYEUX Anniversaire ARTHUR
      </h1>
      <div className="apparition apparition-3 bulle relative mt-10 max-w-xl space-y-2 rounded-3xl bg-white px-8 py-6 text-lg text-stone-600 shadow-lg">
        <p>{INTRO}</p>
        <p>{LIGNE_1}</p>
        <p>{LIGNE_2}</p>
      </div>
    </main>
  );
}
