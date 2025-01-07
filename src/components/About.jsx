import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600">
            Hi, I'm Faizan, a dedicated frontend developer passionate about
            crafting visually appealing and user-friendly web applications. I
            thrive on turning ideas into reality with clean and efficient code.
          </p>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                HTML5
              </h3>
              <p className="text-gray-600">Building structured layouts</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                CSS3
              </h3>
              <p className="text-gray-600">Responsive design with animations</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                JavaScript
              </h3>
              <p className="text-gray-600">Dynamic and interactive content</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">React</h3>
              <p className="text-gray-600">Building modern UI components</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                TailwindCSS
              </h3>
              <p className="text-gray-600">Efficient utility-first styling</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Git & GitHub
              </h3>
              <p className="text-gray-600">Version control and collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
