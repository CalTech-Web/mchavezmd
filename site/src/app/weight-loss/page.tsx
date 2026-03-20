import { Metadata } from "next";
import Link from "next/link";
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
      image="/images/weight-loss.jpg"
      imageAlt="Medical weight loss consultation"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Effort Without Results, and No Clear Medical Path Forward
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Most people who struggle with weight have already tried the standard
        recommendations. They have adjusted their diet, increased their activity,
        and followed programs. Some lose weight and regain it. Others see minimal
        change despite sustained effort. The frustration is real, and so is the
        biology behind it.
      </p>
      <p className="text-gray-600 mb-4">
        Weight is not simply a matter of willpower or consistency. Hormonal
        regulation of appetite, metabolic rate, insulin sensitivity, and energy
        storage all play significant roles in why some people struggle to achieve
        and maintain a healthy weight despite doing the right things. These are
        clinical factors, and they require clinical solutions.
      </p>
      <p className="text-gray-600 mb-8">
        Commercial weight loss programs are not built to address the medical side
        of the equation. A physician-supervised program is.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: Physician-Supervised GLP-1 Therapy
      </h2>
      <p className="text-gray-600 mb-4">
        At M. Chavez MD, SC, medical weight loss is supervised directly by a
        board-certified family physician with 28 years of clinical experience.
        Every step of your treatment, from medication selection to dosing
        adjustments to monitoring, is guided by a physician who knows your
        complete medical history.
      </p>
      <p className="text-gray-600 mb-6">
        Our program uses FDA-cleared GLP-1 receptor agonist medications,
        currently the most clinically proven class of medications available for
        medical weight management. These are not supplements or unproven
        treatments. They are rigorously studied, widely used, and prescribed
        with careful attention to each patient's individual profile.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        GLP-1 Medications We Prescribe
      </h2>
      <p className="text-gray-600 mb-4">
        Glucagon-like peptide-1 (GLP-1) receptor agonists act on receptors in the
        brain and gastrointestinal tract to regulate appetite, slow gastric
        emptying, increase satiety, and improve insulin sensitivity. The result
        is a meaningful reduction in caloric intake and, over time, significant
        and sustained weight loss.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          {
            name: "Semaglutide",
            detail:
              "A once-weekly injectable GLP-1 agonist shown in clinical trials to produce significant reductions in body weight over 68 weeks. Widely used and well-tolerated in most patients.",
          },
          {
            name: "Tirzepatide",
            detail:
              "A dual GLP-1 and GIP receptor agonist offering an enhanced hormonal response. Associated with greater average weight loss compared to GLP-1 monotherapy in head-to-head trials.",
          },
        ].map((med) => (
          <li key={med.name} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">
              <strong className="text-gray-900">{med.name}:</strong> {med.detail}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Who Is a Candidate
      </h2>
      <p className="text-gray-600 mb-4">
        Medical weight loss therapy is appropriate for adults who meet established
        clinical criteria. Candidacy is determined at your initial consultation
        based on a full medical history review.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Body mass index (BMI) of 27 or greater",
          "Prior unsuccessful attempts at weight reduction through diet and exercise alone",
          "No contraindications to GLP-1 therapy (including personal or family history of medullary thyroid carcinoma or MEN 2)",
          "Commitment to monthly follow-up appointments and lifestyle modification",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What the Program Looks Like
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Initial evaluation with full medical history and metabolic assessment",
          "Individualized medication selection and starting dose",
          "Monthly provider visits with weight and progress assessments",
          "Dose titration as clinically indicated to optimize results and tolerability",
          "Ongoing monitoring for side effects and medication response",
          "Guidance on nutritional habits and sustainable lifestyle changes",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Common Side Effects
      </h2>
      <p className="text-gray-600 mb-4">
        GLP-1 receptor agonists are generally well-tolerated. The most commonly
        reported effects are gastrointestinal and typically resolve as your body
        adjusts to the medication during the dose titration period.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          "Nausea and vomiting, most common during initial dose escalation",
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
        Program Pricing
      </h2>
      <p className="text-gray-600 mb-8">
        Monthly medication costs typically begin around $350, with variation based
        on the specific medication and dosage prescribed. Pricing is reviewed in
        detail at your initial consultation. This is a self-pay program and is not
        billed through insurance.
      </p>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Start a Weight Loss Program That Is Actually Medical
        </h3>
        <p className="text-gray-600 mb-5">
          If you have tried the conventional approach and it has not been enough,
          physician-supervised GLP-1 therapy may be the next step. Schedule a
          consultation with Dr. Chavez to find out if you are a candidate.
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
