import { policies } from "@/lib/policies";

export function PolicyPage({ policy }: { policy: keyof typeof policies }) {
  const content = policies[policy];
  return <main className="page-main content-width"><header className="page-intro"><div className="eyebrow">{content.eyebrow}</div><h1>{content.title}</h1><p>{content.intro}</p></header><article className="policy-content">{content.sections.map(([title, body]) => <section key={title}><h2>{title}</h2><p>{body}</p></section>)}</article><p className="prototype-note">Draft placeholder only. Confirm operational details and applicable law before publishing this policy.</p></main>;
}