"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function ProductCard({ product, viewLabel, lang }) {
  const { items } = useCart();
  const name = lang === "ar" ? product.nameAr : product.nameEn;

  // Calculate total quantity for this product across all sizes
  const productQuantity = items
    .filter((item) => item.productId === product.slug)
    .reduce((sum, item) => sum + item.quantity, 0);

  return (
    <article className="product-card">
      <Link className="product-image" href={`/product/${product.slug}`}>
        <div className="cookie-visual">
          <div className="cookie" />
        </div>
      </Link>

      <div className="product-name">{name}</div>

      <div className="price-line">
        <span>{product.price}</span>
        {productQuantity > 0 && <span className="qty">{productQuantity}</span>}
      </div>

      <Link href={`/product/${product.slug}`} className="underline-link">
        {viewLabel} →
      </Link>
    </article>
  );
}
