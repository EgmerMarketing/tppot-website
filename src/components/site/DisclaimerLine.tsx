import { DISCLAIMER_SHORT } from "@/lib/site";

export default function DisclaimerLine({
  children,
  tone = "onLight",
}: {
  children?: React.ReactNode;
  tone?: "onLight" | "onDark";
}) {
  return (
    <p
      className={`mt-4 max-w-3xl font-serif text-base leading-relaxed ${
        tone === "onDark" ? "text-white" : "text-black"
      }`}
    >
      {children ?? DISCLAIMER_SHORT}
    </p>
  );
}
