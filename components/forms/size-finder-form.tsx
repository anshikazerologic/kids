"use client";

import { useActionState } from "react";
import { submitSizeFinder, idleState, type FormState } from "./actions";

const fieldClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white";
const errorClass = "text-sm text-red-600 dark:text-red-400";

const ageOptions = [
  "0–2 years (Toddler)",
  "3–5 years (Preschool)",
  "6–8 years",
  "9–12 years",
  "13+ years (Teen)",
];

const heightOptions = [
  "Under 90 cm",
  "90–110 cm",
  "110–130 cm",
  "130–150 cm",
  "150+ cm",
];

export function SizeFinderForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitSizeFinder,
    idleState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center dark:border-green-900 dark:bg-green-950">
        <p className="text-lg font-semibold text-green-800 dark:text-green-200">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="childName" className="text-sm font-medium">
            Child's name
          </label>
          <input
            id="childName"
            name="childName"
            type="text"
            aria-invalid={!!state.errors?.childName}
            className={fieldClass}
            placeholder="Little one's name"
          />
          {state.errors?.childName ? (
            <p className={errorClass} role="alert">
              {state.errors.childName}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Parent email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-invalid={!!state.errors?.email}
            className={fieldClass}
            placeholder="you@email.com"
          />
          {state.errors?.email ? (
            <p className={errorClass} role="alert">
              {state.errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="age" className="text-sm font-medium">
            Age range
          </label>
          <select
            id="age"
            name="age"
            defaultValue=""
            aria-invalid={!!state.errors?.age}
            className={fieldClass}
          >
            <option value="" disabled>
              Select age range
            </option>
            {ageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {state.errors?.age ? (
            <p className={errorClass} role="alert">
              {state.errors.age}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="height" className="text-sm font-medium">
            Height range
          </label>
          <select
            id="height"
            name="height"
            defaultValue=""
            aria-invalid={!!state.errors?.height}
            className={fieldClass}
          >
            <option value="" disabled>
              Select height range
            </option>
            {heightOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {state.errors?.height ? (
            <p className={errorClass} role="alert">
              {state.errors.height}
            </p>
          ) : null}
        </div>
      </div>

      {state.status === "error" && !state.errors ? (
        <p className={errorClass} role="alert">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {pending ? "Finding…" : "Find my size"}
      </button>
    </form>
  );
}
