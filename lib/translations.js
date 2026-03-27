export function formatIQD(value, lang) {
  if (lang === "ar") {
    return `${new Intl.NumberFormat("ar-IQ").format(value)} د.ع`;
  }
  return `IQD ${new Intl.NumberFormat("en-US").format(value)}`;
}

export function t(lang) {
  const en = {
    ticker: "DELIVERY IN IRAQ • LIMITED BATCHES • COOKIELICIOUS",
    nav: {
      shop: "Shop",
      contact: "Contact",
      policies: "Policies",
      cart: "Cart"
    },
    home: {
      eyebrow: "LUXURY COOKIES • IRAQ ONLY",
      title: "Cookielicious",
      copy:
        "Limited cookie drops built for rich flavor. Minimal, premium, and available for a short time.",
      shopBtn: "Shop Cookies",
      contactBtn: "Order / Contact",
      newTitle: "New Cookies",
      newCopy: "Featured picks from the current drop.",
      viewAll: "View all cookies",
      viewDetails: "View Details"
    },
    shop: {
      title: "Shop",
      copy: "All products from Cookielicious",
      howTitle: "How to Order",
      lines: [
        "Find a cookie you love above",
        'Click "Order / Contact" to message us on Instagram',
        "Tell us which cookie, box size, and flavor preferences",
        "We confirm availability and payment details by DM",
        "Delivery across Iraq depending on your location"
      ],
      instaBtn: "Order on Instagram"
    },
    contact: {
      title: "Order & Contact",
      dmTitle: "DM Us on Instagram",
      dmCopy:
        "We handle all orders through Instagram direct messages for fast replies and simple checkout.",
      handle: "@cookielicious.iq",
      orderingTitle: "How Ordering Works",
      ordering: [
        {
          title: "Find Your Cookie",
          text: "Browse our shop and choose the cookie you want."
        },
        {
          title: "Message Us",
          text: "Send a DM with the cookie name, box size, and any flavor preferences."
        },
        {
          title: "Confirm Order",
          text: "We confirm availability, total price, and payment method."
        },
        {
          title: "Payment",
          text: "We accept local transfer or cash on delivery/pickup when available."
        },
        {
          title: "Delivery",
          text: "Your order is prepared fresh and sent based on your city and batch timing."
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "Do you deliver in Iraq?",
          a: "Yes. Delivery timing and cost vary by city and are confirmed before payment."
        },
        {
          q: "What box sizes are available?",
          a: "We offer single, box of 4, box of 6, and box of 12."
        },
        {
          q: "Can I return or exchange?",
          a: "Food-item issues are handled case by case if there is a problem with the order."
        },
        {
          q: "How long does delivery take?",
          a: "Usually 1–4 days inside Iraq depending on your location."
        },
        {
          q: "Do you offer bulk discounts?",
          a: "Yes. Message us for larger cookie orders."
        }
      ],
      methodsTitle: "Contact Methods",
      methods: [
        "Primary: DM on Instagram @cookielicious.iq",
        "Response Time: Usually within 24 hours",
        "Language: English & Arabic"
      ],
      backShop: "← Back to Shop",
      policies: "Policies & Returns"
    },
    policies: {
      title: "Policies & Returns",
      sections: [
        {
          title: "Shipping Policy",
          lines: [
            "Processing Time: Orders are prepared within 1-2 business days after payment confirmation.",
            "Delivery in Iraq: Usually 1-4 business days depending on city and courier.",
            "Pickup: Pickup details are shared via Instagram DM when available.",
            "Tracking: Tracking is provided if your order is sent through a courier."
          ]
        },
        {
          title: "Returns & Exchanges",
          lines: [
            "Food orders are generally non-returnable after delivery.",
            "If there is an issue, contact us immediately with photos.",
            "Incorrect or damaged orders are handled case by case."
          ]
        },
        {
          title: "Quality Guarantee",
          lines: [
            "All cookies are prepared fresh and checked before delivery.",
            "If your order has a major issue, contact us right away."
          ]
        }
      ],
      back: "← Back to Contact"
    },
    product: {
      back: "← Back to shop",
      productId: "Product ID",
      selectSize: "Select box size",
      addToCart: "Add to Cart",
      viewCart: "View Cart",
      checkout: "Checkout on Instagram",
      limited: "Limited",
      addedToCart: "Added to cart."
    },
    cart: {
      title: "Cart",
      copy: "Review your selected cookies before ordering.",
      empty: "Your cart is empty.",
      continueShopping: "Continue Shopping",
      size: "Size",
      price: "Price",
      remove: "Remove",
      subtotal: "Subtotal",
      delivery: "Delivery",
      deliveryNote: "Calculated in DM",
      total: "Total",
      clearCart: "Clear Cart",
      orderOnInstagram: "Order on Instagram",
      instagramMessageIntro: "Hi, I want to order these cookies:"
    }
  };

  const ar = {
    ticker: "توصيل داخل العراق • دفعات محدودة • كوكيليشس",
    nav: {
      shop: "المتجر",
      contact: "التواصل",
      policies: "السياسات",
      cart: "السلة"
    },
    home: {
      eyebrow: "كوكيز فاخر • داخل العراق",
      title: "كوكيليشس",
      copy:
        "دفعات كوكيز محدودة بنكهات غنية. تصميم بسيط ولمسة فاخرة ومتوفرة لفترة قصيرة.",
      shopBtn: "تسوق الكوكيز",
      contactBtn: "اطلب / تواصل",
      newTitle: "كوكيز جديد",
      newCopy: "اختيارات مميزة من الدفعة الحالية.",
      viewAll: "عرض كل الكوكيز",
      viewDetails: "عرض التفاصيل"
    },
    shop: {
      title: "المتجر",
      copy: "كل منتجات Cookielicious",
      howTitle: "طريقة الطلب",
      lines: [
        "اختر نوع الكوكيز الذي يعجبك من الأعلى",
        "اضغط على اطلب أو تواصل لمراسلتنا على إنستغرام",
        "أرسل لنا نوع الكوكيز وحجم العلبة وأي ملاحظات",
        "سنؤكد التوفر والسعر وطريقة الدفع عبر الرسائل",
        "التوصيل داخل العراق حسب موقعك"
      ],
      instaBtn: "اطلب عبر إنستغرام"
    },
    contact: {
      title: "الطلب والتواصل",
      dmTitle: "راسلنا على إنستغرام",
      dmCopy:
        "نستقبل جميع الطلبات عبر رسائل إنستغرام المباشرة لتسهيل الطلب وسرعة الرد.",
      handle: "@cookielicious.iq",
      orderingTitle: "كيف يتم الطلب",
      ordering: [
        {
          title: "اختر الكوكيز",
          text: "تصفح المتجر واختر نوع الكوكيز الذي تريده."
        },
        {
          title: "راسلنا",
          text: "أرسل لنا اسم الكوكيز وحجم العلبة وأي ملاحظات."
        },
        {
          title: "تأكيد الطلب",
          text: "سنؤكد التوفر والسعر النهائي وطريقة الدفع."
        },
        {
          title: "الدفع",
          text: "نقبل التحويل المحلي أو الدفع عند الاستلام أو الاستلام الشخصي حسب التوفر."
        },
        {
          title: "التوصيل",
          text: "نجهز طلبك طازجًا حسب مدينتك وموعد الدفعة الحالية."
        }
      ],
      faqTitle: "الأسئلة الشائعة",
      faq: [
        {
          q: "هل يوجد توصيل داخل العراق؟",
          a: "نعم، وتكلفة ووقت التوصيل يختلفان حسب المدينة."
        },
        {
          q: "ما هي أحجام العلب المتوفرة؟",
          a: "نوفر حبة واحدة وعلبة 4 وعلبة 6 وعلبة 12."
        },
        {
          q: "هل يوجد استرجاع أو تبديل؟",
          a: "يتم التعامل مع المشاكل حسب الحالة إذا كان هناك خطأ في الطلب."
        },
        {
          q: "كم يستغرق التوصيل؟",
          a: "عادة من 1 إلى 4 أيام داخل العراق حسب موقعك."
        },
        {
          q: "هل يوجد خصم للطلبات الكبيرة؟",
          a: "نعم، راسلنا للطلبات الكبيرة."
        }
      ],
      methodsTitle: "طرق التواصل",
      methods: [
        "الأساسي: رسالة مباشرة على إنستغرام @cookielicious.iq",
        "وقت الرد: غالبًا خلال 24 ساعة",
        "اللغة: العربية والإنجليزية"
      ],
      backShop: "← الرجوع إلى المتجر",
      policies: "السياسات والاسترجاع"
    },
    policies: {
      title: "السياسات والاسترجاع",
      sections: [
        {
          title: "سياسة الشحن",
          lines: [
            "وقت التجهيز: يتم تجهيز الطلب خلال 1-2 يوم عمل بعد تأكيد الدفع.",
            "التوصيل داخل العراق: عادة 1-4 أيام عمل حسب المدينة وشركة التوصيل.",
            "الاستلام: تفاصيل الاستلام يتم إرسالها عبر إنستغرام عند التوفر.",
            "التتبع: يتم توفير رقم تتبع إذا تم إرسال الطلب عبر شركة توصيل."
          ]
        },
        {
          title: "الاسترجاع والاستبدال",
          lines: [
            "الطلبات الغذائية غالبًا غير قابلة للاسترجاع بعد التسليم.",
            "إذا كان هناك مشكلة في الطلب، تواصل معنا مباشرة مع الصور.",
            "الطلبات الخاطئة أو المتضررة تتم معالجتها حسب الحالة."
          ]
        },
        {
          title: "ضمان الجودة",
          lines: [
            "جميع أنواع الكوكيز لدينا تُجهز طازجة ويتم فحصها قبل التوصيل.",
            "إذا وصلك الطلب وفيه مشكلة كبيرة، راسلنا مباشرة."
          ]
        }
      ],
      back: "← الرجوع إلى التواصل"
    },
    product: {
      back: "← الرجوع إلى المتجر",
      productId: "رقم المنتج",
      selectSize: "اختر حجم العلبة",
      addToCart: "أضف إلى السلة",
      viewCart: "عرض السلة",
      checkout: "إتمام الطلب عبر إنستغرام",
      limited: "محدود",
      addedToCart: "تمت الإضافة إلى السلة."
    },
    cart: {
      title: "السلة",
      copy: "راجع الكوكيز التي اخترتها قبل الطلب.",
      empty: "السلة فارغة.",
      continueShopping: "متابعة التسوق",
      size: "الحجم",
      price: "السعر",
      remove: "حذف",
      subtotal: "المجموع الفرعي",
      delivery: "التوصيل",
      deliveryNote: "يُحسب عبر الرسائل",
      total: "المجموع",
      clearCart: "تفريغ السلة",
      orderOnInstagram: "اطلب عبر إنستغرام",
      instagramMessageIntro: "مرحبًا، أريد طلب هذه المنتجات:"
    }
  };

  return lang === "ar" ? ar : en;
}
