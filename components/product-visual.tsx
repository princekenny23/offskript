import type { Product } from "@/lib/catalog";

export function ProductVisual({ product }: { product: Product }) {
  return (
    <div className={`product-visual visual-${product.color}`} aria-label={`${product.name} product artwork`} role="img">
      {product.label && <span className="product-tag">{product.label}</span>}
      <div className={`product-shape shape-${product.shape}`} />
      <span className="product-stamp">{product.mark}</span>
      <span className="visual-index">OFFSKRIPT / OBJECT {product.slug.split("-").at(-1)?.toUpperCase()}</span>
    </div>
  );
}