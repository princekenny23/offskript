import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { stories } from "@/lib/journal";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export default async function JournalStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();
  return <main className="page-main content-width"><div className="breadcrumb"><Link href="/journal"><ArrowLeft size={14} /> Journal</Link><span>/</span><span>{story.category}</span></div><article className="article-page"><header className="article-header"><div className="eyebrow">{story.category} · OFFSKRIPT JOURNAL</div><h1>{story.title}</h1><p>{story.teaser}</p></header><div className="article-art" /><div className="article-copy">{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className="article-closing">{story.closing}</p><Link className="text-link" href="/creators">Meet the makers <ArrowUpRight size={14} /></Link></div></article><p className="prototype-note">Editorial draft. Replace or supplement with original creator interviews and photography.</p></main>;
}