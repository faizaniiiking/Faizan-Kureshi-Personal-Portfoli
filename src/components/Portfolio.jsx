import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="w-4/5 mx-auto">
        {/* Portfolio Header */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-yellow-400">My Portfolio</h1>
          <p className="text-lg mt-4 text-gray-400">
            Explore my collection of projects, where I've applied modern frontend technologies
            like React.js, Tailwind CSS, and more to bring ideas to life. Check out the live demos
            and the source code on GitHub.
          </p>
        </motion.section>

        {/* Projects Container */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400">Spotify Clone</h2>
            <div className="mt-4">
              <img src="/Images/Screenshot (68).png" alt="Spotify Clone" className="w-full h-auto rounded-md" />
            </div>
            <p className="text-lg mt-4 text-gray-400">
              A personal portfolio showcasing my skills, projects, and experiences as a frontend developer.
              Built with React.js and Tailwind CSS.
            </p>
            <a
              href="https://spotify-clone-by-faizan-kureshi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View Live
            </a>
            <br />
            <a
              href="https://github.com/faizankureshi/spotify-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
            >
              Watch on GitHub
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400">Landing Page DM Copilot</h2>
            <div className="mt-4">
              <img src="/Images/landingdm.png" alt="E-commerce Web App" className="w-full h-auto rounded-md" />
            </div>
            <p className="text-lg mt-4 text-gray-400">
              An e-commerce web app for users to browse and purchase products, built with React, Node.js, and MongoDB.
            </p>
            <a
              href="https://stellular-faloodeh-7c6ecc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View Live
            </a>
            <br />
            <a
              href="https://github.com/faizankureshi/landing-page-dm-copilot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
            >
              Watch on GitHub
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400">Netflix Clone</h2>
            <div className="mt-4">
              <img src="/Images/netflix.png" alt="Blog Platform" className="w-full h-auto rounded-md" />
            </div>
            <p className="text-lg mt-4 text-gray-400">
              A blog platform where users can create, read, and manage blog posts. Built using React.js and Express.js.
            </p>
            <a
              href="https://netflex-faizan.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View Live
            </a>
            <br />
            <a
              href="https://github.com/faizankureshi/netflix-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
            >
              Watch on GitHub
            </a>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400">Amzone Clone</h2>
            <div className="mt-4">
              <img src="/Images/amazon.png" alt="To-Do List App" className="w-full h-auto rounded-md" />
            </div>
            <p className="text-lg mt-4 text-gray-400">
              A simple to-do list app built with React.js, allowing users to add, edit, and delete tasks.
            </p>
            <a
              href="https://amazoncloneby-faizan-kureshi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View Live
            </a>
            <br />
            <a
              href="https://github.com/faizankureshi/amzone-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
            >
              Watch on GitHub
            </a>
          </motion.div>

          {/* Project 5 */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-yellow-400">Tic Tac Toe Game</h2>
            <div className="mt-4">
              <img src="/Images/tictac.png" alt="Tic Tac Toe Game" className="w-full h-auto rounded-md" />
            </div>
            <p className="text-lg mt-4 text-gray-400">
              A simple Tic Tac Toe game built with React.js, where players can challenge each other.
            </p>
            <a
              href="https://tic-tac-toe-gameby-faizzan-kureshi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View Live
            </a>
            <br />
            <a
              href="https://github.com/faizankureshi/tic-tac-toe-game"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
            >
              Watch on GitHub
            </a>
          </motion.div>

          {/* Add similar animations for other projects */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
