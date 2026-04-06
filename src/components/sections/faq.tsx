"use client";

import { FadeUp } from "@/components/motion/fade-up";
import { useState } from "react";
import type { Dictionary } from "@/dictionaries";

type FaqItem = Dictionary['faq']['items'][number];

function FaqItemComponent({ faq }: { faq: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-[#dce8f5] first:border-t-0">
      <button
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-lg font-medium text-[#1a3b5d] leading-snug">{faq.q}</span>
        <span className="mt-1 shrink-0 text-[#3d6d9d] text-2xl leading-none w-5 text-center select-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-6 text-[15px] leading-7 text-[#5d87a8]">{faq.a}</p>
      )}
    </div>
  );
}

export function FAQ({ dict }: { dict: Dictionary['faq'] }) {
  return (
    <section className="bg-[#f7fbff] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Заголовок — sticky на десктопе, без FadeUp чтобы не ломать sticky */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-[34px] leading-[31px] md:text-[44px] md:leading-[1.1] font-semibold tracking-[-1px] text-[#1a3b5d] text-center md:text-left md:sticky md:top-24">
              {dict.title1}
              <br />{dict.title2}
              <p className="text-[15px] font-normal text-[#5d87a8] mt-3 tracking-normal leading-snug">{dict.subtitle}</p>
            </h2>
          </div>

          <FadeUp delay={0.1}>
            <div className="w-full">
              {dict.items.map((faq, i) => (
                <FaqItemComponent key={i} faq={faq} />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
