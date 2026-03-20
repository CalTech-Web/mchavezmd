import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Regenerative Medicine",
  description:
    "Pioneering regenerative medicine in Wicker Park, Chicago. Dr. Chavez offers PRP therapy and regenerative treatments for soft-tissue repair, chronic pain, and osteoarthritis.",
};

export default function RegenerativeMedicinePage() {
  return (
    <ServicePageLayout
      title="Regenerative Medicine"
      image="/images/regenerative-medicine.jpg"
      imageAlt="Regenerative medicine treatment"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Injuries That Do Not Heal and Pain That Does Not Go Away
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Some injuries heal on their own. Others do not. Soft tissue damage,
        chronic inflammation, and the progressive joint deterioration of
        osteoarthritis are conditions that conventional treatments often manage
        rather than resolve. Pain medications reduce symptoms but do not repair
        the underlying tissue. Rest helps short-term but does not reverse damage.
        Surgery carries real risk and long recovery times.
      </p>
      <p className="text-gray-600 mb-8">
        For patients caught in this cycle, regenerative medicine offers a
        different path. Rather than masking the pain or removing tissue, these
        treatments work with your body&apos;s own biology to stimulate healing at
        the source of the problem.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: Harnessing Your Body&apos;s Natural Healing
      </h2>
      <p className="text-gray-600 mb-4">
        Dr. Chavez has been at the forefront of regenerative medicine in primary
        care for years. At M. Chavez MD, SC, we use evidence-based regenerative
        therapies to treat musculoskeletal conditions, soft-tissue injuries, and
        chronic pain without requiring surgery or prolonged pharmaceutical
        management.
      </p>
      <p className="text-gray-600 mb-6">
        The foundation of our regenerative approach is Platelet-Rich Plasma
        therapy. PRP is derived from your own blood. A small sample is drawn,
        concentrated in a centrifuge to isolate growth factors and platelets, and
        then precisely injected into the damaged tissue. Those growth factors
        signal your body to accelerate the natural repair process, reducing
        inflammation and promoting new tissue formation.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Conditions Treated with Regenerative Medicine
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          "Knee osteoarthritis and cartilage degeneration",
          "Tendon injuries (rotator cuff, Achilles, patellar tendon)",
          "Ligament sprains that fail to heal fully",
          "Chronic joint pain and inflammation",
          "Soft-tissue injuries from sports or repetitive stress",
          "Post-procedural recovery support",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        How PRP Therapy Works
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          {
            step: "Blood Draw",
            detail:
              "A small sample of your blood is drawn in-office, similar to routine lab work.",
          },
          {
            step: "Centrifuge Processing",
            detail:
              "The sample is spun to concentrate the platelet-rich plasma, separating it from red blood cells.",
          },
          {
            step: "Guided Injection",
            detail:
              "The concentrated PRP is injected directly into the affected tissue using precise technique.",
          },
          {
            step: "Healing Response",
            detail:
              "Growth factors in the PRP activate your body&apos;s repair mechanisms over the following weeks.",
          },
        ].map((item) => (
          <li key={item.step} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">
              <strong className="text-gray-900">{item.step}:</strong>{" "}
              {item.detail}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What to Expect
      </h2>
      <p className="text-gray-600 mb-4">
        PRP therapy is performed in-office with no general anesthesia and no
        hospital stay. Most patients experience mild soreness at the injection
        site for a few days following treatment. Improvement typically becomes
        noticeable over four to eight weeks as the tissue heals. Some conditions
        respond well to a single treatment; others benefit from a series of two
        or three injections spaced over several weeks.
      </p>
      <p className="text-gray-600 mb-8">
        Dr. Chavez will evaluate whether you are a good candidate during your
        consultation, taking into account your diagnosis, overall health, and
        prior treatment history.
      </p>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Find Out If Regenerative Medicine Is Right for You
        </h3>
        <p className="text-gray-600 mb-5">
          If you have chronic pain, a stubborn injury, or joint degeneration that
          has not responded to conventional treatment, schedule a consultation.
          Dr. Chavez will review your case and let you know if PRP or another
          regenerative therapy is a fit.
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
