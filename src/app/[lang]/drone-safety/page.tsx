import { DroneSafetySection } from "@/components/sections/drone-safety";
import { getDictionary } from "@/dictionaries";
import type { Lang } from "@/dictionaries";

export default async function DroneSafetyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);

  return (
    <main>
      <DroneSafetySection dict={dict.droneSafety} />
    </main>
  );
}
