import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Phone, Video, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule Appointment",
  description:
    "Schedule your appointment at M. Chavez MD, SC in Wicker Park, Chicago. Book online, request a telehealth visit, or call us at (773) 227-3303.",
};

export default function SchedulePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Schedule an Appointment
          </h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* Options */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-600 text-center mb-12">
            Choose the scheduling option that works best for you. We look
            forward to seeing you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Dr. Chavez Booking */}
            <a
              href="https://www.patientfusion.com/doctor/milton-chavez-md-faafp-48961"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 hover:border-primary rounded-xl p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Calendar
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Dr. Milton Chavez, MD
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Book with Dr. Chavez on Patient Fusion
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                Schedule Now
                <ExternalLink size={14} />
              </span>
            </a>

            {/* Karen Corona Booking */}
            <a
              href="https://www.patientfusion.com/doctor/karen-corona-80106"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 hover:border-primary rounded-xl p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Calendar
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Karen Corona, FNP-C
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Book with Karen on Patient Fusion
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-medium text-sm">
                Schedule Now
                <ExternalLink size={14} />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Call */}
            <a
              href="tel:7732273303"
              className="group bg-white border-2 border-gray-200 hover:border-primary rounded-xl p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Phone
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Call Us</h2>
              <p className="text-gray-600 text-sm mb-4">
                Speak directly with our staff
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-medium text-sm underline underline-offset-2">
                Call (773) 227-3303
              </span>
            </a>

            {/* Telehealth */}
            <a
              href="https://drchavez.doxy.me/drmchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-gray-200 hover:border-secondary rounded-xl p-8 text-center transition-all hover:shadow-lg"
            >
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-secondary transition-colors">
                <Video
                  size={28}
                  className="text-secondary group-hover:text-white transition-colors"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Telehealth Visit
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Connect with us from the comfort of home
              </p>
              <span className="inline-flex items-center gap-1 text-secondary font-medium text-sm">
                Start Visit on Doxy.me
                <ExternalLink size={14} />
              </span>
            </a>
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What to Expect
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                Bring a picture ID and your insurance card to all visits
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                First-time patients will need to fill out authorization forms
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                Payments including deductibles and co-payments are due at time of
                service
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                Walk-ins are also welcome
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Please provide at least 24 hours notice to cancel. Late
              cancellations or no-shows may result in a $75 charge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
