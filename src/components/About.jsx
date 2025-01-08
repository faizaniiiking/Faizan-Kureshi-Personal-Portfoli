import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUniversity, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="w-4/5 mx-auto flex flex-col gap-16">
        {/* Introduction Section */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-yellow-400 shadow-md">
            Hi, I'm <span className="text-red-500">Faizan</span>
          </h1>
          <p className="text-lg mt-4 text-gray-300">
            A passionate <span className="font-semibold text-red-500">Frontend Developer</span> dedicated to crafting intuitive and responsive user interfaces.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <motion.button
              className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
            <motion.button
              className="px-6 py-2 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.section>

        {/* Personal Details Section */}
        <motion.section
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-yellow-400 text-center shadow-md">
            About Me
          </h2>
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
              <FaUser className="text-yellow-400 text-4xl mx-auto mb-2" />
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-yellow-400">Age:</span> 23
              </p>
            </div>
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
              <FaUniversity className="text-yellow-400 text-4xl mx-auto mb-2" />
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-yellow-400">Education:</span> BCA (Bachelor of Computer Applications)
              </p>
            </div>
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
              <FaMapMarkerAlt className="text-yellow-400 text-4xl mx-auto mb-2" />
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-yellow-400">Location:</span> Mumbai, India
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-8 shadow-md">
            Skills & Expertise
          </h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {[
              "React.js",
              "HTML5",
              "CSS3",
              "JavaScript",
              "Tailwind CSS",
              "Git & GitHub",
              "REST API",
              "GraphQL",
              "React Router",
              "Vercel",
              "Netlify",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-800 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-8 shadow-md">
            Experience
          </h2>
          <p className="text-lg text-gray-300 text-center leading-7">
            Over the years, I have worked on diverse personal projects and freelance opportunities. I specialize in creating user-centric web applications that are both functional and visually appealing. My experience spans industries like e-commerce, education, and more.
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-8 shadow-md">
            Connect with Me
          </h2>
          <div className="flex flex-col items-center gap-4">
            <motion.p
              className="text-lg text-gray-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone className="text-yellow-400" />
              <span>
                <a href="tel:+911234567890" className="hover:text-red-500">
                  +91-123-456-7890
                </a>
              </span>
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-yellow-400" />
              <span>
                <a href="mailto:faizan@example.com" className="hover:text-red-500">
                  faizan@example.com
                </a>
              </span>
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Mumbai, India</span>
            </motion.p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
