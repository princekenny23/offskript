export type Product = {
  slug: string;
  name: string;
  creator: string;
  category: "Wear" | "Art & prints" | "Objects" | "Collectibles";
  price: number;
  label?: string;
  mark: string;
  description: string;
  details: string[];
  color: string;
  shape: string;
};

export const products: Product[] = [
  {
    slug: "heavyweight-tee",
    name: "Heavyweight Tee",
    creator: "OFFSKRIPT STUDIO",
    category: "Wear",
    price: 35000,
    label: "New work",
    mark: "OFF/K",
    description: "An everyday essential with a considered weight and an independent point of view. Designed to be worn on your own terms.",
    details: ["Heavyweight cotton", "Relaxed unisex fit", "Made in Malawi"],
    color: "clay",
    shape: "tee",
  },
  {
    slug: "red-line-print",
    name: "Red Line / Print",
    creator: "STUDIO K.",
    category: "Art & prints",
    price: 18000,
    label: "Limited edition",
    mark: "LINE 01",
    description: "A study in interruption and movement. The Red Line print brings Studio K.'s bold visual language into your space.",
    details: ["Archival art print", "A3 format", "Edition details to be confirmed"],
    color: "coral",
    shape: "circle",
  },
  {
    slug: "form-study-cap",
    name: "Form Study Cap",
    creator: "COMMON FORM",
    category: "Wear",
    price: 22000,
    mark: "FORM STUDY",
    description: "A quiet play with proportion and utility. A familiar form, reconsidered for everyday wear.",
    details: ["Adjustable fit", "Cotton twill", "Colour and stock to be confirmed"],
    color: "sage",
    shape: "cap",
  },
  {
    slug: "object-004",
    name: "Object 004",
    creator: "FORM LAB",
    category: "Objects",
    price: 42000,
    label: "Small batch",
    mark: "O.004",
    description: "A sculptural vessel that finds its character in considered lines, tactile material and the small irregularities of making.",
    details: ["Small-batch object", "Dimensions and material to be confirmed", "Each piece may vary"],
    color: "sand",
    shape: "vessel",
  },
  {
    slug: "after-hours",
    name: "After Hours",
    creator: "MZ",
    category: "Collectibles",
    price: 15000,
    mark: "AFTER HOURS",
    description: "A collectible edition for the ideas that arrive after the day has ended. Made to keep, share or pass along.",
    details: ["Collectible edition", "Edition size to be confirmed", "Creator details to be confirmed"],
    color: "lilac",
    shape: "arch",
  },
  {
    slug: "utility-tote",
    name: "Utility Tote",
    creator: "NO UNIFORM",
    category: "Wear",
    price: 20000,
    mark: "NO UNIFORM",
    description: "A useful everyday carryall with no prescribed way to use it. Made for carrying what matters to you.",
    details: ["Everyday utility tote", "Material and dimensions to be confirmed", "Designed by NO UNIFORM"],
    color: "ink",
    shape: "bag",
  },
  {
    slug: "quiet-study",
    name: "The Quiet Study",
    creator: "N. CHI",
    category: "Art & prints",
    price: 25000,
    mark: "STUDY 07",
    description: "A restrained composition that makes room for a slower look. Part of an ongoing exploration of form and stillness.",
    details: ["Art print", "Size and paper stock to be confirmed", "Signed edition details to be confirmed"],
    color: "stone",
    shape: "print",
  },
  {
    slug: "object-edition-01",
    name: "Object / Edition 01",
    creator: "OFFSKRIPT PROJECTS",
    category: "Collectibles",
    price: 30000,
    label: "Edition 01",
    mark: "01/25",
    description: "The first OFFSKRIPT Projects edition: a limited object made to mark the beginning of a shared collection.",
    details: ["Numbered edition", "Edition size and materials to be confirmed", "OFFSKRIPT Projects"],
    color: "oxide",
    shape: "edition",
  },
];

export const creators = [
  {
    slug: "studio-k",
    number: "001",
    name: "STUDIO K.",
    disciplines: "Art · Print · Image",
    description: "Art begins with a point of view. STUDIO K. explores visual ideas through art, print and image-making, creating work that invites people to see familiar things differently.",
    color: "sand",
  },
  {
    slug: "form-lab",
    number: "002",
    name: "FORM LAB",
    disciplines: "Objects · Design",
    description: "FORM LAB explores the relationship between form, function and everyday life. Its work celebrates considered design and objects that are as expressive as they are useful.",
    color: "coral",
  },
  {
    slug: "no-uniform",
    number: "003",
    name: "NO UNIFORM",
    disciplines: "Wear · Culture",
    description: "NO UNIFORM is about personal expression beyond the expected. It explores clothing as a way to communicate identity, culture and individuality.",
    color: "sage",
  },
];

export const formatPrice = (price: number) => `MK ${price.toLocaleString("en-MW")}`;