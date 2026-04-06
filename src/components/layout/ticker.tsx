const items = (text: string) => Array(10).fill(text);

export function Ticker({ text }: { text: string }) {
  return (
    <div className="w-full overflow-hidden bg-[#1a3b5d] py-2">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 25s linear infinite" }}
      >
        {items(text).map((t, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-[13px] font-medium text-white/80">
            {t}
            <span className="text-[#3d6d9d]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
