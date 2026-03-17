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
                Dr. Milton Chavez MD, SC is a family medicine practice located in
                Wicker Park, Chicago, that specializes in procedural medicine and
                preventive health. Under the medical direction of board-certified
                family medicine physician, Dr. Chavez, the team is focused on
                inspiring patients to achieve optimal health, wellness, and
                healing through efficient service and high-quality consultations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From prevention to wellness to management of acute and chronic
                health issues, the team at M. Chavez MD, SC provides the
                exceptional care needed to meet each patient&apos;s needs. In
                addition to primary care services for the management of
                men&apos;s and women&apos;s health, the full-service practice
                also provides specialized care for many common health concerns,
                including acne, neck pain and back pain, and neuropathy.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Chavez and his team view themselves as patient advocates and
                guides, providing patients with all the available treatment
                options, and then working together to devise a plan that achieves
                optimal health and wellness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For compassionate care from a team that values integrity and
                respect, contact M. Chavez MD, SC, by phone or online today.
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

      {/* Staff */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Staff
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Dr. Chavez */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez MD, FAAFP"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Dr. Chavez MD, FAAFP
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Medical Director
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Over 28 years of experience in Family Medicine, Dr. Chavez
                  specializes in family medicine, non-operative orthopedics and
                  minor outpatient surgery. His mission is to inspire those
                  seeking their optimal health, wellness, and healing through
                  efficient service, quality consultations, and his core values:
                  integrity and respect.
                </p>
              </div>
            </div>

            {/* Karen Corona */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-80">
                <Image
                  src="/team/karen-corona.jpg"
                  alt="Karen Corona MSN, APRN, FNP-C"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Karen Corona MSN, APRN, FNP-C
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Family Nurse Practitioner
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Karen Corona is a board-certified Family Nurse Practitioner
                  with over five years of diverse healthcare experience. Her
                  clinical background spans women&apos;s health, family medicine,
                  inpatient care, surgical settings, and medical weight loss. She
                  is dedicated to delivering evidence-based, compassionate care
                  while fostering strong, collaborative relationships with her
                  patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get to Know Our Providers */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Get to Know Our Providers
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Beyond the white coat - learn a little more about the people
            dedicated to your health and wellness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Dr. Chavez Fun Facts */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Dr. Chavez
              </h3>
              <p className="text-primary font-medium text-sm mb-5">
                Medical Director
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Why did you become a healthcare provider?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    To have a personal hand in someone&apos;s improvement of
                    their health.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What is your favorite part about caring for patients?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Watching patients get better on my intervention and thanking
                    God for their improvement.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What do you enjoy doing outside of work?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Family time, travel, cooking, fine dining, cycling, and
                    photography.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What is your favorite way to relax after a long day?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Cooking and watching a movie or a TV series.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Something patients might be surprised to learn about you?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    I have a good singing voice outside the shower but
                    don&apos;t sing.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    How do you stay active?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Cycling, rowing, and weightlifting.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Favorite local spots?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Wicker Park, Oak Park, and the Fulton Market district.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What kind of music do you enjoy?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    I&apos;ve been into indie music lately, mostly from some
                    groups down under. Boy and Bear come to mind.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    A personal goal you&apos;re working toward?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Growing the Med Spa.
                  </p>
                </div>
              </div>
            </div>

            {/* Karen Corona Fun Facts */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Karen Corona
              </h3>
              <p className="text-primary font-medium text-sm mb-5">
                Family Nurse Practitioner
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Why did you become a healthcare provider?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    I truly enjoy interacting with people and helping them
                    achieve positive health outcomes. Being able to build
                    relationships with patients and support them in improving
                    their health is very meaningful to me.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What is your favorite part about caring for patients?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Connecting with patients and helping them feel heard while
                    working together to find solutions that improve their health
                    and quality of life.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What do you enjoy doing outside of work?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Running, exploring new restaurants around Chicago, and
                    spending time with my fianc&eacute; and our beagle.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What is your favorite way to relax after a long day?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Going for a run, taking my beagle for a walk, or enjoying a
                    good meal with my fianc&eacute;.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Something patients might be surprised to learn about you?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    I&apos;m a Level One sommelier and really enjoy learning
                    about wine and food pairings.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    How do you stay active?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Running is my favorite way to stay active.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Favorite local spots?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Jefferson Tap for a local feel, Remington&apos;s for a more
                    upscale meal, and Maple and Ash if we want to go all out.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    What kind of music do you enjoy?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Pop, alternative, and folk music. Frozen is my favorite
                    movie, and Parks and Rec is the show I can rewatch several
                    times.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    A personal goal you&apos;re working toward?
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Preparing for my wedding this year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
