import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F3EC",
          color: "#B5563A",
          fontSize: 40,
          fontFamily: "serif",
          fontStyle: "italic",
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
