import React from "react";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my projects and skills.",
      image: "/portfolio-image.jpg", // Replace with actual project image
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "An online store with cart functionality and payment integration.",
      image: "/ecommerce-image.jpg", // Replace with actual project image
      link: "#",
    },
    {
      id: 3,
      title: "Tic-Tac-Toe Game",
      description: "A fun, interactive game built using HTML, CSS, and JavaScript.",
      image: "/tictactoe-image.jpg", // Replace with actual project image
      link: "#",
    },
    {
      id: 4,
      title: "Blog App",
      description: "A blog platform to create, read, and manage posts.",
      image: "/blog-image.jpg", // Replace with actual project image
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600">
            Here are some of the projects I have worked on recently.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Details */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
