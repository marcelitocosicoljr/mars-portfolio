"use client";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  imgClassName?: string;
}

export default function ImageLightbox({
  src,
  alt,
  width = 1800,
  height = 1000,
  className = "",
  imgClassName = "",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger wrapper */}
      <div
        className={`relative cursor-zoom-in group/lb ${className}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className={imgClassName}
        />
        {/* Hover zoom hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/lb:opacity-100 transition-opacity duration-200 bg-black/30 rounded-inherit">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full p-3">
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 z-10 rounded-full bg-white/10 border border-white/20 p-2.5 text-white/70 hover:text-white hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-[92vw] max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={2400}
              height={1400}
              className="max-w-[92vw] max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest">
            {alt} &nbsp;·&nbsp; Click anywhere to close
          </div>
        </div>
      )}
    </>
  );
}
