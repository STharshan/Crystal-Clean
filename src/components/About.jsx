
export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#111] py-20" id="about">
      <div className="relative max-w-7xl mx-auto">

        {/* IMAGE — RESPONSIVE, NO AOS */}
        <img
          src="/2.jpg"
          alt="Boxing training"
          className="
            w-full
            max-w-[900px]
            h-[400px]
            md:h-[500px]
            lg:h-[600px]
            object-cover
          "
        />

        {/* TEXT BOX — OVERLAY ON DESKTOP */}
        <div
          className="
            bg-black
            text-white
            shadow-xl
            w-full

            lg:absolute
            lg:top-1/2
            lg:right-0
            lg:-translate-y-1/2
            lg:w-[50%]
            lg:h-[500px]
            lg:flex 
            lg:flex-col
            lg:justify-center

            p-10 
            md:p-12 
            lg:p-16
            mt-6
            lg:mt-0
          "
        >
          {/* RED BAR — ONLY DESKTOP */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-2 bg-red-600"></div>

          {/* CONTENT */}
          <div className="lg:ml-6">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-6">
              ABOUT CRYSTAL CLEAN
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
             We are a dedicated vehicle detailing company in Okehampton, offering professional-level cleaning, polishing, ceramic coating, and PPF services for cars, motorcycles, and caravans. Our team brings years of detailing experience, helping every vehicle look its absolute best — no matter its condition.
            </p>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              If you want a premium, reliable, and results-driven service, whether at our fully equipped studio or via our mobile detailing service, you’re in the right place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}