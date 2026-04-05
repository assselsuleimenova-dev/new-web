import { Clock, Car, Video, FileText, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";

const steps: {
  num: string;
  badge: string;
  icon: LucideIcon;
  title: string;
}[] = [
  {
    num: "01",
    badge: "свяжемся в\u00A0течение 15\u00A0минут",
    icon: Clock,
    title: "Оставляете заявку",
  },
  {
    num: "02",
    badge: "оборудование как\u00A0в\u00A0клинике",
    icon: Car,
    title: "Приезжает фельдшер",
  },
  {
    num: "03",
    badge: "консультация со\u00A0специалистом",
    icon: Video,
    title: "Видеозвонок с\u00A0врачом",
  },
  {
    num: "04",
    badge: "план лечения и\u00A0заключение",
    icon: FileText,
    title: "Рекомендация на\u00A0телефон",
  },
];

function StepCard({
  step,
  desktop,
}: {
  step: (typeof steps)[number];
  desktop?: boolean;
}) {
  const Icon = step.icon;

  if (desktop) {
    return (
      <div className="relative flex flex-col justify-between rounded-xl bg-[#f4f6f8] px-4 pt-4 pb-5 overflow-hidden min-h-[148px]">
        <span
          className="absolute bottom-2 right-3 text-[96px] font-medium leading-none select-none pointer-events-none"
          style={{ color: "rgba(61,109,157,0.07)" }}
        >
          {step.num}
        </span>
        <div className="flex items-center gap-1 rounded bg-white px-1.5 py-1 self-start">
          <Icon size={15} className="text-[#3d6d9d] shrink-0" />
          <span className="text-[12px] font-medium text-[#3d6d9d] whitespace-nowrap">
            {step.badge}
          </span>
        </div>
        <p className="text-[20px] font-medium leading-6 text-[#1a3b5d] mt-4 relative z-10">
          {step.title}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[10px] rounded-xl bg-[#f4f6f8] px-3 pt-3 pb-6">
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium leading-6 text-[#6b7280]">
          {step.num}
        </span>
        <div className="flex items-center gap-1 rounded bg-white px-1 py-1 shrink-0">
          <Icon size={16} className="text-[#3d6d9d] shrink-0" />
          <span className="text-[12px] font-medium leading-[16.8px] text-[#3d6d9d] whitespace-nowrap">
            {step.badge}
          </span>
        </div>
      </div>
      <p className="text-[18px] font-medium leading-6 text-[#1a3b5d]">
        {step.title}
      </p>
    </div>
  );
}

export function AfterRequest() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeUp>
          <h2 className="text-[34px] leading-[31px] md:text-[40px] md:leading-tight font-medium tracking-[-1px] text-[#1a3b5d] mb-10 md:mb-14 text-center md:text-left">
            Что будет
            <br />
            после заявки
          </h2>
        </FadeUp>

        {/* Мобилка: вертикальный timeline */}
        <div className="flex flex-col gap-0 lg:hidden">
          {steps.map((step, i) => (
            <StaggerItem key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#3d6d9d] flex items-center justify-center shrink-0 z-10">
                  <span className="text-white text-[11px] font-medium">
                    {step.num}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-[#dde6f0] my-1" />
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex flex-col gap-[10px] rounded-xl bg-[#f4f6f8] px-3 pt-3 pb-6">
                  <div className="flex items-center gap-1 rounded bg-white px-1 py-1 self-start">
                    {(() => {
                      const Icon = step.icon;
                      return (
                        <Icon size={16} className="text-[#3d6d9d] shrink-0" />
                      );
                    })()}
                    <span className="text-[12px] font-medium leading-[16.8px] text-[#3d6d9d] whitespace-nowrap">
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-[18px] font-medium leading-6 text-[#1a3b5d]">
                    {step.title}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        {/* Десктоп: горизонтальный флоу */}
        <StaggerGrid className="hidden lg:flex lg:items-stretch lg:gap-2">
          {steps.map((step, i) => (
            <StaggerItem
              key={step.num}
              className="flex items-center gap-2 flex-1 min-w-0"
            >
              <div className="flex-1 min-w-0">
                <StepCard step={step} desktop />
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={20} className="text-[#b0c4d8] shrink-0" />
              )}
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
