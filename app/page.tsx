import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import { NewsletterForm } from "components/forms/newsletter-form";
import { SizeFinderForm } from "components/forms/size-finder-form";
import Footer from "components/layout/footer";
import Image from "next/image";
import Link from "next/link";

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
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=1920&q=80"
          alt="Happy kids playing outdoors in colorful outfits"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-900/85 via-indigo-800/60 to-transparent" />
        <div className="mx-auto flex max-w-7xl flex-col items-start px-4 py-24 md:py-36">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur">
            New season just dropped ✨
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            Big adventures for little humans
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Clothes and gear built for play, naps, and everything in between.
            Made to move with your kid — and made to last.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/search"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-neutral-100"
            >
              Shop the collection
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/60 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Shop by category
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl shadow-sm"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative p-5 text-white">
                <p className="text-lg font-bold">{cat.title}</p>
                <p className="text-sm text-white/90">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4">
        <ThreeItemGrid />
      </section>

      {/* Carousel */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <Carousel />
      </section>

      {/* Brand story */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid items-center gap-8 rounded-3xl bg-neutral-100 p-6 dark:bg-neutral-800/50 md:grid-cols-2 md:p-10">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1000&q=80"
              alt="Kids fashion editorial"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Designed for real kid life
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              We obsess over the details parents notice and kids never think
              about — reinforced knees, tagless seams, colors that survive the
              wash. Premium quality that feels effortless.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-xl">⭐</span>
                <span className="text-sm">Premium, kid-tested fabrics</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🧵</span>
                <span className="text-sm">
                  Reinforced, built-to-last stitching
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">💚</span>
                <span className="text-sm">
                  Thoughtful, sustainable sourcing
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <span className="text-3xl">{perk.emoji}</span>
              <div>
                <p className="font-semibold">{perk.title}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {perk.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Size finder */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 md:p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Not sure about the size? 📏
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Tell us a little about your kid and we'll recommend the perfect
              fit.
            </p>
          </div>
          <SizeFinderForm />
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative isolate overflow-hidden bg-indigo-600 px-4 py-16 text-white">
        <Image
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-20"
        />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Join the Kids club 🎈
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Be first to know about new drops, exclusive deals, and parenting
            tips. No spam — just good stuff for growing kids.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
