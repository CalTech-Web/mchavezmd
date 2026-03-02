import { Metadata } from "next";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact M. Chavez MD, SC in Wicker Park, Chicago. Schedule a consultation, ask questions, or reach us at (773) 227-3303.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Contact
          </h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Schedule Your Visit
              </h2>
              <p className="text-gray-600 mb-6">
                At M. Chavez MD, SC, it is our mission to provide our patients
                with outstanding preventive health care and advanced procedural
                medical care. Please contact us to schedule a consultation or
                appointment, or fill out the form below with any questions.
              </p>

              <a
                href="https://www.patientfusion.com/doctor/milton-chavez-md-faafp-48961"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Book Appointment Online
              </a>

              <ContactForm />
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
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
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <Phone size={18} className="text-primary" />
                  Contact
                </h3>
                <a
                  href="tel:7732273303"
                  className="text-primary font-medium hover:text-primary-dark block mb-2"
                >
                  (773) 227-3303
                </a>
                <a
                  href="mailto:staff@mchavezmd.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary text-sm"
                >
                  <Mail size={14} />
                  staff@mchavezmd.com
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold mb-3">
                  <Clock size={18} className="text-primary" />
                  Office / Telehealth Hours
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {[
                    ["Monday", "8:00a - 4:00p"],
                    ["Tuesday", "8:00a - 5:00p"],
                    ["Wednesday", "8:00a - 4:00p"],
                    ["Thursday", "8:00a - 4:00p"],
                    ["Friday", "8:00a - 4:00p"],
                    ["Saturday", "8:00a - 12:00p"],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span>{day}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Telehealth</h3>
                <p className="text-gray-600 text-sm mb-3">
                  We offer telehealth visits through Doxy.me for your
                  convenience.
                </p>
                <a
                  href="https://drchavez.doxy.me/drmiltchavez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary-light transition-colors"
                >
                  Start Telehealth Visit
                </a>
              </div>

              <a
                href="https://maps.google.com/?q=1509+N+Western+Ave+Unit+A+Chicago+IL+60622"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors text-center"
              >
                <MapPin size={24} className="text-primary mx-auto mb-2" />
                <p className="text-primary font-medium">
                  View on Google Maps
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  1509 N Western Ave, Unit A, Chicago, IL 60622
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
