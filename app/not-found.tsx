import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full flex-col items-center justify-center text-center px-4 py-12">
      <div className="flex flex-col items-center max-w-md gap-6">
        <div className="flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Compass className="size-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            404 Error
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-sm text-muted-foreground">
            The page or artwork you are looking for doesn't exist or has been
            moved to another collection.
          </p>
        </div>

        <div className="pt-2">
          <Button variant="default" className="gap-2 cursor-pointer">
            <Link href="/" className="flex flex-row gap-2">
              <ArrowLeft className="size-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
