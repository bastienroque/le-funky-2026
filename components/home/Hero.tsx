import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] w-full items-end overflow-hidden">
      <Image
        src="/images/graffiti/graffiti9.jpg"
        alt="Artist artwork"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex w-full flex-col justify-between gap-8 p-6 md:flex-row md:items-end md:p-10">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/80">
            Graffiti · Tattoo
          </p>

          <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl lg:text-9xl">
            Le Funky
          </h1>
        </div>

        <Link
          href="/graffiti"
          className="w-fit border border-white px-5 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
        >
          Explore the work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
