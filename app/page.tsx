import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import { NewsletterForm } from "components/forms/newsletter-form";
import { SizeFinderForm } from "components/forms/size-finder-form";
import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "components/hero-section";
import SocialProof from "components/SocialProof";
import ServicesCarousel from "components/ServicesCarousel";
import Testimonials from "components/Testimonials";
import FeedbackForm from "components/FeedbackForm";

export const metadata = {
  description:
    "Kids — fun, durable, and comfy clothing and gear for little explorers. Shop the kidz collection.",
  openGraph: {
    type: "website",
  },
};

const categories = [
  {
    title: "Tiny Tots",
    description: "0–2 years essentials",
    href: "/search?q=toddler",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Playtime",
    description: "Activewear & tees",
    href: "/search?q=play",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cozy Layers",
    description: "Hoodies & sweaters",
    href: "/search?q=hoodie",
    image:
      "https://images.unsplash.com/photo-1522771930-78f3d5b6e1a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Footwear",
    description: "Shoes that keep up",
    href: "/search?q=shoes",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80",
  },
];

const perks = [
  { emoji: "🚚", title: "Free shipping", text: "On all orders over $50" },
  { emoji: "🔄", title: "Easy returns", text: "30-day happy-kid guarantee" },
  {
    emoji: "🌱",
    title: "Kid-safe materials",
    text: "Soft, durable, non-toxic",
  },
];

export default function HomePage() {
  return (
    <>
     
      <HeroSection/>
      <SocialProof/>
      <ServicesCarousel/>
      <Testimonials/>
      <FeedbackForm/>
      <Footer />
    </>
  );
}
