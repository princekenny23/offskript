import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductPurchase } from "@/components/product-purchase";
import { ProductVisual } from "@/components/product-visual";
import { ProductCard } from "@/components/product-card";
import { formatPrice, products } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== slug && item.category === product.category).slice(0, 4);
  return <main className="page-main content-width"><div className="breadcrumb"><Link href="/shop"><ArrowLeft size={14} /> All works</Link><span>/</span><span>{product.category}</span></div><section className="product-detail"><ProductVisual product={product} /><div className="detail-info"><div className="eyebrow">{product.category} / OFFSKRIPT EDIT</div><div className="detail-creator">{product.creator}</div><h1>{product.name}</h1><div className="detail-price">{formatPrice(product.price)}</div><p className="detail-description">{product.description}</p><ul className="detail-list">{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><ProductPurchase product={product} /><p className="prototype-note">Prototype listing. Availability, product details, delivery and payment are not yet confirmed.</p><Link className="text-link detail-contact" href="/contact">Ask us about this piece <ArrowUpRight size={14} /></Link></div></section>{related.length > 0 && <section className="related-products"><div className="section-heading"><div><div className="eyebrow">Continue exploring</div><h2>MORE FROM<br />THE EDIT.</h2></div></div><div className="product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>}</main>;
}