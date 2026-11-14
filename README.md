# Arpenlus

Site vitrine d'Arpenlus (www.arpenlus.fr), projet démarré le 14 novembre 2026
à partir du pilote `www-sousaphone-carbon` (configs, workflows et conventions
repris à l'identique).

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4

## Développement local

Prérequis : Node.js 22 et npm.

```bash
npm ci
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Images

- logos, favicon, documents et images modifiables par le client : `public/` ;
- images de design : imports statiques `next/image` depuis
  `src/assets/images/` (kebab-case).

## Vérifications

```bash
npm run format:check
npm run lint
npm run build
```

La CI GitHub (`ci.yml`) exécute ces trois contrôles pour les pull requests
vers `main` et les push des branches `dev-*`.

## Déploiement

Piloté par l'intégration Git de Vercel (docs.vercel.com/git) :

- push sur `main` → production automatique ;
- les branches `dev-*` ne génèrent pas de preview (`vercel.json`,
  `git.deploymentEnabled`) : le rendu se valide en local (`npm run dev`) ;
- secours manuel : onglet Actions du repo → Run workflow (`deploy.yml`),
  cible preview ou production.

## Surveillance

Pas de surveillance PSI pour l'instant (décision du 14/11/2026). Le
workflow `surveillance-psi.yml` du pilote pourra être copié plus tard
(secret `PSI_API_KEY`).
