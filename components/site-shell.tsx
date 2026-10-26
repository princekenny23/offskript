"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Search, ShoppingBag, X } from "lucide-react";

type CartItem = { slug: string; quantity: number };

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [bagCount, setBagCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const items = JSON.parse(localStorage.getItem("offskript-bag") || "[]") as CartItem[];
      setBagCount(items.reduce((total, item) => total + item.quantity, 0));
    };
    updateCount();
    window.addEventListener("offskript-bag-update", updateCount);
    window.addEventListener("storage", updateCount);
    return () => {
      window.removeEventListener("offskript-bag-update", updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return (
    <>
      <div className="announcement">Independent creativity, from Malawi to everywhere <span>·</span> New discoveries inside</div>
      <header className="site-header">
        <Link href="/" className="logo" aria-label="Offskript home">OFF<span>/</span>SKRIPT</Link>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/creators" onClick={() => setMenuOpen(false)}>Creators</Link>
          <Link href="/manifesto" onClick={() => setMenuOpen(false)}>Our point of view</Link>
          <Link href="/journal" onClick={() => setMenuOpen(false)}>Journal</Link>
          <Link href="/sell" onClick={() => setMenuOpen(false)}>Sell with us</Link>
        </nav>
        <div className="header-actions">
          <button className="icon-button search-trigger" aria-label="Search products" onClick={() => setSearchOpen(!searchOpen)}><Search size={17} strokeWidth={1.7} /><span>Search</span></button>
          <Link className="icon-button bag-trigger" href="/bag" aria-label={`Shopping bag, ${bagCount} items`}><ShoppingBag size={17} strokeWidth={1.7} /><span>Bag ({bagCount})</span></Link>
          <button className="icon-button menu-trigger" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}<span>Menu</span></button>
        </div>
      </header>
      {searchOpen && <form className="search-bar" action="/shop"><Search size={17} /><input autoFocus name="q" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search clothing, art, objects, creators…" aria-label="Search products" /><button type="submit" aria-label="Submit search"><ArrowUpRight size={18} /></button></form>}
      {children}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand"><Link href="/" className="logo">OFF<span>/</span>SKRIPT</Link><p>An independent creative collective. Made in Malawi, open to the world.</p></div>
          <div className="footer-column"><h3>Discover</h3><Link href="/shop">Shop the edit</Link><Link href="/creators">Our creators</Link><Link href="/journal">Journal</Link><Link href="/manifesto">Manifesto</Link></div>
          <div className="footer-column"><h3>Take part</h3><Link href="/sell">Sell with us</Link><Link href="/contact">Collaborations</Link><Link href="/contact">Contact</Link></div>
          <div className="footer-column"><h3>Information</h3><Link href="/shipping">Shipping & returns</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        </div>
        <div className="legal"><span>© 2026 OFFSKRIPT. Independent by nature.</span><span>PROTOTYPE · SAMPLE PRODUCTS AND PRICES</span><span>MADE IN MALAWI ↗</span></div>
      </footer>
    </>
  );
}