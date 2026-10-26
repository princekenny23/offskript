import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { creators, products } from "@/lib/catalog";

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export default async function CreatorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const creator = creators.find((item) => item.slug === slug);
  if (!creator) notFound();
  const creatorProducts = products.filter((product) => product.creator.toLowerCase().includes(creator.name.replace(".", "").toLowerCase().split(" ")[0]));
  return <main className="page-main content-width"><div className="breadcrumb"><Link href="/creators"><ArrowLeft size={14} /> All creators</Link><span>/</span><span>{creator.number}</span></div><header className={`creator-profile-hero creator-${creator.color}`}><div className="creator-number">CREATOR / {creator.number}</div><h1>{creator.name}</h1><div className="creator-profile-meta">{creator.disciplines}</div></header><section className="creator-story"><div><div className="eyebrow">The practice</div><h2>THE PERSON<br />BEHIND THE WORK.</h2></div><div><p className="manifesto-copy">{creator.description}</p><p className="body-copy">OFFSKRIPT brings independent makers and the people who appreciate their work into one shared space. This creator profile is a starting point for discovering their process, their latest work and the ideas that move it forward.</p><Link className="text-link" href="/contact">Enquire about collaborations <ArrowUpRight size={14} /></Link></div></section>{creatorProducts.length > 0 && <section className="related-products"><div className="section-heading"><div><div className="eyebrow">Selected work</div><h2>MADE BY<br />{creator.name}</h2></div></div><div className="product-grid">{creatorProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div></section>}<p className="prototype-note">Creator biographies and links are sample content and should be verified with each creator before publication.</p></main>;
}