import Image from "next/image";

const frames = {
  teal: "portrait-frame-teal bg-[#469695]",
  navy: "portrait-frame-navy bg-[#0A3660]",
  sage: "portrait-frame-sage bg-[#A8B8A2]",
  cream: "portrait-frame-cream bg-[#F5F0E8]",
} as const;

export default function Portrait({
  src,
  alt,
  sizes,
  priority = false,
  frame = "teal",
  wide = false,
  position = "center 18%",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  frame?: keyof typeof frames;
  wide?: boolean;
  position?: string;
}) {
  return (
    <div className={`portrait relative w-full self-start pr-[18px] pb-[18px] ${wide ? "max-w-[318px] sm:max-w-[398px]" : "max-w-[298px]"}`}>
      <div className="relative aspect-[4/5] w-full">
        <div aria-hidden="true" className={`absolute inset-0 translate-x-[18px] translate-y-[18px] rounded-[28px] ${frames[frame]}`} />
        <div className="absolute inset-0 overflow-hidden rounded-[28px]">
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
    </div>
  );
}
