import type { ImageMetadata } from 'astro';

export const loadImage = async (path: string) => {
  const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*');

  const imagePath = `/src/assets${path}`;
  if (!images[imagePath]) {
    throw new Error(`File "${path}" does not exist in the "/src/assets/" folder.`);
  }

  const resolvedImage = (await images[imagePath]()).default;

  return resolvedImage;
};
