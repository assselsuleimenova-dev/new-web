import { FadeUp } from "@/components/motion/fade-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import Image from "next/image";
import type { Dictionary } from "@/dictionaries";

type IconProps = { size?: number; className?: string };

function ClockIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CarIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 .586-1.414l2-2A2 2 0 0 1 7 7h10a2 2 0 0 1 1.414.586l2 2A2 2 0 0 1 21 11v4a2 2 0 0 1-2 2z" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function VideoIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m22 8-6 4 6 4V8z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  );
}

function FileTextIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

type IconComponent = (props: IconProps) => React.JSX.Element;
const stepIcons: IconComponent[] = [ClockIcon, CarIcon, VideoIcon, FileTextIcon];

export function AfterRequest({ dict }: { dict: Dictionary['afterRequest'] }) {
  return (
    <section className="bg-[#f7fbff] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <h2 className="text-[34px] leading-[31px] md:text-[44px] md:leading-[1.1] font-semibold tracking-[-1px] text-[#1a3b5d] mb-3 text-center md:text-center">
            {dict.title1}
            <br />
            {dict.title2}
          </h2>
          <p className="text-[18px] text-[#5d87a8] mb-10 md:mb-14 text-center md:text-center">{dict.subtitle}</p>
        </FadeUp>

        {/* Мобилка */}
        <StaggerGrid className="flex flex-col gap-3 lg:hidden">
          {dict.steps.map((step, index) => {
            const Icon = stepIcons[index];
            const isVideo = step.num === "03";
            return (
              <StaggerItem key={step.num}>
                <div className="rounded-2xl bg-white px-4 pt-4 pb-4 flex flex-col gap-2 shadow-[0_2px_16px_rgba(26,59,93,0.07)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[#c0c8d0]">{step.num}</span>
                    <div className="flex items-center gap-1.5 bg-[#eff1f4] rounded-lg px-2.5 py-1.5">
                      <Icon size={13} className="text-[#3d6d9d] shrink-0" />
                      <span className="text-[12px] font-medium text-[#3d6d9d] whitespace-nowrap">{step.badge}</span>
                    </div>
                  </div>
                  <p className="text-[18px] font-medium leading-[24px] text-[#1a3b5d]">{step.title}</p>
                  {isVideo && (
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden mt-1">
                      <Image src="/images/video-call-new.png" alt="Видеозвонок с врачом" fill className="object-cover object-center" />
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Десктоп */}
        <StaggerGrid className="hidden lg:block">
          {dict.steps.map((step, i) => {
            const Icon = stepIcons[i];
            const isVideo = step.num === "03";
            return (
              <StaggerItem key={step.num}>
                <div className={`flex items-center gap-10 py-8 ${i > 0 ? "border-t border-[#e4e8ec]" : ""}`}>
                  <span className="text-[52px] font-black leading-none text-[#dde0e4] w-20 shrink-0 select-none">
                    {step.num}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-[#eff1f4] flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-[#3d6d9d]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[18px] font-medium leading-tight text-[#1a3b5d]">{step.title}</p>
                  </div>
                  {isVideo ? (
                    <div className="relative w-[200px] h-[130px] rounded-2xl overflow-hidden shrink-0">
                      <Image src="/images/video-call-new.png" alt="Видеозвонок с врачом" fill className="object-cover object-center" />
                    </div>
                  ) : (
                    <div className="rounded-xl bg-white border border-[#e4e8ec] px-4 py-3 shrink-0">
                      <span className="text-[13px] font-medium text-[#3d6d9d] whitespace-nowrap">{step.badge}</span>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
