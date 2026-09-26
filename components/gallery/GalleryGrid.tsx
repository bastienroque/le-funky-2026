"use client";

import { useState } from "react";
import { GalleryGridProps } from "@/types";
import GalleryItem from "./GalleryItem";
import Lightbox from "./Lightbox";

const GalleryGrid = ({ works }: GalleryGridProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedWork = selectedIndex !== null ? works[selectedIndex] : null;

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? works.length - 1 : selectedIndex - 1,
    );
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === works.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {works.map((work, index) => (
          <div key={work.id} className="mb-4 break-inside-avoid">
            <GalleryItem work={work} onClick={() => setSelectedIndex(index)} />
          </div>
        ))}
      </div>

      <Lightbox
        work={selectedWork}
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedIndex(null);
          }
        }}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
};

export default GalleryGrid;
