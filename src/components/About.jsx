import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const About = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="w-4/5 mx-auto flex flex-col gap-12">
        {/* Introduction Section */}
        <section>
          <h1 className="text-5xl font-bold text-yellow-400">
            Hi, I'm <span className="text-red-500">Faizan</span>
          </h1>
          <p className="text-lg mt-4 text-gray-400">
            A passionate <span className="font-semibold text-red-500">Frontend Developer</span> with a knack for creating seamless user interfaces.
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-semibold text-yellow-400 mt-8">Skills & Expertise</h2>
          <ul className="list-disc ml-6 mt-4 text-gray-400">
            <li>Frontend Development with <span className="font-semibold text-red-500">React.js</span></li>
            <li>HTML5, CSS3, and <span className="font-semibold text-red-500">JavaScript</span> for building interactive web pages</li>
            <li>Responsive Design and <span className="font-semibold text-red-500">Tailwind CSS</span> for styling</li>
            <li>Version control with <span className="font-semibold text-red-500">Git & GitHub</span></li>
            <li>API Integration using <span className="font-semibold text-red-500">REST</span> and <span className="font-semibold text-red-500">GraphQL</span></li>
            <li>Building Single-Page Applications (SPAs) with <span className="font-semibold text-red-500">React Router</span></li>
            <li>Deploying websites and applications with <span className="font-semibold text-red-500">Vercel</span>, <span className="font-semibold text-red-500">Netlify</span>, and other hosting platforms</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-3xl font-semibold text-yellow-400 mt-8">Experience</h2>
          <p className="text-lg mt-4 text-gray-400">
            Over the years, I have worked on various personal projects and freelance opportunities, building user-centric web applications that are both functional and visually appealing. I have experience working with clients from different industries, including e-commerce, education, and more.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mt-8">
          <h2 className="text-3xl font-semibold text-yellow-400">Connect with Me</h2>
          <div className="mt-6 flex gap-6">
            <a href="https://github.com/FaizanKureshi" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl hover:text-red-500 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/faizan-kureshi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://twitter.com/FaizanKureshi" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-blue-400 transition duration-300" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
