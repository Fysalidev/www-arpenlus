import Link from "next/link";

// Page 404 : squelette de démarrage — à habiller avec le design du
// site.
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-stone-500">
        La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Retour à l&rsquo;accueil
      </Link>
    </main>
  );
}
