# Flux git

- Une seule branche longue-vive : `main` (production, branche par
  défaut du repo GitHub). Ne jamais force-pusher dessus.
- Une branche par session de dev, créée depuis `main` en début de
  session : `dev-AAMMJJ-A` pour la première session du jour
  (ex. `dev-261106-A` = 6 novembre 2026), `dev-AAMMJJ-B` pour la
  deuxième, etc. L'année en tête évite les collisions d'une année
  sur l'autre.
- Début de session : `git switch main && git pull` puis
  `git switch -c dev-AAMMJJ-A`.
- Committer librement au fil de la session, en local — message
  `n | Sujet | Description` (n incrémenté : `1 | CI | ...`,
  `2 | Docs | ...`). Ne **pas** pousser après chaque commit : chaque
  push de branche déclenche la CI — on limite les runs en ne
  poussant qu'aux moments utiles (fin de session, ou étape à
  valider par la CI).
- Plus de preview Vercel par branche (coupée le 12/11 sur le
  pilote) : `vercel.json` désactive les déploiements des branches
  `dev-*` (`git.deploymentEnabled`), la production sur `main` reste
  automatique. Le rendu se valide en local (`npm run dev`) avant le
  merge. Besoin ponctuel d'une URL en ligne : onglet Actions →
  Run workflow → cible preview (URL éphémère dans les logs).
- Fin de session : merger vers `main` par **PR obligatoire** —
  les règles GitHub du repo refusent les push directs sur `main`
  et les merge commits ; la méthode retenue est le **rebase
  merge** (les commits de session arrivent sur `main` tels quels,
  CI sur la PR). Puis `git switch main && git pull` et
  `git branch -d <branche>` (GitHub supprime la branche distante
  au merge ; `git remote prune origin` nettoie les refs locales).
- Mise en ligne : le push de `main` déploie la production
  automatiquement (intégration Git de Vercel) ; la CI tourne en
  parallèle comme contrôle qualité visible après le push. Le build
  Vercel est atomique : si le build échoue, la prod précédente
  reste en ligne. On ne pousse `main` que quand on veut mettre en
  ligne. Secours : Run workflow → cible production.
- Un retour arrière suit le même chemin qu'un changement normal :
  branche de session depuis `main` → merge vers `main`.
- À plusieurs : chaque contributeur pousse sa branche de session et
  ouvre une PR vers `main`.
- Une session qui part sur deux sujets sans rapport se scinde en
  deux branches plutôt que de merger un mélange.
- Les branches mortes sont des piéges : on n'en garde aucune.

# Projet

- Site vitrine Arpenlus (domaine www.arpenlus.fr), squelette démarré le
  14 novembre 2026 à partir du pilote www-sousaphone-carbon (mêmes configs,
  mêmes workflows, mêmes conventions).
- Next.js 16 + Tailwind v4. Scripts : `npm run dev`, `npm run build`,
  `npm run lint`, `npm run format:check` — Prettier doit passer avant
  tout commit.
- Le contenu client (textes, activité, coordonnées) n'est pas
  encore intégré : `src/lib/site.js` porte les constantes du site
  (nom, description, URL), à compléter au fil du projet.
- Images : logos/favicon/documents dans `public/`, images de design
  en imports statiques `next/image` depuis `src/assets/images/`
  (kebab-case).
- Pas de surveillance PSI pour l'instant (décision du 14/11/2026) ;
  le workflow du pilote pourra être copié plus tard (secret
  `PSI_API_KEY`).
