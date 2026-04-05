"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeUp } from "@/components/motion/fade-up";
import { useState } from "react";

const faqs = [
  {
    q: "Как быстро приедет фельдшер?",
    a: "Фельдшер приезжает в течение 1–2 часов после подтверждения заявки. В экстренных случаях время ожидания может быть короче.",
  },
  {
    q: "В каких городах работает сервис?",
    a: "Сервис работает в Алматы, Астане и других крупных городах Казахстана. Точный список городов уточняйте при оформлении заявки.",
  },
  {
    q: "Что нужно подготовить к приезду фельдшера?",
    a: "Ничего особенного — просто откройте дверь. При наличии выписок из предыдущих консультаций желательно их подготовить.",
  },
  {
    q: "Можно ли вызвать врача для ребёнка?",
    a: "Да, у нас есть педиатры для онлайн-консультаций. Фельдшер также умеет работать с детьми любого возраста.",
  },
  {
    q: "Как оплатить услугу?",
    a: "Оплата производится онлайн при оформлении заявки — картой Visa, Mastercard или через Kaspi Pay.",
  },
  {
    q: "Выдаётся ли больничный лист?",
    a: "Электронный больничный лист врач может оформить при наличии медицинских оснований. Уточните при консультации.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
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
        <p className="pb-6 text-base leading-7 text-[#768183]">{faq.a}</p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section className="bg-[#f7fbff] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Заголовок — sticky на десктопе, без FadeUp чтобы не ломать sticky */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-[34px] leading-[31px] md:text-[40px] md:leading-tight font-medium tracking-[-1px] text-[#1a3b5d] text-center md:text-left md:sticky md:top-24">
              Вопросы
              <br />и&nbsp;ответы
            </h2>
          </div>

          <FadeUp delay={0.1}>
            <div className="w-full">
              {faqs.map((faq, i) => (
                <FaqItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
