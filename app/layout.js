import { IBM_Plex_Mono, Manrope } from "next/font/google";
import ChatWidget from "./components/ChatWidget";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://portfolio.lololabs.xyz"),
  title: {
    default: "Loic Dlugosz — Solana & Mobile Builder",
    template: "%s — Loic Dlugosz",
  },
  description:
    "Fullstack developer building and shipping web, mobile and Solana products end-to-end.",
  applicationName: "Loic Dlugosz Portfolio",
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Loic Dlugosz — Solana & Mobile Builder",
    description:
      "Fullstack developer shipping web, mobile, games and Solana integrations.",
    url: "/",
    siteName: "LoloLabs",
    images: [
      {
        url: "/images/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Loic Dlugosz — Fullstack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loic Dlugosz — Solana & Mobile Builder",
    description:
      "Fullstack developer shipping web, mobile, games and Solana integrations.",
    images: ["/images/og-portfolio.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${mono.variable} dark`}>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
