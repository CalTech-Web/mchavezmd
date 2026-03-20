import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Women's Health",
  description:
    "Comprehensive women's healthcare in Wicker Park, Chicago. From gynecology services and family planning to preventive care, we offer care throughout every stage of life.",
};

export default function WomensWellnessPage() {
  return (
    <ServicePageLayout
      title="Women's Health"
      image="/images/womens-health.jpg"
      imageAlt="Women's health consultation"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Women's Health Needs Change, and Providers Often Do Not Keep Up
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        A woman's healthcare needs shift significantly across the lifespan. What
        matters at 25 is not what matters at 45 or 65. Hormonal changes, family
        planning decisions, gynecological concerns, and cancer screening
        requirements all evolve, and navigating them without a knowledgeable,
        consistent provider is harder than it should be.
      </p>
      <p className="text-gray-600 mb-8">
        Many women piece together their care across multiple specialists with
        limited coordination. Symptoms get dismissed or delayed. Preventive
        screenings are missed. Questions go unanswered because appointments are
        rushed. At M. Chavez MD, SC, we take a different approach, one that
        centers women's health at every stage.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: Comprehensive Care from Puberty Through Menopause
      </h2>
      <p className="text-gray-600 mb-4">
        Dr. Chavez and Karen Corona, FNP-C bring deep expertise in women's
        health to every visit. Karen's clinical background spans women's health,
        family medicine, inpatient care, and medical weight loss, giving our team
        the range to address the full scope of a woman's health concerns under
        one roof.
      </p>
      <p className="text-gray-600 mb-6">
        We combine evidence-based medicine with attentive, individualized care.
        Whether you are due for a routine well-woman exam, navigating
        perimenopause, managing a hormonal condition, or planning a family, you
        will receive clear information and a plan tailored to your specific
        situation.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Gynecology Services
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Menopause management and alternative hormone therapy",
          "Hormonal disorders, including abnormal uterine bleeding, vaginal atrophy, and hot flashes",
          "Gynecological illness evaluation and treatment",
          "Urinary incontinence assessment and management",
          "Infection diagnosis and treatment",
          "Sexual health and sexual disorder counseling",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Family Planning
      </h2>
      <p className="text-gray-600 mb-4">
        Whether you are planning to start a family or actively working to
        prevent pregnancy, informed decision-making starts with an honest
        conversation. We provide comprehensive family planning support so you can
        choose the approach that fits your life, not a one-size-fits-all protocol.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Pregnancy testing and early counseling",
          "Birth control consultation and education across all method types",
          "Emergency contraception",
          "STD and HIV testing",
          "Cancer screening and risk counseling",
          "Family planning education",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Preventive Care and Screenings
      </h2>
      <p className="text-gray-600 mb-4">
        Preventive screenings catch problems early, when they are most treatable.
        We follow established guidelines for women's cancer screening and
        coordinate with specialists when needed, so nothing falls through the
        cracks.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Well-woman exams",
          "Pap smears and cervical cancer screening",
          "Colposcopy",
          "Clinical breast exams",
          "Mammogram referrals",
          "Pelvic exams",
          "IUD insertion and management",
          "Osteoporosis screening and prevention",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Comprehensive Women's Care, All in One Place
        </h3>
        <p className="text-gray-600 mb-5">
          From your annual well-woman exam to managing complex hormonal
          conditions, our team is here for every stage of your health. Schedule
          your visit today.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Book Your Appointment
        </Link>
      </div>
    </ServicePageLayout>
  );
}
