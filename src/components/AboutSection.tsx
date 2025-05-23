import React from 'react';

const AboutSection = () => {
  const education = [
    {
      institution: "Pydah College of Engineering",
      degree: "BTech in Computer Science",
      period: "2023 - 2027",
      details: "Currently pursuing Bachelor of Technology in Computer Science Engineering."
    },
    {
      institution: "KSN Junior College",
      degree: "Intermediate Education",
      period: "2020 - 2022",
      details: "Completed intermediate education with focus on Mathematics and Science."
    },
    {
      institution: "Secondary School",
      degree: "9th & 10th Standard",
      period: "2019 - 2020",
      details: "Completed secondary education (9th and 10th grade)."
    },
    {
      institution: "Sri Vidya Nidhi & Narayana Schools",
      degree: "Primary Education",
      period: "Prior to 2019",
      details: "Completed primary schooling with strong academic foundation."
    }
  ];

  const experience = [
    {
      company: "Corizo",
      position: "Web Development Intern",
      period: "2023",
      details: "Completed projects focused on CRUD operations and e-commerce website development. Gained practical experience in front-end and back-end technologies."
    }
  ];

  const skills = [
    "C", "Java", "HTML", "CSS", "Python", "Data Structures", 
    "Database Management", "Web Development"
  ];

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-gradient inline-block mb-4">About Me</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            My journey through education and technology has shaped me into a versatile
            computer science student with a passion for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="heading-sm mb-6 flex items-center">
                <span className="h-1 w-6 bg-primary mr-2"></span> 
                Education Journey
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30 pb-6 last:pb-0">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                    <h4 className="font-bold text-lg">{item.institution}</h4>
                    <div className="flex justify-between flex-wrap">
                      <p className="text-primary">{item.degree}</p>
                      <p className="text-foreground/60 text-sm">{item.period}</p>
                    </div>
                    <p className="text-foreground/70 mt-2">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="heading-sm mb-6 flex items-center">
                <span className="h-1 w-6 bg-primary mr-2"></span>
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30 pb-6 last:pb-0">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                    <h4 className="font-bold text-lg">{item.company}</h4>
                    <div className="flex justify-between flex-wrap">
                      <p className="text-primary">{item.position}</p>
                      <p className="text-foreground/60 text-sm">{item.period}</p>
                    </div>
                    <p className="text-foreground/70 mt-2">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="heading-sm mb-6 flex items-center">
                <span className="h-1 w-6 bg-primary mr-2"></span>
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-background rounded-md text-foreground/90 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
