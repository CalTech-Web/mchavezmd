"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Where are you located?",
    answer:
      "We are located at 1509 N. Western Ave, Unit A in Chicago, IL at the corner of Western Ave and LeMoyne Ave in Wicker Park. You can reach us off the Kennedy Expy by taking the North Ave exit and traveling West to Western Ave then traveling South to the practice.",
  },
  {
    question: "What insurance do you accept?",
    answer:
      "We currently participate in Medicare, most commercial PPO and HMO plans, and Medicaid. We encourage you to call our office to confirm participation in your specific plan.",
  },
  {
    question: "Can I be seen if I don't have insurance?",
    answer:
      "Yes. We accept cash payments in a variety of ways including debit cards, cheques and Care Credit. We also have a membership plan to help you save money with our Direct Patient Care program. Please call for more details.",
  },
  {
    question: "Are you accepting new patients?",
    answer: "Yes. Please call to schedule an appointment.",
  },
  {
    question: "Is there parking?",
    answer:
      "Yes. We have a free parking lot at the corner of Western and LeMoyne, just south of the building.",
  },
  {
    question: "What are the clinic hours?",
    answer:
      "We are open 8 am to 4 pm on Wednesdays, Thursdays and Fridays and from 8 am to 5 pm on Mondays and Tuesdays. We are open on the first and third Saturdays each month from 8 am to noon.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes. Though there may be an unspecified wait time, we will work hard to minimize any wait times on a walk-in.",
  },
  {
    question: "Can I come to the clinic for a second opinion?",
    answer:
      "Yes. Second opinions are welcome. We also encourage you to get a second opinion from any diagnosis we offer you.",
  },
  {
    question: "What specialties are at the clinic?",
    answer:
      "Our office specializes in Family Medicine and offers primary care services for the entire family. We also provide specialty care services in the areas of medical, surgical and cosmetic dermatology, non-operative orthopedics and sports medicine.",
  },
  {
    question: "Do I have access to my medical records?",
    answer:
      "Yes. You will be given a password on your first visit with us to create a secure account in our electronic health record.",
  },
  {
    question: "What do I need to bring to my appointments?",
    answer:
      "At your first visit, you will be required to fill out and sign certain forms which authorize us to care for you or your loved one. Please be sure to bring a picture ID and your insurance card to all your visits. Payments are due at the time of service including deductibles and co-payments.",
  },
  {
    question:
      "Will the providers take care of me while I'm in the hospital?",
    answer:
      "Our providers will not take care of you while you are in the hospital but will monitor your progress on a day-to-day basis with our hospitalist colleagues.",
  },
  {
    question: "What happens if I miss my appointment?",
    answer:
      "We ask that you give a 24 hour or more notice to cancel your appointment. A late cancellation (less than 24 hours notice) or a no call/no show will result in a $75.00 charge.",
  },
  {
    question: "Can I reach the provider after hours?",
    answer:
      "After hours, we have an answering service where patients can leave a non-urgent message. This service is monitored daily, and our staff will call you back within a 24-hour period. If you are experiencing a life-threatening emergency, please call 911.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-gray-500 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <FAQItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}
