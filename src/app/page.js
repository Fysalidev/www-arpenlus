// Accueil (session du 14/11) : page noire — titre ARPENLUS en Anton,
// carré centré rempli du motif zébré, paragraphe sous le carré.
export default function Accueil() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="texte-zebre font-display text-6xl tracking-tight uppercase sm:text-8xl">
        ARPENLUS
      </h1>
      <div
        className="zebre mt-12 aspect-square w-56 sm:w-72"
        role="img"
        aria-label="Carré à motif zébré"
      />
      <p className="mt-12 max-w-xl text-lg text-stone-300">
        Joyeux anniversaire Arthure, bon pour 2 sites sur mesure :
        www.arpenlus.fr pour le groupe et www.arthurgrimpepartout.com quand tu
        auras décidé de travailler.
      </p>
    </main>
  );
}
