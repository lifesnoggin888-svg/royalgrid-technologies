import { ImageResponse } from "next/og";

export const alt = "RoyalGrid Technologies — African Opportunity-Access Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0E1512",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
            <path d="M32 14L46 22V42L32 50L18 42V22L32 14Z" stroke="#A9772C" strokeWidth="3" />
            <circle cx="32" cy="32" r="5" fill="#A9772C" />
          </svg>
          <div style={{ display: "flex", fontSize: 30, color: "#FAF8F4" }}>
            RoyalGrid <span style={{ color: "#C99A4C", marginLeft: 8 }}>Technologies</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 54, color: "#FAF8F4", lineHeight: 1.15, maxWidth: 980 }}>
            Opportunity should not depend on knowing where to look.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#B9C2BC" }}>
            African opportunity-access infrastructure. Flagship: OpportunityGrid.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
