import React from 'react';

const About = () => {
  return (
    <div className="bg-[#FFF8DE] py-16 font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8 font-serif animate-fadeInLeft">About Solar Tech Solutions</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - About Info */}
          <div className="flex-1 animate-fadeInLeft">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 ">
              Welcome to <span className="font-bold text-[#FCCD2A]">Solar Tech Solutions</span>, your trusted partner in providing sustainable solar energy solutions. We specialize in high-quality solar panels, batteries, inverters, and related products that help you reduce your energy costs while contributing to a greener planet.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Our mission is to make renewable energy accessible and affordable for everyone. Whether you’re a homeowner, a business owner, or an industrial client, we offer tailored solutions to meet your unique energy needs.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              With years of experience and a team of experts, we ensure top-notch service, from consultation to installation and maintenance. Join us in making the switch to clean, reliable energy today!
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1">
            <img 
              src="/aboutimg.png" 
              alt="Solar Tech Solutions" 
              className="w-full h-auto rounded-lg shadow-lg object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center animate-fadeIn">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h3>
          <div className="flex justify-center gap-8">
            <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <img src="/em1.jpg" alt="Team Member 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <img src="/ep2.jpg" alt="Team Member 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden shadow-lg">
              <img src="/em3.jpg" alt="Team Member 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
