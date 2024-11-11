import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./responsive.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal'],
});

export const metadata: Metadata = {
  title: "Arcade",
  description: "Discover the best of the gaming world.",

  icons: {
    icon: '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
