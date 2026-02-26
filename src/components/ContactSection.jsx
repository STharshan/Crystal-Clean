import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const brandOrange = '#E1912F';
  const brandBlack = '#000000';
  const brandWhite = '#FFFFFF';

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const address =
    "Greystone Automotive Engineers Ltd, 3 Bryta Works, Little London Rd, Woodseats, Sheffield S8 0UJ, UK";
  const mapsUrl = "https://maps.app.goo.gl/x37S2ncozFs2e4B67";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    });
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Phone',
      value: (
        <a href="tel: +447446253967" className="hover:underline" style={{ color: brandOrange }}>
          +44 7446 253967
        </a>
      ),
      note: 'Call us for immediate assistance',
    },
    {
      icon: <Mail className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Email',
      value: (
        <a href="mailto:crystal.cl34n@gmail.com" className="hover:underline" style={{ color: brandOrange }}>
          crystal.cl34n@gmail.com
        </a>
      ),
      note: 'Send us your questions anytime',
    },
    {
      icon: <MapPin className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Address',
      value: (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: brandOrange }}
        >
          Unit 1B Cranmere Rd, Okehampton EX20 1UE, United Kingdom
        </a>
      ),
      note: 'Find us easily with free parking onsite',
    },
    {
      icon: <Clock className="h-5 w-5" style={{ color: brandOrange }} />,
      title: 'Opening Hours',
      value: (
        <>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 1:00 PM</p>
          <p>Sunday: Closed</p>
        </>
      ),
    },
  ];

  // 🔹 WhatsApp handler
  const sendWhatsApp = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(formRef.current);

    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const email = form.get("email");
    const phone = form.get("phone");
    const service = form.get("service");
    const message = form.get("message");

    const whatsappMessage = `
*New Booking Enquiry*
*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone}
*Service Required:* ${service}
*Message:*${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "447446253967"; // country code + number, no "+"

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    setLoading(false);
    formRef.current.reset();
  };

  return (
    <section id="contact" className="py-20 scroll-m-10" style={{ backgroundColor: brandWhite }}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: brandBlack }}
          >
            Get In <span style={{ color: brandOrange }}>Touch</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
            Ready to book your service or have questions about your vehicle?
            Contact us today for expert advice and professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div data-aos="fade-right" className="space-y-8">
            <h3 className="text-2xl font-serif font-semibold mb-4" style={{ color: brandBlack }}>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${brandOrange}1A` }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: brandBlack }}>
                      {item.title}
                    </h4>
                    <div className="text-gray-700 space-y-1">{item.value}</div>
                    {item.note && <p className="text-sm text-gray-500">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            data-aos="fade-left"
            className="flex flex-col gap-6 rounded-xl shadow-md max-w-lg mx-auto w-full p-6"
            style={{ backgroundColor: brandWhite }}
          >
            <h3 className="leading-none font-semibold font-serif text-lg mb-4" style={{ color: brandBlack }}>
              Send Us a Message
            </h3>
            <form ref={formRef} onSubmit={sendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0114 258 7911"
                  className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Service Required
                </label>
                <input
                  id="service"
                  name="service"
                  placeholder="e.g., MOT, Diagnostics, Brake Repair"
                  className="border border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: brandBlack }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your vehicle and what service you need..."
                  required
                  className="border text-black border-gray-200 rounded-md w-full px-3 py-2 text-sm shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 rounded-md text-sm font-medium transition-colors shadow-sm hover:opacity-90"
                style={{ backgroundColor: brandOrange, color: brandWhite }}
              >
                {loading ? 'Redirecting...' : 'Send via WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}