// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Tanik Sehrawat — Software Engineer · AI Builder · DSA Mentor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f2f0eb",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7a7a78",
          }}
        >
          <span>SUBJECT · 001</span>
          <span>REF · PORTFOLIO / 2026</span>
        </div>

        {/* Name + role */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 138,
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.045em",
              color: "#0e0f12",
            }}
          >
            <span>TANIK</span>
            <span>SEHRAWAT</span>
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 20,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#3a3b3f",
            }}
          >
            Software Engineer · AI Builder · DSA Mentor
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #0e0f12",
            paddingTop: 20,
            fontSize: 16,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7a7a78",
          }}
        >
          <span>400+ DSA · 30+ REST APIs SHIPPED</span>
          <span>TCS PRIME · 2026</span>
        </div>

        {/* Signal square */}
        <div
          style={{
            position: "absolute",
            top: 76,
            right: 76,
            width: 16,
            height: 16,
            background: "#ff4d14",
          }}
        />
      </div>
    ),
    { ...size }
  );
}