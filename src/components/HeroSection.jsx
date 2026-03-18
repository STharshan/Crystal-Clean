import { FaPhone, FaMapMarkerAlt, FaCar, FaUserTie, FaSmile, FaStar } from "react-icons/fa";

const HeroSection = () => {
  const stats = [
    {
      title: "Mobile & Studio Detailing",
      icon: <FaCar className="h-6 w-6 text-[#13AFFE] dark:text-[#F5A623]" />,
    },
    {
      title: "10+ Years Experience",
      icon: <FaUserTie className="h-6 w-6 dark:text-[#13AFFE] text-[#F5A623]" />,
    },
    {
      title: "1000+ Satisfied Customers",
      icon: <FaSmile className="h-6 w-6 text-[#13AFFE] dark:text-[#F5A623]" />,
    },
    {
      title: "Bespoke Detailing Packages",
      icon: <FaStar className="h-6 w-6 dark:text-[#13AFFE] text-[#F5A623]" />,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black transition-colors duration-300 flex items-center" id="home">

      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/fall.png"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="w-full h-full object-cover"
        >
          {/* Replace with your video path */}
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 transition-colors duration-300"></div>
      </div>

      {/* --- CONTENT (Wrapped in relative z-10) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl font-black leading-tight text-white mt-10 md:mt-0">
              <span className="text-[#13AFFE]">Crystal Clean</span>
            </h1>

            <p className="text-xl text-gray-100 font-medium" data-aos="fade-right" data-aos-delay="200">
              "Premium Car Detailing
            </p>

            <p className="text-lg text-gray-300 max-w-lg" data-aos="fade-right" data-aos-delay="400">
              Bring out the best in your vehicle with professional deep cleaning, polishing, ceramic coating, and PPF services in Okehampton and across Devon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="600">
              <a
                href="tel:+447446253967"
                className="inline-flex items-center justify-center gap-2 text-sm bg-[#F5A623] text-white shadow-lg h-12 rounded-md px-8 font-bold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaPhone className="h-4 w-4" />
                Call Now
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-sm border-2 border-white text-white hover:bg-white hover:text-black h-12 rounded-md px-8 font-bold transition-all duration-300"
              >
                View Services
              </a>
            </div>

            {/* Location Detail */}
            <div className="pt-6" data-aos="zoom-in" data-aos-delay="800">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                <FaMapMarkerAlt className="h-5 w-5 text-[#13AFFE] dark:text-[#F5A623] shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p className="text-sm text-gray-200">
                    Unit 1B Cranmere Rd, Okehampton EX20 1UE, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (Optional: You can remove this or keep it as a secondary visual) */}
          <div className="relative w-full hidden lg:block" data-aos="fade-left" data-aos-duration="1200">
            <div className="aspect-video sm:aspect-4/3 w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/1.png"
                alt="Professional Detailing"
                className="object-cover absolute inset-0 h-full w-full"
              />
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
                data-aos-delay={index * 150}
                className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#13AFFE] transition-all duration-300 group"
              >
                <div className="flex items-center justify-center mb-3 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <p className="text-white font-bold text-sm uppercase tracking-wider">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;