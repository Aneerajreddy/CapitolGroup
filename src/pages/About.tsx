
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import Nature3D from '@/components/3d/Nature3D';

const About = () => {
  const highlights = [
    {
      title: "Premium Locations",
      description: "Strategic land acquisition in high-growth areas with excellent connectivity and future potential."
    },
    {
      title: "Quality Infrastructure",
      description: "World-class amenities and infrastructure that enhance property value and quality of life."
    },
    {
      title: "Trusted Developer",
      description: "Known for transparency, legal compliance, and commitment to customer satisfaction."
    }
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-6">About Capitol Groups</h1>
              <Nature3D />
            </div>
            
            <div className="flex flex-col justify-center">
              <p className="text-xl mb-6">
                Capitol Groups is a leading land development company specializing in creating 
                well-planned, high-value plotted communities across prime locations.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground">
                With a foundation built on trust and quality, we've established ourselves as pioneers 
                in horizontal development, creating spaces where people can confidently invest in their future.
              </p>
              
              <p className="text-lg mb-8 text-muted-foreground">
                Our commitment to excellence, transparent practices, and customer-centric approach 
                has made us the preferred choice for investors looking for premium plotted developments.
              </p>
              
              <div className="mt-auto">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-lg px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-24">
            <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">Company Highlights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                  <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <h2 className="text-2xl md:text-3xl font-serif mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-serif mb-2">1000+</p>
                <p className="text-muted-foreground">Acres Developed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif mb-2">15+</p>
                <p className="text-muted-foreground">Communities Built</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif mb-2">5000+</p>
                <p className="text-muted-foreground">Happy Residents</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif mb-2">12</p>
                <p className="text-muted-foreground">Cities Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
