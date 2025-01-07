import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-screen bg-gray-100">
      {/* Developer Intro Section */}
      <div className="lg:w-1/2 w-full p-8 text-center lg:text-left flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm Faizan
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A passionate Frontend Developer with a knack for crafting engaging
          user interfaces and seamless web experiences. I specialize in
          creating responsive and dynamic applications using modern tools and
          technologies like React, TailwindCSS, and more.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition">
          View My Work
        </button>
      </div>

      {/* Photo Section */}
      <div className="lg:w-1/2 w-full p-8 flex justify-center lg:justify-end">
        <img
          src="/developer-photo.jpg" // Replace with the path to your photo
          alt="Faizan"
          className="w-80 h-80 rounded-full shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
