import Image from "next/image";
import { GalleryItemProps } from "@/types";

const GalleryItem = ({ work, onClick }: GalleryItemProps) => {
  return (
    <article className="group">
      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`View ${work.title}`}
      >
        <div className="overflow-hidden rounded-md bg-neutral-900">
          <Image
            src={work.src}
            alt={work.alt}
            width={work.width}
            height={work.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex items-start justify-between gap-4 pt-3">
          <h3 className="text-sm font-medium uppercase tracking-wide">
            {work.title}
          </h3>
          <h3 className="text-sm font-medium uppercase tracking-wide">
            {work.location}
          </h3>

          <span className="text-sm text-muted-foreground">{work.year}</span>
        </div>
      </button>
    </article>
  );
};

export default GalleryItem;
