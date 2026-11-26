"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-solid inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 font-sans text-sm font-bold"
    >
      Print or save as PDF
    </button>
  );
}
