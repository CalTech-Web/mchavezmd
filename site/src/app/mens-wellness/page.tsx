import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Men's Health",
  description:
    "Individualized men's healthcare in Wicker Park, Chicago. Preventive screening, hormone therapy, and treatment for conditions unique to men's health.",
};

export default function MensWellnessPage() {
  return (
    <ServicePageLayout title="Men's Health" image="/images/mens-health.jpg" imageAlt="Men's health consultation">
      <p className="text-lg text-gray-600 mb-6">
        Most agree that Men&apos;s Health refers to both the physical and mental
        problems common to and of concern to men. At M. Chavez MD, SC, we
        understand that men&apos;s anatomical and physiological gender
        differences do matter. In addition, men have a higher incidence of
        illness, increased death rates and a perceived and in many cases a lack
        of access to healthcare.
      </p>
      <p className="text-gray-600 mb-6">
        We offer preventive screening for illnesses common to men including heart
        disease, lung cancer and HIV. In addition, counseling on sexually
        transmitted diseases and disease prevention assists in keeping you out of
        the office.
      </p>
      <p className="text-gray-600 mb-6">
        Our staff provides individualized, holistic, quality care tailored to
        men&apos;s needs.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Conditions We Treat
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Low T (Hypogonadism)",
          "ED (Erectile Dysfunction)",
          "Male Menopause",
          "BPH (Benign Prostatic Hyperplasia)",
          "Male Infertility",
          "Peyronie's Disease",
          "Prostate Cancer screening",
          "Premature Ejaculation",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Preventive Screening
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "Heart disease screening",
          "Lung cancer screening",
          "HIV testing",
          "STD counseling and prevention",
          "Comprehensive wellness exams",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-600">
        Please call to schedule an appointment at our Wicker Park office in
        Chicago.
      </p>
    </ServicePageLayout>
  );
}
