"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

export default function PoliciesPage() {
  const { lang } = useLanguage();
  const copy = t(lang);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className={lang === "ar" ? "rtl" : ""}>
      <h1 className="page-title">{copy.policies.title}</h1>

      <div className="accordion">
        {copy.policies.sections.map((section, index) => (
          <div key={`${section.title}-${index}`} className="accordion-item">
            <button
              className={`accordion-btn ${openSection === index ? "open" : ""}`}
              onClick={() => toggleSection(index)}
              type="button"
            >
              <span className="accordion-title">{section.title}</span>
              <span className="accordion-icon">+</span>
            </button>
            <div
              className={`accordion-inner ${openSection === index ? "open" : ""}`}
            >
              <div className="accordion-content">
                {section.lines.map((line, idx) => (
                  <p key={idx} style={{ marginBottom: idx < section.lines.length - 1 ? 12 : 0 }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="accordion-footer">
        <Link href="/contact" className="underline-link">
          {copy.policies.back}
        </Link>
      </div>
    </div>
  );
}
