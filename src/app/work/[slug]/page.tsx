import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/TopBar";
import { caseStudies, getCaseStudy, site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return study ? { title: `${study.title} — ${site.name}`, description: study.summary } : {};
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main className="px-4 pb-16 pt-4 sm:px-7 sm:pt-7">
      <TopBar />

      <header className="mt-14 max-w-3xl sm:mt-20">
        <h1 className="font-title text-4xl leading-tight sm:text-6xl">{study.title}</h1>
        <p className="mt-5 text-[clamp(1.375rem,4.8vw,1.875rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
          {study.summary}
        </p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[15px]">
          {study.meta.map((m) => (
            <div key={m.label}>
              <dt className="text-muted">{m.label}</dt>
              <dd className="mt-1">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden bg-pill sm:mt-16">
        <Image
          src={study.cardImage.src}
          alt={study.cardImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {study.sections.map((section) => (
        <section key={section.heading} className="mt-16 sm:mt-24">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12">
            <h2 className="font-title text-2xl sm:text-3xl">{section.heading}</h2>
            <div className="max-w-[640px] space-y-4 text-[17px] leading-relaxed">
              {section.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          {section.image && (
            <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden bg-pill sm:mt-12">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          )}
        </section>
      ))}

      <nav aria-label="Case studies" className="mt-24 flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/10 pt-8">
        <Link href="/" className="text-muted transition-colors hover:text-accent">
          ← Back home
        </Link>
        {next.slug !== study.slug && (
          <Link href={`/work/${next.slug}`} className="text-right transition-colors hover:text-accent">
            <span className="block text-[15px] text-muted">Next project</span>
            <span className="font-title text-2xl">{next.title}</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
