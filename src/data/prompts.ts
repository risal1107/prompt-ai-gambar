export type PromptItem = {
  id: string;
  title: string;
  prompt: string;
  tags: string[];
  imageUrl: string;
};

export const prompts: PromptItem[] = [
  {
    id: "urban-cyberpunk",
    title: "Neon Urban Alley",
    prompt:
      "Cinematic cyberpunk alley at night, neon signage, rain reflections, high detail, 35mm film look.",
    tags: ["cyberpunk", "night", "neon"],
    imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "tropical-island",
    title: "Tropical Escape",
    prompt:
      "Aerial view of a tropical island, turquoise water, soft sunrise, ultra-realistic, warm palette.",
    tags: ["nature", "beach", "sunrise"],
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "minimal-product",
    title: "Minimal Product Render",
    prompt:
      "Minimalist studio product shot, soft shadows, clean gradient backdrop, high-key lighting.",
    tags: ["product", "studio", "minimal"],
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fantasy-forest",
    title: "Fantasy Forest Portal",
    prompt:
      "Misty forest with a glowing portal, whimsical fantasy style, volumetric light, painterly details.",
    tags: ["fantasy", "forest", "magic"],
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  },
];
