import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about M. Chavez MD, SC - a family medicine practice in Wicker Park, Chicago specializing in procedural medicine and preventive health under the direction of Dr. Milton Chavez.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About</h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* Our Practice */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Practice
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                M. Chavez MD, SC is a family medicine practice in Wicker Park,
                Chicago, built around a simple conviction: patients deserve a
                physician who treats the whole person, not just the presenting
                complaint. Under the medical direction of Dr. Milton Chavez, the
                practice specializes in procedural medicine and preventive health,
                with a team focused on helping each patient achieve their optimal
                health, wellness, and healing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From annual physicals and chronic disease management to in-office
                surgical procedures, regenerative medicine, and medical weight
                loss, the scope of care at M. Chavez MD is intentionally broad.
                That breadth exists so that patients can get more of what they
                need in one place, with providers who know their history and
                actually remember them appointment to appointment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Chavez and Karen Corona, FNP-C approach every patient as an
                individual. Treatment plans are built collaboratively, with all
                available options explained clearly, and with the patient&apos;s
                goals, not just their symptoms, at the center of the conversation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The practice is anchored in the values Dr. Chavez has carried
                through 28 years of medicine: integrity and respect. Those values
                shape how every appointment is run, how every question is
                answered, and how every patient is sent home.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Link
                href="/schedule"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-dark transition-colors text-lg"
              >
                <Calendar size={20} />
                Book Appointment
              </Link>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <MapPin size={18} className="text-primary" />
                  Location
                </h3>
                <p className="text-gray-600 text-sm">
                  1509 N Western Ave
                  <br />
                  Unit A
                  <br />
                  Chicago, IL 60622
                </p>
                <h3 className="flex items-center gap-2 text-lg font-semibold mt-5 mb-3">
                  <Phone size={18} className="text-primary" />
                  Contact
                </h3>
                <a
                  href="tel:7732273303"
                  className="text-primary font-medium hover:text-primary-dark"
                >
                  (773) 227-3303
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Bios */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Meet Our Providers
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            The physicians and practitioners behind your care.
          </p>

          {/* Dr. Chavez */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 items-start">
            <div className="lg:col-span-2">
              <div className="relative h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez MD, FAAFP"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-bold text-gray-900">
                  Dr. Milton Chavez
                </h3>
                <p className="text-primary font-medium text-sm mt-1">
                  MD, FAAFP &mdash; Medical Director
                </p>
                <div className="mt-4 space-y-1 text-sm text-gray-500">
                  <p>Board-Certified Family Physician</p>
                  <p>Fellow, American Academy of Family Physicians</p>
                  <p>Illinois Licensed Since 1997</p>
                  <p>28+ Years in Family Medicine</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5 text-gray-600 leading-relaxed">
              <p>
                Dr. Milton Chavez became a physician for a specific reason: he
                wanted a direct, personal hand in someone&apos;s improvement.
                Not a referral chain. Not a handoff. He wanted to be the person
                who actually made the difference a patient could feel. That
                conviction has shaped the way he practices for more than 28
                years, and it is still the lens through which he evaluates every
                patient who walks through the door.
              </p>
              <p>
                What he describes as his favorite part of the job is watching
                a patient get better and knowing that his intervention was the
                reason. There is a quiet gratitude in that, one that Dr. Chavez
                does not take lightly. Medicine, for him, is not simply a career.
                It is a calling grounded in his core values of integrity and
                respect, values that shape how he runs appointments, how he
                explains diagnoses, and how he partners with patients to build
                plans they will actually follow.
              </p>
              <p>
                His clinical range is deliberate. Over nearly three decades, Dr.
                Chavez built expertise not only in primary care but in
                non-operative orthopedics, regenerative medicine, and minor
                outpatient surgery, because he saw the gaps patients fall into
                when a family physician has to send every complex case somewhere
                else. His goal has always been to keep patients out of that gap,
                to be the provider who can evaluate a knee, perform an in-office
                procedure, supervise a weight loss program, and manage the same
                patient&apos;s hypertension, all within a practice that knows
                their name.
              </p>
              <p>
                Outside the clinic, Dr. Chavez stays active through cycling,
                rowing, and weightlifting. He is a genuinely skilled home cook
                who unwinds in the kitchen most evenings, followed by a movie or
                a series. He has been deep into indie music lately, particularly
                Australian acts, with Boy and Bear getting regular rotation. He
                knows Wicker Park, Oak Park, and the Fulton Market district the
                way a person knows their own neighborhood, because they are. He
                is deeply invested in the community his practice serves.
              </p>
              <p>
                Patients who know him well eventually learn that he has, by his
                own cheerful admission, a perfectly respectable singing voice that
                he keeps almost entirely to himself. He considers the restraint a
                reasonable exercise in good judgment.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 mb-20" />

          {/* Karen Corona */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 lg:order-last">
              <div className="relative h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/team/karen-corona.jpg"
                  alt="Karen Corona MSN, APRN, FNP-C"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-bold text-gray-900">
                  Karen Corona
                </h3>
                <p className="text-primary font-medium text-sm mt-1">
                  MSN, APRN, FNP-C &mdash; Family Nurse Practitioner
                </p>
                <div className="mt-4 space-y-1 text-sm text-gray-500">
                  <p>Board-Certified Family Nurse Practitioner</p>
                  <p>5+ Years Diverse Clinical Experience</p>
                  <p>Women&apos;s Health, Family Medicine, Medical Weight Loss</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-5 text-gray-600 leading-relaxed">
              <p>
                Karen Corona became a healthcare provider because she genuinely
                enjoys people, not as an abstraction but in the real, daily sense
                of sitting across from someone, listening carefully, and helping
                them get somewhere better than where they started. After more than
                five years of clinical experience spanning women&apos;s health,
                family medicine, inpatient care, surgical settings, and medical
                weight loss, that instinct has only become more refined. She
                knows how to meet patients where they are.
              </p>
              <p>
                What Karen values most in her work is the relationship. She wants
                patients to leave an appointment feeling heard and equipped, not
                just with a diagnosis but with a plan they understand and believe
                in. Her approach is collaborative by nature. She asks more
                questions than she gives answers, because she has found that the
                right solution almost always comes out of a genuine conversation
                rather than a checklist. That attention to the full picture of a
                patient&apos;s life, not just their labs, is what defines her
                care.
              </p>
              <p>
                Her clinical interests are broad, which is fitting for a practice
                that treats the whole family. She has particular depth in
                women&apos;s health and medical weight loss, areas where she
                brings both clinical expertise and the kind of straightforward,
                non-judgmental communication that patients often say they have
                not found elsewhere.
              </p>
              <p>
                Outside the clinic, Karen runs, which she will tell you is both
                her favorite way to stay active and her most reliable stress
                management strategy. She is a Level One sommelier, and she and
                her fianc&eacute; explore Chicago&apos;s restaurant scene with
                real enthusiasm. Jefferson Tap for a neighborhood feel,
                Remington&apos;s for something a step up, and Maple and Ash when
                the occasion calls for it. She is also fully committed to the
                opinion that Parks and Recreation is the most rewatchable
                television series ever made, a position she will defend at length
                if given the opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
