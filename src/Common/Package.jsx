import { HashLink } from "react-router-hash-link";
import { FiPhone, FiMail, FiMapPin, FiCheck } from "react-icons/fi"; // Added FiCheck

const iconMap = {
    Phone: <FiPhone size={20} />,
    Mail: <FiMail size={20} />,
    MapPin: <FiMapPin size={20} />,
};

export default function Package({ data }) {
    const brandBlue = '#01215F';
    if (!data) return null;

    const { contactLinks, packages, detail } = data;
    
    // Handle both Object or Array for detail to prevent crashes
    const displayDetail = Array.isArray(detail) ? detail[0] : detail;

    return (
        <section 
            id="package" 
            className="scroll-m-10 py-16 px-4 sm:px-6 lg:px-12 transition-colors duration-500 
            bg-linear-to-b from-gray-50 via-white to-gray-100 
            dark:from-black dark:via-[#0b0b0b] dark:to-[#1a1a1a] 
            text-black dark:text-white"
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

                {/* LEFT COLUMN */}
                <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit self-start">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-12" style={{ backgroundColor: brandBlue }}></div>
                            <h6 className="text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ color: brandBlue }}>
                                {displayDetail?.title} 
                            </h6>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                            {displayDetail?.desc}
                        </h2>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-3">
                        {contactLinks?.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 border border-black/5 dark:border-white/10 rounded-xl p-4 bg-white dark:bg-[#111]/70 hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center justify-center h-10 w-10" style={{ color: brandBlue }}>
                                    {iconMap[link.icon]}
                                </div>
                                <h6 className="text-base font-semibold group-hover:text-[#01215F] transition-colors">
                                    {link.title}
                                </h6>
                            </a>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-10 mt-10 lg:mt-0">
                    {packages?.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="border border-black/5 dark:border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500
                            bg-white dark:bg-[#151515] hover:border-[#01215F]/40 shadow-sm hover:shadow-xl"
                        >
                            <h6 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{pkg.type}</h6>
                            <div className="rounded-lg p-5 mb-6 bg-gray-100 dark:bg-[#0b0b0b]">
                                <h3 className="text-4xl sm:text-5xl font-bold text-[#F5A623]">{pkg.price}</h3>
                            </div>

                            <div className="space-y-3 mb-6">
                                {pkg.features.map((feature, index) => (
                                    <div key={index} className="flex gap-4 items-center">
                                        {/* Added a default Check icon since data doesn't provide one */}
                                        <div 
                                            className="shrink-0 h-6 w-6 rounded-full flex items-center justify-center text-white"
                                            style={{ backgroundColor: brandBlue }}
                                        >
                                            <FiCheck size={14} />
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <HashLink
                                to="/#contact"
                                smooth
                                className="w-full block text-white font-bold py-4 rounded-full transition-all text-center"
                                style={{ backgroundColor: brandBlue }}
                            >
                                {pkg.btnText}
                            </HashLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}