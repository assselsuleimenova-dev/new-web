import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/dictionaries";

export function HeroSection({ dict }: { dict: Dictionary['hero'] }) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Мобильный градиент */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgb(216,234,253) 0%, rgb(234,244,255) 7%, rgb(241,248,255) 21%, rgb(248,251,255) 36%, rgb(255,255,255) 50%, rgb(248,252,255) 75%, rgb(240,249,255) 100%)",
        }}
      />
      {/* Десктопный градиент */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(154.82deg, rgb(216,234,253) 0%, rgb(234,244,255) 7.14%, rgb(237,246,255) 14.29%, rgb(241,248,255) 21.43%, rgb(244,249,255) 28.57%, rgb(248,251,255) 35.71%, rgb(251,253,255) 42.86%, rgb(255,255,255) 50%, rgb(253,254,255) 58.33%, rgb(250,253,255) 66.67%, rgb(248,252,255) 75%, rgb(245,251,255) 83.33%, rgb(243,250,255) 91.67%, rgb(240,249,255) 100%)",
        }}
      />

      {/* Декоративный размытый круг */}
      <div
        className="absolute rounded-full pointer-events-none w-[300px] h-[300px] top-[154px] left-[54px] blur-[64px]"
        style={{ background: "rgba(61,109,157,0.05)" }}
      />

      {/* Мобильный лейаут */}
      <div className="relative mx-auto max-w-6xl px-4 md:hidden">
        <div className="flex flex-col items-center pt-8 pb-0">
          <div className="flex flex-col items-center gap-2 pt-6 text-center">
            <h1
              className="text-[38px] font-medium leading-[36px] tracking-[-1.5px] text-[#1a3b5d] max-w-[345px] [animation:fadeUp_0.5s_ease-out_0.05s_both]"
            >
              {dict.title1}
              <br />
              {dict.title2}
            </h1>
            <p className="mt-1 text-lg leading-6 text-[#5d87a8] max-w-[320px] [animation:fadeUp_0.5s_ease-out_0.18s_both]">
              {dict.subtitle} {dict.subtitle2}
            </p>
            <div className="flex flex-col items-center gap-2 [animation:fadeUp_0.5s_ease-out_0.28s_both]">
              <a href="#cta">
                <Button className="mt-3 h-[65px] w-[201px] rounded-xl bg-[#3d6d9d] text-[17px] font-medium text-white hover:bg-[#345e87]">
                  {dict.cta}
                </Button>
              </a>
              <p className="text-lg font-medium text-[#3d6d9d]">{dict.price}</p>
            </div>
          </div>

          <div className="relative mt-6 h-[270px] w-screen -mx-4 overflow-hidden [animation:fadeUp_0.6s_ease-out_0.35s_both]">
            <div className="absolute inset-0">
              <Image
                src="https://www.figma.com/api/mcp/asset/4a7e672a-ebf1-4926-8eed-0139c89aef39"
                alt="Врач на выезде"
                fill
                priority
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Десктопный лейаут */}
      <div className="hidden md:block relative h-[620px]">
        {/* Фото — появляется справа */}
        <div className="absolute bottom-0 right-0 h-[520px] w-[50%] overflow-hidden [animation:fadeInRight_0.7s_ease-out_0.2s_both]">
          <div className="absolute inset-0">
            <Image
              src="https://www.figma.com/api/mcp/asset/4a7e672a-ebf1-4926-8eed-0139c89aef39"
              alt="Врач на выезде"
              fill
              priority
              className="object-cover object-top"
              unoptimized
            />
          </div>
        </div>

        {/* Текст — левая половина */}
        <div className="relative mx-auto max-w-6xl px-6 h-full">
          <div className="absolute top-1/2 -translate-y-1/2 left-6 flex flex-col gap-4 max-w-[520px]">
            <h1 className="text-[56px] font-medium leading-[52px] tracking-[-2px] text-[#1a3b5d] [animation:fadeUp_0.5s_ease-out_0.05s_both]">
              {dict.title1}
              <br />
              {dict.title2}
            </h1>
            <p className="text-[18px] leading-[28px] text-[#5d87a8] max-w-[460px] [animation:fadeUp_0.5s_ease-out_0.18s_both]">
              {dict.subtitle}
              <br />
              {dict.subtitle2}
            </p>
            <div className="flex items-center gap-6 mt-2 [animation:fadeUp_0.5s_ease-out_0.3s_both]">
              <a href="#cta">
                <Button className="h-[80px] w-[260px] rounded-[16px] bg-[#3d6d9d] text-[20px] font-medium text-white hover:bg-[#345e87] shrink-0">
                  {dict.cta}
                </Button>
              </a>
              <p className="text-[22px] text-[#3d6d9d] whitespace-nowrap">
                {dict.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
