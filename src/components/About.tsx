
import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const skills = [
    'Python', 'JavaScript', 'React', 'Node.js', 
    'Django', 'SQL', 'HTML5', 'CSS3', 'Typescript',
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
                  src="/profile.jpg"
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
            I am a software developer with expertise in Python, MySQL, and Django, complemented by proficiency in modern JavaScript frameworks and libraries. I specialize in designing efficient and elegant solutions to complex technical challenges.
            </p>
            <p className="mb-6">
            With two years of experience in the technology field, I am consistently expanding my skill set to keep pace with the dynamic web development landscape. My focus is on producing clean, maintainable code while prioritizing the delivery of high-quality user experiences.
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
