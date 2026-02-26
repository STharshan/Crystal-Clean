import React, { useEffect, useState, useRef } from "react";

export default function GalleryHeader() {
  const [opacity, setOpacity] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max((0 - rect.top) / (rect.height + windowHeight), 0),
        1
      );

      const newBrightness = 1 - scrollProgress * 0.4;
      setBrightness(newBrightness);

      const newOpacity =
        scrollProgress < 0.7 ? 1 : 1 - (scrollProgress - 0.7) / 0.3;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Top-right image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-no-repeat bg-cover bg-right"
        style={{ backgroundImage: "url('/5.jpg')" }}
      ></div>

      {/* Bottom-left image */}
      <div
        className="absolute -bottom-10 left-0 w-1/2 h-1/2 bg-no-repeat bg-cover bg-left"
        style={{ backgroundImage: "url('/2.jpg')" }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-screen bg-black/70 px-4 transition-all duration-500 ease-in-out"
        style={{
          opacity: opacity,
          filter: `brightness(${brightness})`,
        }}
      >

        <h1 className="text-2xl sm:text-3xl md:text-4xl mt-5 max-w-3xl">
          Over the Years, We’ve Transformed Vehicles Across Devon
        </h1>

        <p className="max-w-md text-sm sm:text-lg text-gray-300 mt-10">
         From subtle gloss enhancements to full paint correction and protection packages, Crystal Clean has restored and protected vehicles of all types — including cars, motorcycles, and caravans.
        </p>
      </div>
    </section>
  );
}
