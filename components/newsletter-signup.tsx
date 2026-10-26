"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);
  return <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label className="sr-only" htmlFor="newsletter-email">Your email address</label><input id="newsletter-email" type="email" required placeholder="Your email address" /><button type="submit">Join the list <ArrowUpRight size={15} /></button>{submitted && <span className="form-confirmation" role="status">Signup is not connected yet. Your address has not been saved.</span>}</form>;
}