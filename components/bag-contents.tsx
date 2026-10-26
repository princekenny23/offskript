"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ProductVisual } from "@/components/product-visual";
import { formatPrice, products } from "@/lib/catalog";

type CartItem = { slug: string; quantity: number };

export function BagContents() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => { setItems(JSON.parse(localStorage.getItem("offskript-bag") || "[]") as CartItem[]); setReady(true); }, []);

  function save(next: CartItem[]) {
    setItems(next);
    localStorage.setItem("offskript-bag", JSON.stringify(next));
    window.dispatchEvent(new Event("offskript-bag-update"));
  }

  const lines = items.map((item) => ({ item, product: products.find((product) => product.slug === item.slug) })).filter((line) => line.product);
  const subtotal = lines.reduce((sum, line) => sum + line.product!.price * line.item.quantity, 0);
  if (!ready) return <div className="bag-loading" aria-label="Loading bag" />;
  if (!lines.length) return <div className="bag-empty"><div className="eyebrow">Your selection</div><h2>YOUR BAG IS<br />WAITING.</h2><p>There’s nothing here just yet. Find a piece that feels like you.</p><Link className="button button-dark" href="/shop">Explore the edit</Link></div>;

  return <div className="bag-layout"><div className="bag-items">{lines.map(({ item, product }) => product && <article className="bag-line" key={item.slug}><Link href={`/shop/${product.slug}`}><ProductVisual product={product} /></Link><div className="bag-line-info"><div className="detail-creator">{product.creator}</div><Link className="product-name" href={`/shop/${product.slug}`}>{product.name}</Link><div className="product-price">{formatPrice(product.price)}</div><div className="bag-line-actions"><div className="quantity-control"><button aria-label={`Remove one ${product.name}`} onClick={() => save(item.quantity === 1 ? items.filter((entry) => entry.slug !== item.slug) : items.map((entry) => entry.slug === item.slug ? { ...entry, quantity: entry.quantity - 1 } : entry))}><Minus size={13} /></button><span>{item.quantity}</span><button aria-label={`Add one ${product.name}`} onClick={() => save(items.map((entry) => entry.slug === item.slug ? { ...entry, quantity: entry.quantity + 1 } : entry))}><Plus size={13} /></button></div><button className="remove-button" aria-label={`Remove ${product.name}`} onClick={() => save(items.filter((entry) => entry.slug !== item.slug))}><Trash2 size={14} /></button></div></div><div className="bag-line-total">{formatPrice(product.price * item.quantity)}</div></article>)}</div><aside className="order-summary"><div className="eyebrow">Order summary</div><div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="summary-row"><span>Delivery</span><span>Calculated later</span></div><p>Delivery options and payment details will be confirmed before checkout.</p><Link className="button button-dark" href="/checkout">Continue to checkout</Link><Link className="text-link" href="/shop">Continue exploring</Link><p className="prototype-note">Prototype only. Checkout and payment are not connected.</p></aside></div>;
}