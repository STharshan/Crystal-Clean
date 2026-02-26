import React, { useEffect, useState } from "react";
import {
    FaCar,
    FaShieldAlt,
    FaStar,
    FaSoap,
    FaGem,
    FaCarSide
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const reasons = [
        {
            icon: FaSoap,
            title: "Deep Clean",
            desc: "Comprehensive exterior washes and full interior valets removing dirt, grime, and odours — restoring your car, motorcycle, or caravan to pristine condition.",
            color: "from-[#D6F0FF] to-[#7EC8E3]",
            borderColor: "border-[#D6F0FF]/40",
        },
        {
            icon: FaGem,
            title: "Polishing",
            desc: "Professional machine polishing to restore shine, remove swirl marks and light scratches, and prepare your vehicle for long-lasting protection.",
            color: "from-[#EDE7FF] to-[#B39DDB]",
            borderColor: "border-[#EDE7FF]/40",
        },
        {
            icon: FaShieldAlt,
            title: "Ceramic Coating",
            desc: "Durable ceramic coatings delivering long-lasting gloss and hydrophobic protection against UV rays, dirt, and minor chemical damage.",
            color: "from-[#E0F7FA] to-[#4DD0E1]",
            borderColor: "border-[#E0F7FA]/40",
        },
        {
            icon: FaCarSide,
            title: "PPF (Paint Protection Film)",
            desc: "Certified PPF installation providing invisible protection against stone chips, scratches, and everyday wear while preserving your vehicle’s value.",
            color: "from-[#F3E5F5] to-[#CE93D8]",
            borderColor: "border-[#F3E5F5]/40",
        },
    ];

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % reasons.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [reasons.length]);

    return (
        <section
            id="services"
            className="relative scroll-m-10 bg-black py-20 px-4 sm:px-6 overflow-hidden text-white"
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E8D5E8] rounded-full blur-[120px] opacity-10"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#1C1B2E] rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 uppercase">
                         Our Specialized Services
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Combining technical expertise with precision tools to handle everything from routine maintenance to complex repairs.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    {/* Featured Card */}
                    <div className="md:col-span-2 md:row-span-2" data-aos="fade-right">
                        <div className={`h-full bg-[#1C1B2E]/40 backdrop-blur-md border ${reasons[activeIndex].borderColor} rounded-3xl p-8 md:p-12 transition-all duration-500 shadow-2xl shadow-[#E8D5E8]/5`}>

                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${reasons[activeIndex].color} mb-6 shadow-lg shadow-[#E8D5E8]/20`}>
                                {React.createElement(reasons[activeIndex].icon, { className: "text-4xl text-[#1C1B2E]" })}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
                                {reasons[activeIndex].title}
                            </h3>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {reasons[activeIndex].desc}
                            </p>

                            {/* Progress Indicators */}
                            <div className="flex gap-2">
                                {reasons.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex
                                                ? "w-12 bg-[#E8D5E8]"
                                                : "w-8 bg-gray-700 hover:bg-gray-500"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="space-y-6">
                        {reasons.slice(0, 2).map((reason, idx) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={idx}
                                    data-aos="fade-left"
                                    data-aos-delay={idx * 100}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`cursor-pointer bg-[#1C1B2E]/30 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${activeIndex === idx
                                            ? "border-[#E8D5E8]/50 shadow-lg shadow-[#E8D5E8]/10"
                                            : "border-white/5"
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${reason.color} flex items-center justify-center mb-4`}>
                                        <Icon className="text-xl text-[#1C1B2E]" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{reason.title}</h4>
                                    <p className="text-gray-400 text-sm">{reason.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {reasons.slice(2).map((reason, idx) => {
                        const Icon = reason.icon;
                        const realIdx = idx + 2;
                        return (
                            <div
                                key={realIdx}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                onClick={() => setActiveIndex(realIdx)}
                                className={`cursor-pointer group bg-[#1C1B2E]/30 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${activeIndex === realIdx
                                        ? "border-[#E8D5E8]/50 shadow-lg shadow-[#E8D5E8]/10"
                                        : "border-white/5 hover:border-white/10"
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${reason.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform shadow-md shadow-black/50`}>
                                    <Icon className="text-2xl text-[#1C1B2E]" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 uppercase tracking-wide">{reason.title}</h4>
                                <p className="text-gray-400 text-sm line-clamp-2">{reason.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up">
                    {[
                        { icon: FaShieldAlt, title: "100% Guaranteed", desc: "Quality work or your money back" },
                        { icon: FaStar, title: "5-Star Rated", desc: "Trusted by hundreds of customers" },
                        { icon: FaCar, title: "Crystal Clean", desc: "Precision automotive performance" }
                    ].map((badge, i) => (
                        <div key={i} className="bg-[#1C1B2E]/20 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center hover:bg-[#1C1B2E]/40 transition-all">
                            <badge.icon className="text-4xl text-[#E8D5E8] mx-auto mb-3 opacity-80" />
                            <p className="font-bold text-xl mb-1 uppercase tracking-tight">{badge.title}</p>
                            <p className="text-gray-500 text-sm">{badge.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}