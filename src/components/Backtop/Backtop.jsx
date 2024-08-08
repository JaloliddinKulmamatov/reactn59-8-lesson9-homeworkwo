"use client"

import React, { useEffect, useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";


const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-purple-700"
      >
        <TiArrowUpThick />
      </button>
    )
  );
};

export default BackToTop;
