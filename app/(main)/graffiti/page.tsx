import GalleryGrid from "@/components/gallery/GalleryGrid";
import { Section } from "@/components/ui/Section";
import { graffitiWorks } from "@/data/graffitiWorks";

const GraffitiPage = () => {
  return (
    <main className="w-full">
      <Section>
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio
          </p>

          <h1 className="text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
            Graffiti
          </h1>
        </div>

        <GalleryGrid works={graffitiWorks} />
      </Section>
    </main>
  );
};

export default GraffitiPage;
