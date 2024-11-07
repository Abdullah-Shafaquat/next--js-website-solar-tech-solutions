'use client';
import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    description:
      'Expert installation of high-efficiency solar panels to maximize energy output. We ensure seamless integration with your property.',
    iconUrl: 's1.jpg',
    price: 'PKR 150,000',
  },
  {
    id: 2,
    title: 'Solar System Maintenance',
    description:
      'Regular check-ups and maintenance to keep your solar system running efficiently. Includes cleaning, inspections, and repairs.',
    iconUrl: '/s2.jpg',
    price: 'PKR 20,000',
  },
  {
    id: 3,
    title: 'Energy Consulting',
    description:
      'Personalized energy audits and consulting services to optimize energy usage and reduce costs.',
    iconUrl: '/s3.jpg',
    price: 'PKR 10,000',
  },
  {
    id: 4,
    title: 'Battery Storage Solutions',
    description:
      'Reliable solar battery storage systems to store energy for use during the night or power outages.',
    iconUrl: '/s4.webp',
    price: 'PKR 250,000',
  },
  {
    id: 5,
    title: 'Solar Financing Assistance',
    description:
      'Guidance on financing options and government incentives to make solar energy more affordable.',
    iconUrl: '/s5.jpg',
    price: 'PKR 5,000',
  },
  {
    id: 6,
    title: 'Solar Water Pump Systems',
    description:
      'Sustainable water pumping solutions powered by solar energy, ideal for agricultural and residential use.',
    iconUrl: '/s6.webp',
    price: 'PKR 80,000',
  },
  {
    id: 7,
    title: 'Solar Water Heating',
    description:
      'Efficient solar water heating systems for residential and commercial applications, reducing energy bills.',
    iconUrl: '/s7.jpg',
    price: 'PKR 40,000',
  },
  {
    id: 8,
    title: 'Off-Grid Solar Systems',
    description:
      'Complete off-grid solar solutions for remote areas, ensuring a consistent power supply without reliance on the grid.',
    iconUrl: '/s0.webp',
    price: 'PKR 300,000',
  },
  {
    id: 9,
    title: 'Solar Street Lighting',
    description:
      'Energy-efficient and durable solar-powered street lighting systems to illuminate public and private spaces.',
    iconUrl: '/s8.jpg',
    price: 'PKR 50,000',
  },
  {
    id: 10,
    title: 'Commercial Solar Solutions',
    description:
      'Custom solar energy systems tailored for businesses to lower operational costs and support sustainability.',
    iconUrl: '/s9.webp',
    price: 'PKR 500,000',
  },
  {
    id: 11,
    title: 'Residential Solar Solutions',
    description:
      'Complete solar energy systems designed for homes, enhancing energy independence and savings.',
    iconUrl: '/s10.webp',
    price: 'PKR 200,000',
  },
  {
    id: 12,
    title: 'Solar Panel Upgrades',
    description:
      'Upgrading older solar panels to new, more efficient models for increased energy production.',
    iconUrl: '/s11.jpg',
    price: 'PKR 100,000',
  },
  {
    id: 13,
    title: 'Solar Monitoring Systems',
    description:
      'Real-time solar system monitoring solutions to track energy production and system performance.',
    iconUrl: '/s12.jpg',
    price: 'PKR 30,000',
  },
  {
    id: 14,
    title: 'EV Charging Stations',
    description:
      'Installation of solar-powered EV charging stations to support sustainable transportation.',
    iconUrl: '/s13.jpg',
    price: 'PKR 250,000',
  },
  {
    id: 15,
    title: 'Solar Roof Tiles',
    description:
      'Aesthetic and efficient solar roof tiles that integrate seamlessly with your home’s architecture.',
    iconUrl: '/s14.jpg',
    price: 'PKR 350,000',
  },
];



const ServiceCard: React.FC<{ service: { id: number; title: string; description: string; iconUrl: string; price: string } }> = ({
  service,
}) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow relative text-gray-800 animate-fadeInRight">
      <img src={service.iconUrl} alt={service.title} className="w-full h-40 mb-4" />
      <h3 className="text-2xl font-semibold mb-2 font-serif text-gray-800">{service.title}</h3>
      <p className="text-gray-600 mb-4 font-serif">{service.description}</p>
      <p className="text-black font-bold mb-4 font-serif">{service.price}</p>
      <button className="bg-black text-white py-2 px-4 rounded mt-auto hover:bg-gray-700 font-serif">
      Request a Quote
      </button>
    </div>
  );
};



const Services: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const initialServices = services.slice(0, 4);
  const remainingServices = services.slice(4);

  return (
    <div className="py-16 bg-[#FFF8DE] text-gray-800">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-800 font-serif animate-fadeInLeft">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 animate-fadeInRight text-gray-800">
        {initialServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        {showAll && remainingServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>


  {/* Show More Button */}
<div className="flex justify-center mt-6 animate-fadeInLeft">
  <button
    onClick={() => setShowAll(!showAll)}
    className="bg-yellow-500 text-black py-2 px-4 font-serif rounded-md hover:bg-gray-500 transition-all animate-fadeInRight"
  >
    {showAll ? 'Show Less' : 'Show More'}
  </button>
</div>

    </div>
  );
};

export default Services;
