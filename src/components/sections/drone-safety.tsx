import { FadeUp } from "@/components/motion/fade-up";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import type { Dictionary } from "@/dictionaries";

type DroneSafetyDictionary = Dictionary["droneSafety"];
type DroneSafetyLanguage = DroneSafetyDictionary["languages"][number];

type IconProps = { size?: number; className?: string };

function DroneIcon({ size = 22, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="10" width="8" height="4" rx="1" />
      <path d="M6 9h2M16 9h2M8 12H4m16 0h-4M7 10 4 7M17 10l3-3M7 14l-3 3M17 14l3 3" />
      <circle cx="4" cy="7" r="1" />
      <circle cx="20" cy="7" r="1" />
      <circle cx="4" cy="17" r="1" />
      <circle cx="20" cy="17" r="1" />
    </svg>
  );
}

function LanguageBlock({ language }: { language: DroneSafetyLanguage }) {
  return (
    <StaggerItem>
      <article className="h-full rounded-2xl bg-white p-5 md:p-6 shadow-[0_2px_16px_rgba(26,59,93,0.07)]">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[12px] font-semibold tracking-[0.12em] text-[#5384c4]">{language.code}</span>
          <span className="rounded-full bg-[#f7fbff] px-3 py-1 text-[13px] font-medium text-[#3d6d9d]">{language.label}</span>
        </div>
        <div className="space-y-3">
          {language.items.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-[#dce8f5] bg-[#f7fbff] px-3 py-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#dce8f5] text-[#1a3b5d]">
                <DroneIcon />
              </div>
              <p className="text-[15px] leading-[1.45] text-[#1a3b5d]">{item}</p>
            </div>
          ))}
        </div>
      </article>
    </StaggerItem>
  );
}

export function DroneSafetySection({ dict }: { dict: DroneSafetyDictionary }) {
  return (
    <section className="bg-[#f7fbff] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <h1 className="text-center text-[34px] font-semibold leading-[31px] tracking-[-1px] text-[#1a3b5d] md:text-[44px] md:leading-[1.1]">
            {dict.title}
          </h1>
          <p className="mt-3 text-center text-[15px] text-[#5d87a8]">{dict.subtitle}</p>
        </FadeUp>

        <StaggerGrid className="mt-10 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-3 md:gap-4">
          {dict.languages.map((language) => (
            <LanguageBlock key={language.code} language={language} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
