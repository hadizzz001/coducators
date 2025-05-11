import React from "react";
import { FaFacebook, FaPhone, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#courses", label: "Our Courses" },
  { href: "/#projects", label: "Student Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#team", label: "Our Team" },
  { href: "/work", label: "Work with Us" },
  { href: "/#contact", label: "Contact Us" },
];

 

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img src="/logo.svg" alt="Coducators Logo" className="h-12 mb-4" />
            <p className="text-gray-600 mb-4 max-w-md">
              {
                "Where fun meets education. We are dedicated to teaching kids the art of coding through engaging, interactive classes that spark creativity and problem-solving skills."
              }
            </p>
            <div className="flex space-x-4">
<div className="flex space-x-3">
  <a
    href="https://api.whatsapp.com/send/?phone=96171623249&text&app_absent=0"
    target="_blank"
    className="rounded-full cursor-pointer bg-coducators-blue/15 w-12 h-12 grid place-items-center"
  >
    <FaWhatsapp size={24} className="fill-coducators-blue stroke-none" />
  </a>
  <a
    href="https://www.instagram.com/coducators/"
    target="_blank"
    className="rounded-full cursor-pointer bg-coducators-blue/15 w-12 h-12 grid place-items-center"
  >
    <FaInstagram size={24} className="fill-coducators-blue stroke-none" />
  </a>
  <a
    href="https://www.linkedin.com/company/coducators"
    target="_blank"
    className="rounded-full cursor-pointer bg-coducators-blue/15 w-12 h-12 grid place-items-center"
  >
    <FaLinkedin size={24} className="fill-coducators-blue stroke-none" />
  </a>
  <a
    href="https://www.facebook.com/coducators"
    target="_blank"
    className="rounded-full cursor-pointer bg-coducators-blue/15 w-12 h-12 grid place-items-center"
  >
    <FaFacebook size={24} className="fill-coducators-blue stroke-none" />
  </a>
</div>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-600 hover:text-coducators-blue transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
