import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/media/logo_01.jpeg";

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-blue-50"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>

            {/* Logo */}
            <img
              src={logo}
              alt="Prisha Solutions"
              className="h-12 mb-6"
            />

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Prisha Solutions is a trusted recruitment and staffing partner,
              connecting top-tier talent with leading organizations across
              India, US, UK, and UAE.
            </p>

            <div className="space-y-3 text-sm text-gray-700">

              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-600" />
                <span>+91 9927590907</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>prakhar0987gupta@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>India | Serving Global Clients</span>
              </div>

            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">
              Our Services
            </h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>IT Recruitment</li>
              <li>Non-IT Hiring</li>
              <li>Executive Search</li>
              <li>International Staffing</li>
              <li>Contract Staffing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">
              Company
            </h4>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="hover:text-blue-600 transition cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 transition cursor-pointer">Leadership</li>
              <li className="hover:text-blue-600 transition cursor-pointer">Industries We Serve</li>
              <li className="hover:text-blue-600 transition cursor-pointer">Careers</li>
              <li className="hover:text-blue-600 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">
              Connect With Us
            </h4>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">

              <a
                href="https://www.linkedin.com/in/prakhar-gupta-1b7b59230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 target="_blank"
      rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 rounded-lg flex items-center justify-center transition duration-300"
              >
                <FaLinkedinIn />
              </a>
<a
      href="https://www.instagram.com/prakhar497?igsh=MWYxOXlodTI1NWphaw=="
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-pink-100 hover:bg-pink-600 hover:text-white text-pink-600 rounded-lg flex items-center justify-center transition duration-300"
    >
      <FaInstagram />
    </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 rounded-lg flex items-center justify-center transition duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 rounded-lg flex items-center justify-center transition duration-300"
              >
                <FaFacebookF />
              </a>

            </div>

            {/* Newsletter */}
            <p className="text-gray-600 text-sm mb-3">
              Subscribe for updates
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-r-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>

          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Prisha Solutions. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-blue-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms of Service</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;