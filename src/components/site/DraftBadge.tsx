/** Visible on Vercel preview builds only. Production leaves this off. */
export default function DraftBadge() {
  if (process.env.VERCEL_ENV !== "preview") return null;

  return (
    <p className="draft-badge no-print mt-4 inline-flex min-h-11 items-center rounded-full bg-[#0A3660] px-4 font-sans text-base font-bold text-white">
      Draft for review
    </p>
  );
}
