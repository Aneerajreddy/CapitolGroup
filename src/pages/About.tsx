
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import Nature3D from '@/components/3d/Nature3D';

const About = () => {
  const highlights = [
    {
      title: "Sustainable Innovation",
      description: "Leading the industry in eco-friendly architectural solutions and green building practices."
    },
    {
      title: "Global Presence",
      description: "Operating in major cities worldwide with a portfolio of landmark projects."
    },
    {
      title: "Design Excellence",
      description: "Award-winning designs that blend aesthetics with environmental responsibility."
    }
  ];

  return (
    <Layout>
      <section className="py-12">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-6">About Capitol Group</h1>
              <Nature3D />
            </div>
            
            <div className="flex flex-col justify-center">
              <p className="text-xl mb-6">
                Capitol Group stands at the forefront of architectural innovation, 
                combining cutting-edge design with environmental stewardship to 
                shape the future of sustainable architecture.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground">
                Founded in 1998, we've grown from a local architectural firm to a 
                global leader in sustainable building design. Our commitment to 
                environmental responsibility and innovative design has earned us 
                recognition as one of the most forward-thinking architectural firms 
                in the industry.
              </p>
              
              <p className="text-lg mb-8 text-muted-foreground">
                With a team of over 500 professionals worldwide, we bring diverse 
                perspectives and expertise to every project, ensuring solutions that 
                are both innovative and sustainable.
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
                <p className="text-3xl md:text-4xl font-serif mb-2">25+</p>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif mb-2">500+</p>
                <p className="text-muted-foreground">Team Members</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif mb-2">300+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif mb-2">20+</p>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
