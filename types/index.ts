import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export type HeadingProps = React.ComponentPropsWithoutRef<"h1"> & {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "display" | "title" | "subtitle";
};

export type Work = {
  id: string;
  title: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  year?: number;
};

export type GalleryItemProps = {
  work: Work;
  onClick: () => void;
};

export type GalleryGridProps = {
  works: Work[];
};
