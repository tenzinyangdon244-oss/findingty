import { IntroToggles } from "@/components/IntroToggles";
import { TopBar } from "@/components/TopBar";
import { WorkLoop } from "@/components/WorkLoop";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col">
      <div className="px-4 pt-4 sm:px-7 sm:pt-7">
        <TopBar />
        <section className="mt-8 sm:mt-10">
          <IntroToggles />
        </section>
      </div>

      <section aria-labelledby="selected-work" className="mt-auto pb-8 pt-16 sm:pb-10">
        <h2 id="selected-work" className="mb-5 px-4 font-title text-2xl sm:px-7 sm:text-3xl">
          {site.selectedWorkHeading}
        </h2>
        <WorkLoop />
      </section>
    </main>
  );
}
