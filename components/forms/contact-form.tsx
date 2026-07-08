"use client";

import { useActionState } from "react";
import { submitContact, idleState, type FormState } from "./actions";

const fieldClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-neutral-500 focus:border-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white";
const errorClass = "text-sm text-red-600 dark:text-red-400";

export function ContactForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    submitContact,
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
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            aria-invalid={!!state.errors?.name}
            className={fieldClass}
            placeholder="Jane Parent"
          />
          {state.errors?.name ? (
            <p className={errorClass} role="alert">
              {state.errors.name}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
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

      <div className="flex flex-col gap-1">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject <span className="text-neutral-400">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={fieldClass}
          placeholder="Order question, sizing, etc."
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!state.errors?.message}
          className={fieldClass}
          placeholder="How can we help?"
        />
        {state.errors?.message ? (
          <p className={errorClass} role="alert">
            {state.errors.message}
          </p>
        ) : null}
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
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
