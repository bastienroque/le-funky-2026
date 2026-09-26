"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { nav_links } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="flex w-full items-center justify-between">
      <Link
        href="/"
        className="rounded-md px-3 py-2 text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Logo
      </Link>

      <div className="hidden items-center gap-2 md:flex">
        {nav_links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-md font-medium transition-colors ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            />
          }
        >
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <nav className="flex flex-col gap-2 p-4 pt-16">
            {nav_links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
