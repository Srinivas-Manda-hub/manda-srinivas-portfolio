
import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Website",
      category: "Major Project",
      description: "A full-fledged e-commerce platform developed during my internship at Corizo, featuring product listings, shopping cart, user authentication, and payment integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Database"],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "CRUD Operations Web App",
      category: "Minor Project",
      description: "A web application implementing Create, Read, Update, and Delete operations with a clean user interface and efficient data handling system.",
      technologies: ["HTML", "CSS", "JavaScript", "Database"],
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-gradient inline-block mb-4">My Projects</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Here are some of my notable projects that demonstrate my technical skills
            and passion for creating effective digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-muted rounded-lg overflow-hidden card-hover"
            >
              <div className="h-56 bg-background/50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="heading-sm">{project.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs font-medium px-2 py-1 bg-background rounded-md text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a 
                    href={project.link}
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-1">View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
