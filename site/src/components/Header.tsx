"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

const services = [
  { name: "Family Medicine", href: "/family-medicine" },
  { name: "Knee Pain", href: "/knee-pain" },
  { name: "Regenerative Medicine", href: "/regenerative-medicine" },
  { name: "Medical Botox", href: "/medical-botox" },
  { name: "Minor Surgery", href: "/minor-surgery" },
  { name: "Musculoskeletal Pain", href: "/musculoskeletal-pain" },
  { name: "Women's Health", href: "/womens-wellness" },
  { name: "Men's Health", href: "/mens-wellness" },
  { name: "Weight Loss", href: "/weight-loss" },
];

const patients = [
  { name: "Schedule", href: "/schedule" },
  { name: "Office Forms", href: "/forms" },
  { name: "Payment", href: "/payment" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [patientsOpen, setPatientsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm text-gray-600">
          <span>1509 N Western Ave, Unit A, Chicago, IL 60622</span>
          <a
            href="tel:7732273303"
            className="flex items-center gap-1 hover:text-primary"
          >
            <Phone size={14} />
            (773) 227-3303
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo.png"
              alt="M. Chavez MD, SC"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              About
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors">
                Services
                <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Patients dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors">
                Patients
                <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[180px]">
                  {patients.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/faqs"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              FAQs
            </Link>
            <a
              href="https://illariaesthetics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              Illari Aesthetics
            </a>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://login.patientfusion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
            >
              Login
            </a>
            <Link
              href="/schedule"
              className="ml-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-6 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setPatientsOpen(!patientsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Patients
                <ChevronDown
                  size={16}
                  className={`transition-transform ${patientsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {patientsOpen && (
                <div className="pl-6 space-y-1">
                  {patients.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/faqs"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:7732273303"
              className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              <Phone size={16} />
              (773) 227-3303
            </a>
            <Link
              href="/schedule"
              className="block text-center px-5 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
