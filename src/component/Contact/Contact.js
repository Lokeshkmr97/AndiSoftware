import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-6 md:py-12 flex flex-col md:flex-row items-center">
        {/* Contact Image (Desktop) */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" // Replace with your contact image
            alt="Contact"
            className="w-3/4 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              />
            </div>
            
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              />
            </div>
            
            {/* Phone Field */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-800 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              />
            </div>
            
            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

              
      </div>
    </div>
  );
};

export default Contact;
