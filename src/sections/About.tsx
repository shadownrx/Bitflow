import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About BitFlow Studio</h2>
            <p className="text-xl text-blue-100 mb-6">
              We are a team of passionate developers, designers, and strategists dedicated to 
              creating exceptional digital experiences.
            </p>
            <p className="text-blue-100 mb-6">
              Founded in 2020, BitFlow Studio has grown into a trusted partner for businesses 
              seeking innovative mobile and web solutions. Our approach combines technical expertise 
              with creative thinking to deliver products that exceed expectations.
            </p>
            <p className="text-blue-100 mb-6">
              We believe in collaborative partnerships with our clients, understanding their unique 
              challenges and goals to create tailored solutions that drive real business results.
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
                <p className="text-blue-200">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">30+</div>
                <p className="text-blue-200">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">15</div>
                <p className="text-blue-200">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300 mb-2">5</div>
                <p className="text-blue-200">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-500 rounded-full opacity-20"></div>
            
            <div className="relative z-10 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-300">Innovation</h4>
                  <p className="text-blue-100">
                    We embrace new technologies and approaches to create cutting-edge solutions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-300">Quality</h4>
                  <p className="text-blue-100">
                    We maintain the highest standards in design, development, and user experience.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-300">Collaboration</h4>
                  <p className="text-blue-100">
                    We work closely with our clients, valuing their input throughout the process.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-300">Integrity</h4>
                  <p className="text-blue-100">
                    We operate with transparency, honesty, and ethical practices in all we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;