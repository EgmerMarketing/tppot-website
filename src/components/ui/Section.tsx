type SectionVariant = "cream" | "teal-light" | "white" | "navy-dark";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: SectionVariant;
}

const variantStyles: Record<SectionVariant, string> = {
  cream: "bg-[#FAF7F2]",
  "teal-light": "bg-[#E6F0F0]",
  white: "bg-white",
  "navy-dark": "bg-[#061D37] text-[#FAF7F2]",
};

export default function Section({
  children,
  className = "",
  id,
  variant = "cream",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${variantStyles[variant]} ${className}`}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}
