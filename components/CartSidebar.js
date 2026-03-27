"use client";

import { useCart } from "@/components/CartProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { t, formatIQD } from "@/lib/translations";

export default function CartSidebar({ isOpen, onClose }) {
  const { lang } = useLanguage();
  const { items, changeQuantity, removeItem, clearCart, subtotal } = useCart();
  const copy = t(lang);

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
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`} role="dialog" aria-label="Shopping cart">
        {/* Header */}
        <div className="cart-sidebar-header">
          <h2 className="cart-sidebar-title">{copy.cart.title}</h2>
          <button
            type="button"
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="cart-sidebar-content">
          {items.length === 0 ? (
            <div className="cart-empty-message">
              <p>{copy.cart.empty}</p>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="cart-items-list">
                {items.map((item) => (
                  <div className="cart-sidebar-item" key={item.id}>
                    <div className="cart-sidebar-item-info">
                      <div className="cart-sidebar-item-name">
                        {lang === "ar" ? item.nameAr : item.nameEn}
                      </div>
                      <div className="cart-sidebar-item-size">{item.sizeLabel}</div>
                      <div className="cart-sidebar-item-price">
                        {formatIQD(item.numericPrice, lang)}
                      </div>
                    </div>

                    <div className="cart-sidebar-item-controls">
                      <div className="qty-control-compact">
                        <button
                          type="button"
                          onClick={() => changeQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => changeQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <div className="cart-sidebar-item-total">
                        {formatIQD(item.numericPrice * item.quantity, lang)}
                      </div>

                      <button
                        type="button"
                        className="cart-item-remove-btn"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="cart-sidebar-divider" />

              {/* Summary */}
              <div className="cart-sidebar-summary">
                <div className="summary-line">
                  <span>{copy.cart.subtotal}</span>
                  <strong>{formatIQD(subtotal, lang)}</strong>
                </div>
                <div className="summary-line">
                  <span>{copy.cart.delivery}</span>
                  <span className="text-muted">{copy.cart.deliveryNote}</span>
                </div>
                <div className="summary-line summary-total">
                  <span>{copy.cart.total}</span>
                  <strong>{formatIQD(subtotal, lang)}</strong>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-sidebar-footer">
            <a
              className="btn btn-full"
              href={`https://www.instagram.com/direct/new/?username=cookielicious.iq&text=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              {copy.cart.orderOnInstagram}
            </a>
            <button
              className="btn btn-secondary btn-full"
              type="button"
              onClick={clearCart}
            >
              {copy.cart.clearCart}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
