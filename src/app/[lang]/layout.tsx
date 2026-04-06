import type { Metadata } from "next";
import "../globals.css";
import { Ticker } from "@/components/layout/ticker";
import { Header } from "@/components/layout/header";
import { getDictionary } from "@/dictionaries";
import type { Lang } from "@/dictionaries";

export const metadata: Metadata = {
  title: "iDoctor — Вызов врача на дом",
  description: "Приедет фельдшер для осмотра, пока выбранный врач консультирует вас онлайн",
};

export async function generateStaticParams() {
  return [{ lang: 'ru' }, { lang: 'kk' }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  return (
    <>
      <Ticker text={dict.ticker} />
      <Header dict={dict.header} lang={lang as Lang} />
      {children}
    </>
  );
}
