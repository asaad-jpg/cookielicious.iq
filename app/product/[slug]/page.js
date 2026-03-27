"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import ProductActions from "@/components/ProductActions";
import { useLanguage } from "@/components/LanguageProvider";
import { getProductBySlug } from "@/lib/products";
import { t } from "@/lib/translations";

export default function ProductPage() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const copy = t(lang);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = lang === "ar" ? product.categoryAr : product.categoryEn;
  const description = lang === "ar" ? product.descriptionAr : product.descriptionEn;
  const badgeA = lang === "ar" ? product.badgeAAr : product.badgeAEn;
  const badgeB = lang === "ar" ? product.badgeBAr : product.badgeBEn;
  const productName = lang === "ar" ? product.shortNameAr : product.shortNameEn;

  return (
    <div className={lang === "ar" ? "rtl" : ""}>
      <Link href="/shop" className="back-link">
        {copy.product.back}
      </Link>

      <div className="product-layout">
        <ProductGallery />

        <div>
          <div className="brand-mini">COOKIELICIOUS</div>
          <h1 className="page-title" style={{ marginBottom: 0 }}>
            {productName}
          </h1>

          <div className="category">{category}</div>
          <div className="product-id">
            {copy.product.productId}: {product.slug}
          </div>

          <div className="price-stack">
            <div>{product.price}</div>
            <div>{product.oldPrice}</div>
          </div>

          <div className="badges">
            <span className="badge">{badgeA}</span>
            <span className="badge">{badgeB}</span>
            <span className="badge">{copy.product.limited}</span>
          </div>

          <div className="detail-copy">{description}</div>

          <ProductActions product={product} />
        </div>
      </div>
    </div>
  );
}
