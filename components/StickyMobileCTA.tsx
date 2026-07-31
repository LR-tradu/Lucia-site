"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export function StickyMobileCTA({ href, label }: { href: string; label: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-base p-4 dark:border-border-dark dark:bg-base-dark desktop:hidden"
        >
          <Link
            href={href}
            className="label block w-full bg-accent px-6 py-3 text-center text-label text-base dark:bg-accent-dark dark:text-base-dark"
          >
            {label}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
