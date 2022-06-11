import type { ImageProps } from "next/image";
import NextImage from "next/image";

export const Image: React.FC<ImageProps> = ({ alt, height, src, width }) => (
  <NextImage src={src} alt={alt} width={width} height={height} />
);
