import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              M. Chavez MD, SC
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://maps.google.com/?q=1509+N+Western+Ave+Unit+A+Chicago+IL+60622"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                1509 N Western Ave, Unit A
                <br />
                Chicago, IL 60622
              </a>
              <a
                href="tel:7732273303"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} className="flex-shrink-0" />
                (773) 227-3303
              </a>
              <a
                href="mailto:staff@mchavezmd.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} className="flex-shrink-0" />
                staff@mchavezmd.com
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/mchavezmdsc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/mchavezmdsc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/family-medicine"
                  className="hover:text-white transition-colors"
                >
                  Family Medicine
                </Link>
              </li>
              <li>
                <Link
                  href="/knee-pain"
                  className="hover:text-white transition-colors"
                >
                  Knee Pain
                </Link>
              </li>
              <li>
                <Link
                  href="/regenerative-medicine"
                  className="hover:text-white transition-colors"
                >
                  Regenerative Medicine
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-botox"
                  className="hover:text-white transition-colors"
                >
                  Medical Botox
                </Link>
              </li>
              <li>
                <Link
                  href="/minor-surgery"
                  className="hover:text-white transition-colors"
                >
                  Minor Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/musculoskeletal-pain"
                  className="hover:text-white transition-colors"
                >
                  Musculoskeletal Pain
                </Link>
              </li>
              <li>
                <Link
                  href="/womens-wellness"
                  className="hover:text-white transition-colors"
                >
                  Women&apos;s Health
                </Link>
              </li>
              <li>
                <Link
                  href="/mens-wellness"
                  className="hover:text-white transition-colors"
                >
                  Men&apos;s Health
                </Link>
              </li>
              <li>
                <Link
                  href="/weight-loss"
                  className="hover:text-white transition-colors"
                >
                  Weight Loss
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="hover:text-white transition-colors"
                >
                  Schedule Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/forms"
                  className="hover:text-white transition-colors"
                >
                  Office Forms
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className="hover:text-white transition-colors"
                >
                  Payment
                </Link>
              </li>
              <li>
                <a
                  href="https://illariaesthetics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Illari Aesthetics
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Office Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>8:00a - 4:00p</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>8:00a - 5:00p</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>8:00a - 4:00p</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>8:00a - 4:00p</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>8:00a - 4:00p</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00a - 12:00p</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-red-400 font-medium">
              Call 911 for emergencies
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>
            &copy; 2014-{new Date().getFullYear()} M. Chavez MD, SC. All Rights
            Reserved.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
