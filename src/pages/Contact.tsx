
import React, { useState } from 'react';
import Layout from '@/components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact</h1>
              <p className="text-lg text-muted-foreground mb-8">
                I'm currently available for freelance projects. If you have a project 
                that you want to get started, think you need my help with something or 
                just fancy saying hello, then get in touch.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <a href="mailto:hello@alireza.com" className="link-hover text-muted-foreground">
                    hello@alireza.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Location</h3>
                  <p className="text-muted-foreground">New York, NY</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Social</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-hover text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link-hover text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-hover text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <div className="bg-secondary p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-serif mb-4">Thank you!</h3>
                  <p className="text-muted-foreground">
                    Your message has been received. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:ring-1 focus:ring-foreground"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
