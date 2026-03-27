"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { useCart } from "@/components/CartProvider";
import { t } from "@/lib/translations";

export default function Header({ onCartToggle }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const copy = t(lang);

  const isActive = (href) => pathname === href;

  const handleCartClick = () => {
    onCartToggle?.();
  };

  return (
    <>
      <div className="top-ticker">
        <div className="top-ticker-track">
          {copy.ticker} • {copy.ticker} • {copy.ticker} •
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            COOKIELICIOUS
          </Link>

          <div className="nav-right">
            <nav className={`nav-links ${open ? "open" : ""}`}>
              <Link
                href="/shop"
                className={isActive("/shop") ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {copy.nav.shop}
              </Link>
              <Link
                href="/contact"
                className={isActive("/contact") ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {copy.nav.contact}
              </Link>
              <Link
                href="/policies"
                className={isActive("/policies") ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {copy.nav.policies}
              </Link>
            </nav>

            <button
              className="cart-btn"
              onClick={handleCartClick}
              type="button"
              aria-label={`Shopping cart, ${cartCount} items`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            <div className="lang-toggle">
              <button
                className={`lang-btn ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
                type="button"
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === "ar" ? "active" : ""}`}
                onClick={() => setLang("ar")}
                type="button"
              >
                AR
              </button>
            </div>

            <button
              className={`theme-toggle-btn`}
              onClick={toggleTheme}
              type="button"
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              title={theme === "light" ? "Dark Mode" : "Light Mode"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button
              className="menu-btn"
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
