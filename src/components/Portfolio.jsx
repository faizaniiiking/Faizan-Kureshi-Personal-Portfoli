import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="w-4/5 mx-auto">
        {/* Portfolio Header */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-yellow-400">My Portfolio</h1>
          <p className="text-lg mt-4 text-gray-400">
            A showcase of my projects built with modern technologies and attention to detail. 
            Click on the links below to explore my work.
          </p>
        </section>

        {/* Projects Container */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-400">Portfolio Website</h2>
            <p className="text-lg mt-4 text-gray-400">
              A personal portfolio showcasing my skills, projects, and experiences as a frontend developer.
              Built with React.js and Tailwind CSS.
            </p>
            <a
              href="https://github.com/FaizanKureshi/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-400">E-commerce Web App</h2>
            <p className="text-lg mt-4 text-gray-400">
              An e-commerce web app for users to browse and purchase products, built with React, Node.js, and MongoDB.
            </p>
            <a
              href="https://github.com/FaizanKureshi/e-commerce-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-400">Blog Platform</h2>
            <p className="text-lg mt-4 text-gray-400">
              A blog platform where users can create, read, and manage blog posts. Built using React.js and Express.js.
            </p>
            <a
              href="https://github.com/FaizanKureshi/blog-platform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-yellow-400">To-Do List App</h2>
            <p className="text-lg mt-4 text-gray-400">
              A simple to-do list app built with React.js, allowing users to add, edit, and delete tasks.
            </p>
            <a
              href="https://github.com/FaizanKureshi/todo-list-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
