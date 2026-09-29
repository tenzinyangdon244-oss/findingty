import { site } from "@/content/site";
import { Pill } from "./Pill";

export function TopBar() {
  return (
    <header className="flex flex-wrap items-start justify-between gap-3">
      <Pill href="/">{site.name}</Pill>
      <nav aria-label="Primary" className="flex flex-wrap justify-end gap-2">
        <Pill href={site.links.resume} external>
          Resume
        </Pill>
        <Pill href={site.links.linkedin} external>
          LinkedIn
        </Pill>
        <Pill href={`mailto:${site.links.email}`}>Email</Pill>
      </nav>
    </header>
  );
}
