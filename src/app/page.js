// Accueil (session du 14/11) : page noire — titre ARPENLUS en Anton
// blanc uni, grand carré centré rempli du motif zébré tourné 45° sur
// toute sa surface, puis « 2026 » et le paragraphe.
export default function Accueil() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-6xl tracking-tight uppercase sm:text-8xl">
        ARPENLUS
      </h1>
      <div
        className="zebre mt-12 aspect-square w-full max-w-xl"
        role="img"
        aria-label="Carré à motif zébré"
      />
      <p className="font-display mt-12 text-5xl tracking-tight sm:text-7xl">
        2026
      </p>
      <p className="mt-6 max-w-xl text-lg text-stone-300">
        Joyeux anniversaire Arthur, bon pour 2 sites sur mesure :
        www.arpenlus.fr pour le groupe et www.arthurgrimpepartout.com quand tu
        auras décidé de travailler.
      </p>
    </main>
  );
}
