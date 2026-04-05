import Image from "next/image";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const bagImage =
  "https://www.figma.com/api/mcp/asset/86a30da0-4459-4270-b1d9-1a08537307c9";

export function ServiceIncludes() {
  return (
    <section className="bg-[#f7fbff] py-16 md:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <h2 className="text-[34px] leading-[31px] md:text-[40px] md:leading-tight font-medium tracking-[-1px] text-[#1a3b5d] mb-10 md:mb-14 text-center md:text-left">
            Что входит
            <br />в услугу?
          </h2>
        </FadeUp>

        <StaggerGrid className="grid grid-cols-2 gap-3 md:gap-4 relative">
          {/* Карточка: Любой врач */}
          <StaggerItem className="bg-white rounded-2xl p-5 md:p-6 flex flex-col gap-4">
            <p className="text-lg font-medium text-[#1a3b5d] leading-snug">
              Любой врач,
              <br />
              который вам нужен
            </p>
            <div className="flex gap-6 mt-auto">
              <div className="flex flex-col gap-1">
                {["педиатр", "терапевт", "хирург"].map((s) => (
                  <span key={s} className="text-sm leading-5 text-[#5384c4]">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {["токсиколог", "невропатолог", "кардиолог"].map((s) => (
                  <span key={s} className="text-sm leading-5 text-[#5384c4]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Карточка: Что в сумке — row-span-2 */}
          <StaggerItem className="relative row-span-2">
            <div className="bg-white rounded-2xl p-5 md:p-6 flex flex-col min-h-[260px] md:min-h-[320px] h-full">
              <p className="text-lg font-medium text-[#1a3b5d] leading-snug">
                Что в сумке
                <br />у фельдшера?
              </p>
              <div className="flex flex-col gap-1.5 mt-4">
                {[
                  "ЭКГ (12 отведений)",
                  "Экспресс-анализ крови",
                  "УЗИ органов",
                  "АД и пульс",
                  "SpO2 и температура",
                  "Анализатор параметров мочи",
                ].map((item) => (
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
          <StaggerItem className="bg-white rounded-2xl p-5 md:p-6 flex items-start">
            <p className="text-lg font-medium text-[#1a3b5d] leading-snug">
              Приедем в&nbsp;любое
              <br />
              удобное время
            </p>
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
                все за
              </p>
              <p className="text-[52px] md:text-[64px] font-black leading-none tracking-[-2.5px] text-white">
                15 000 ₸
              </p>
            </div>
          </StaggerItem>
        </StaggerGrid>
      </div>
    </section>
  );
}
