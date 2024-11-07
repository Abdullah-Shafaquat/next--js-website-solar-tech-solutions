'use client';

import React, { useState } from 'react';

// Sample product data (8 products)
const products = [
  {
    id: 1,
    name: 'Solar Panel 300W',
    description: 'High-efficiency 300W solar panel, perfect for residential and commercial use. Durable, long-lasting, and eco-friendly.',
    imageUrl: '/p1.jpg',
    price: 'PKR 40,000',
  },
  {
    id: 2,
    name: 'Solar Inverter 5kW',
    description: 'A 5kW solar inverter to convert solar energy into usable electricity for your home or business. Reliable and efficient performance.',
    imageUrl: '/p2.webp',
    price: 'PKR 105,000',
  },
  {
    id: 3,
    name: 'Solar Battery 12V',
    description: 'Store excess energy with our high-capacity 12V solar battery. Perfect for off-grid and backup power solutions.',
    imageUrl: '/p3.jpg',
    price: 'PKR 30,000',
  },
  {
    id: 4,
    name: 'Solar Charge Controller',
    description: 'Regulate your solar power with our smart charge controllers. Protect your system from overcharging and ensure efficient performance.',
    imageUrl: '/p4.jpg',
    price: 'PKR 18,000',
  },
  {
    id: 5,
    name: 'Solar Water Pump',
    description: 'Efficient solar-powered water pump for agricultural or residential water needs. Easy installation and low maintenance.',
    imageUrl: '/p5.jpg',
    price: 'PKR 60,000',
  },
  {
    id: 6,
    name: 'Portable Solar Generator',
    description: 'Take clean energy anywhere with our portable solar generator. Perfect for camping, outdoor events, or as an emergency backup.',
    imageUrl: '/p6.jpg',
    price: 'PKR 75,000',
  },
  {
    id: 7,
    name: 'Solar Street Light',
    description: 'Illuminate outdoor spaces with our durable solar street lights. Energy-efficient and eco-friendly lighting solution.',
    imageUrl: '/p7.jpg',
    price: 'PKR 20,000',
  },
  {
    id: 8,
    name: 'Solar Roof Tile',
    description: 'Elegant and energy-efficient solar roof tiles, seamlessly integrated into your home’s architecture. Designed for durability and performance.',
    imageUrl: '/p8.jpg',
    price: 'PKR 120,000',
  },
];

// Product Card Component
const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const handleBuyNow = () => {
    alert(`You clicked on ${product.name} to buy it!`);
  };

  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col animate-fadeInRight">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-center font-serif">{product.name}</h3>
      <p className="text-sm mb-4 text-center font-serif">{product.description}</p>
      
      {/* Fixed price and button at the bottom */}
      <div className="mt-auto flex flex-col items-center">
        <p className="text-lg font-semibold mb-2 text-center font-serif">{product.price}</p>
        <button
          onClick={handleBuyNow}
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-all font-serif"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

// Our Products Section
const OurProducts: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="py-16 bg-[#FFFBE6]"> {/* Page background color */}
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 font-serif animate-fadeInLeft">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 animate-fadeInRight">
        {products.slice(0, showAll ? products.length : 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleShowMore}
          className="bg-yellow-500 text-black py-2 px-4  animate-fadeInRight rounded-md font-serif hover:bg-gray-500 transition-all "
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
