"use client";

import { useState } from "react";

export default function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const imageCount = 2;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="gallery-main">
        <div className="gallery-main-visual">
          <div className="cookie" />
        </div>
        <button
          className="gallery-arrows-btn prev"
          onClick={handlePrev}
          type="button"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          className="gallery-arrows-btn next"
          onClick={handleNext}
          type="button"
          aria-label="Next image"
        >
          →
        </button>
        <div className="gallery-counter">
          {selectedIndex + 1} / {imageCount}
        </div>
      </div>

      <div className="thumb-row">
        <button
          className={`thumb ${selectedIndex === 0 ? "active" : ""}`}
          onClick={() => setSelectedIndex(0)}
          type="button"
          aria-label="View image 1"
        >
          <div className="thumb-visual">
            <div className="cookie" />
          </div>
        </button>
        <button
          className={`thumb ${selectedIndex === 1 ? "active" : ""}`}
          onClick={() => setSelectedIndex(1)}
          type="button"
          aria-label="View image 2"
        >
          <div className="thumb-visual">
            <div className="cookie" />
          </div>
        </button>
      </div>
    </div>
  );
}
