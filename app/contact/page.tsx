import { ContactForm } from "components/forms/contact-form";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the Kids team — we're here to help parents.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Say hello 👋</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          Questions about an order, sizing, or our products? Drop us a line and
          a real human will reply within 1–2 business days.
        </p>
      </header>

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
        <ContactForm />
      </div>

      <div className="mt-8 grid gap-4 text-center sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
          <p className="text-sm font-semibold">Email</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            hello@kidzsport.com
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
          <p className="text-sm font-semibold">Phone</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            +1 (800) 555-KIDS
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
          <p className="text-sm font-semibold">Hours</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Mon–Fri, 9am–6pm
          </p>
        </div>
      </div>
    </div>
  );
}
