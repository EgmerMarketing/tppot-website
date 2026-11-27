export default function NeedsMelissa({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-4 rounded-xl border-2 border-dashed border-[#0A3660] bg-[#eef6f6] px-4 py-3 font-sans text-base leading-relaxed text-[#0A3660]">
      {children}
    </p>
  );
}

export function ClinicianReview({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-4 rounded-xl border-2 border-dashed border-[#0A3660] bg-white px-4 py-3 font-sans text-base leading-relaxed text-black">
      {children}
    </p>
  );
}
