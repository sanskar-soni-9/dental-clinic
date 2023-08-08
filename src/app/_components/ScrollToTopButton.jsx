"use client";
import { PiArrowFatLineUpFill } from "react-icons/pi";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollEvent = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 rounded-full p-2 cursor-pointer border-teal-500 border-2 bg-gray-900 text-teal-100 shadow-teal-600/50 hover:drop-shadow-2xl hover:bottom-9 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
    >
      <PiArrowFatLineUpFill className="w-6 h-6" />
    </div>
  );
};

export default ScrollToTopButton;
