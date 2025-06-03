
import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Forage Certificate",
      issuer: "Forage",
      description: "Professional development and skills certification",
      link: "https://www.linkedin.com/posts/srinivas-manda-108a112a6_forage-certificate-activity-7333403907542421507-AxGK"
    },
    {
      title: "Web Development Internship",
      issuer: "Corizo",
      description: "Completed internship program in web development",
      link: "https://www.linkedin.com/posts/srinivas-manda-108a112a6_internship-webdevelopment-corizo-activity-7319352800444915713-Eve5"
    },
    {
      title: "Linux Certification",
      issuer: "Linux Foundation",
      description: "Open source and Linux systems certification",
      link: "https://www.linkedin.com/posts/srinivas-manda-108a112a6_linux-opensource-learningneverstops-activity-7319352068752699393-ee-D"
    },
    {
      title: "AWS Cloud Computing",
      issuer: "AWS Academy",
      description: "Cloud computing and AWS services certification",
      link: "https://www.linkedin.com/posts/srinivas-manda-108a112a6_aws-cloudcomputing-awsacademy-activity-7299299936343375873-6S7O"
    },
    {
      title: "Java Developer Certification",
      issuer: "Java Programming",
      description: "Java development and coding certification",
      link: "https://www.linkedin.com/posts/srinivas-manda-108a112a6_javadeveloper-certification-coding-activity-7297117976678256640-qgg5"
    },
    {
      title: "Programming Certificate",
      issuer: "Coding Platform",
      description: "General programming skills certification",
      link: "https://www.linkedin.com/posts/srinivas-manda-108a112a6_activity-7296799004858753024-bw7E"
    },
    {
      title: "Additional Programming Certificate",
      issuer: "Development Platform",
      description: "Advanced programming concepts certification",
      link: "https://www.linkedin.com/posts/srinivas-manda-108a112a6_activity-7296033650528161792-UHrX"
    }
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-gradient inline-block mb-4">Certifications</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A collection of my professional certifications and achievements that demonstrate 
            my commitment to continuous learning and skill development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-muted rounded-lg p-6 card-hover border border-border/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              
              <h3 className="heading-sm mb-2">{cert.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{cert.issuer}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-border/30">
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  View Certificate
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
