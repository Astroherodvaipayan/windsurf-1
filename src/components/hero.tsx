"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Windsurf vs Cursor: The Ultimate Comparison
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A comprehensive analysis of two leading AI coding assistants. Explore features, performance metrics, and find the right tool for your development workflow.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/overview">
                My Overview
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#comparison">
                View Detailed Comparison
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 