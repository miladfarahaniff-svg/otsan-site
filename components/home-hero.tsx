"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <main className="bg-background flex flex-1 items-center justify-center px-6 py-24">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="border-border bg-secondary text-secondary-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
          <Sparkles aria-hidden="true" className="size-3.5" />
          Otsan is coming into focus
        </div>
        <h1 className="text-foreground text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
          A thoughtful foundation for what&apos;s next.
        </h1>
        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg">
          Built with a fast, accessible, and production-ready Next.js stack.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg">
            <a href="mailto:hello@otsan.com">
              Get in touch <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </motion.section>
    </main>
  );
}
