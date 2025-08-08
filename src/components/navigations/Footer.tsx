import React from "react";

const footerLinks = [
  {
    title: "Quick Links",
    links: ["About Us", "Contact", "FAQs", "Shipping Info"],
  },
  {
    title: "Categories",
    links: ["Electronics", "Fashion", "Home & Garden", "Food & Beverages"],
  },
  {
    title: "Customer Service",
    links: ["Support Center", "Returns", "Track Your Order", "Privacy Policy"],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              HorizonHub
            </div>
            <p className="text-gray-400">
              Your trusted partner for online shopping with premium products and exceptional service.
            </p>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HorizonHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
