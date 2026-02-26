import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      `Absolutely top notch service! 10/10 would highly recommend! The guys did an amazing job, where professional and polite! Will definitely be using the company again in the future!`,
    name: "DiSoRdErLy0604",
    avatar: "1.png",
  },
  {
    id: 2,
    quote:
      "Chris did a great job of my wintery mucky doggy van we will be using you now once a month to keep woodland dog walking and per sitting services van nice and clean. Just waiting on some of tge dogs bedding to dry now Thank you chris a great job looks much better than I have every done myself.",
    name: "Toby Thorne",
    avatar: "2.png",
  },
  {
    id: 3,
    quote:
      `Managed to get me booked in for a full interior and exterior valet next day. Car needed to be deep cleaned for returning following 4 year lease and looks brand new! Friendly, efficient and great value for money.`,
    name: "Toby Thorne",
    avatar: "3.png",
  },
  {
    id: 4,
    quote:
      "Super job done on my car, inside and out. It has been cleaned to a high standard. The car isn’t cleaned often but there was no judgment :) Very polite and friendly. Thanks boys. Definitely recommend",
    name: "Laura Dunk",
    avatar: "4.png",
  },
  {
    id: 5,
    quote:
      "I took my Fiesta in for a interior clean after seeing so many reviews for the company. And I am definitely a regular customer after the amazing job they did . I would definitely recommend them.",
    name: "amanda thorley",
    avatar: "4.png",
  },
  {
    id: 6,
    quote:
      "Needed a last minute clean before taking the car on a trip and Chris tried really hard to fit us in to his busy schedule. Dropped a dirty car off at their premises in Okehampton and later picked up a very shiny, clean car inside and out. Highly recommend and would definitely use again.",
    name: "amanda thorley",
    avatar: "4.png",
  },
];

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);

  // smooth Scroll Function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 80; // adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#000000] text-white py-24 px-6 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* Header */}
      <div
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14"
        data-aos="fade-up"
      >
        <div data-aos="fade-right">
          <p className="text-orange-500 uppercase tracking-[5px] text-sm font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.2] text-white">
            What Our <span className="text-orange-500">Customers</span> Say
          </h2>
          <p className="text-[#868386] text-base mt-4 max-w-lg">
            Our mission is to deliver precision, passion
            and perfection. Here’s what real customers have to say.
          </p>
        </div>

        {/* UPDATED BUTTON WITH SCROLL */}
        <button
          onClick={() => scrollToSection("contact")}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-8 md:mt-0 flex items-center gap-2 bg-orange-500 hover:bg-[#868386] text-white font-semibold uppercase px-8 py-3 rounded-md transition-all duration-300"
        >
          Book Your Repair
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Top Row */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative z-10 flex gap-8 animate-scroll-left"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row1-${i}`}
            className="bg-[#0E0E0E] border border-[#1C1C1C] rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-orange-500/40 transition-all duration-300 w-[360px] h-[340px]"
          >
            <p className="italic text-[#CCCCCC] text-[15px] leading-relaxed line-clamp-8 overflow-hidden">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white font-semibold rounded-full">
                {item.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                <p className="text-[#868386] text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="relative z-10 flex gap-8 mt-10 animate-scroll-right"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...testimonials, ...testimonials].map((item, i) => (
          <div
            key={`row2-${i}`}
            className="bg-[#0E0E0E] border border-[#1C1C1C] rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-orange-500 transition-all duration-300 w-[340px] h-80"
          >
            <p className="italic text-[#CCCCCC] text-[15px] leading-relaxed line-clamp-8 overflow-hidden">
              “{item.quote}”
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white font-semibold rounded-full">
                {item.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">{item.name}</h4>
                <p className="text-[#868386] text-xs">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edge Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#000000] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#000000] to-transparent pointer-events-none"></div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
