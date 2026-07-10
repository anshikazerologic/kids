"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form
      action="/search"
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
    >
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="text-md w-full rounded-full border border-neutral-200 bg-white/80 px-4 py-2.5 pl-5 text-black placeholder:text-neutral-400 backdrop-blur-sm transition-all duration-200 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 md:text-sm dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-blue-600 dark:focus:ring-blue-900/30"
      />
      <div className="absolute right-0 top-0 mr-1 flex h-full items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors hover:bg-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:hover:bg-blue-900/40">
          <MagnifyingGlassIcon className="h-4" />
        </div>
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="Search for products..."
        className="w-full rounded-full border border-neutral-200 bg-white/80 px-4 py-2.5 pl-5 text-sm text-black placeholder:text-neutral-400 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-white dark:placeholder:text-neutral-500"
      />
      <div className="absolute right-0 top-0 mr-1 flex h-full items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400">
          <MagnifyingGlassIcon className="h-4" />
        </div>
      </div>
    </form>
  );
}
