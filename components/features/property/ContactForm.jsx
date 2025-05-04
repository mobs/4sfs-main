import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-bgGray rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-12 h-12 border rounded-full">
          <img
            src="/logo-black.png"
            alt="Aruna Logo"
            className="object-contain w-full h-full"
          />
        </div>
        <span className="text-sm text-darkgray">Liked this property? Connect With Us</span>
      </div>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-lightgray rounded-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 placeholder-gray-400"
          />
        </div>

        <div>
          <div className="flex">
            <div className="w-[90px]">
              <select className="w-full h-full px-2 py-3 border border-gray-200 rounded-l-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white">
                <option value="+62">IN +91</option>
                <option value="+1">US +1</option>
                <option value="+44">GB +44</option>
              </select>
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-4 py-3 border border-l-0 border-gray-200 rounded-r-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 placeholder-gray-400"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 placeholder-gray-400"
          />
        </div>

        <div>
          <textarea
            placeholder="Hello, I am interested in [Aruna Grandview Residences at Sinar Valley]"
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 placeholder-gray-400 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 