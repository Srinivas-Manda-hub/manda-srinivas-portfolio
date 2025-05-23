
import React, { useState } from 'react';
import { Phone, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace this URL with your actual FormSpree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you! Your message has been delivered successfully.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'srinivas.236t1a055@gmail.com',
      link: 'mailto:srinivas.236t1a055@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 9392746263',
      link: 'tel:+919392746263'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'Srinivas-Manda-hud',
      link: 'https://github.com/Srinivas-Manda-hud'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Srinivas Manda',
      link: 'https://linkedin.com/in/srinivas-manda'
    },
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      value: 'nani_1_6_0_3',
      link: 'https://instagram.com/nani_1_6_0_3'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-gradient inline-block mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind or want to connect? Feel free to reach out through any 
            of the channels below or send me a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-sm mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">{item.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="heading-sm mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-foreground/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-foreground/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-muted rounded-md border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`btn-primary w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
