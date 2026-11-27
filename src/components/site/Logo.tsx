import Link from "next/link";

/**
 * Brand guide lockups (page 8), extracted from Melissa's style guide PDF.
 * Light surfaces get the navy and teal lockup; dark surfaces get white and teal.
 * The link carries the accessible name, so both images are decorative.
 */
export default function Logo({ variant = "auto", className = "" }: { variant?: "auto" | "on-dark"; className?: string }) {
  return (
    <Link href="/" aria-label="The Postpartum OT, home" className={`inline-block shrink-0 ${className}`}>
      {variant === "auto" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/brand/logo-lockup-navy-teal.png"
          alt=""
          width={967}
          height={236}
          fetchPriority="high"
          className="logo-on-light block h-[var(--logo-h)] w-auto"
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-lockup-white-teal.png"
        alt=""
        width={1316}
        height={321}
        loading="eager"
        className={`${variant === "auto" ? "logo-on-dark" : "block"} h-[var(--logo-h)] w-auto`}
      />
    </Link>
  );
}
