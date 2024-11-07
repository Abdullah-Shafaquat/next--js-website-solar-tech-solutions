'use client';

import React from 'react';
import Service from './services';

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#D0E8C5] text-gray-800 py-8  font-serif animate-fadeInBottom">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Solar Tech Solutions</h3>
            <p className="text-sm">
              Solar Tech Solutions is committed to providing high-quality solar energy products and solutions that empower individuals and businesses to harness the power of the sun. We offer innovative, eco-friendly, and reliable products to help you reduce energy costs and contribute to a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div >
            <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-sm hover:text-yellow-500 transition-all">Home</a></li>
              <li><a href="/products" className="text-sm hover:text-yellow-500 transition-all">Products</a></li>
              <li><a href="/services" className="text-sm hover:text-yellow-500 transition-all">Service</a></li>
              <li><a href="/contact" className="text-sm hover:text-yellow-500 transition-all">Contact</a></li>
              <li><a href="/about" className="text-sm hover:text-yellow-500 transition-all">About</a></li>
            </ul>
          </div>

          {/* Contact Information with Background Images */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="relative group">
              <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/path/to/your/image1.jpg')" }}></div>
              <p className="text-sm relative z-10"><b>Email: </b>

                <a href="mailto:alishafaqat4473@gmail.com" className="hover:text-yellow-500 transition-all"> alishafaqat4473@gmail.com</a>
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/path/to/your/image2.jpg')" }}></div>
              <p className="text-sm relative z-10"><b>Phone: </b>
                <a href="tel:+923012229525" className="hover:text-yellow-500 transition-all">  03012229525</a>
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/path/to/your/image3.jpg')" }}></div>
              <p className="text-sm relative z-10"><b>Address: </b>
                 P&T Society Industrial Area, Korangi, Karachi
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <a href="https://www.linkedin.com/in/muhammad-abdullah-608284302/" target="_blank" className="text-xl hover:text-yellow-500 transition-all">
      <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6" />
    </a>
    
    <a href="https://www.instagram.com/muhammadabdullah6156/" target="_blank" className="text-xl hover:text-yellow-500 transition-all">
      <img src="/insta.jpg" alt="Instagram" className="w-6 h-6" />
    </a>

    <a href="https://www.facebook.com/muahammad.abubakar.142" target="_blank" className="text-xl hover:text-yellow-500 transition-all">
      <img src="/fb.jpg" alt="Facebook" className="w-6 h-6 rounded-full" />
    </a>
  </div>



          </div>
        </div>

        <div className="border-t border-white mt-8 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Solar Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
