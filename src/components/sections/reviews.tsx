import { FadeUp } from "@/components/motion/fade-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import type { Dictionary } from "@/dictionaries";

type ReviewItem = Dictionary['reviews']['items'][number];

function ReviewCard({ r }: { r: ReviewItem }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 h-full shadow-[0_2px_16px_rgba(26,59,93,0.07)]">
      <p className="text-[15px] leading-[26px] text-[#1a3b5d] flex-1">{r.text}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-[#dce8f5]">
        <div className="w-9 h-9 rounded-full bg-[#3d6d9d] flex items-center justify-center shrink-0">
          <span className="text-white text-sm font-semibold">{r.name[0]}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a3b5d]">{r.name}</p>
          <p className="text-xs text-[#5d87a8]">{r.meta}</p>
        </div>
      </div>
    </div>
  );
}

export function Reviews({ dict }: { dict: Dictionary['reviews'] }) {
  return (
    <section className="bg-[#f7fbff] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <h2 className="text-[34px] leading-[31px] md:text-[44px] md:leading-[1.1] font-semibold tracking-[-1px] text-[#1a3b5d] mb-10 md:mb-14 text-center md:text-center">
            {dict.title}
          </h2>
          {dict.subtitle && <p className="text-[15px] text-[#5d87a8] mb-10 md:mb-14 text-center md:text-center">{dict.subtitle}</p>}
        </FadeUp>

        {/* Мобилка */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:hidden pb-2">
          {dict.items.map((r) => (
            <div key={r.name} className="snap-center shrink-0 w-[80vw] max-w-[320px]">
              <ReviewCard r={r} />
            </div>
          ))}
        </div>

        {/* Десктоп */}
        <StaggerGrid className="hidden md:grid md:grid-cols-3 md:gap-4">
          {dict.items.map((r) => (
            <StaggerItem key={r.name}>
              <ReviewCard r={r} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
