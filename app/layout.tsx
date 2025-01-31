import type { Metadata } from "next";
import HeaderClient from "@/components/header/header-client";
import "./global.scss";
import FootherClient from "@/components/foother/footherclient";

export const metadata: Metadata = {
  title: "Russian Beauty",
  description: "Cosmetology Russian Beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <HeaderClient />
        {children}
        <FootherClient />
      </body>
    </html>
  );
}