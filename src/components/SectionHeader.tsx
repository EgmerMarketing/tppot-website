interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  as?: "h2" | "h3";
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  as: Tag = "h2",
}: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <Tag className="text-3xl md:text-4xl text-navy mb-3">{title}</Tag>
      {subtitle && (
        <p className="text-lg text-gray-600 font-serif max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
