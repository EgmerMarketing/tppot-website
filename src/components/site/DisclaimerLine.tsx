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
      className={`mt-4 max-w-[70ch] font-serif text-lg font-normal leading-[1.6] ${
        tone === "onDark" ? "text-white" : "text-black"
      }`}
    >
      {children ?? DISCLAIMER_SHORT}
    </p>
  );
}
