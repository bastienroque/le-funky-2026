import Link from "next/link";

import { nav_links } from "@/data/site";

const Footer = () => {
  return (
    <footer className="container w-full overflow-x-hidden flex flex-col items-center justify-between gap-12 p-4">
      <div className="w-full flex items-center justify-between">
        <Link
          href="/"
          className="rounded-md px-3 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Logo
        </Link>

        <nav className="flex items-center justify-end gap-2 flex-wrap">
          {nav_links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="w-full p-3 flex items-center justify-between text-sm">
        <p>Le Funky's 2026</p>
        <p>Made possible by the Best</p>
      </div>
    </footer>
  );
};

export default Footer;
