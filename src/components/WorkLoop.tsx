import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/content/site";

/** How many times the case studies repeat in each half of the loop — enough to fill very wide screens. */
const REPEATS_PER_HALF = 4;

export function WorkLoop() {
  // The track holds two identical halves; the animation slides it left by exactly one half and restarts, so the loop is seamless.
  const half = Array.from({ length: REPEATS_PER_HALF }, () => caseStudies).flat();
  const cards = [...half, ...half];

  return (
    <div className="w-full overflow-hidden motion-reduce:overflow-x-auto">
      <ul
        className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none sm:gap-4"
        style={{ "--marquee-duration": `${cards.length * 6}s` } as React.CSSProperties}
      >
        {cards.map((study, i) => {
          // Only the first copy of each project is exposed to keyboard and screen reader users.
          const isDuplicate = i >= caseStudies.length;
          return (
            <li key={`${study.slug}-${i}`} aria-hidden={isDuplicate || undefined} className="shrink-0">
              <Link
                href={`/work/${study.slug}`}
                tabIndex={isDuplicate ? -1 : undefined}
                className="group block w-[min(62vw,260px)] sm:w-[clamp(220px,32svh,390px)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-pill">
                  <Image
                    src={study.cardImage.src}
                    alt={study.cardImage.alt}
                    fill
                    sizes="(min-width: 640px) 390px, 62vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-3 text-[15px] font-medium text-muted transition-colors duration-200 group-hover:text-accent sm:text-[17px]">
                  {study.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
