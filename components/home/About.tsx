const About = () => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Sticky Column: Name, Subtitle & Metadata */}
        <div className="space-y-8 lg:col-span-5 lg:sticky lg:top-28 lg:h-fit">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              About the Artist
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              Gabriel Roque
            </h2>
            <p className="text-xl font-light text-muted-foreground">Le Funky</p>
          </div>

          {/* Clean Inline Meta Block */}
          <div className="space-y-4 border-y border-border/40 py-6 text-sm">
            <div className="grid grid-cols-3 gap-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Origin
              </span>
              <span className="col-span-2 font-medium text-foreground">
                1993 • Orange, France • Raised in Alentejo, Portugal
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Focus
              </span>
              <span className="col-span-2 font-medium text-foreground">
                Graffiti, Tattooing, Live Painting & Illustration
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative Timeline */}
        <div className="space-y-12 lg:col-span-7">
          {/* Featured Highlight Blockquote */}
          <blockquote className="border-l-2 border-foreground pl-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            “Creating stories, memories and friendships that are essential to
            his artistic Manifest and that keep on feeding his insatiable
            curiosity.”
          </blockquote>

          {/* Main Story Paragraphs */}
          <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg text-foreground/90">
              French - Portuguese Artist, born in 1993 in Orange, France and
              raised in Alentejo, Portugal. He started drawing in his youth,
              heavily influenced by the cartoons, video games and the Skateboard
              graphics that he could get his hands on at the time. He studied
              Arts program at Gabriel Pereira high school in Évora, that’s where
              he started his interest for Illustration. He then followed with
              Graphic Design studies in the University of Évora.
            </p>

            <div className="space-y-6 pt-4 border-t border-border/30">
              <p>
                In those first years of university he discovers Graffiti, a
                whole new unexplored universe. He then creates an Art Collective
                / Graffiti crew with his friends and they start experimenting
                their creations on this new medium, painting bigger and bigger
                walls, abandoned factories and Hall of Fame graffiti jams.
              </p>

              <p>
                By the end of his studies, he got the chance to travel and make
                projects related to his Illustrative work, from Germany to
                Taiwan, he participated in different events doing Live Painting
                and other commissioned projects. In the midst of all these new
                opportunities, a friend introduced him to the world of Tattooing
                which then became one of his main activities.
              </p>

              <p>
                In the following years a lot of new adventures unraveled, all
                related to Graffiti and Tattooing, participating in different
                events around the world; Meeting of styles Kosovo and Denmark,
                Urban Art Cambodia, AT exchange Thailand, Art on Train,
                Luxembourg Tattoo Expo, Ottawa Tattoo convention, etc…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
