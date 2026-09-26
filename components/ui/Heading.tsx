import { cn } from "@/lib/utils";
import { HeadingProps } from "@/types";

const sizes = {
  display: "text-5xl md:text-7xl lg:text-8xl leading-none uppercase",
  title: "text-3xl md:text-5xl leading-tight",
  subtitle: "text-xl md:text-2xl leading-snug",
};

export function Heading({
  as: Tag = "h2",
  size = "title",
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn("font-display tracking-tight", sizes[size], className)}
      {...props}
    />
  );
}
