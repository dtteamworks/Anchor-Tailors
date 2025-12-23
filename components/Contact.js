"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { outfit } from "./fonts/Outfit";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Full Name:", formData.fullName);
    console.log("Phone:", formData.phone);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);

    // Reset form after submission
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className={`relative py-16  ${outfit.className} overflow-hidden`}>
      <div className="w-full absolute top-[5%] sm:top-[20%] h-full bg-[#FAFAFA] -z-10" />
      <div className="max-w-7xl mx-auto z-50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section */}
          <div className="space-y-6 p-5 sm:p-0">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight">
              Get in Touch
              <br />
              With Us
            </h2>

            <p className="text-[#00000099] text-lg leading-relaxed max-w-md">
              Have questions or want to book tailoring services? Reach out to us
              and our team will get back to you shortly.
            </p>
            <div className="relative w-fit ml-4 rounded-full bg-black">
              <Link href={"tel:9441524214"} className="bg-[#FF9000] -translate-1.5 border-2 cursor-pointer border-black text-white px-8 py-3.5 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mt-8">
                Call Now
                <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              Share Your Tailoring
            </h3>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
              Requirements with us...
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Input */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-5 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9000] focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  required
                  className="w-full px-5 py-3 border text-sm border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9000] focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-5 py-3 border text-sm border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9000] focus:border-transparent transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write message"
                  rows="3"
                  required
                  className="w-full px-5 py-3 border text-sm border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF9000] focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-sm bg-[#FF9000] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Send Us
                <FaArrowRight className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
