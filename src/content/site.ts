/**
 * All editable site content lives here.
 * Change text, links and image paths in this file — no page code needs to change.
 * Images go in /public (e.g. /public/images/castr/cover.jpg → "/images/castr/cover.jpg").
 */

export const site = {
  name: "Tenzin Yangdon",
  metaTitle: "Tenzin Yangdon — UI/UX Design Portfolio",
  metaDescription: "UI/UX design portfolio of Tenzin Yangdon.",

  links: {
    resume: "/resume.pdf",
    linkedin: "https://www.linkedin.com/in/your-profile",
    email: "hello@example.com",
  },

  /** The three toggles in the intro. The first one is open by default. */
  intro: [
    {
      label: "Who I am",
      text: "I'm a UI/UX designer shaping clear, considered digital experiences for people and brands that care about the details.",
    },
    {
      label: "Interested in",
      text: "Fashion and culture, design systems, and the small interactions that make a product feel effortless to use.",
    },
    {
      label: "Working towards",
      text: "Designing products end to end — from early research and ideation to polished interfaces that ship.",
    },
  ],

  selectedWorkHeading: "Selected Work",
};

export type CaseStudySection = {
  heading: string;
  body: string[];
  image?: { src: string; alt: string };
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short line shown under the title on the case study page. */
  summary: string;
  /** Image used on the home page card. Portrait (4:5) works best. */
  cardImage: { src: string; alt: string };
  meta: { label: string; value: string }[];
  sections: CaseStudySection[];
};

const lorem =
  "Placeholder text. Replace this paragraph with your own writing about this stage of the project — what you did, why, and what you learned.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "castr",
    title: "Castr",
    summary: "A UX case study for a fashion casting platform.",
    cardImage: { src: "/images/castr/cover.svg", alt: "Castr project cover" },
    meta: [
      { label: "Role", value: "UX / UI Designer" },
      { label: "Timeline", value: "Placeholder" },
      { label: "Tools", value: "Figma" },
    ],
    sections: [
      { heading: "Overview", body: [lorem], image: { src: "/images/castr/overview.svg", alt: "Castr overview" } },
      { heading: "Problem", body: [lorem], image: { src: "/images/castr/problem.svg", alt: "Castr problem" } },
      { heading: "Process", body: [lorem, lorem], image: { src: "/images/castr/process.svg", alt: "Castr process" } },
      { heading: "Solution", body: [lorem], image: { src: "/images/castr/solution.svg", alt: "Castr solution" } },
      { heading: "Outcome", body: [lorem], image: { src: "/images/castr/outcome.svg", alt: "Castr outcome" } },
    ],
  },
  {
    slug: "oakville-fashion-show",
    title: "Oakville Fashion Show",
    summary: "A client website redesign.",
    cardImage: { src: "/images/oakville/cover.svg", alt: "Oakville Fashion Show project cover" },
    meta: [
      { label: "Role", value: "Web Designer" },
      { label: "Client", value: "Oakville Fashion Show" },
      { label: "Timeline", value: "Placeholder" },
    ],
    sections: [
      { heading: "Overview", body: [lorem], image: { src: "/images/oakville/overview.svg", alt: "Oakville Fashion Show overview" } },
      { heading: "Problem", body: [lorem], image: { src: "/images/oakville/problem.svg", alt: "Oakville Fashion Show problem" } },
      { heading: "Process", body: [lorem, lorem], image: { src: "/images/oakville/process.svg", alt: "Oakville Fashion Show process" } },
      { heading: "Solution", body: [lorem], image: { src: "/images/oakville/solution.svg", alt: "Oakville Fashion Show solution" } },
      { heading: "Outcome", body: [lorem], image: { src: "/images/oakville/outcome.svg", alt: "Oakville Fashion Show outcome" } },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
