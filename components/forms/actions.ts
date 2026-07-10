"use server";

import { promises as fs } from "fs";
import path from "path";
import { shopifyAdminQuery } from "lib/shopifyAdmin.server";

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

  // Submit to Shopify as a metaobject
  try {
    const METAOBJECT_CREATE = `
      mutation metaobjectCreate($metaobject: MetaobjectCreateInput!) {
        metaobjectCreate(metaobject: $metaobject) {
          metaobject {
            id
            handle
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const result = await shopifyAdminQuery<{
      metaobjectCreate: {
        metaobject: { id: string; handle: string } | null;
        userErrors: { field: string[]; message: string }[];
      };
    }>(undefined, METAOBJECT_CREATE, {
      metaobject: {
        type: "contact_submission",
        fields: [
          { key: "name", value: name },
          { key: "email", value: email },
          { key: "message", value: message },
        ],
      },
    });

    const userErrors = result?.metaobjectCreate?.userErrors;
    if (userErrors && userErrors.length > 0) {
      console.error(
        "Shopify metaobject creation errors:",
        JSON.stringify(userErrors),
      );
    }
  } catch (e) {
    console.error("Failed to create Shopify metaobject:", e);
  }

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

export async function submitBecomePartOfIt(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const sport = String(formData.get("sport") || "").trim();
  const skillLevel = String(formData.get("skillLevel") || "").trim();
  const productInterest = String(formData.get("productInterest") || "").trim();
  const budgetRange = String(formData.get("budgetRange") || "").trim();
  const trainingFrequency = String(formData.get("trainingFrequency") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const errors: Record<string, string> = {};

  if (!sport) errors.sport = "Please select a sport.";
  if (!skillLevel) errors.skillLevel = "Please select your skill level.";
  if (!productInterest) errors.productInterest = "Please select a product interest.";
  if (!budgetRange) errors.budgetRange = "Please select a budget range.";
  if (!trainingFrequency) errors.trainingFrequency = "Please select a training frequency.";
  if (!name) errors.name = "Please enter your name.";
  if (!email || !EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  // Submit to Shopify as a metaobject
  try {
    const METAOBJECT_CREATE = `
      mutation metaobjectCreate($metaobject: MetaobjectCreateInput!) {
        metaobjectCreate(metaobject: $metaobject) {
          metaobject {
            id
            handle
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const result = await shopifyAdminQuery<{
      metaobjectCreate: {
        metaobject: { id: string; handle: string } | null;
        userErrors: { field: string[]; message: string }[];
      };
    }>(undefined, METAOBJECT_CREATE, {
      metaobject: {
        type: "become_part_of_it_submission",
        fields: [
          { key: "sport", value: sport },
          { key: "skill_level", value: skillLevel },
          { key: "product_interest", value: productInterest },
          { key: "budget_range", value: budgetRange },
          { key: "training_frequency", value: trainingFrequency },
          { key: "name", value: name },
          { key: "email", value: email },
        ],
      },
    });

    const userErrors = result?.metaobjectCreate?.userErrors;
    if (userErrors && userErrors.length > 0) {
      console.error(
        "Shopify metaobject creation errors:",
        JSON.stringify(userErrors),
      );
    }
  } catch (e) {
    console.error("Failed to create Shopify metaobject:", e);
  }

  return {
    status: "success",
    message: "You're part of it! We'll reach out soon. 🎉",
  };
}

