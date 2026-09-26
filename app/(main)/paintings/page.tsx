import GalleryGrid from "@/components/gallery/GalleryGrid";
import { Section } from "@/components/ui/Section";
import { paintingsWorks } from "@/data/paintingsWorks";

const GraffitiPage = () => {
  return (
    <main className="w-full">
      <Section>
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio
          </p>

          <h1 className="text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
            Paintings
          </h1>
        </div>

        <GalleryGrid works={paintingsWorks} />
      </Section>
    </main>
  );
};

export default GraffitiPage;
