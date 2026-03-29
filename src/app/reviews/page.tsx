import type { Metadata } from "next";
import Image from "next/image";
import ReviewFunnel from "@/components/reviews/ReviewFunnel";

export const metadata: Metadata = {
  title: "Leave a Review | The Postpartum OT",
  robots: { index: false, follow: false },
};

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo-primary.png"
            alt="The Postpartum OT"
            width={200}
            height={60}
            priority
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm shadow-[#0A3660]/4 p-8">
          <ReviewFunnel
            businessName="The Postpartum OT"
            googleReviewUrl="https://g.page/r/placeholder/review"
            feedbackEmail="hello@thepostpartumot.com"
            accentColor="#469695"
            accentHover="#357574"
          />
        </div>

        <p className="text-center text-xs text-gray-400 mt-6 font-sans">
          Powered by The Postpartum OT
        </p>
      </div>
    </main>
  );
}
