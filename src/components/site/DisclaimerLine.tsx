import { DISCLAIMER_SHORT } from "@/lib/site";

export default function DisclaimerLine({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <p className="mt-4 max-w-3xl font-serif text-base leading-relaxed text-black">
      {children ?? DISCLAIMER_SHORT}
    </p>
  );
}
