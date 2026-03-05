import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Medical Weight Loss | GLP-1 Therapy",
  description:
    "Physician-supervised medical weight loss using GLP-1 receptor agonists including Semaglutide and Tirzepatide. Personalized treatment plans at M. Chavez MD in Wicker Park, Chicago.",
};

export default function WeightLossPage() {
  return (
    <ServicePageLayout
      title="Medical Weight Loss"
      image="/images/immediate-care.jpg"
      imageAlt="Medical weight loss consultation"
    >
      <p className="text-lg text-gray-600 mb-6">
        Medical weight management at M. Chavez MD, SC is a physician-supervised
        program combining FDA-cleared GLP-1 receptor agonist therapy with
        individualized treatment planning. Unlike commercial programs, every
        step is guided by a board-certified family physician with 28+ years of
        clinical experience.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        GLP-1 Receptor Agonist Therapy
      </h2>
      <p className="text-gray-600 mb-4">
        Glucagon-like peptide-1 (GLP-1) receptor agonists are a class of
        medications that act on receptors in the brain and gastrointestinal
        tract to regulate appetite, slow gastric emptying, and increase
        satiety. They also improve insulin sensitivity and increase energy
        expenditure, making them clinically effective for sustained weight
        reduction.
      </p>
      <p className="text-gray-600 mb-6">
        We offer two evidence-based GLP-1 medications, selected and dosed
        according to each patient&apos;s medical history, metabolic profile, and
        treatment goals:
      </p>

      <ul className="space-y-3 mb-8">
        {[
          {
            name: "Semaglutide",
            detail:
              "A once-weekly injectable GLP-1 agonist shown in clinical trials to produce significant reductions in body weight over 68 weeks.",
          },
          {
            name: "Tirzepatide",
            detail:
              "A dual GLP-1 and GIP receptor agonist offering an enhanced hormonal response, associated with greater average weight loss compared to GLP-1 monotherapy.",
          },
        ].map((med) => (
          <li key={med.name} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">
              <strong className="text-gray-900">{med.name}</strong> - {med.detail}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Who Is a Candidate?
      </h2>
      <p className="text-gray-600 mb-4">
        Medical weight loss therapy is appropriate for adults who meet the
        following clinical criteria:
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Body mass index (BMI) of 27 or greater",
          "Prior unsuccessful attempts at weight reduction through diet and exercise alone",
          "No contraindications to GLP-1 receptor agonist therapy (including personal or family history of medullary thyroid carcinoma or MEN 2)",
          "Commitment to monthly follow-up appointments and lifestyle modification",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What to Expect
      </h2>
      <p className="text-gray-600 mb-4">
        Our program is structured around monthly provider visits that include:
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Initial evaluation with full medical history and metabolic assessment",
          "Individualized medication selection and starting dose",
          "Monthly weight and progress assessments with dose titration as clinically indicated",
          "Ongoing monitoring for tolerability and side effects",
          "Guidance on nutritional habits and sustainable lifestyle changes",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Common Side Effects
      </h2>
      <p className="text-gray-600 mb-4">
        GLP-1 receptor agonists are generally well-tolerated. The most
        frequently reported adverse effects are gastrointestinal in nature
        and typically resolve as the body adjusts to the medication:
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Nausea and vomiting, particularly during the initial dose titration period",
          "Diarrhea or constipation",
          "Reduced appetite (an intended therapeutic effect)",
          "Mild injection site reactions",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Timeline and Results
      </h2>
      <p className="text-gray-600 mb-6">
        Clinical response varies by individual. Many patients notice appetite
        suppression within the first several weeks of treatment, while
        measurable weight loss typically becomes evident over one to three
        months. Outcomes are optimized when medication adherence is combined
        with consistent lifestyle modifications. Dr. Chavez will work with you
        to set realistic, clinically appropriate goals and adjust your plan as
        needed.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Program Pricing
      </h2>
      <p className="text-gray-600">
        Monthly medication costs typically begin around $350, with variation
        based on the specific medication prescribed and dosage. Pricing is
        discussed in detail during your initial consultation. This is a
        self-pay program and is not billed through insurance.
      </p>
    </ServicePageLayout>
  );
}
