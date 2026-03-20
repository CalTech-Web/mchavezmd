import { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Minor Surgery",
  description:
    "Same-day minor surgical procedures in Wicker Park, Chicago. Dr. Chavez offers mole removal, skin tag removal, cyst removal, skin cancer evaluation, and more with no referrals required.",
};

export default function MinorSurgeryPage() {
  return (
    <ServicePageLayout
      title="Minor Surgery"
      image="/images/minor-surgery.jpg"
      imageAlt="Minor surgery procedure"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        The Problem: Weeks of Waiting for a Procedure That Takes Under an Hour
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        A bothersome mole. A cyst that keeps growing. A skin tag in an
        uncomfortable location. These are not emergencies, but they are real
        concerns that affect daily life. And yet, getting them addressed often
        means waiting weeks for a dermatology referral, followed by another wait
        for the actual procedure, all for something that a skilled physician can
        resolve in a single office visit.
      </p>
      <p className="text-gray-600 mb-8">
        Many patients also have legitimate medical concerns about skin lesions,
        particularly those that have changed in size, shape, or color. Delays in
        evaluation carry real risk. The system was not designed with that urgency
        in mind.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Our Approach: In-Office Procedures Without the Runaround
      </h2>
      <p className="text-gray-600 mb-4">
        At M. Chavez MD, SC, Dr. Chavez performs a wide range of minor surgical
        procedures in-office. No referrals required. No specialist waitlists. You
        come in, the procedure is done under local anesthesia, and you leave the
        same day. Most procedures take less than an hour from start to finish.
      </p>
      <p className="text-gray-600 mb-6">
        All excised tissue that raises clinical concern is sent for pathological
        review, giving you both the treatment and the diagnostic clarity you need.
        Dr. Chavez will review any specimen results with you directly and advise
        on next steps if warranted.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Procedures Performed In-Office
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          {
            procedure: "Mole Removal",
            detail:
              "Excision or shave removal of benign or suspicious moles with option for pathology review.",
          },
          {
            procedure: "Skin Tag Removal",
            detail:
              "Fast, clean removal of skin tags using excision or cryotherapy.",
          },
          {
            procedure: "Cyst Removal and Drainage",
            detail:
              "Incision and drainage of infected cysts, or full excision of sebaceous and epidermoid cysts to prevent recurrence.",
          },
          {
            procedure: "Lesion Biopsy",
            detail:
              "Punch, shave, or excisional biopsy of skin lesions for pathological diagnosis.",
          },
          {
            procedure: "Cryosurgery",
            detail:
              "Liquid nitrogen application to freeze and destroy warts, actinic keratoses, and other superficial skin lesions.",
          },
          {
            procedure: "Wound Care and Management",
            detail:
              "Evaluation, cleaning, closure, and ongoing management of lacerations and wounds.",
          },
        ].map((item) => (
          <li key={item.procedure} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">
              <strong className="text-gray-900">{item.procedure}:</strong>{" "}
              {item.detail}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Skin Cancer: Evaluation and Treatment Without the Wait
      </h2>
      <p className="text-gray-600 mb-4">
        A suspicious spot should not sit on a waiting list for months. Skin
        cancer is among the most treatable cancers when caught early, and delays
        in evaluation change that calculus significantly. At M. Chavez MD, SC,
        Dr. Chavez can evaluate, biopsy, and in many cases treat skin cancer
        concerns in-office, saving patients the time and hassle of waiting for a
        specialist who may be booked weeks out.
      </p>
      <p className="text-gray-600 mb-4">
        Many cases of squamous cell carcinoma and basal cell carcinoma can be
        managed and treated directly in the office. For patients concerned about
        malignant melanoma, Dr. Chavez performs a thorough skin survey and biopsy
        as needed to reach a diagnosis quickly. From first appointment to
        resolution, the goal is a clear, fast path forward, often without a
        referral ever being necessary.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          {
            procedure: "Squamous Cell Carcinoma",
            detail:
              "Evaluation and in-office excision for many presentations of squamous cell carcinoma, with pathology confirmation.",
          },
          {
            procedure: "Basal Cell Carcinoma",
            detail:
              "Assessment and treatment of basal cell lesions in-office, avoiding specialist waitlists for the majority of cases.",
          },
          {
            procedure: "Malignant Melanoma Screening",
            detail:
              "Full skin survey with biopsy of concerning lesions. Rapid pathology turnaround and clear follow-up plan to resolution.",
          },
        ].map((item) => (
          <li key={item.procedure} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-600">
              <strong className="text-gray-900">{item.procedure}:</strong>{" "}
              {item.detail}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        What to Expect on the Day of Your Procedure
      </h2>
      <p className="text-gray-600 mb-4">
        Most procedures begin with a brief consultation at the same appointment.
        Dr. Chavez will examine the area, confirm the approach, and answer your
        questions before proceeding. Local anesthesia is applied so you remain
        comfortable throughout. After the procedure, you will receive wound care
        instructions and a follow-up plan.
      </p>
      <p className="text-gray-600 mb-8">
        Recovery time depends on the procedure and location. For most minor
        excisions, patients return to normal activity within one to two days.
        Dr. Chavez will let you know exactly what to expect for your specific
        procedure.
      </p>

      <div className="p-8 bg-primary/5 rounded-xl border border-primary/10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Get It Handled, Today
        </h3>
        <p className="text-gray-600 mb-5">
          Do not wait months for a procedure that can be done in one visit.
          Schedule with Dr. Chavez and take care of it now.
        </p>
        <Link
          href="/schedule"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Book Your Procedure
        </Link>
      </div>
    </ServicePageLayout>
  );
}
