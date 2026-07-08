"use client";

import { useActionState } from "react";
import { subscribeNewsletter, idleState, type FormState } from "./actions";

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    subscribeNewsletter,
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
    <form action={formAction} className="flex w-full max-w-md flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="name"
          placeholder="Your name (optional)"
          aria-label="Your name"
          className="w-full rounded-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
          aria-invalid={!!state.errors?.email}
          className="w-full rounded-full border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
        >
          {pending ? "Joining…" : "Join"}
        </button>
      </div>
      {state.errors?.email ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {state.errors.email}
        </p>
      ) : null}
      {state.status === "error" && !state.errors?.email ? (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
