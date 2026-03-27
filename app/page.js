"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";
import { products } from "@/lib/products";

export default function HomePage() {
  const { lang } = useLanguage();
  const copy = t(lang);
  const featured = products.slice(0, 4);

  return (
    <div className={lang === "ar" ? "rtl" : ""}>
      <div className="eyebrow">{copy.home.eyebrow}</div>
      <h1 className="hero-title">{copy.home.title}</h1>
      <p className="hero-copy">{copy.home.copy}</p>

      <div className="hero-buttons">
        <Link href="/shop" className="btn">
          {copy.home.shopBtn}
        </Link>
        <Link href="/contact" className="btn secondary">
          {copy.home.contactBtn}
        </Link>
      </div>

      <div className="section-head">
        <div>
          <h2 className="section-title">{copy.home.newTitle}</h2>
          <p className="section-subtitle">{copy.home.newCopy}</p>
        </div>
        <Link href="/shop" className="underline-link">
          {copy.home.viewAll} →
        </Link>
      </div>

      <div className="product-grid">
        {featured.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            viewLabel={copy.home.viewDetails}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
