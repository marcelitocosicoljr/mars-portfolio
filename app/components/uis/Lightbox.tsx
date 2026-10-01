"use client";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxItem {
  src: string;
  title: string;
  link?: string;
  caption?: string;
}

interface Props {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

/**
 * Full-screen image viewer. Rendered through a portal on document.body so that
 * transformed ancestors (AOS, hover lifts) can't become its containing block —
 * which is what previously pushed the "fixed" overlay off-center.
 */
export default function Lightbox({ items, index, onClose, onIndexChange }: Props) {
  const [mounted, setMounted] = useState(false);
  const [direction, setDirection] = useState(0);
  const open = index !== null;
  const item = open ? items[index] : null;

  useEffect(() => setMounted(true), []);

  const go = useCallback(
    (step: number) => {
      if (index === null || items.length < 2) return;
      setDirection(step);
      onIndexChange((index + step + items.length) % items.length);
    },
    [index, items.length, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {item && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-950/90 px-4 py-20 backdrop-blur-md"
        >
          {/* Top bar */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="rounded-full bg-white/10 px-3 py-1 font-display text-[11px] font-bold tracking-[0.2em] text-white/80">
              {String(index! + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-full bg-white/10 p-2.5 text-white transition hover:rotate-90 hover:bg-white hover:text-navy-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Image */}
          <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={item.src}
                custom={direction}
                initial={{ opacity: 0, x: direction * 80, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -80, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                drag={items.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  else if (info.offset.x > 80) go(-1);
                }}
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-full max-w-full items-center justify-center"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={2400}
                  height={1400}
                  sizes="92vw"
                  draggable={false}
                  className="h-auto max-h-[calc(100vh-11rem)] w-auto max-w-[92vw] select-none rounded-xl bg-white object-contain shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 px-4 pb-5 text-center"
          >
            <p className="font-display text-base font-bold text-white sm:text-lg">{item.title}</p>
            <div className="flex items-center gap-3">
              {item.caption && <p className="text-[12px] text-white/60">{item.caption}</p>}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy-800 transition hover:bg-mist-200"
                >
                  Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white hover:text-navy-800 sm:block"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white hover:text-navy-800 sm:block"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
