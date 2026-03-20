import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Women's Health",
  description:
    "Comprehensive women's healthcare in Wicker Park, Chicago. From gynecology services and family planning to preventive care, we offer care throughout every stage of life.",
};

export default function WomensWellnessPage() {
  return (
    <ServicePageLayout title="Women's Health" image="/images/womens-health.jpg" imageAlt="Women's health consultation">
      <p className="text-lg text-gray-600 mb-6">
        M. Chavez MD, SC acknowledges the varied and unique healthcare needs of
        women. We offer comprehensive care throughout a woman&apos;s journey from
        puberty through menopause. Our selective referral network supports our
        excellent care.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Gynecology Services
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Menopause and alternative hormone therapy",
          "Gynecological illness",
          "Urinary incontinence",
          "Infections",
          "Sexual disorders",
          "Hormonal disorders - abnormal uterine bleeding, vaginal atrophy, hot flashes",
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
        Whether or not you are ready to start a family, we can make sure you are
        prepared, and fully informed of your options. The women served by our
        Family Planning program receive comprehensive and honest information when
        determining and planning for their family.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Pregnancy testing",
          "Cancer screening",
          "STD and HIV testing",
          "Birth control consultation and education",
          "Family planning education",
          "Emergency contraception",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Preventive Care
      </h2>
      <ul className="space-y-3 mb-6">
        {[
          "Well woman exams",
          "Cervical and breast cancer screening and prevention",
          "Mammograms",
          "Pelvic exams",
          "Clinical breast exams",
          "Pap tests",
          "Colposcopy",
          "IUDs",
          "Emergency contraception",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </ServicePageLayout>
  );
}
