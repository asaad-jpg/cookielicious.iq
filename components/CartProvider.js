"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem("cookielicious-cart");
    if (!raw) {
      setIsHydrated(true);
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setItems(parsed);
      }
    } catch {}
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      window.localStorage.setItem("cookielicious-cart", JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = (product, selectedSize, lang) => {
    const sizeLabel = lang === "ar" ? selectedSize.labelAr : selectedSize.labelEn;
    setItems((current) => {
      const existingIndex = current.findIndex(
        (item) => item.productId === product.slug && item.sizeKey === selectedSize.key
      );

      if (existingIndex !== -1) {
        const clone = [...current];
        clone[existingIndex] = {
          ...clone[existingIndex],
          quantity: clone[existingIndex].quantity + 1
        };
        return clone;
      }

      return [
        ...current,
        {
          id: `${product.slug}-${selectedSize.key}`,
          productId: product.slug,
          nameEn: product.shortNameEn,
          nameAr: product.shortNameAr,
          price: product.price,
          numericPrice: product.numericPrice,
          sizeKey: selectedSize.key,
          sizeLabel,
          quantity: 1
        }
      ];
    });
  };

  const changeQuantity = (id, delta) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.numericPrice * item.quantity, 0);

  const value = useMemo(
    () => ({
      items,
      addItem,
      changeQuantity,
      removeItem,
      clearCart,
      cartCount,
      subtotal,
      isHydrated
    }),
    [items, cartCount, subtotal, isHydrated]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
