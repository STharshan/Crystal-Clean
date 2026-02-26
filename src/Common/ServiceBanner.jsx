
const ServiceBanner = ({ data }) => {
  if (!data) return null;

  const { title, description, thumbnailImage } = data;

  return (
    <section className="bg-black py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Text Content Area */}
        <div className="max-w-4xl mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-brand"></div>
            <span className="text-brand font-bold uppercase tracking-[0.3em] text-xs pt-20">Premium Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
            {title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            {description}
          </p>
        </div>

        {/* Image Only Section */}
        <div className="relative overflow-hidden rounded-sm w-200 mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5">
          <img 
            src={thumbnailImage} 
            alt={title} 
            className="w-full h-[450px] rounded-xl object-cover transition-all duration-1000 grayscale-[0.2] hover:grayscale-0 hover:scale-105"
          />
          
          {/* Subtle Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Bottom Label (Replaced "Watch Video" with a Service Label) */}
          <div className="absolute bottom-8 left-8 flex items-center gap-4">
            <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-white font-black uppercase tracking-[0.2em] text-sm">
              Professional Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;