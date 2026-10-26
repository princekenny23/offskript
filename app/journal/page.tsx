import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stories } from "@/lib/journal";

export default function JournalPage() {
  return <main className="page-main content-width"><header className="page-intro"><div className="eyebrow">The OFFSKRIPT journal</div><h1>BEHIND THE<br />MAKING.</h1><p>Ideas, processes and perspectives from the people creating beyond convention.</p></header><div className="journal-list">{stories.map((story, index) => <article className="journal-list-item" key={story.slug}><Link href={`/journal/${story.slug}`} className={`journal-list-art journal-art-${index + 1}`} aria-label={`Read ${story.title}`} /><div><div className="eyebrow">{story.category}</div><h2><Link href={`/journal/${story.slug}`}>{story.title}</Link></h2><p>{story.teaser}</p><Link className="text-link" href={`/journal/${story.slug}`}>Read the story <ArrowUpRight size={14} /></Link></div><span className="journal-index">0{index + 1}</span></article>)}</div><p className="prototype-note">These proposed articles are editorial drafts. Add creator interviews and original photography before publication.</p></main>;
}