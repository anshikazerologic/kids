"use client";

import { useActionState } from "react";
import { submitBecomePartOfIt, type FormState } from "components/forms/actions";

const idleState: FormState = { status: "idle", message: "" };

const fieldClass =
  "w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:border-[#afd3f8] outline-none";
const errorClass = "text-sm text-red-600";


const skillLevels = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
  { label: "Expert", value: "expert" },
];

const productInterests = [
  { label: "Equipment", value: "equipment" },
  { label: "Footwear", value: "footwear" },
  { label: "Apparel", value: "apparel" },
  { label: "Accessories", value: "accessories" },
];

const budgetRanges = [
  { label: "Under $50", value: "under-50" },
  { label: "$50–$100", value: "50-100" },
  { label: "$100–$200", value: "100-200" },
  { label: "Over $200", value: "over-200" },
];

const trainingFrequencies = [
  { label: "Daily", value: "daily" },
  { label: "4–6 times per week", value: "4-6-times-per-week" },
  { label: "2–3 times per week", value: "2-3-times-per-week" },
  { label: "Once a week", value: "once-a-week" },
  { label: "Occasionally", value: "occasionally" },
];

export default function BecomePartOfItForm({ sports }: { sports: { label: string; value: string }[] }) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitBecomePartOfIt,
    idleState,
  );

  if (state.status === "success") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-2xl text-slate-950 mb-2">
            You're Part Of It!
          </h2>
          <p className="text-slate-500">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <form
        action={formAction}
        className="w-full max-w-lg"
      >
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-2xl p-6 sm:p-8">
          <div className="space-y-2">
            <p className="font-mono text-xs font-semibold text-[#afd3f8] uppercase tracking-widest">
              Kids Support Network
            </p>
            <h1 className="font-display font-bold text-2xl text-slate-950">
              Your training preferences
            </h1>
          </div>

          <div className="mt-6 space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="sport">
                Sport
              </label>
              <select id="sport" name="sport" defaultValue="" className={fieldClass} required>
                <option value="" disabled>Select a sport</option>
                {sports.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              {state.errors?.sport ? <p className={errorClass} role="alert">{state.errors.sport}</p> : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="skillLevel">
                Skill Level
              </label>
              <select id="skillLevel" name="skillLevel" defaultValue="" className={fieldClass} required>
                <option value="" disabled>Select skill level</option>
                {skillLevels.map((sl) => (
                  <option key={sl.value} value={sl.value}>{sl.label}</option>
                ))}
              </select>
              {state.errors?.skillLevel ? <p className={errorClass} role="alert">{state.errors.skillLevel}</p> : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="productInterest">
                Product Interest
              </label>
              <select id="productInterest" name="productInterest" defaultValue="" className={fieldClass} required>
                <option value="" disabled>Select product interest</option>
                {productInterests.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
              {state.errors?.productInterest ? <p className={errorClass} role="alert">{state.errors.productInterest}</p> : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="budgetRange">
                Budget Range
              </label>
              <select id="budgetRange" name="budgetRange" defaultValue="" className={fieldClass} required>
                <option value="" disabled>Select budget range</option>
                {budgetRanges.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
              {state.errors?.budgetRange ? <p className={errorClass} role="alert">{state.errors.budgetRange}</p> : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="trainingFrequency">
                Training Frequency
              </label>
              <select id="trainingFrequency" name="trainingFrequency" defaultValue="" className={fieldClass} required>
                <option value="" disabled>Select training frequency</option>
                {trainingFrequencies.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              {state.errors?.trainingFrequency ? <p className={errorClass} role="alert">{state.errors.trainingFrequency}</p> : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="name">
                Name
              </label>
              <input id="name" name="name" type="text" placeholder="John" className={fieldClass} required />
              {state.errors?.name ? <p className={errorClass} role="alert">{state.errors.name}</p> : null}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider" htmlFor="email">
                Email address
              </label>
              <input id="email" name="email" type="email" placeholder="xyz@gmail.com" className={fieldClass} required />
              {state.errors?.email ? <p className={errorClass} role="alert">{state.errors.email}</p> : null}
            </div>

            {state.status === "error" && !state.errors ? (
              <p className={errorClass} role="alert">{state.message}</p>
            ) : null}

            <button
              type="submit"
              disabled={pending}
              className="w-full bg-slate-950 hover:bg-indigo-600 text-white font-semibold py-4 rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:hover:bg-slate-950"
            >
              {pending ? "Submitting..." : "Submit"}
            </button>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              By submitting, you agree we may contact you about your request.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}