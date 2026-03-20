import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Knee Pain Treatment",
  description:
    "Comprehensive knee pain evaluations and treatment plans in Wicker Park, Chicago. Dr. Chavez offers personalized, non-surgical care to alleviate discomfort and restore mobility.",
};

export default function KneePainPage() {
  return (
    <ServicePageLayout
      title="Knee Pain"
      image="/images/knee-pain.jpg"
      imageAlt="Knee pain treatment"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Knee Pain That Gets in the Way of Everything
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Knee pain does not stay in the knee. It changes how you walk, how you
        sleep, and what you are willing to do each day. Stairs become a second
        thought. Long walks get cut short. Activities you used to enjoy start
        disappearing from your routine one by one.
      </p>
      <p className="text-gray-600 mb-4">
        The knee is one of the most complex and load-bearing joints in the body.
        Every step transfers force through it. When something is wrong, whether
        from an old injury, years of wear, or an acute event, the pain signals
        that the joint is under stress it cannot handle on its own.
      </p>
      <p className="text-gray-600 mb-8">
        Many patients are told surgery is their only option. That is rarely true.
        With the right evaluation and targeted treatment, most knee pain can be
        managed effectively without going under the knife.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: Non-Surgical, Evidence-Based Knee Care
      </h2>
      <p className="text-gray-600 mb-4">
        Dr. Chavez specializes in non-operative orthopedics with 28 years of
        experience treating knee conditions. Every patient starts with a thorough
        evaluation to identify the underlying cause of their pain, because the
        right treatment depends entirely on an accurate diagnosis.
      </p>
      <p className="text-gray-600 mb-6">
        From there, we build a personalized treatment plan that may include
        in-office joint injections, regenerative therapies, physical therapy
        referrals, and guided lifestyle modifications. Our goal is to reduce your
        pain, restore function, and help you avoid surgery whenever possible.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Conditions We Evaluate and Treat
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Osteoarthritis of the knee",
          "Ligament sprains and strains (ACL, MCL, LCL)",
          "Meniscus tears and irritation",
          "Patellofemoral pain syndrome (runner's knee)",
          "Bursitis and tendinitis",
          "Post-surgical knee rehabilitation",
          "Chronic knee swelling and inflammation",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Treatment Options Available
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Corticosteroid injections for acute inflammation and pain",
          "Hyaluronic acid (viscosupplementation) injections for osteoarthritis",
          "PRP (Platelet-Rich Plasma) therapy to support natural healing",
          "Diagnostic imaging referrals (X-ray, MRI)",
          "Physical therapy coordination",
          "Activity modification and biomechanical guidance",
          "Surgical referral when clinically indicated",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What Happens at Your First Visit
      </h2>
      <p className="text-gray-600 mb-8">
        Your first visit includes a detailed history of your knee symptoms, a
        physical examination of the joint, and a review of any prior imaging or
        treatment. If imaging is needed, we will refer you promptly. If you are a
        candidate for an in-office injection, many patients receive treatment at
        the same visit. Dr. Chavez will walk you through your options clearly so
        you can make an informed decision about your care.
      </p>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Stop Managing Pain and Start Treating It
        </h3>
        <p className="text-gray-600 mb-5">
          You do not have to live with knee pain or accept surgery as your only
          path forward. Schedule a knee evaluation with Dr. Chavez and get a real
          plan.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Book a Knee Evaluation
        </Link>
      </div>
    </ServicePageLayout>
  );
}
