import { getCollections } from "lib/shopify";
import BecomePartOfItForm from "./form";

export const metadata = {
  title: "Become Part Of It",
  description: "Join our community of athletes — share your training preferences and we'll help you get started.",
};

export default async function BecomePartOfItPage() {
  const collections = await getCollections();
  // Filter out the "All" collection and hidden collections
  const sports = collections
    .filter((c) => c.handle !== "" && !c.handle.startsWith("hidden"))
    .map((c) => ({
      label: c.title,
      value: c.handle,
    }));

  return <BecomePartOfItForm sports={sports} />;
}