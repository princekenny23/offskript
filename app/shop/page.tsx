import { ProductGrid } from "@/components/product-grid";

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  return <main className="page-main content-width"><header className="page-intro"><div className="eyebrow">The first selection / 001</div><h1>THE THINGS<br />WE STAND FOR.</h1><p>Discover work with a point of view. Clothing, artwork, functional objects and collectible pieces created by people who see things differently.</p></header><ProductGrid initialQuery={q} /><p className="prototype-note">Sample products, prices and specifications. Please verify details before accepting orders.</p></main>;
}