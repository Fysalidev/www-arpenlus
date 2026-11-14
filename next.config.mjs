/** @type {import('next').NextConfig} */
const nextConfig = {
  /* En-têtes de sécurité pour toutes les routes — bloc repris de
     www-sousaphone-carbon. Le site n'embarque aucun script tiers à
     ce stade ; à revoir si un formulaire (reCAPTCHA) ou des fontes
     externes arrivent. CSP : 'unsafe-inline'/'unsafe-eval' sont
     requis par Next.js (scripts d'amorçage inline, HMR en dev) —
     passer par un nonce en middleware serait l'étape suivante. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "font-src 'self'",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
        ],
      },
    ];
  },

  reactCompiler: true,
};

export default nextConfig;
