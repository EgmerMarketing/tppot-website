'use client';

export default function EmailCapture({ buttonText = 'Send Me the Guide', note = 'Join 600+ clinicians. Unsubscribe anytime.' }: { buttonText?: string; note?: string }) {
  return (
    <form className="flex flex-col sm:flex-row gap-3 justify-center" onSubmit={e => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-lg text-[#0A3660] text-sm focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Email address"
      />
      <button type="submit" className="bg-[#0A3660] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#082c50] transition-colors whitespace-nowrap">
        {buttonText}
      </button>
      {note && <p className="text-xs text-white/70 mt-2 w-full text-center">{note}</p>}
    </form>
  );
}
