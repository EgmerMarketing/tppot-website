import Image from "next/image";

const frames = {
  teal: "bg-[#469695]",
  navy: "bg-[#18355D]",
  sage: "bg-[#A8B8A2]",
  cream: "bg-[#F5F0E8]",
} as const;

export default function Portrait({
  src,
  alt,
  sizes,
  priority = false,
  frame = "teal",
  position = "center 18%",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  frame?: keyof typeof frames;
  position?: string;
}) {
  return (
    <div className="relative w-full max-w-[280px] pr-3 pb-3">
      <div
        aria-hidden="true"
        className={`absolute top-3 right-0 bottom-0 left-3 ${frames[frame]}`}
        style={{ borderRadius: "46% 54% 42% 58% / 40% 48% 52% 60%" }}
      />
      <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: "58% 42% 52% 48% / 46% 58% 42% 54%" }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
}
