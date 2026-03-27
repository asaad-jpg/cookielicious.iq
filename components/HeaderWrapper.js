"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import CartSidebar from "@/components/CartSidebar";

export default function HeaderWrapper() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && cartOpen) {
        setCartOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [cartOpen]);

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [cartOpen]);

  return (
    <>
      <Header onCartToggle={() => setCartOpen(!cartOpen)} />
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
