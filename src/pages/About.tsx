
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-6">About</h1>
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Alireza portrait" 
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <p className="text-xl mb-6">
                I'm Alireza, a designer and developer based in New York. With over 
                8 years of experience in the digital design industry, I specialize in 
                creating clean, functional, and visually appealing designs.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground">
                My approach combines aesthetic sensitivity with technical expertise, 
                allowing me to craft digital experiences that not only look beautiful 
                but also function flawlessly. I believe that good design is invisible, 
                enabling users to accomplish their goals without friction.
              </p>
              
              <p className="text-lg mb-8 text-muted-foreground">
                When I'm not designing or coding, you can find me exploring the city, 
                taking photographs, or experimenting with new cooking recipes.
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
            <h2 className="text-2xl md:text-3xl font-serif mb-8">Experience</h2>
            
            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-medium">Senior Designer</h3>
                  <span className="text-muted-foreground">2019 - Present</span>
                </div>
                <p className="text-muted-foreground">Design Studio NYC</p>
              </div>
              
              <div className="border-b border-border pb-8">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-medium">UI/UX Designer</h3>
                  <span className="text-muted-foreground">2016 - 2019</span>
                </div>
                <p className="text-muted-foreground">Creative Agency</p>
              </div>
              
              <div className="border-b border-border pb-8">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-medium">Junior Designer</h3>
                  <span className="text-muted-foreground">2014 - 2016</span>
                </div>
                <p className="text-muted-foreground">Design Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
