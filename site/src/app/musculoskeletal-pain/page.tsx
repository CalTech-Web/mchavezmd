import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Musculoskeletal Pain",
  description:
    "Holistic musculoskeletal pain management in Wicker Park, Chicago. Dr. Chavez offers supportive, integrative care to treat joint and muscle pain and help you regain function.",
};

export default function MusculoskeletalPainPage() {
  return (
    <ServicePageLayout
      title="Musculoskeletal Pain"
      image="/images/musculoskeletal-pain.jpg"
      imageAlt="Musculoskeletal pain treatment"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Pain That Becomes Part of Your Routine
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Musculoskeletal pain has a way of becoming invisible to everyone except
        the person living with it. A shoulder that never fully recovered. A back
        that tightens every morning. Hip pain that flares with any sustained
        walking. Over time, patients adapt around the pain, cutting back on
        activities, relying on anti-inflammatories, and quietly accepting a
        diminished quality of life.
      </p>
      <p className="text-gray-600 mb-4">
        Pain affecting the muscles, joints, tendons, and connective tissue is
        among the most common reasons people seek medical care. It is also among
        the most undertreated. Standard approaches often stop at diagnosis and a
        prescription, leaving the underlying dysfunction unaddressed.
      </p>
      <p className="text-gray-600 mb-8">
        The body has a remarkable capacity to heal when given the right
        conditions. The goal of musculoskeletal care at M. Chavez MD, SC is to
        create those conditions through precise diagnosis, targeted treatment,
        and a plan that addresses the root cause rather than just the symptom.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: Integrative, Whole-Person Care
      </h2>
      <p className="text-gray-600 mb-4">
        Dr. Chavez approaches musculoskeletal pain with the same methodology he
        applies to non-operative orthopedics: thorough evaluation, accurate
        diagnosis, and a layered treatment plan that does not default to
        medication as the first and only answer.
      </p>
      <p className="text-gray-600 mb-6">
        We draw from a broad range of evidence-based and integrative therapies,
        selecting the combination that fits each patient&apos;s specific
        presentation. This may include targeted injections, regenerative
        treatments, physical therapy coordination, and guidance on movement,
        posture, and lifestyle factors that perpetuate pain cycles.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Conditions We Evaluate and Treat
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Shoulder pain (rotator cuff, bursitis, impingement)",
          "Lower back pain, including muscle strain and lumbar conditions",
          "Hip pain and trochanteric bursitis",
          "Elbow pain (tennis elbow, golfer's elbow)",
          "Wrist and hand pain including carpal tunnel syndrome",
          "Ankle and foot pain (plantar fasciitis, Achilles tendinopathy)",
          "Neck pain and cervicogenic headaches",
          "Fibromyalgia and widespread chronic pain",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Treatment Options
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Joint and soft tissue injections (corticosteroid, hyaluronic acid)",
          "PRP (Platelet-Rich Plasma) regenerative therapy",
          "Physical therapy referral and coordination",
          "Dry needling and trigger point management",
          "Activity modification and ergonomic counseling",
          "Anti-inflammatory strategies including nutritional guidance",
          "Imaging referrals for accurate diagnosis",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What to Expect
      </h2>
      <p className="text-gray-600 mb-8">
        Your first visit focuses on understanding the full picture of your pain,
        including its history, what makes it better or worse, and how it is
        affecting your function. Dr. Chavez will conduct a hands-on physical
        examination and may recommend imaging to confirm a diagnosis. From that
        point, you will have a clear treatment plan with defined goals and
        realistic milestones. We track your progress and adjust the plan as
        needed to keep you moving forward.
      </p>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          You Do Not Have to Keep Adapting Around Pain
        </h3>
        <p className="text-gray-600 mb-5">
          Chronic musculoskeletal pain is treatable. Schedule an evaluation with
          Dr. Chavez and start building a plan that targets the source, not just
          the symptoms.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Schedule an Evaluation
        </Link>
      </div>
    </ServicePageLayout>
  );
}
