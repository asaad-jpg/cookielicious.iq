"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { t, formatIQD } from "@/lib/translations";

export default function CartPageClient() {
  const { lang, isHydrated } = useLanguage();
  const { items, changeQuantity, removeItem, clearCart, subtotal, isHydrated: cartHydrated } = useCart();
  const copy = t(lang);

  // Wait for hydration
  if (!isHydrated || !cartHydrated) {
    return (
      <div className={lang === "ar" ? "rtl" : ""}>
        <h1 className="page-title">{copy.cart.title}</h1>
        <p className="section-subtitle">{copy.cart.copy}</p>
        <div className="empty-state">
          <p>{copy.cart.empty}</p>
        </div>
      </div>
    );
  }

  const message = encodeURIComponent(
    [
      copy.cart.instagramMessageIntro,
      ...items.map(
        (item, index) =>
          `${index + 1}. ${lang === "ar" ? item.nameAr : item.nameEn} - ${item.sizeLabel} x${item.quantity}`
      ),
      `${copy.cart.total}: ${formatIQD(subtotal, lang)}`
    ].join("\n")
  );

  return (
    <div className={lang === "ar" ? "rtl" : ""}>
      <h1 className="page-title">{copy.cart.title}</h1>
      <p className="section-subtitle">{copy.cart.copy}</p>

      {items.length === 0 ? (
        <div className="empty-state">
          <p>{copy.cart.empty}</p>
          <div className="cta-row">
            <Link href="/shop" className="btn">
              {copy.cart.continueShopping}
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-page">
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-main">
                  <strong>{lang === "ar" ? item.nameAr : item.nameEn}</strong>
                  <div className="cart-item-meta">
                    {copy.cart.size}: {item.sizeLabel}
                  </div>
                  <div className="cart-item-meta">
                    {copy.cart.price}: {formatIQD(item.numericPrice, lang)}
                  </div>
                </div>

                <div className="qty-control">
                  <button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity">
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity">
                    +
                  </button>
                </div>

                <strong>{formatIQD(item.numericPrice * item.quantity, lang)}</strong>

                <button className="btn secondary" type="button" onClick={() => removeItem(item.id)}>
                  {copy.cart.remove}
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>{copy.cart.subtotal}</span>
              <strong>{formatIQD(subtotal, lang)}</strong>
            </div>
            <div className="summary-row">
              <span>{copy.cart.delivery}</span>
              <span>{copy.cart.deliveryNote}</span>
            </div>
            <div className="summary-row">
              <span>{copy.cart.total}</span>
              <strong>{formatIQD(subtotal, lang)}</strong>
            </div>

            <div className="cta-row">
              <a
                className="btn"
                href={`https://www.instagram.com/direct/new/?username=cookielicious.iq&text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                {copy.cart.orderOnInstagram}
              </a>
              <button className="btn secondary" type="button" onClick={clearCart}>
                {copy.cart.clearCart}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
