import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Unit+1B+Cranmere+Rd+Okehampton+EX20+1UE";

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: (
        <a href="tel:+447446253967" className="hover:underline font-bold text-[#13AFFE] dark:text-[#F5A623]">
          +44 7446 253967
        </a>
      ),
      note: 'Call us for immediate assistance',
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: (
        <a href="mailto:crystal.cl34n@gmail.com" className="hover:underline font-bold text-[#13AFFE] dark:text-[#F5A623]">
          crystal.cl34n@gmail.com
        </a>
      ),
      note: 'Send us your questions anytime',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Address',
      value: (
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-[#13AFFE] dark:text-[#F5A623]">
          Unit 1B Cranmere Rd, Okehampton EX20 1UE
        </a>
      ),
      note: 'Fully equipped studio with onsite parking',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Opening Hours',
      value: (
        <div className="text-gray-600 dark:text-gray-400 font-medium">
          <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p>Sunday: Closed (By Appointment)</p>
        </div>
      ),
    },
  ];

  const sendWhatsApp = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(formRef.current);

    const whatsappMessage = `*New Booking Enquiry*\n*Name:* ${form.get("firstName")} ${form.get("lastName")}\n*Email:* ${form.get("email")}\n*Phone:* ${form.get("phone")}\n*Service:* ${form.get("service")}\n*Message:* ${form.get("message")}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/447446253967?text=${encodedMessage}`, "_blank");
    
    setLoading(false);
    formRef.current.reset();
  };

  return (
    <section id="contact" className="py-24 scroll-m-10 bg-white dark:bg-[#0E0E0E] transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-[#13AFFE] uppercase italic">
            Get In <span className=" dark:text-[#F5A623]">Touch</span>
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400 font-medium">
            Ready to give your vehicle the Crystal Clean finish? 
            Contact our Okehampton studio today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left - Contact Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-black uppercase italic text-[#0E0E0E] dark:text-white">
              Studio Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start space-x-5 group">
                  <div className="p-4 rounded-2xl bg-[#F5A623]/10 text-[#F5A623] group-hover:bg-[#13AFFE]/10 group-hover:text-[#13AFFE] transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-widest mb-1 text-[#0E0E0E] dark:text-white">
                      {item.title}
                    </h4>
                    <div className="text-lg">{item.value}</div>
                    {item.note && <p className="text-sm text-gray-500 mt-1">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 dark:bg-[#161616] border border-gray-100 dark:border-white/5 rounded-3xl shadow-2xl p-8 md:p-10">
            <h3 className="text-xl font-black uppercase italic mb-8 text-[#0E0E0E] dark:text-white">
              Quick Booking Request
            </h3>
            <form ref={formRef} onSubmit={sendWhatsApp} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">First Name</label>
                  <input name="firstName" placeholder="John" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Last Name</label>
                  <input name="lastName" placeholder="Doe" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Email Address</label>
                <input name="email" type="email" placeholder="john@example.com" required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all" />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Service Required</label>
                <select name="service" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all appearance-none">
                  <option>Full Valet / Deep Clean</option>
                  <option>Machine Polishing</option>
                  <option>Ceramic Coating</option>
                  <option>PPF Installation</option>
                  <option>Mobile Detailing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2 text-gray-500">Message</label>
                <textarea name="message" rows={4} placeholder="Vehicle make/model and preferred date..." required className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#0E0E0E] border border-gray-200 dark:border-white/10 text-black dark:text-white focus:ring-2 focus:ring-[#13AFFE] outline-none transition-all resize-none"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-xl hover:scale-[1.02] active:scale-95 bg-[#F5A623] text-white dark:text-[#0E0E0E]"
              >
                {loading ? 'Opening WhatsApp...' : 'Request Booking via WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}