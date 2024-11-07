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
  }
];



const ServiceCard: React.FC<{ service: { id: number; title: string; description: string; iconUrl: string; price: string } }> = ({
  service,
}) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow relative font-serif animate-fadeInLeft">
      <img src={service.iconUrl} alt={service.title} className="w-full h-40 mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="text-black font-bold mb-4">{service.price}</p>
      <button className="bg-black text-white py-2 px-4 rounded mt-auto hover:bg-gray-700">
      Request a Quote
      </button>
    </div>
  );
};



const Service: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const initialServices = services.slice(0, 4);
  const remainingServices = services.slice(4);

  return (
    <div className="py-16 bg-[#FFF8DE]">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-800 font-serif">Our Solar Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {initialServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        {showAll && remainingServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>


  {/* Show More Button */}
<div className="flex justify-center mt-6">
  <button

    
    className="bg-yellow-500 text-black py-2 px-4 font-serif rounded-md hover:bg-gray-500 transition-all"
  ><a href="/services"> show more</a>
 
  </button>
</div>

    </div>
  );
};

export default Service;