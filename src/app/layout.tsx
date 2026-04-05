import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iDoctor — Вызов врача на дом",
  description:
    "Приедет фельдшер для осмотра, пока выбранный врач консультирует вас онлайн",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-[ALS_Sirius,sans-serif]">
        {children}
      </body>
    </html>
  );
}
