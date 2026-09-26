const About = () => {
  return (
    <section
      id="about"
      className="grid w-full gap-10 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32"
    >
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          About
        </p>

        <h2 className="max-w-xl text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
          Le Funky
        </h2>
      </div>

      <div className="flex max-w-xl flex-col justify-end gap-6">
        <p className="text-xl leading-relaxed md:text-2xl">
          Graffiti and tattoo artist based in Lagos, south of Portugal, working
          across walls, skin, and everything in between.
        </p>

        <p className="text-base leading-relaxed text-muted-foreground">
          A short introduction about the artist, their approach, influences, and
          the work they create. Keep this concise and let the artwork speak for
          itself.
        </p>
      </div>
    </section>
  );
};

export default About;
