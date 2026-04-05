import { Button } from "@/components/ui/button";
import { ParallaxHeroImage } from "@/components/motion/parallax-image";

export function HeroSection() {
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
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300,
          height: 300,
          top: 154,
          left: 54,
          background: "rgba(61,109,157,0.05)",
          filter: "blur(64px)",
        }}
      />

      {/* Мобильный лейаут */}
      <div className="relative mx-auto max-w-6xl px-4 md:hidden">
        <div className="flex flex-col items-center pt-16 pb-0">
          <div className="flex flex-col items-center gap-2 pt-12 text-center">
            <h1 className="text-[40px] font-medium leading-[38px] tracking-[-1.5px] text-[#1a3b5d] max-w-[345px]">
              Вызовите
              <br />
              врача на&nbsp;дом
            </h1>
            <p className="mt-1 text-lg leading-6 text-[#768183] max-w-[320px]">
              Приедет фельдшер для&nbsp;осмотра, пока выбранный врач
              консультирует вас онлайн
            </p>
            <Button className="mt-3 h-[65px] w-[201px] rounded-xl bg-[#3d6d9d] text-[17px] font-medium text-white hover:bg-[#345e87]">
              Вызвать врача
            </Button>
            <p className="text-lg font-medium text-[#3d6d9d]">за 15 000 тг</p>
          </div>

          <div className="relative mt-6 h-[270px] w-full overflow-hidden">
            <ParallaxHeroImage
              src="https://www.figma.com/api/mcp/asset/0ec181e1-3bb4-4e18-86dd-ef6dbe661ed2"
              alt="Врач на выезде"
            />
          </div>
        </div>
      </div>

      {/* Десктопный лейаут */}
      <div className="hidden md:block relative h-[589px]">
        {/* Фото — правый край секции */}
        <div className="absolute bottom-0 right-0 h-[494px] w-[50%] overflow-hidden">
          <ParallaxHeroImage
            src="https://www.figma.com/api/mcp/asset/e4292f17-5ecf-4ae2-8dcd-85ba3086899c"
            alt="Врач на выезде"
          />
        </div>

        {/* Текст — левая половина */}
        <div className="relative mx-auto max-w-6xl px-4 h-full">
          <div className="absolute top-1/2 -translate-y-1/2 left-4 flex flex-col gap-3 max-w-[496px] pt-16">
            <h1 className="text-[55px] font-medium leading-[52px] tracking-[-2px] text-[#1a3b5d]">
              Вызовите
              <br />
              врача на&nbsp;дом
            </h1>
            <p className="text-[25px] leading-[33px] text-[#768183] max-w-[485px]">
              Приедет фельдшер для&nbsp;осмотра,
              <br />
              пока выбранный врач консультирует вас онлайн
            </p>
            <div className="flex items-center gap-6 mt-1">
              <Button className="h-[90px] w-[277px] rounded-[16px] bg-[#3d6d9d] text-[23px] font-medium text-white hover:bg-[#345e87] shrink-0">
                Вызвать врача
              </Button>
              <p className="text-[25px] text-[#3d6d9d] whitespace-nowrap">
                за 15 000 тг
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
