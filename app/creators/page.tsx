import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { creators } from "@/lib/catalog";

export default function CreatorsPage() {
  return <main className="page-main content-width"><header className="page-intro"><div className="eyebrow">People behind the work</div><h1>THE MINDS<br />MAKING IT.</h1><p>OFFSKRIPT is built around people who make things differently. Discover the ideas, practices and points of view behind the work.</p></header><div className="creator-list">{creators.map((creator) => <Link className={`creator-profile-card creator-${creator.color}`} href={`/creators/${creator.slug}`} key={creator.slug}><span className="creator-number">CREATOR / {creator.number}</span><span className="creator-name">{creator.name}</span><span className="creator-profile-meta">{creator.disciplines}<ArrowUpRight size={20} /></span></Link>)}</div><section className="creator-invite"><div className="eyebrow">Have work to share?</div><h2>MAKE ROOM<br />FOR YOUR VOICE.</h2><Link className="button button-outline" href="/sell">Join the collective <ArrowUpRight size={15} /></Link></section></main>;
}