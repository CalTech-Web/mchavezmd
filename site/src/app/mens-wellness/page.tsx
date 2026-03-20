import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Men's Health",
  description:
    "Individualized men's healthcare in Wicker Park, Chicago. Preventive screening, hormone therapy, and treatment for conditions unique to men's health.",
};

export default function MensWellnessPage() {
  return (
    <ServicePageLayout
      title="Men's Health"
      image="/images/mens-health.jpg"
      imageAlt="Men's health consultation"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Men Delay Care, and It Costs Them
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Men are statistically less likely than women to seek medical attention,
        less likely to have a primary care provider, and more likely to present
        for care later in the course of a condition. The consequences show up in
        the data: higher rates of preventable illness, later-stage cancer
        diagnoses, and shorter average lifespans compared to women.
      </p>
      <p className="text-gray-600 mb-4">
        Part of this is cultural. Part of it is that many men do not have a
        provider they trust or feel comfortable talking to about concerns that
        feel personal. Low testosterone, erectile dysfunction, and prostate health
        are conditions that significantly affect quality of life, but they are
        also conditions that men often suffer through quietly rather than bring up
        at an appointment.
      </p>
      <p className="text-gray-600 mb-8">
        At M. Chavez MD, SC, we provide a straightforward, judgment-free
        environment where men can get answers, get screened, and get treated.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: Direct, Individualized Men's Healthcare
      </h2>
      <p className="text-gray-600 mb-4">
        Dr. Chavez understands that men's anatomical and physiological
        differences affect how conditions present, progress, and should be
        treated. Our men's health program addresses both the conditions that are
        unique to men and the general health concerns that affect men differently
        than women.
      </p>
      <p className="text-gray-600 mb-6">
        We offer preventive screenings for illnesses with higher male incidence,
        counseling on sexually transmitted infections and disease prevention,
        hormone evaluation and management, and treatment for the conditions that
        most commonly affect men's physical and mental wellbeing.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Conditions We Treat
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          {
            condition: "Low Testosterone (Hypogonadism)",
            detail: "Evaluation of testosterone levels with a full hormonal panel, followed by individualized hormone therapy when clinically appropriate.",
          },
          {
            condition: "Erectile Dysfunction (ED)",
            detail: "Assessment of underlying causes, including vascular, hormonal, and psychological factors, with targeted treatment options.",
          },
          {
            condition: "Male Menopause (Andropause)",
            detail: "Recognition and management of the gradual hormonal decline that affects energy, mood, body composition, and libido in aging men.",
          },
          {
            condition: "Benign Prostatic Hyperplasia (BPH)",
            detail: "Evaluation and management of prostate enlargement causing urinary symptoms, with referral to urology when needed.",
          },
          {
            condition: "Male Infertility",
            detail: "Initial evaluation and referral coordination for men experiencing fertility challenges.",
          },
          {
            condition: "Peyronie's Disease",
            detail: "Assessment and management of penile curvature caused by fibrous scar tissue formation.",
          },
          {
            condition: "Prostate Cancer Screening",
            detail: "PSA testing and digital rectal exam with age-appropriate screening recommendations.",
          },
          {
            condition: "Premature Ejaculation",
            detail: "Clinical evaluation and treatment including behavioral strategies and, when appropriate, medication.",
          },
        ].map((item) => (
          <li key={item.condition} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">
              <strong className="text-gray-900">{item.condition}:</strong>{" "}
              {item.detail}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Preventive Screenings for Men
      </h2>
      <p className="text-gray-600 mb-4">
        Screening saves lives. Many of the conditions with the highest mortality
        rates in men are highly treatable when caught early and nearly always
        fatal when caught late. Our preventive screening program follows
        evidence-based guidelines and is personalized based on your age, family
        history, and risk factors.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Cardiovascular disease and cholesterol screening",
          "Lung cancer screening (for current and former smokers)",
          "Prostate cancer screening (PSA)",
          "Colorectal cancer screening coordination",
          "Hypertension and metabolic syndrome evaluation",
          "HIV and STI testing",
          "Comprehensive annual wellness exams",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Take Your Health Seriously. We Will Too.
        </h3>
        <p className="text-gray-600 mb-5">
          Whether you are due for a physical, concerned about a specific
          condition, or just want to know where you stand, schedule a visit. No
          judgment, no runaround. Just straightforward care.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Book an Appointment
        </Link>
      </div>
    </ServicePageLayout>
  );
}
