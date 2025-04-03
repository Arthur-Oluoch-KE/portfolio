
import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 
    'Express', 'MongoDB', 'HTML5', 'CSS3',
    'Tailwind CSS', 'Git', 'GitHub', 'REST API'
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="md:w-1/3" data-aos="fade-right">
            <div className="relative">
              <div className="w-full h-80 bg-primary/10 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-2/3" data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 inline-block relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-primary after:mt-2">About Me</h2>
            <p className="mb-4">
              I'm a passionate full-stack developer with expertise in building responsive and dynamic web applications. With a strong foundation in modern JavaScript frameworks and libraries, I enjoy creating elegant solutions to complex problems.
            </p>
            <p className="mb-6">
              My journey in web development started over 5 years ago, and I've been continuously learning and adapting to the ever-evolving landscape of web technologies. I'm dedicated to writing clean, maintainable code and delivering exceptional user experiences.
            </p>
            
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-wood/10 text-wood-dark rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Resume */}
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-wood transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
