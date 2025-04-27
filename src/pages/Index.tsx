
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';

const projects = [
  {
    id: "1",
    title: "Minima",
    category: "Brand Identity",
    imageUrl: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    slug: "minima",
  },
  {
    id: "2",
    title: "Lumina",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    slug: "lumina",
  },
  {
    id: "3",
    title: "Serenity",
    category: "Mobile App",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    slug: "serenity",
  }
];

const Index = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24 min-h-[85vh] flex flex-col justify-center relative">
        <Scene3D />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight mb-8 md:mb-12">
            Designer and developer creating thoughtful digital experiences
          </h1>
          
          <div className="mt-8 md:mt-12">
            <Link 
              to="/work" 
              className="inline-flex items-center text-lg group"
            >
              View My Work
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-serif">Selected Work</h2>
            <Link to="/work" className="link-hover mt-4 md:mt-0">
              View All Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={`/work/${project.slug}`}
                className="group block relative overflow-hidden"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                
                <div className="mt-4">
                  <h3 className="text-xl font-serif">{project.title}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Let's Work Together</h2>
            <p className="text-lg mb-8">I'm currently available for freelance projects. If you have a project that you want to get started, think you need my help with something or just fancy saying hello, then get in touch.</p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-lg px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
