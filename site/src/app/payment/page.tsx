import { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment",
  description:
    "Payment information for M. Chavez MD, SC. We accept Medicare, Medicaid, PPO and HMO plans, cash, debit cards, cheques, and Care Credit.",
};

export default function PaymentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Payment
          </h1>
          <div className="mt-4 h-1 w-20 bg-secondary rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <CreditCard size={40} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Options
            </h2>
            <p className="text-gray-600">
              Payments including deductibles and co-payments are due at the time
              of service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Insurance Accepted
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Medicare
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Most commercial PPO plans
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Most HMO plans
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Medicaid
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                Please call to confirm participation in your specific plan.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Self-Pay Options
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                  Cash
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                  Debit cards
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                  Cheques
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                  Care Credit
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                  Direct Patient Care membership plan
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Questions about payment or insurance? Contact our office.
            </p>
            <a
              href="tel:7732273303"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              <Phone size={18} />
              Call (773) 227-3303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
