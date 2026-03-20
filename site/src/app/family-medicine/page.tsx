import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Family Medicine",
  description:
    "Comprehensive family medicine care in Wicker Park, Chicago. Board-certified physicians offering preventive health, wellness consultations, and management of acute and chronic conditions.",
};

export default function FamilyMedicinePage() {
  return (
    <ServicePageLayout
      title="Family Medicine"
      image="/images/family-medicine.jpg"
      imageAlt="Family medicine consultation"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Fragmented Care That Misses the Whole Picture
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Most people see a different provider every time they get sick. Without a
        physician who knows your history, your medications, and your goals, small
        issues go unnoticed until they become serious ones. Chronic conditions
        pile up. Preventive screenings get skipped. And patients are left
        managing their own care between disconnected appointments.
      </p>
      <p className="text-gray-600 mb-8">
        Primary care should be the foundation of your health, not an afterthought.
        When that foundation is solid, everything else gets easier: fewer ER
        visits, earlier diagnoses, better management of ongoing conditions, and a
        provider who actually knows you.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: One Practice for Your Entire Family
      </h2>
      <p className="text-gray-600 mb-4">
        At M. Chavez MD, SC, Dr. Chavez and Karen Corona, FNP-C provide
        comprehensive primary care for patients of all ages in Wicker Park. Our
        integrative approach starts with a thorough evaluation including a focused
        history, physical exam, and review of your medical records. From there,
        we build an individualized treatment plan that addresses your current
        needs and long-term wellness goals.
      </p>
      <p className="text-gray-600 mb-6">
        We go beyond treating symptoms. Complementary and alternative treatment
        options are routinely offered alongside standard medical recommendations,
        because we believe optimal health often requires more than a prescription.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What We Treat and Manage
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Annual physicals and comprehensive wellness exams",
          "Preventive health screenings and immunizations",
          "Chronic disease management (diabetes, hypertension, high cholesterol)",
          "Acute illness and injury evaluation",
          "Back pain, neck pain, and neuropathy care",
          "Acne and common dermatological concerns",
          "Weight loss management",
          "Travel medicine and vaccinations",
          "Referral coordination to trusted specialists",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What to Expect at Your Visit
      </h2>
      <p className="text-gray-600 mb-4">
        New patients receive a complete intake evaluation. We review your full
        medical history, current medications, and any outstanding health concerns.
        From that foundation, we establish a clear picture of your health and
        build a plan that is realistic, evidence-based, and tailored to you.
      </p>
      <p className="text-gray-600 mb-8">
        Follow-up visits are focused and efficient. We respect your time, take
        your appointment on time, and provide direct answers. Walk-ins are welcome
        for urgent concerns, and Saturday morning hours are available for patients
        who cannot get away during the week.
      </p>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Make M. Chavez MD Your Medical Home
        </h3>
        <p className="text-gray-600 mb-5">
          Whether you need a primary care physician for the first time or are
          looking for a practice that actually listens, we are accepting new
          patients. Call us or book online today.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Schedule an Appointment
        </Link>
      </div>
    </ServicePageLayout>
  );
}
