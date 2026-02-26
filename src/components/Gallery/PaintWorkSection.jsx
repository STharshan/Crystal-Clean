import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const paintImages = [
  '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', 
  '/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg', '/7.jpg',
];

const PaintWorkSection = () => {
  const scrollRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [imageWidth, setImageWidth] = useState(320);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        const firstImg = scrollRef.current.querySelector("img");
        if (firstImg) {
          const width = firstImg.clientWidth;
          setImageWidth(width + 16); // + gap-4 (16px)
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftButton(scrollLeft > 10);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -imageWidth : imageWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="bg-linear-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden"
      id="paint-work"
    >
      <div className="absolute inset-0 from-red-100/20 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear-to-r from-[#861918] to-red-500 bg-clip-text text-transparent mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-[#861918] to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            See the results for yourself. Our gallery showcases real vehicles serviced and repaired at our Leicester garage, demonstrating our commitment to quality and precision.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative group">

          {/* Left Fade */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r 
              from-gray-50 to-transparent 
              z-10 pointer-events-none transition-opacity duration-300 
              ${showLeftButton ? 'opacity-100' : 'opacity-0'}`}
          ></div>

          {/* Right Fade */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l 
              from-white to-transparent z-10 
              pointer-events-none transition-opacity duration-300
              ${showRightButton ? 'opacity-100' : 'opacity-0'}`}
          ></div>

          {/* Scrollable Wrapper */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 scroll-smooth scrollbar-hide px-4 sm:px-8 py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {paintImages.map((src, index) => (
              <div key={index} className="relative shrink-0 group/item">
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-95">
                  <img
                    src={src}
                    alt={`Work Showcase ${index + 1}`}
                    className="w-[300px] h-[420px] sm:w-[350px] sm:h-[490px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>

                  {/* Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#861918] font-bold px-3 py-1 rounded-full text-sm">
                    {index + 1}/{paintImages.length}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Button */}
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="flex absolute top-1/2 left-3 transform -translate-y-1/2 
                bg-white text-gray-800 p-3 sm:p-4 rounded-full 
                shadow-2xl hover:bg-[#861918] hover:text-white 
                transition-all duration-300 z-20 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Right Button */}
          {showRightButton && (
            <button
              onClick={() => scroll("right")}
              className="flex absolute top-1/2 right-3 transform -translate-y-1/2 
                bg-white text-gray-800 p-3 sm:p-4 rounded-full 
                shadow-2xl hover:bg-[#861918] hover:text-white 
                transition-all duration-300 z-20 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

        </div>

        {/* Contact Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <a href="/contact">
            <button className="group/btn bg-linear-to-r from-[#861918] to-red-600 hover:from-[#a51f1e] hover:to-[#861918] 
                text-white font-semibold px-8 py-4 rounded-full inline-flex items-center gap-3 
                shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
              <Phone className="w-5 h-5" />
              <span className="text-base sm:text-lg">CONTACT US TODAY</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent mt-16"></div>
    </section>
  );
};

export default PaintWorkSection;