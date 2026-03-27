"use client";

import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/lib/products";
import { t } from "@/lib/translations";

export default function ShopPage() {
  const { lang } = useLanguage();
  const copy = t(lang);

  return (
    <div className={lang === "ar" ? "rtl" : ""}>
      <h1 className="page-title">{copy.shop.title}</h1>
      <p className="section-subtitle">{copy.shop.copy}</p>

      <div className="product-grid" style={{ marginTop: 28 }}>
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            viewLabel={copy.home.viewDetails}
            lang={lang}
          />
        ))}
      </div>

      <div className="block-copy" style={{ marginTop: 54 }}>
        <h2 className="section-title" style={{ fontSize: 32, marginBottom: 20 }}>
          {copy.shop.howTitle}
        </h2>

        <div className="stack-list">
          {copy.shop.lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>

        <div className="cta-row">
          <a
            href="https://www.instagram.com/cookielicious.iq/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            {copy.shop.instaBtn} →
          </a>
        </div>
      </div>
    </div>
  );
}
