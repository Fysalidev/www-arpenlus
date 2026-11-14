import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { NOM } from "@/lib/site";

// Image Open Graph (session du 14/11) : carte 1200x630 fond noir,
// titre ARPENLUS en Anton, carré central à motif zébré (zebre.svg) et
// « 2026 » — même composition que la page d'accueil. Next émet
// automatiquement les balises og:image (et og:image:alt/width/height)
// à partir de ce fichier ; aucun `images` à déclarer dans le layout.
export const alt = `${NOM} — Site officiel`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Charge la police Anton (Google Fonts, un seul poids 400) pour un
// rendu fidèle au site ; si le réseau est indisponible au build, on
// retombe sur la police par défaut de Satori. Un User-Agent non
// navigateur fait renvoyer par Google du TTF brut — Satori ne lit ni
// le WOFF2 ni l'EOT.
async function chargerAnton() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Anton&display=swap",
      { headers: { "User-Agent": "curl/8.5.0" } },
    ).then((r) => r.text());
    const url = css.match(/url\((https:[^)]+)\)/)?.[1];
    if (!url) return null;
    const data = await fetch(url).then((r) => r.arrayBuffer());
    return { name: "Anton", data, weight: 400, style: "normal" };
  } catch {
    return null;
  }
}

export default async function Image() {
  // Motif zébré en data URI base64 pour le fond du carré. On retire
  // la déclaration XML et le DOCTYPE : le moteur SVG de Satori (resvg)
  // les refuse.
  const zebre = await readFile(
    path.join(process.cwd(), "src/assets/images/zebre.svg"),
    "utf8",
  );
  const zebreNettoye = zebre
    .replace(/<\?xml[\s\S]*?\?>/, "")
    .replace(/<!DOCTYPE[\s\S]*?>/, "");
  const zebreUri = `data:image/svg+xml;base64,${Buffer.from(zebreNettoye).toString("base64")}`;

  const anton = await chargerAnton();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: anton ? "Anton" : "sans-serif",
        padding: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 112,
          lineHeight: 1,
          letterSpacing: 2,
        }}
      >
        {NOM.toUpperCase()}
      </div>
      <div
        style={{
          display: "flex",
          width: 240,
          height: 240,
          marginTop: 40,
          backgroundColor: "#ffffff",
          backgroundImage: `url("${zebreUri}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          display: "flex",
          marginTop: 40,
          fontSize: 56,
          lineHeight: 1,
          letterSpacing: 6,
        }}
      >
        2026
      </div>
    </div>,
    {
      ...size,
      ...(anton ? { fonts: [anton] } : {}),
    },
  );
}
