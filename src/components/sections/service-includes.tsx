import Image from "next/image";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import type { Dictionary } from "@/dictionaries";

const bagImage =
  "https://www.figma.com/api/mcp/asset/86a30da0-4459-4270-b1d9-1a08537307c9";

function MultilineText({ text, className }: { text: string; className?: string }) {
  const lines = text.split('\n');
  return (
    <p className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
}

export function ServiceIncludes({ dict }: { dict: Dictionary['serviceIncludes'] }) {
  return (
    <section className="bg-white py-16 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <h2 className="text-[34px] leading-[31px] md:text-[44px] md:leading-[1.1] font-semibold tracking-[-1px] text-[#1a3b5d] mb-3 text-center md:text-center">
            {dict.title1}
            <br />{dict.title2}
          </h2>
          <p className="text-[16px] text-[#5d87a8] mb-10 md:mb-14 text-center md:text-center">{dict.subtitle}</p>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-2 gap-3 md:gap-4 relative">
          {/* Карточка: Любой врач */}
          <StaggerItem className="bg-[#edf4fb] rounded-2xl p-5 md:p-6 flex flex-col gap-4 shadow-[0_2px_16px_rgba(26,59,93,0.07)]">
            <MultilineText text={dict.doctorsTitle} className="text-lg font-medium text-[#1a3b5d] leading-snug" />
            <div className="flex gap-6 mt-auto">
              <div className="flex flex-col gap-1">
                {dict.specialties1.map((s) => (
                  <span key={s} className="text-sm leading-5 text-[#5384c4]">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {dict.specialties2.map((s) => (
                  <span key={s} className="text-sm leading-5 text-[#5384c4]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Карточка: Что в сумке — row-span-2 */}
          <StaggerItem className="relative row-span-2">
            <div className="bg-[#edf4fb] rounded-2xl p-5 md:p-6 flex flex-col min-h-[260px] md:min-h-[320px] h-full shadow-[0_2px_16px_rgba(26,59,93,0.07)]">
              <MultilineText text={dict.bagTitle} className="text-lg font-medium text-[#1a3b5d] leading-snug" />
              <div className="flex flex-col gap-1.5 mt-4">
                {dict.bagItems.map((item) => (
                  <span key={item} className="text-sm leading-5 text-[#5384c4]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {/* Сумка — вылезает за карточку и накладывается на баннер */}
            <div className="absolute bottom-[-230px] right-[-60px] w-[300px] h-[300px] md:bottom-[-140px] md:right-[-30px] md:w-[380px] md:h-[380px] rotate-[-7deg] z-10 pointer-events-none">
              <Image
                src={bagImage}
                alt="Сумка фельдшера"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </StaggerItem>

          {/* Карточка: Приедем в любое время */}
          <StaggerItem className="bg-[#edf4fb] rounded-2xl p-5 md:p-6 flex items-start shadow-[0_2px_16px_rgba(26,59,93,0.07)]">
            <MultilineText text={dict.timeTitle} className="text-lg font-medium text-[#1a3b5d] leading-snug" />
          </StaggerItem>

          {/* Баннер с ценой — col-span-2 */}
          <StaggerItem className="col-span-2 relative z-0">
            <div
              className="rounded-2xl px-6 py-5 md:px-10 md:py-7 flex flex-col"
              style={{
                backgroundImage:
                  "linear-gradient(98.54deg, rgb(143,215,212) 7.37%, rgb(78,137,188) 22.54%)",
              }}
            >
              <p className="text-[32px] md:text-[40px] font-bold leading-tight tracking-[-2px] text-white">
                {dict.priceLabel}
              </p>
              <p className="text-[52px] md:text-[64px] font-black leading-none tracking-[-2.5px] text-white">
                {dict.priceAmount}
              </p>
            </div>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </section>
  );
}
