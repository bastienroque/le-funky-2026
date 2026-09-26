"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Work } from "@/types";

type LightboxProps = {
  work: Work | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
};

const Lightbox = ({
  work,
  open,
  onOpenChange,
  onPrevious,
  onNext,
}: LightboxProps) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrevious();
    }
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onPrevious, onNext]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          m-0! left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[90vw] max-w-md sm:max-w-3xl lg:max-w-5xl
          max-h-[90dvh]
          rounded-xl border-0 bg-black p-4 pt-18 text-white shadow-2xl
          overflow-hidden sm:overflow-visible
        "
      >
        <DialogTitle className="sr-only">
          {work?.title ?? "Artwork"}
        </DialogTitle>

        {work && (
          <div
            className="relative flex flex-col touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Previous artwork"
              className="hidden sm:flex absolute -left-12 lg:-left-16 top-1/2 z-10 size-10 -translate-y-1/2 items-center justify-center rounded-md bg-white text-black shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronLeft
                className="size-7"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </button>

            <div className="flex min-h-0 flex-col items-center">
              <div className="relative flex h-[50dvh] sm:h-[65dvh] w-full items-center justify-center select-none">
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={1600}
                  height={2000}
                  className="h-full w-full object-contain pointer-events-none"
                  sizes="(max-width: 640px) 90vw, 80vw"
                  priority
                />
              </div>

              <div className="flex w-full items-center justify-between gap-4 pt-3 text-white">
                <h3 className="text-xs sm:text-sm font-medium uppercase tracking-wide truncate">
                  {work.title}
                </h3>

                <span className="text-xs sm:text-sm text-neutral-400 shrink-0">
                  {work.year}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next artwork"
              className="hidden sm:flex absolute -right-12 lg:-right-16 top-1/2 z-10 size-10 -translate-y-1/2 items-center justify-center rounded-md bg-white text-black shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              <ChevronRight
                className="size-7"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </button>

            <div className="mt-3 flex items-center justify-between gap-4 sm:hidden pt-2 border-t border-neutral-800">
              <button
                type="button"
                onClick={onPrevious}
                aria-label="Previous artwork"
                className="flex items-center gap-1 rounded-lg bg-neutral-800 px-4 py-2 text-xs font-medium text-white transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </button>

              <button
                type="button"
                onClick={onNext}
                aria-label="Next artwork"
                className="flex items-center gap-1 rounded-lg bg-neutral-800 px-4 py-2 text-xs font-medium text-white transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;
