import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        e.target, // The form element
        "your_user_id" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
        },
        (error) => {
          setStatus(`Error sending message. Please try again. ${error.text}`);
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="w-11/12 max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.h1
          className="text-4xl font-bold text-yellow-400 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h1>

        {/* Contact Details */}
        <motion.div
          className="flex flex-col md:flex-row justify-around items-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center md:text-left">
            <p className="text-lg flex items-center mb-4">
              <FaPhoneAlt className="text-yellow-400 mr-3 text-xl shadow-lg hover:shadow-2xl transition-all duration-300" />
              <span className="font-semibold text-yellow-400">Phone:</span>{" "}
              <a href="tel:+911234567890" className="hover:text-red-500">
                +91-123-456-7890
              </a>
            </p>
            <p className="text-lg flex items-center mb-4">
              <FaEnvelope className="text-yellow-400 mr-3 text-xl shadow-lg hover:shadow-2xl transition-all duration-300" />
              <span className="font-semibold text-yellow-400">Email:</span>{" "}
              <a
                href="mailto:faizanikkhan@gmail.com"
                className="hover:text-red-500"
              >
                faizanikkhan@gmail.com
              </a>
            </p>
            <p className="text-lg flex items-center">
              <FaMapMarkerAlt className="text-yellow-400 mr-3 text-xl shadow-lg hover:shadow-2xl transition-all duration-300" />
              <span className="font-semibold text-yellow-400">Location:</span>{" "}
              Mumbai, India
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit} // Form submission handler
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Add name attribute for form data
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add name attribute for form data
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message" // Add name attribute for form data
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && (
            <div className="mt-4 text-center text-yellow-400">
              <p>{status}</p>
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default ContactMe;
