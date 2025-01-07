import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importing social media icons
import { IoMdDownload } from 'react-icons/io'; // Importing download icon

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="w-4/5 flex flex-col lg:flex-row">
        {/* Left Section - Intro */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-yellow-400">
            Hi, I'm <span className="text-red-500">Faizan</span>
          </h1>
          <p className="text-lg mt-4 text-gray-400">
            A passionate <span className="font-semibold text-red-500">Frontend Developer</span> with a knack for creating seamless user interfaces.
          </p>
          
          {/* Buttons */}
          <div className="mt-8 flex gap-6">
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300">
              <a href="mailto:faizan@example.com">Hire Me</a>
            </button>
            <button className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300">
              <a href="/Faizan_CV.pdf" download>
                <IoMdDownload className="inline-block mr-2" />
                Download CV
              </a>
            </button>
          </div>
          
          {/* Social Media Icons */}
          <div className="mt-8 flex gap-6">
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
        </div>
        
        {/* Right Section - Image */}
        <div className="lg:w-1/2 w-full flex justify-center items-center p-8">
          <img src="/developer-photo.jpg" alt="Faizan" className="rounded-full shadow-lg w-64 h-64 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
