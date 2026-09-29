"use client";

import { useId, useState } from "react";
import { site } from "@/content/site";

export function IntroToggles() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="w-full max-w-[600px]">
      {site.intro.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.label}>
            <h2>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                // Only one section is open at a time; clicking the open one keeps it open.
                onClick={() => setOpenIndex(i)}
                className={`group flex w-full max-w-sm items-center justify-between py-2 text-left text-[17px] transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isOpen ? "text-accent" : "text-muted"
                }`}
              >
                <span>{item.label}</span>
                <PlusIcon open={isOpen} />
              </button>
            </h2>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-5 pt-2 text-[clamp(1.375rem,4.8vw,1.875rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "translate-y-0 opacity-100 delay-100" : "-translate-y-1.5 opacity-0"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={`shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        open ? "rotate-45" : "rotate-0"
      }`}
    >
      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
