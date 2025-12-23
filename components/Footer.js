import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { outfit } from "./fonts/Outfit";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const contactDetails = [
    { type: "phone", value: "+91 9441524214" },
    { type: "email", value: "sathyaprakashkurella40@gmail.com" },
  ];

  const socialLinks = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
  ];

  return (
    <footer className={`bg-[#121212] text-white ${outfit.className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="lg:col-span-1">
            <div className="mb-0 -translate-y-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm max-w-60 leading-relaxed mb-4">
              Crafting men’s wear with precision, comfort , and style...{" "}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="size-10 rounded-full bg-[#FF9000] flex items-center justify-center hover:-rotate-12 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="text-white text-base" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-3">Quick Links:</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[#FFFFFF99] hover:text-[#FF9000] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-3">Contact Details:</h3>
            <ul className="space-y-3">
              {contactDetails.map((contact, index) => (
                <li key={index}>
                  <a
                    href={
                      contact.type === "email"
                        ? `mailto:${contact.value.split(": ")[1]}`
                        : `tel:${contact.value}`
                    }
                    className="text-gray-400 hover:text-[#FF9000] transition-colors duration-300 text-sm"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-3">Address:</h3>
            <address className="not-italic text-gray-400 text-sm leading-relaxed">
              Teacher Colony, Huzurnagar – 508203
              <br />
              Telangana, India
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Section with Anclor Logo */}
      <div className="relative w-full text-center bg-[#FF9000] py-2.5">
        {/* Copyright Text */}
        <p className="text-gray-900 text-sm font-medium">
          © 2025 Anclor. All Right Reserved.
        </p>
        {/* Anclor Logo */}
        <div className="absolute right-32 bottom-16 opacity-20">
          <Image
            src="/AnchorFooterLogo.png"
            alt="Anclor"
            width={180}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
