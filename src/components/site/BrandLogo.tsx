import { BRAND } from "@/lib/site-data";

export function BrandLogo({ size = "md" }: { size?: "md" | "lg" }) {
  const top = size === "lg" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl lg:text-[1.35rem]";
  const sub = size === "lg" ? "text-sm sm:text-base" : "text-[10px] sm:text-[11px]";
  return (
    <span className="flex min-w-0 shrink-0 flex-col items-start leading-none" aria-label={BRAND}>
      <span className={`font-black uppercase italic tracking-tight text-brand ${top}`}>Vulcanizare</span>
      <span className={`mt-0.5 font-black uppercase tracking-[0.32em] text-foreground ${sub}`}>
        La Uly · Arad
      </span>
    </span>
  );
}
