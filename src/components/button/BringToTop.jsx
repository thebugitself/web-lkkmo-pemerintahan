"use client"
import { useState, useEffect } from 'react';

const ButtonBringToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fungsi untuk mengatur visibilitas tombol
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Fungsi untuk mengatur hover
  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg 
                     hover:bg-blue-700 focus:outline-none focus:ring-2 
                     focus:ring-blue-600 focus:ring-opacity-50"
        >
          {isHovered ? 'Go to Top' : '↑'}
        </button>
      )}
    </div>
  );
};

export default ButtonBringToTop;
