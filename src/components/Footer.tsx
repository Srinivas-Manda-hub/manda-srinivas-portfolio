
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-2">
              MS
            </div>
            <span className="font-bold text-lg">Manda Srinivas</span>
          </div>
          
          <div className="text-foreground/70 text-sm">
            &copy; {currentYear} Manda Srinivas. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
