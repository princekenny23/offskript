"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";

const categories = ["All works", "Wear", "Art & prints", "Objects", "Collectibles"];

export function ProductGrid({ initialQuery = "", featured = false }: { initialQuery?: string; featured?: boolean }) {
  const [category, setCategory] = useState("All works");
  const [query, setQuery] = useState(initialQuery);
  const visibleProducts = useMemo(() => {
    const source = featured ? products.slice(0, 4) : products;
    return source.filter((product) => {
      const matchesCategory = category === "All works" || product.category === category;
      const matchesQuery = `${product.name} ${product.creator} ${product.category}`.toLowerCase().includes(query.toLowerCase().trim());
      return matchesCategory && matchesQuery;
    });
  }, [category, featured, query]);

  return (
    <>
      {!featured && <div className="catalog-controls"><div className="filter-row" role="group" aria-label="Filter works">{categories.map((item) => <button key={item} className={`filter-button ${category === item ? "is-active" : ""}`} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="catalog-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search works or makers" aria-label="Search works or makers" /></label></div>}
      {visibleProducts.length ? <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-results"><p>No works match that search.</p><button className="text-button" onClick={() => { setQuery(""); setCategory("All works"); }}>Clear filters ↗</button></div>}
    </>
  );
}