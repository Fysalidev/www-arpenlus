import { INSTAGRAM, MAIL, TELEPHONE, WHATSAPP } from "@/lib/site";

// Accueil (session du 14/11) : page noire — titre ARPENLUS en Anton
// blanc uni, grand carré centré rempli du motif zébré, « 2026 »,
// paragraphe, puis icônes contact (téléphone, mail, Instagram,
// WhatsApp). Apparition rapide en cascade à l'arrivée (globals.css).

// Icônes SVG en ligne (pas de librairie d'icônes) : téléphone, mail et
// Instagram en style Feather (contour), WhatsApp en remplissage
// (simple-icons). Toutes en `currentColor`.
const CLASSE_ICONE = "h-6 w-6";

function IconeContact({ label, href, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="rounded-full border border-stone-700 p-3 text-white transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}

export default function Accueil() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="apparition font-display text-6xl tracking-tight uppercase sm:text-8xl">
        ARPENLUS
      </h1>
      <div
        className="pop-carre delai-1 zebre mt-12 aspect-square w-full max-w-xl"
        role="img"
        aria-label="Carré à motif zébré"
      />
      <p className="apparition delai-2 font-display mt-12 text-5xl tracking-tight sm:text-7xl">
        2026
      </p>
      <p className="apparition delai-3 mt-6 max-w-xl text-lg text-stone-300">
        Joyeux anniversaire Arthur, bon pour 2 sites sur mesure :
        www.arpenlus.fr pour le groupe et www.arthurgrimpepartout.com quand tu
        auras décidé de travailler.
      </p>
      <nav
        aria-label="Contact et réseaux sociaux"
        className="apparition delai-4 mt-12 flex items-center justify-center gap-4"
      >
        <IconeContact label="Téléphone" href={`tel:${TELEPHONE}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={CLASSE_ICONE}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </IconeContact>
        <IconeContact label="Mail" href={`mailto:${MAIL}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={CLASSE_ICONE}
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </IconeContact>
        <IconeContact label="Instagram" href={INSTAGRAM}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={CLASSE_ICONE}
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </IconeContact>
        <IconeContact label="WhatsApp" href={WHATSAPP}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className={CLASSE_ICONE}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </IconeContact>
      </nav>
    </main>
  );
}
