export type Brochure = {
  id: string;
  title: string;
  filename: string; // stored under public/brochures/
  size?: string;
  lang?: string; // e.g., EN, ZH
};

export const BROCHURES: Brochure[] = [
  {
    id: "sunrise",
    title: "Sunrise Brochure",
    filename: "sunrise.pdf",
    lang: "EN",
  },
  {
    id: "sunrise2",
    title: "Sunrise Brochure (v2)",
    filename: "sunrise2.pdf",
    lang: "EN",
  },
  {
    id: "sunrise-pv-ess",
    title: "Sunrise PV & ESS Solutions",
    filename: "Sunrise PV & ESS Solutions.pdf",
    lang: "EN",
  },
  {
    id: "solar-water-heater",
    title: "Solar Water Heater Brochure",
    filename: "solar water heater.pdf",
    lang: "EN",
  },
];
