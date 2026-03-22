import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  image,
  imageAlt,
  children,
}: ServicePageLayoutProps) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {image && (
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
                  <Image
                    src={image}
                    alt={imageAlt || title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="prose prose-lg max-w-none">{children}</div>

              {/* Bottom CTA */}
              <div className="mt-12 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)" }}>
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-3">
                    Take the Next Step
                  </h3>
                  <p className="text-white/80 mb-6">
                    Ready to get started? Schedule an appointment with our team today, or call us to learn more about how we can help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Calendar size={18} />
                      Book Appointment
                    </Link>
                    <a
                      href="tel:7732273303"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:border-white/60 transition-colors"
                    >
                      <Phone size={16} />
                      (773) 227-3303
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Schedule Your Visit
                </h3>
                <p className="text-white/80 text-sm mb-6">
                  Ready to take the next step? Book an appointment with our team
                  today.
                </p>
                <Link
                  href="/schedule"
                  className="flex items-center justify-center gap-2 w-full bg-white text-primary font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Calendar size={18} />
                  Book Appointment
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Location</h3>
                <p className="text-gray-600 text-sm">
                  1509 N Western Ave
                  <br />
                  Unit A
                  <br />
                  Chicago, IL 60622
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-3">Contact</h3>
                  <a
                    href="tel:7732273303"
                    className="flex items-center gap-2 text-primary font-medium hover:text-primary-dark"
                  >
                    <Phone size={16} />
                    (773) 227-3303
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
