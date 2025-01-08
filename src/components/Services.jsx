import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="flex justify-center items-center py-16 bg-black text-white">
      <div className="w-11/12 max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
          My Services
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-12">
          Transforming ideas into engaging digital experiences.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              Web Development
            </h3>
            <p className="text-gray-400">
              Crafting responsive and dynamic websites tailored to your needs,
              ensuring a seamless user experience.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 mb-4">
              UI/UX Design
            </h3>
            <p className="text-gray-400">
              Designing intuitive interfaces that prioritize user interaction
              and engagement.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Frontend Optimization
            </h3>
            <p className="text-gray-400">
              Enhancing website performance through optimized code and best
              practices.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-green-500 mb-4">
              React Development
            </h3>
            <p className="text-gray-400">
              Building scalable and maintainable React applications with a focus
              on efficiency.
            </p>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-purple-500 mb-4">
              API Integration
            </h3>
            <p className="text-gray-400">
              Integrating robust APIs for seamless communication between systems
              and services.
            </p>
          </motion.div>

          {/* Service 6 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-xl font-semibold text-pink-500 mb-4">
              Maintenance & Support
            </h3>
            <p className="text-gray-400">
              Offering ongoing support to ensure your digital products run
              smoothly.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
