
import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-background overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="heading-xl">
            <span className="block">Manda</span>
            <span className="block font-bold text-primary">Srinivas.</span>
          </h1>
          <div className="h-1 w-20 bg-primary"></div>
          <h2 className="text-xl md:text-2xl text-foreground/80 font-light">
            Computer Science Student <span className="text-primary">|</span> Web Developer
          </h2>
          <p className="text-base md:text-lg text-foreground/70 max-w-xl">
            A dedicated Computer Science student passionate about coding and web design. 
            Always eager to learn new technologies, combining strong programming skills with 
            creativity to build practical and visually appealing digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#portfolio" className="btn-outline">
              View Projects
            </a>
          </div>
          
          <div className="flex items-center space-x-4 pt-2">
            <a 
              href="https://linkedin.com/in/srinivas-manda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Srinivas-Manda-hud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://instagram.com/nani_1_6_0_3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-full overflow-hidden border-4 border-background">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                {/* Placeholder for profile image */}
                <span className="text-5xl font-bold text-foreground/30">MS</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-lg shadow-lg">
              <p className="font-bold">BTech CSE Student</p>
              <p className="text-sm text-foreground/70">Pydah College of Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
