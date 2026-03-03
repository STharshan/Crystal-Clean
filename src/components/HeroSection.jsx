import { FaPhone, FaMapMarkerAlt, FaCar, FaUserTie, FaSmile, FaStar } from "react-icons/fa";

const HeroSection = () => {
  const stats = [
    {
      title: "Mobile & Studio Detailing",
      icon: <FaCar className="h-6 w-6 text-[#0A7BDF] dark:text-[#FFDD00]" />, 
    },
    {
      title: "10+ Years Experience",
      icon: <FaUserTie className="h-6 w-6 text-[#0A7BDF] dark:text-[#FFDD00]" />, 
    },
    {
      title: "1000+ Satisfied Customers",
      icon: <FaSmile className="h-6 w-6 text-[#0A7BDF] dark:text-[#FFDD00]" />, 
    },
    {
      title: "Bespoke Detailing Packages",
      icon: <FaStar className="h-6 w-6 text-[#0A7BDF] dark:text-[#FFDD00]" />, 
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0E0E0E] transition-colors duration-300" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl font-black leading-tight text-[#0E0E0E] dark:text-white mt-10 md:mt-0">
              <span className="text-[#0A7BDF]">Crystal Clean</span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium" data-aos="fade-right" data-aos-delay="200">
              Premium Car, Motorcycle & Caravan Detailing
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg" data-aos="fade-right" data-aos-delay="400">
              Bring out the best in your vehicle with professional deep cleaning, polishing, ceramic coating, and PPF services in Okehampton and across Devon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="600">
              {/* Primary CTA (Blue) */}
              <a
                href="tel:+447446253967"
                className="inline-flex items-center justify-center gap-2 text-sm bg-[#0A7BDF] text-white shadow-lg h-12 rounded-md px-8 font-bold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaPhone className="h-4 w-4" />
                Call Now
              </a>

              {/* Secondary CTA (Outline Blue/Yellow) */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-sm border-2 border-[#0A7BDF] text-[#0A7BDF] dark:border-[#FFDD00] dark:text-[#FFDD00] h-12 rounded-md px-8 font-bold transition-all duration-300 hover:bg-[#0A7BDF] hover:text-white dark:hover:bg-[#FFDD00] dark:hover:text-[#0E0E0E]"
              >
                View Services
              </a>
            </div>

            {/* Location Detail */}
            <div className="pt-6" data-aos="zoom-in" data-aos-delay="800">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-100 dark:bg-[#0E0E0E] border border-gray-200 dark:border-gray-800">
                <FaMapMarkerAlt className="h-5 w-5 text-[#0A7BDF] dark:text-[#FFDD00] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-[#0E0E0E] dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Unit 1B Cranmere Rd, Okehampton EX20 1UE, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full" data-aos="fade-left" data-aos-duration="1200">
            <div className="aspect-video sm:aspect-4/3 w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img
                src="/1.jpg"
                alt="Professional Detailing"
                className="object-cover absolute inset-0 h-full w-full"
              />
              {/* Overlay accent for dark mode */}
              <div className="absolute inset-0 bg-[#0A7BDF]/10 dark:bg-[#FFDD00]/5 pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* BOTTOM STATS BOXES */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150} // Staggered entrance for each box
                className="flex flex-col items-center justify-center bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-[#0A7BDF] dark:hover:border-[#FFDD00] transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-[#0E0E0E] dark:text-white font-bold text-sm uppercase tracking-wider">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;