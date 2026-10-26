"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/catalog";

export function AddToBagButton({ product, compact = false, quantity = 1 }: { product: Product; compact?: boolean; quantity?: number }) {
  const [added, setAdded] = useState(false);

  function addToBag() {
    const items = JSON.parse(localStorage.getItem("offskript-bag") || "[]") as { slug: string; quantity: number }[];
    const current = items.find((item) => item.slug === product.slug);
    if (current) current.quantity += quantity;
    else items.push({ slug: product.slug, quantity });
    localStorage.setItem("offskript-bag", JSON.stringify(items));
    window.dispatchEvent(new Event("offskript-bag-update"));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return <button className={`add-button ${compact ? "add-compact" : "button button-dark"}`} onClick={addToBag}><ShoppingBag size={15} />{added ? "Added to bag" : "Add to bag"}</button>;
}