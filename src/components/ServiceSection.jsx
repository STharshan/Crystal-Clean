import React, { useState } from "react";
import {
    FaCar,
    FaShieldAlt,
    FaStar,
    FaSoap,
    FaGem,
    FaCarSide
} from "react-icons/fa";

export default function ServiceSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const reasons = [
        {
            icon: FaSoap,
            title: "Deep Clean",
            desc: "Comprehensive exterior washes and full interior valets removing dirt, grime, and odours — restoring your vehicle to pristine condition.",
            color: "from-[#0A7BDF] to-[#005bb5]", // Brand Blue linear
            borderColor: "border-[#0A7BDF]/30",
        },
        {
            icon: FaGem,
            title: "Polishing",
            desc: "Professional machine polishing to restore shine, remove swirl marks and light scratches, and prepare your vehicle for long-lasting protection.",
            color: "from-[#FFDD00] to-[#e6c700]", // Brand Yellow linear
            borderColor: "border-[#FFDD00]/30",
        },
        {
            icon: FaShieldAlt,
            title: "Ceramic Coating",
            desc: "Durable ceramic coatings delivering long-lasting gloss and hydrophobic protection against UV rays, dirt, and minor chemical damage.",
            color: "from-[#0A7BDF] to-[#005bb5]",
            borderColor: "border-[#0A7BDF]/30",
        },
        {
            icon: FaCarSide,
            title: "PPF Installation",
            desc: "Certified PPF installation providing invisible protection against stone chips, scratches, and everyday wear while preserving value.",
            color: "from-[#FFDD00] to-[#e6c700]",
            borderColor: "border-[#FFDD00]/30",
        },
    ];

    return (
        <section
            id="services"
            className="relative scroll-m-10 bg-white dark:bg-[#0E0E0E] py-20 px-4 sm:px-6 overflow-hidden text-[#0E0E0E] dark:text-white transition-colors duration-300"
        >
            {/* Background Accents */}
            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0A7BDF] rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FFDD00] rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tighter">
                        Our <span className="text-[#0A7BDF] dark:text-[#FFDD00]">Specialized</span> Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
                        Combining technical expertise with precision tools to handle everything from routine maintenance to complex paint protection.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                    {/* Featured Card (Left) */}
                    <div className="md:col-span-2 md:row-span-2" data-aos="fade-right">
                        <div className={`h-full bg-gray-50 dark:bg-[#1a1a1a] backdrop-blur-md border ${reasons[activeIndex].borderColor} rounded-3xl p-8 md:p-12 transition-all duration-500 shadow-xl`}>

                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br ${reasons[activeIndex].color} mb-6 shadow-lg`}>
                                {React.createElement(reasons[activeIndex].icon, { className: "text-4xl text-white dark:text-[#0E0E0E]" })}
                            </div>

                            <h3 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">
                                {reasons[activeIndex].title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed mb-8">
                                {reasons[activeIndex].desc}
                            </p>

                            {/* Progress Indicators */}
                            <div className="flex gap-3">
                                {reasons.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                                                ? "w-16 bg-[#0A7BDF] dark:bg-[#FFDD00]"
                                                : "w-8 bg-gray-300 dark:bg-gray-700 hover:bg-[#0A7BDF]/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Side Cards (Right) */}
                    <div className="space-y-6">
                        {reasons.slice(0, 2).map((reason, idx) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={idx}
                                    data-aos="fade-left"
                                    onClick={() => setActiveIndex(idx)}
                                    className={`cursor-pointer bg-gray-50 dark:bg-[#1a1a1a] border rounded-2xl p-6 transition-all duration-300 hover:scale-102 ${activeIndex === idx
                                            ? "border-[#0A7BDF] dark:border-[#FFDD00] shadow-lg"
                                            : "border-transparent"
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${reason.color} flex items-center justify-center mb-4`}>
                                        <Icon className="text-xl text-white dark:text-[#0E0E0E]" />
                                    </div>
                                    <h4 className="text-lg font-black mb-2 uppercase italic">{reason.title}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{reason.desc}</p>
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
                                className={`cursor-pointer group bg-gray-50 dark:bg-[#1a1a1a] border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${activeIndex === realIdx
                                        ? "border-[#0A7BDF] dark:border-[#FFDD00] shadow-lg"
                                        : "border-transparent"
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${reason.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform shadow-md`}>
                                    <Icon className="text-2xl text-white dark:text-[#0E0E0E]" />
                                </div>
                                <h4 className="text-lg font-black mb-2 uppercase italic">{reason.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">{reason.desc}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-up">
                    {[
                        { icon: FaShieldAlt, title: "100% Guaranteed", desc: "Quality work or your money back" },
                        { icon: FaStar, title: "5-Star Rated", desc: "Trusted by hundreds of customers" },
                        { icon: FaCar, title: "Crystal Clean", desc: "Precision automotive care" }
                    ].map((badge, i) => (
                        <div key={i} className="bg-gray-100 dark:bg-[#0E0E0E] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center hover:bg-[#0A7BDF]/5 transition-all group">
                            <badge.icon className="text-4xl text-[#0A7BDF] dark:text-[#FFDD00] mx-auto mb-3 opacity-80 group-hover:scale-110 transition-transform" />
                            <p className="font-black text-xl mb-1 uppercase tracking-tight">{badge.title}</p>
                            <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">{badge.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}