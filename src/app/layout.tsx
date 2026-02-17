import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SPARKH INFOTECH | Powering Ideas with Technology",
    template: "%s | SPARKH INFOTECH",
  },
  description: "A futuristic IT solutions and digital services brand based in Tamil Nadu, India. Web Development, Apps, Cloud, and more.",
  icons: {
    icon: '/icon',
    apple: '/apple-icon',
  },
  themeColor: '#FF6B00',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-dark-navy text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
