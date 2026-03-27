"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

export default function ProductActions({ product }) {
  const { lang } = useLanguage();
  const { addItem } = useCart();
  const copy = t(lang);
  const options = lang === "ar" ? product.optionsAr : product.optionsEn;

  const sizeDefs = useMemo(
    () =>
      product.optionsEn.map((labelEn, index) => ({
        key: product.optionKeys[index],
        labelEn,
        labelAr: product.optionsAr[index]
      })),
    [product]
  );

  const [selectedKey, setSelectedKey] = useState(product.optionKeys[0]);
  const [notice, setNotice] = useState("");

  const selectedSize = sizeDefs.find((size) => size.key === selectedKey) || sizeDefs[0];

  const handleAdd = () => {
    addItem(product, selectedSize, lang);
    setNotice(copy.product.addedToCart);
    window.setTimeout(() => setNotice(""), 1800);
  };

  return (
    <>
      <div className="option-block">
        <div className="option-title">{copy.product.selectSize}</div>
        <div className="options">
          {sizeDefs.map((size, index) => (
            <button
              key={size.key}
              type="button"
              className={`option ${selectedKey === size.key ? "active" : ""}`}
              onClick={() => setSelectedKey(size.key)}
            >
              {options[index]}
            </button>
          ))}
        </div>
      </div>

      <div className="cta-row">
        <button className="btn secondary" type="button" onClick={handleAdd}>
          {copy.product.addToCart}
        </button>
        <a
          href="https://www.instagram.com/cookielicious.iq/"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          {copy.product.checkout}
        </a>
      </div>

      <div className="notice">{notice}</div>
    </>
  );
}
