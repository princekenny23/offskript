import Link from "next/link";
import { ProductVisual } from "@/components/product-visual";
import { AddToBagButton } from "@/components/store-actions";
import { formatPrice, type Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/shop/${product.slug}`} className="product-link" aria-label={`View ${product.name}`}>
        <ProductVisual product={product} />
      </Link>
      <div className="product-info">
        <div><Link href={`/shop/${product.slug}`} className="product-name">{product.name}</Link><div className="product-maker">{product.creator} · {product.category.toUpperCase()}</div></div>
        <div className="product-price">{formatPrice(product.price)}</div>
      </div>
      <AddToBagButton product={product} compact />
    </article>
  );
}