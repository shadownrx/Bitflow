import React from 'react';
import { Smartphone, Globe, Code, Database, Palette, Gauge } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Smartphone size={48} className="text-blue-500" />,
      title: 'Mobile App Development',
      description: 'We build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    },
    {
      id: 2,
      icon: <Globe size={48} className="text-teal-500" />,
      title: 'Web Development',
      description: 'From responsive websites to complex web applications, we create digital solutions that help businesses thrive online.',
    },
    {
      id: 3,
      icon: <Code size={48} className="text-indigo-500" />,
      title: 'Custom Software',
      description: 'We develop tailor-made software solutions that address specific business challenges and requirements.',
    },
    {
      id: 4,
      icon: <Database size={48} className="text-blue-500" />,
      title: 'Backend Systems',
      description: 'Robust, scalable APIs and database architectures that power your applications reliably.',
    },
    {
      id: 5,
      icon: <Palette size={48} className="text-teal-500" />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, engaging, and accessible digital experiences.',
    },
    {
      id: 6,
      icon: <Gauge size={48} className="text-indigo-500" />,
      title: 'Performance Optimization',
      description: 'We improve speed, responsiveness, and overall performance of existing applications.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help you achieve your business goals,
            from concept to deployment and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;