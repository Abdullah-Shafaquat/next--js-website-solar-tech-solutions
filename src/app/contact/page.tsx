import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className=" min-h-screen bg-[#FFFBE6]">
            <header className="bg-yellow-500 p-6 text-center text-white text-2xl font-bold animate-fadeInLeft">
                Contact Us - Solar Tech Solutions
            </header>

            <section className="max-w-4xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg mb-10 animate-fadeInRight">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
                <p className="text-gray-700 mb-6">
                    Have questions or need assistance? Contact our team using the form below.
                </p>

                <form className="space-y-4 ">
                    <div>
                        <label htmlFor="name" className="block text-gray-600 font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-gray-600 font-medium">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-gray-600 font-medium">Subject</label>
                        <select
                            id="subject"
                            name="subject"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
                        >
                            <option>Product Inquiry</option>
                            <option>Service Support</option>
                            <option>General Questions</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-gray-600 font-medium">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </section>

            
        </div>
    );
};

export default ContactPage;
