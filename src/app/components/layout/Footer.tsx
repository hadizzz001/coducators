import React from "react";

const socialIcons = [
  {
    href: "#",
    title: "Facebook",
    svg: (
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    ),
  },
  {
    href: "#",
    title: "Twitter",
    svg: (
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
    ),
  },
  {
    href: "#",
    title: "GitHub",
    svg: <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59..." />,
  },
  {
    href: "#",
    title: "LinkedIn",
    svg: (
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146..." />
    ),
  },
];

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#courses", label: "Our Courses" },
  { href: "#projects", label: "Student Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#team", label: "Our Team" },
  { href: "#contact", label: "Contact Us" },
];

const SocialIcon = ({
  href,
  title,
  svg,
}: {
  href: string;
  title: string;
  svg: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={title}
    className="text-coducators-blue hover:text-coducators-blue/80 transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      {svg}
    </svg>
  </a>
);

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
              {socialIcons.map((icon, idx) => (
                <SocialIcon key={idx} {...icon} />
              ))}
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

          <div>
            <h3 className="text-gray-900 font-bold mb-4">Contact Us</h3>
            {/* Keep your current contact items here as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
