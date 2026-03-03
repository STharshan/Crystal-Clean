import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // 
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8 mb-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Crystal Clean</h2>


            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://web.facebook.com/p/Crystal-clean-100080908440119/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A7BDF] transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/crystal.clean.detail22/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@crystal.cl34n"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#" className="hover:text-[#0A7BDF] transition">Home</a></li>
              <li><a href="/#about" className="hover:text-[#0A7BDF] transition">About Us</a></li>
              <li><a href="/#whychoose" className="hover:text-[#0A7BDF] transition">Why Choose</a></li>
              <li><Link to="/gallery" className="hover:text-[#0A7BDF] transition">Gallery</Link></li>
              <li><a href="/#contact" className="hover:text-[#0A7BDF] transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Info</h3>
            <ul className="text-sm space-y-2">
              <ul className="space-y-2">
                <li>
                  <span className="text-white font-semibold">Opening Hours:</span>
                  <span className="text-lg"> 9:00 AM – 5:00 PM (Mon–Fri)</span>
                </li>
                <li>
                  <span className="text-white font-semibold">Saturday:</span>
                  <span className="text-lg"> 9:00 AM – 1:00 PM</span>
                </li>
                <li>
                  <span className="text-white font-semibold">Sunday:</span>
                  <span className="text-lg"> Closed</span>
                </li>
              </ul>
              <li>
                <span className="text-white font-semibold">Phone:</span>{" "}
                <a href="tel:+447446253967" className="hover:underline text-lg hover:text-[#0A7BDF]">
                  +44 7446 253967
                </a>
              </li>
              <li>
                <span className="text-white font-semibold">Email:</span>{" "}
                <a href="mailto:crystal.cl34n@gmail.com" className="hover:underline text-lg hover:text-[#0A7BDF]">
                  crystal.cl34n@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Crystal Clean. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <a href="/terms" className="hover:text-[#0A7BDF] transition duration-300">
              Terms & Conditions
            </a>
            <span className="text-gray-500">|</span>
            <a href="/privacy" className="hover:text-[#0A7BDF] transition duration-300">
              Privacy Policy
            </a>
          </div>

          {/* Center: Powered by Ansely */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A7BDF] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}