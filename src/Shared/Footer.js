import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Array for navigation links for easier management
  const navLinks = [
    { name: "Home", path: "/homepage" },
    { name: "Shop", path: "/shoppage" },
    { name: "Product", path: "/productpage" },
    { name: "Blog", path: "/blogpage" },
    { name: "Contact Us", path: "/contactuspage" },
  ];

  const socialIcons = [
    { icon: faInstagram, colorClass: "hover:text-[#E1306C]", href: "#" },
    { icon: faFacebook, colorClass: "hover:text-[#1877F2]", href: "#" },
    { icon: faYoutube, colorClass: "hover:text-[#FF0000]", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white font-inter">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/homepage">
              <h2 className="text-3xl font-poppins font-semibold tracking-wide">
                Furnishify.
              </h2>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Your favorite gift and decoration store, bringing creativity and
              style to your space.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="font-semibold tracking-wider text-gray-200 uppercase">
              Pages
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-semibold tracking-wider text-gray-200 uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="font-semibold tracking-wider text-gray-200 uppercase">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-5">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 text-2xl ${social.colorClass} transition-all duration-300 transform hover:scale-110`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center sm:text-left">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Furnishify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
