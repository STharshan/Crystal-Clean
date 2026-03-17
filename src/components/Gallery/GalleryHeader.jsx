import { useEffect, useState, useRef } from "react";

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
      /* Changed from pure white to a softer gray-50/zinc-100 */
      className="relative w-full h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-700"
    >
      {/* Top-right image */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-no-repeat bg-cover object-center bg-right "
        style={{ backgroundImage: "url('/1.png')" }}
      ></div>

      {/* Bottom-left image */}
      <div
        className="absolute -bottom-10 left-0 w-1/2 h-1/2 bg-no-repeat bg-cover object-center bg-left"
        style={{ backgroundImage: "url('/c1.png')" }}
      ></div>

      {/* Content Overlay - Added backdrop-blur for a premium glass feel in light mode */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4 transition-all duration-500 ease-in-out 
                   "
      >
        {/* Added a subtle blue accent line above the title */}
        <div className="w-12 h-1 bg-[#01215F] mb-6 rounded-full" />

        <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">
          Over the Years, We’ve Transformed Vehicles Across Devon
        </h1>

        <p className="max-w-md text-sm sm:text-lg mt-8 leading-relaxed font-medium text-gray-900 dark:text-gray-300">
          From subtle gloss enhancements to full paint correction and protection packages, Crystal Clean has restored and protected vehicles of all types.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <div className="w-px h-12 bg-zinc-300 dark:bg-zinc-800" />
        </div>
      </div>
    </section>
  );
}