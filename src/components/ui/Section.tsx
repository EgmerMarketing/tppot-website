type SectionVariant = "cream" | "white" | "teal" | "teal-deep" | "navy";
type SectionWidth = "wide" | "prose";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
  width?: SectionWidth;
  "aria-labelledby"?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  cream: "band-cream bg-cream text-black",
  white: "band-white bg-white text-black",
  /* Brand teal. White text here must be a large heading. */
  teal: "band-teal bg-teal text-white",
  /* Dark teal #2f6b6a. White text at body size is 6.12:1. */
  "teal-deep": "band-teal-deep bg-teal-deep text-white",
  navy: "band-navy bg-navy text-white",
};

const widthStyles: Record<SectionWidth, string> = {
  wide: "max-w-[1120px]",
  prose: "max-w-[760px]",
};

export default function Section({
  children,
  className = "",
  id,
  variant = "cream",
  width = "wide",
  "aria-labelledby": labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-12 md:py-16 ${variantStyles[variant]} ${className}`}
    >
      <div className={`mx-auto px-6 md:px-8 ${widthStyles[width]}`}>{children}</div>
    </section>
  );
}
