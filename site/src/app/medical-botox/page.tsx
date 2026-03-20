import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Medical Botox",
  description:
    "Medical Botox treatments in Wicker Park, Chicago for migraines, hyperhidrosis, and more. Board-certified family physician Dr. Chavez offers therapeutic Botox beyond cosmetic use.",
};

export default function MedicalBotoxPage() {
  return (
    <ServicePageLayout
      title="Medical Botox"
      image="/images/medical-botox.jpg"
      imageAlt="Medical Botox treatment"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Conditions That Derail Your Day, Every Day
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Chronic migraines are not ordinary headaches. They can last for hours or
        days, making it impossible to work, be present with your family, or
        function normally. Patients often cycle through medications that carry
        significant side effects and provide only partial relief. The same pattern
        plays out with hyperhidrosis, where excessive sweating affects
        professional situations, social confidence, and daily comfort regardless
        of how carefully patients manage their routines.
      </p>
      <p className="text-gray-600 mb-8">
        These are medical conditions. They deserve medical solutions. For many
        patients, Botox has proven to be exactly that.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: Therapeutic Botox with a Clinical Focus
      </h2>
      <p className="text-gray-600 mb-4">
        Most people associate Botox with cosmetic procedures. But botulinum toxin
        has a well-established medical track record that goes far beyond
        aesthetics. At M. Chavez MD, SC, Dr. Chavez offers therapeutic Botox
        injections for conditions where nerve and muscle activity are contributing
        to pain or dysfunction.
      </p>
      <p className="text-gray-600 mb-6">
        Botox works by temporarily blocking the nerve signals that trigger
        targeted muscle contractions and gland activity. In the case of migraines,
        it interrupts the pain cascade before it starts. For hyperhidrosis, it
        stops the nerve signals that cause overactive sweat glands. The result is
        measurable, lasting relief, typically three to four months per treatment
        cycle.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Conditions Treated with Medical Botox
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          {
            condition: "Chronic Migraines",
            detail:
              "For adults with 15 or more headache days per month, Botox is FDA-approved to reduce migraine frequency. Injections are placed at key points around the head and neck every 12 weeks.",
          },
          {
            condition: "Hyperhidrosis (Excessive Sweating)",
            detail:
              "Botox injections into the underarms, palms, or soles of the feet significantly reduce sweating in patients who have not found relief from antiperspirants or other treatments.",
          },
          {
            condition: "Muscle Spasticity",
            detail:
              "Botox can reduce involuntary muscle contractions and stiffness in patients with spasticity related to neurological conditions.",
          },
          {
            condition: "TMJ Disorder",
            detail:
              "Injections into the masseter muscle relieve jaw tension and grinding-related pain for patients with temporomandibular joint dysfunction.",
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
        What the Treatment Involves
      </h2>
      <p className="text-gray-600 mb-4">
        Medical Botox is performed in-office and takes 15 to 30 minutes
        depending on the area being treated. A fine needle is used to deliver
        small amounts of botulinum toxin to precise locations. Most patients
        tolerate the procedure easily. There is no downtime and you can return to
        normal activity immediately.
      </p>
      <p className="text-gray-600 mb-8">
        Results take effect within one to two weeks and typically last three to
        four months. Follow-up treatments are scheduled on a regular cycle to
        maintain the benefit. Dr. Chavez will review your full medical history at
        your consultation to confirm you are a good candidate and determine the
        appropriate dosing and injection sites for your condition.
      </p>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Ready to Discuss Whether Medical Botox Is Right for You?
        </h3>
        <p className="text-gray-600 mb-5">
          If migraines, hyperhidrosis, or another condition is affecting your
          quality of life, schedule a consultation with Dr. Chavez. We will
          review your history and determine whether therapeutic Botox is an
          appropriate option.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Schedule a Consultation
        </Link>
      </div>
    </ServicePageLayout>
  );
}
