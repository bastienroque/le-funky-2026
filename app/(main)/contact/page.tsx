import { Section } from "@/components/ui/Section";
import { contacts, tattoo_shops } from "@/data/site";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="w-full">
      <Section>
        <div className="max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Get in touch
          </p>

          <h1 className="text-6xl font-black uppercase leading-none tracking-tight md:text-8xl">
            Contact
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            For tattoo bookings, graffiti projects, collaborations, or any other
            enquiries, get in touch directly.
          </p>
        </div>
      </Section>

      <section className="grid border-t px-6 md:grid-cols-2 md:px-10">
        <div className="border-b py-12 md:border-b-0 md:border-r md:pr-12">
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Tattoo
          </p>

          <div className="space-y-8">
            {tattoo_shops.map((shop) => (
              <div key={shop.href}>
                <h2 className="text-2xl font-bold uppercase">{shop.title}</h2>

                <p className="mt-2 text-muted-foreground">{shop.location}</p>

                <Link
                  href={shop.href}
                  className="mt-4 inline-block text-sm font-medium uppercase tracking-wide underline underline-offset-4 transition-opacity hover:opacity-60"
                >
                  Visit shop →
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="py-12 md:pl-12">
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Direct
          </p>

          <div className="flex flex-col items-start gap-6">
            {contacts.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-3xl font-bold uppercase transition-opacity hover:opacity-60 md:text-4xl"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t px-6 py-12 md:px-10">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
          For tattoo enquiries, please include your preferred style, idea,
          placement, and approximate size when reaching out.
        </p>
      </section>
    </main>
  );
};

export default Contact;
