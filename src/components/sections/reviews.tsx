import { FadeUp } from "@/components/motion/fade-up";

const reviews = [
  {
    name: "Динара",
    meta: "31 год, Алматы",
    text: "Сын заболел в воскресенье. Фельдшер приехал через час и сделал осмотр. Педиатр назначил лечение онлайн и не пришлось тащить больного ребёнка в поликлинику. Спасибо вам большое!",
  },
  {
    name: "Максим",
    meta: "44 года",
    text: "Некогда было идти в клинику из-за работы и попробовал заказать сервис на дом. Сделали ЭКГ и анализы прямо дома. Оказалось, холестерин зашкаливает. Врач сразу дал план. Спасибо.",
  },
  {
    name: "Айгерим",
    meta: "39 лет",
    text: "Заказала маме, ей 72 и тяжело ехать каждый раз в клинику. Очень приятные врачи и удобный сервис.",
  },
];

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-[#f7fbff] p-6 h-full">
      <span className="text-[56px] leading-none font-black text-[#3d6d9d]/20 select-none -mb-2">
        "
      </span>
      <p className="text-base leading-6 text-[#1a3b5d] flex-1">{r.text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-[#dce8f5]">
        <div className="w-6 h-px bg-[#3d6d9d]/40 shrink-0" />
        <div>
          <p className="text-sm font-medium text-[#1a3b5d]">{r.name}</p>
          <p className="text-xs text-[#768183]">{r.meta}</p>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <h2 className="text-[34px] leading-[31px] md:text-[40px] md:leading-tight font-medium tracking-[-1px] text-[#1a3b5d] mb-10 md:mb-14 text-center md:text-left">
            Отзывы
          </h2>
        </FadeUp>

        {/* Мобилка — горизонтальный слайдер */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:hidden pb-2">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="snap-center shrink-0 w-[80vw] max-w-[320px]"
            >
              <ReviewCard r={r} />
            </div>
          ))}
        </div>

        {/* Десктоп — сетка */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
