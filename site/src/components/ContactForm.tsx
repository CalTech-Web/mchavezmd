"use client";

import { useState, useEffect, useRef } from "react";
import { RefreshCw } from "lucide-react";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

function generateMathChallenge() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `${a} + ${b} =`, answer: a + b };
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [mathChallenge, setMathChallenge] = useState<{
    question: string;
    answer: number;
  } | null>(null);
  const [mathAnswer, setMathAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const recaptchaReady = useRef(false);

  // Load reCAPTCHA v3 script
  useEffect(() => {
    if (document.querySelector('script[src*="recaptcha/api.js"]')) {
      recaptchaReady.current = true;
      return;
    }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      recaptchaReady.current = true;
    };
    document.head.appendChild(script);
  }, []);

  // Generate math challenge on mount
  useEffect(() => {
    setMathChallenge(generateMathChallenge());
  }, []);

  const refreshChallenge = () => {
    setMathChallenge(generateMathChallenge());
    setMathAnswer("");
  };

  const getRecaptchaToken = async (): Promise<string> => {
    try {
      const w = window as unknown as {
        grecaptcha?: {
          ready: (cb: () => void) => void;
          execute: (key: string, opts: { action: string }) => Promise<string>;
        };
      };
      if (!w.grecaptcha) return "";
      return await new Promise((resolve) => {
        w.grecaptcha!.ready(async () => {
          try {
            const token = await w.grecaptcha!.execute(SITE_KEY, {
              action: "contact",
            });
            resolve(token);
          } catch {
            resolve("");
          }
        });
      });
    } catch {
      return "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Honeypot check
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // Math challenge check
    if (
      !mathChallenge ||
      parseInt(mathAnswer.trim(), 10) !== mathChallenge.answer
    ) {
      setError("Incorrect answer. Please try again.");
      refreshChallenge();
      return;
    }

    setLoading(true);

    try {
      const recaptchaToken = await getRecaptchaToken();

      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "mchavezmd.com",
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email.trim(),
          message: [
            formData.phone && `Phone: ${formData.phone}`,
            formData.message,
          ]
            .filter(Boolean)
            .join("\n"),
          source: "contact-page",
          recaptchaToken,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.error || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="text-green-800 font-semibold text-lg mb-2">
          Thank you for your message!
        </p>
        <p className="text-green-700">
          We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
        />
      </div>

      {/* Honeypot - hidden from real users */}
      <div
        className="overflow-hidden h-0 w-0 absolute -left-[9999px]"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Math Challenge */}
      {mathChallenge && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Security Check <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-3">
            <span className="text-gray-800 font-medium whitespace-nowrap">
              {mathChallenge.question}
            </span>
            <input
              type="text"
              inputMode="numeric"
              required
              value={mathAnswer}
              onChange={(e) => setMathAnswer(e.target.value)}
              className="w-24 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
              placeholder="?"
            />
            <button
              type="button"
              onClick={refreshChallenge}
              className="p-2 text-gray-400 hover:text-primary transition-colors"
              title="New question"
            >
              <RefreshCw size={18} />
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
