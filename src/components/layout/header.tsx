"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary, Lang } from "@/dictionaries";

const logoSrc =
  "https://www.figma.com/api/mcp/asset/bd97dc54-5b41-45f7-bcb6-8cd4ec1d0689";

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Header({ dict, lang }: { dict: Dictionary['header']; lang: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const otherLang = lang === 'ru' ? 'kk' : 'ru';
  const otherPath = pathname.replace(`/${lang}`, `/${otherLang}`);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#e8f0f8]/60 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-14 md:h-16">
          {/* Логотип */}
          <a href={`/${lang}`} className="relative h-5 w-[84px] shrink-0">
            <Image
              src={logoSrc}
              alt="iDoctor"
              fill
              className="object-contain object-left"
              unoptimized
            />
          </a>

          {/* Десктоп — навигация */}
          <nav className="hidden md:flex items-center gap-8">
            {dict.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[#5d87a8] hover:text-[#1a3b5d] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Десктоп — переключатель языка и кнопка */}
          <div className="hidden md:flex items-center gap-3">
            <Link href={otherPath} className="text-sm font-medium text-[#5d87a8] hover:text-[#1a3b5d] transition-colors">
              {otherLang === 'kk' ? 'ҚАЗ' : 'РУС'}
            </Link>
            <a href="#cta">
              <Button className="h-10 px-5 rounded-xl bg-[#3d6d9d] text-sm font-medium text-white hover:bg-[#345e87]">
                {dict.cta}
              </Button>
            </a>
          </div>

          {/* Мобилка — бургер */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 text-[#1a3b5d]"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Мобильное меню */}
        {open && (
          <div className="md:hidden border-t border-[#e8f0f8] bg-white/95 backdrop-blur-md px-4 pb-6 pt-4 flex flex-col gap-4">
            {dict.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#1a3b5d] py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-2">
              <Link href={otherPath} className="text-sm font-medium text-[#5d87a8]">
                {otherLang === 'kk' ? 'ҚАЗ' : 'РУС'}
              </Link>
            </div>
            <a href="#cta" className="w-full">
              <Button className="h-12 w-full rounded-xl bg-[#3d6d9d] text-base font-medium text-white hover:bg-[#345e87]">
                {dict.cta}
              </Button>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
