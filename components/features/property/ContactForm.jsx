import React from 'react';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8">
          <Image
            src="/logo.png"
            alt="Aruna Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <span className="text-xl">Aruna</span>
      </div>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-gray-300 focus:border-gray-300 placeholder-gray-400"
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