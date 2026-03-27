"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

export default function ContactPage() {
  const { lang } = useLanguage();
  const copy = t(lang);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "dm",
      title: copy.contact.dmTitle,
      content: (
        <div>
          <p>{copy.contact.dmCopy}</p>
          <p style={{ marginTop: 12 }}>
            <a
              className="underline-link"
              href="https://www.instagram.com/cookielicious.iq/"
              target="_blank"
              rel="noreferrer"
            >
              {copy.contact.handle} →
            </a>
          </p>
        </div>
      )
    },
    {
      id: "ordering",
      title: copy.contact.orderingTitle,
      content: (
        <div className="accordion-content-list">
          {copy.contact.ordering.map((item) => (
            <div key={item.title} style={{ marginBottom: 16 }}>
              <strong>{item.title}</strong>
              <p style={{ margin: "6px 0 0" }}>{item.text}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "faq",
      title: copy.contact.faqTitle,
      content: (
        <div className="accordion-content-list">
          {copy.contact.faq.map((item) => (
            <div key={item.q} style={{ marginBottom: 16 }}>
              <strong>{item.q}</strong>
              <p style={{ margin: "6px 0 0" }}>{item.a}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "methods",
      title: copy.contact.methodsTitle,
      content: (
        <div className="accordion-content-list">
          {copy.contact.methods.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className={lang === "ar" ? "rtl" : ""}>
      <h1 className="page-title">{copy.contact.title}</h1>

      <div className="accordion">
        {sections.map((section) => (
          <div key={section.id} className="accordion-item">
            <button
              className={`accordion-btn ${openSection === section.id ? "open" : ""}`}
              onClick={() => toggleSection(section.id)}
              type="button"
            >
              <span className="accordion-title">{section.title}</span>
              <span className="accordion-icon">+</span>
            </button>
            <div
              className={`accordion-inner ${openSection === section.id ? "open" : ""}`}
            >
              <div className="accordion-content">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="accordion-footer">
        <Link href="/policies" className="underline-link">
          {copy.contact.policies}
        </Link>
      </div>
    </div>
  );
}
