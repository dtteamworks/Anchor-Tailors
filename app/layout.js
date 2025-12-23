import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Anclor Tailors | Professional Tailoring Services",
  description:
    "Expert tailors delivering precise fitting, quality stitching, and elegant designs crafted to perfection.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
