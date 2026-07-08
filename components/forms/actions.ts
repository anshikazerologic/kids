"use server";

import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

type Submission = Record<string, unknown> & { createdAt: string };

async function appendJson(
  filename: string,
  entry: Omit<Submission, "createdAt">,
) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const filePath = path.join(DATA_DIR, filename);
    let existing: Submission[] = [];
    try {
      const content = await fs.readFile(filePath, "utf-8");
      existing = JSON.parse(content) as Submission[];
    } catch {
      // file does not exist yet — start fresh
    }
    existing.push({ ...entry, createdAt: new Date().toISOString() });
    await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
  } catch (e) {
    console.error(`Failed to store submission in ${filename}`, e);
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string>;
};

const idleState: FormState = { status: "idle", message: "" };

export async function subscribeNewsletter(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const errors: Record<string, string> = {};

  if (!email || !EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted field.",
      errors,
    };
  }

  await appendJson("newsletter.json", { name, email });
  return {
    status: "success",
    message: "You're in! Watch your inbox for kid-approved drops. 🎉",
  };
}

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please tell us your name.";
  if (!email || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email.";
  if (!message) errors.message = "Please enter a message.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  await appendJson("contact.json", { name, email, subject, message });
  return {
    status: "success",
    message: "Thanks! Our team will get back to you within 1–2 business days.",
  };
}

export async function submitSizeFinder(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const childName = String(formData.get("childName") || "").trim();
  const age = String(formData.get("age") || "").trim();
  const height = String(formData.get("height") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const errors: Record<string, string> = {};

  if (!childName) errors.childName = "Please enter your child's name.";
  if (!age) errors.age = "Please select an age range.";
  if (!height) errors.height = "Please select a height range.";
  if (!email || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  await appendJson("size-finder.json", { childName, age, height, email });
  return {
    status: "success",
    message:
      "We've got your fit profile — check your email for the perfect size picks! 👟",
  };
}

export { idleState };
