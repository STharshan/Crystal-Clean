import {
  FaCar,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaTools,
  FaHandshake,
} from "react-icons/fa";

export default function WhyChooseUs() {

const reasons = [
  {
    icon: <FaCar />,
    title: "Fully Mobile & Studio Service",
    desc: "We bring professional detailing to your home or workplace, or you can visit our fully equipped Okehampton studio — no garage visit required.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Serving Okehampton & Surrounding Devon",
    desc: "Operating across Okehampton and the wider Devon area, delivering convenient, local, and reliable service.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Transparent Pricing",
    desc: "No hidden costs. Every service has clear pricing, and we’ll advise you on the best package for your vehicle.",
  },
  {
    icon: <FaTools />,
    title: "Specialist Detailing Services",
    desc: "From deep interior cleaning and engine bay detailing to paint correction, ceramic coating, and PPF installation — every vehicle receives expert care.",
  },
  {
    icon: <FaClock />,
    title: "Flexible Booking Options",
    desc: "We work around your schedule with weekday, weekend, and mobile appointments available by arrangement.",
  },
  {
    icon: <FaHandshake />,
    title: "Honest & Reliable",
    desc: "Every vehicle is treated with care, precision, and attention to detail, ensuring premium results every time.",
  },
];

  return (
    <section
      id="whychoose"
      className="bg-black text-white  py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            Why Choose <span className="text-red-600">Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#C0C0C0] mt-4"></div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* ICON */}
              <div className="text-red-600 text-2xl mt-1">
                {item.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="uppercase font-semibold tracking-wide text-lg">
                  {item.title}
                </h3>
                <p className="text-[#C0C0C0] text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}