import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Instituto VAI',
      description: 'A comprehensive educational platform enabling institutions to manage courses, students, and learning resources.',
      image: '/instituto.png',
      tags: ['Web App', 'Education', 'React']
    },
    {
      id: 2,
      title: 'Lucha de Brazos',
      description: 'A mobile application for arm wrestling enthusiasts to organize competitions, track scores, and connect with others in the community.',
      image: '/Luchadebrazos.png',
      tags: ['Mobile App', 'Sports', 'Community']
    },
    {
      id: 3,
      title: 'VoxTalk',
      description: 'A real-time voice communication platform with enhanced features for businesses and remote teams.',
      image: '/VoxTalk.png',
      tags: ['Web App', 'Communication', 'WebRTC']
    },
    {
      id: 4,
      title: 'Dino-Combat',
      description: 'An exciting dinosaur-themed combat game built with HTML, CSS, and JavaScript. Soon to be available as a desktop application with Electron.js.',
      image: '/DinoCombat.png',
      tags: ['Game', 'HTML5', 'JavaScript', 'Electron']
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects and discover how we've helped our clients
            achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more examples of our work?</p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;