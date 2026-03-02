import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Stethoscope,
  Syringe,
  Bone,
  FlaskConical,
  Scissors,
  Activity,
  Users,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
  Star,
  Quote,
} from "lucide-react";

const services = [
  {
    title: "Family Medicine",
    href: "/family-medicine",
    icon: Stethoscope,
    image: "/images/family-medicine.jpg",
    tagline: "Primary care for the whole family",
  },
  {
    title: "Knee Pain",
    href: "/knee-pain",
    icon: Bone,
    image: "/images/knee-pain.jpg",
    tagline: "Restore mobility and comfort",
  },
  {
    title: "Regenerative Medicine",
    href: "/regenerative-medicine",
    icon: FlaskConical,
    image: "/images/regenerative-medicine.jpg",
    tagline: "Pioneering soft-tissue repair",
  },
  {
    title: "Medical Botox",
    href: "/medical-botox",
    icon: Syringe,
    image: "/images/medical-botox.jpg",
    tagline: "Beyond cosmetic applications",
  },
  {
    title: "Minor Surgery",
    href: "/minor-surgery",
    icon: Scissors,
    image: "/images/minor-surgery.jpg",
    tagline: "Same-day procedures",
  },
  {
    title: "Musculoskeletal",
    href: "/musculoskeletal-pain",
    icon: Activity,
    image: "/images/musculoskeletal-pain.jpg",
    tagline: "Holistic pain management",
  },
  {
    title: "Women's Health",
    href: "/womens-wellness",
    icon: Heart,
    image: "/images/immediate-care.jpg",
    tagline: "Comprehensive women's care",
  },
  {
    title: "Men's Health",
    href: "/mens-wellness",
    icon: Users,
    image: "/images/hero-stethoscope.jpg",
    tagline: "Tailored men's wellness",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero - Full-screen minimalist with large serif-style type */}
      <section className="relative min-h-[90vh] flex items-center bg-[#faf9f7] overflow-hidden">
        {/* Decorative dot grid - fades from text area outward */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(107, 76, 154, 0.14) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 55% 70% at 18% 50%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 70% at 18% 50%, black 0%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 right-0 w-3/5 h-full hidden lg:block">
          <Image
            src="/images/hero-stethoscope.jpg"
            alt="M. Chavez MD practice"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f7] via-[#faf9f7]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
                Wicker Park, Chicago
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight whitespace-nowrap">
              Procedural Medicine.
              <br />
              <span
                className="font-normal italic"
                style={{
                  background:
                    "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Authentic Care.
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-md">
              Board-certified family medicine with 28+ years of experience.
              Where clinical excellence meets genuine compassion.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/schedule"
                className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Book Appointment
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:7732273303"
                className="text-gray-500 hover:text-primary transition-colors font-medium"
              >
                (773) 227-3303
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-secondary" />
                </span>
                Accepting New Patients
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                Walk-ins Welcome
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                Most PPO Plans Accepted
              </span>
            </div>

            {/* Floating credential badge - desktop only */}
            <div className="mt-8 hidden lg:inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-gray-200/70 rounded-2xl px-5 py-3.5 shadow-sm">
              <div className="flex items-center gap-2.5 pr-4 border-r border-gray-200">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-xs font-medium text-gray-700">Highly Rated</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">Board-Certified FAAFP</p>
                <p className="text-xs text-gray-500 mt-0.5">Illinois Licensed · Since 1997</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credential Strip */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { icon: Clock, top: "28+", bottom: "Years Experience" },
              { icon: Star, top: "FAAFP", bottom: "Board Certified" },
              { icon: Users, top: "Walk-Ins", bottom: "Welcome Daily" },
              { icon: MapPin, top: "Free", bottom: "On-Site Parking" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.bottom} className="py-8 px-6 text-center group hover:bg-gray-50/60 transition-colors duration-200">
                  <div className="flex items-center justify-center mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(107,76,154,0.10) 0%, rgba(74,155,127,0.10) 100%)",
                      }}
                    >
                      <Icon size={16} className="text-primary/60 group-hover:text-primary transition-colors duration-200" />
                    </div>
                  </div>
                  <p
                    className="text-2xl font-light"
                    style={{
                      background: "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.top}
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-gray-400 mt-1">
                    {item.bottom}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services - Horizontal Scroll Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
                What We Treat
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                Our Specialties
              </h2>
            </div>
            <Link
              href="/family-medicine"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              View All Services <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-10" />
                    <span
                      className="absolute top-3 right-4 text-5xl font-bold leading-none select-none tabular-nums text-white/15 group-hover:text-white/25 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={16} className="text-white/80" />
                        <span className="text-xs text-white/60 uppercase tracking-wider">
                          {service.tagline}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-white flex items-center gap-2">
                        {service.title}
                        <ArrowRight
                          size={14}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission - Large Pull Quote */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f5f0fb 0%, #eef8f4 100%)" }}
      >
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none" />
        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent pointer-events-none" />
        {/* Soft glow blobs */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-secondary/8 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(107,76,154,0.12) 0%, rgba(74,155,127,0.12) 100%)",
              border: "1px solid rgba(107,76,154,0.18)",
              boxShadow: "0 0 32px rgba(107,76,154,0.12)",
            }}
          >
            <Quote size={28} style={{ color: "#6B4C9A" }} />
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed italic">
            &ldquo;We strive to inspire and aid those seeking their optimal
            health, wellness and healing through efficient service, quality
            consultations and our core values: integrity and respect.&rdquo;
          </blockquote>
          <div
            className="mt-8 h-px w-24 mx-auto"
            style={{
              background: "linear-gradient(90deg, #6B4C9A 0%, #4A9B7F 100%)",
            }}
          />
          <p className="mt-6 text-sm tracking-[0.15em] uppercase text-gray-400">
            Our Mission
          </p>
          <p
            className="mt-2 text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dr. Milton Chavez MD, FAAFP
          </p>
        </div>
      </section>

      {/* Team - Large Portrait Layout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Your Providers
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Meet the Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Dr. Chavez */}
            <div className="group">
              <div className="relative rounded-2xl mb-6 ring-1 ring-primary/15 group-hover:ring-2 group-hover:ring-primary/35 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                <div className="relative h-[28rem] rounded-[14px] overflow-hidden">
                <Image
                  src="/team/dr-chavez.jpg"
                  alt="Dr. Milton Chavez MD, FAAFP"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <p className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase mb-2">MD, FAAFP - Medical Director</p>
                  <p className="text-white text-sm leading-relaxed">28+ years in family medicine, non-operative orthopedics, and minor outpatient surgery.</p>
                </div>
                </div>
              </div>
              <h3
                className="text-2xl font-light"
                style={{
                  background: "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dr. Milton Chavez
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full mt-2">
                MD, FAAFP - Medical Director
              </span>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Board-certified family physician with 28+ years of experience
                specializing in family medicine, non-operative orthopedics, and
                minor outpatient surgery.
              </p>
            </div>

            {/* Karen Corona */}
            <div className="group">
              <div className="relative rounded-2xl mb-6 ring-1 ring-secondary/15 group-hover:ring-2 group-hover:ring-secondary/35 group-hover:shadow-lg group-hover:shadow-secondary/10 transition-all duration-300">
                <div className="relative h-[28rem] rounded-[14px] overflow-hidden">
                <Image
                  src="/team/karen-corona.jpg"
                  alt="Karen Corona MSN, APRN, FNP-C"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  <p className="text-white/70 text-xs font-medium tracking-[0.15em] uppercase mb-2">MSN, APRN, FNP-C - Nurse Practitioner</p>
                  <p className="text-white text-sm leading-relaxed">Specialized in women&apos;s health, family medicine, inpatient care, and medical weight loss.</p>
                </div>
                </div>
              </div>
              <h3
                className="text-2xl font-light"
                style={{
                  background: "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Karen Corona
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full mt-2">
                MSN, APRN, FNP-C - Nurse Practitioner
              </span>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                Board-certified family nurse practitioner with diverse experience
                in women&apos;s health, family medicine, inpatient care, surgical
                settings, and medical weight loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Side by Side */}
      <section className="py-20 md:py-28 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
              Patient Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              What They Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary pointer-events-none" />
              <div
                className="absolute -top-4 left-4 text-[8rem] leading-none text-primary/10 select-none pointer-events-none"
                style={{ fontFamily: "Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed italic">
                  &ldquo;My visit with Dr. Chavez is always pleasant. I love that
                  the Doctors take your appointment on time, very attentive and
                  professional and knowledgeable of my medical history.&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)" }}
                    aria-hidden="true"
                  >
                    JH
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Janneth H.</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      via{" "}
                      <a
                        href="https://www.tebra.com/care/provider/milton-chavez-md-1700869450"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                      >
                        Tebra
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary pointer-events-none" />
              <div
                className="absolute -top-4 left-4 text-[8rem] leading-none text-primary/10 select-none pointer-events-none"
                style={{ fontFamily: "Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <div className="relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed italic">
                  &ldquo;Dr. Chavez has my highest recommendation. He is
                  knowledgeable, intelligent, empathic, consistent, thorough and
                  soft-spoken. Basically, he delivers what most people want and
                  deserve from their MD.&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #6B4C9A 0%, #4A9B7F 100%)" }}
                    aria-hidden="true"
                  >
                    CM
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Chad M.</p>
                    <p className="text-xs text-gray-400 mt-0.5">Verified Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours + Location - Clean Split */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Hours */}
            <div
              className="rounded-2xl p-8 border border-gray-100 relative overflow-hidden"
              style={{ background: "linear-gradient(145deg, #faf9f7 0%, #f3f0f9 100%)" }}
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <h3 className="text-xl font-light text-gray-900">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-2.5">
                {[
                  ["Monday", "8:00a - 5:00p"],
                  ["Tuesday", "8:00a - 6:00p"],
                  ["Wednesday", "8:00a - 4:00p"],
                  ["Thursday", "8:00a - 4:00p"],
                  ["Friday", "8:00a - 4:00p"],
                  ["Saturday", "8:00a - 12:00p"],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex justify-between text-sm pb-2.5 border-b border-gray-200/60 last:border-0"
                  >
                    <span className="text-gray-500">{day}</span>
                    <span className="text-gray-900 font-medium">{hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-gray-200/60 flex items-center gap-2.5">
                <MapPin size={14} className="text-secondary flex-shrink-0" />
                <span className="text-xs text-gray-400 leading-snug">
                  Free parking at Western &amp; LeMoyne
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden h-80 lg:h-auto">
              <iframe
                src="https://maps.google.com/maps?q=1509+N+Western+Ave+Unit+A+Chicago+IL+60622&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="M. Chavez MD, SC - 1509 N Western Ave, Chicago, IL"
              />
            </div>
          </div>

          {/* Address + neighborhoods */}
          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-gray-100">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">
                  1509 N Western Ave, Unit A
                </p>
                <p className="text-sm text-gray-500">Chicago, IL 60622</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Wicker Park",
                "Lincoln Park",
                "Bucktown",
                "Logan Square",
                "Ukrainian Village",
              ].map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-500"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-dark via-primary to-secondary relative overflow-hidden">
        {/* Dot grid - mirrors hero, anchored to right side */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 255, 255, 0.13) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 55% 70% at 82% 50%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 70% at 82% 50%, black 0%, transparent 100%)",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Ready to prioritize your health?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Walk-ins welcome. New patients accepted. Most PPO plans accepted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              Schedule Appointment
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:7732273303"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white/60 px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              <Phone size={18} />
              (773) 227-3303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
