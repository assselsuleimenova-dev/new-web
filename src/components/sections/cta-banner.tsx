import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";

export function CtaBanner() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(120deg, rgb(216,234,253) 0%, rgb(241,248,255) 40%, rgb(255,255,255) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <FadeUp className="flex flex-col gap-4 max-w-[520px]">
          <h2 className="text-3xl md:text-[44px] font-medium leading-tight tracking-[-1.5px] text-[#1a3b5d]">
            Не надо ехать.
            <br />
            Просто напишите и&nbsp;врач
            <br />
            будет у&nbsp;вас дома.
          </h2>
          <p className="text-lg text-[#768183]">
            Работаем ежедневно, без выходных. Принимаем заявки круглосуточно.
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="flex flex-col gap-2">
          <Button className="h-[65px] w-full md:w-[220px] rounded-xl bg-[#3d6d9d] text-[17px] font-medium text-white hover:bg-[#345e87]">
            Вызвать врача
          </Button>
          <p className="text-lg font-medium text-[#3d6d9d] text-center">
            за 15 000 тг
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
