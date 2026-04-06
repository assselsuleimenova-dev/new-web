import { FadeUp } from "@/components/motion/fade-up";
import type { Dictionary } from "@/dictionaries";

export function CtaBanner({ dict }: { dict: Dictionary['cta'] }) {
  return (
    <section id="cta" className="bg-[#f7fbff] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <div
            className="rounded-3xl px-8 py-12 md:px-16 md:py-16 flex flex-col items-center text-center gap-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #1a3b5d 0%, #2d5f8f 50%, #3d6d9d 100%)",
            }}
          >
            {/* Декоративный блик */}
            <div
              className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                filter: "blur(60px)",
              }}
            />

            <h2 className="text-[34px] md:text-[50px] font-semibold leading-[1.05] tracking-[-1.5px] text-white max-w-[600px]">
              {dict.title1}
              <br />
              {dict.title2}
              <br />
              {dict.title3}
            </h2>

            <div className="flex flex-col items-center gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=77760320388&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C+%D0%B2%D1%8B%D0%B5%D0%B7%D0%B4+%D0%B2%D1%80%D0%B0%D1%87%D0%B0&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-[60px] px-10 rounded-xl bg-[#3eb87d] text-white text-[17px] font-medium hover:bg-[#35a56e] transition-colors whitespace-pre-line text-center leading-tight"
              >
                {/* WhatsApp иконка */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {dict.button}
              </a>
              <p className="text-sm text-white/50">
                {dict.sub}
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
