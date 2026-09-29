import Link from "next/link";
import type { ComponentProps } from "react";

const pillClass =
  "inline-flex items-center rounded-lg bg-pill px-3.5 py-2 text-[15px] font-medium leading-none text-ink transition-colors duration-200 hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

type PillProps = {
  href: string;
  children: React.ReactNode;
  /** Opens in a new tab (for external links and files). */
  external?: boolean;
} & Omit<ComponentProps<"a">, "href">;

export function Pill({ href, children, external, className = "", ...rest }: PillProps) {
  const classes = `${pillClass} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
