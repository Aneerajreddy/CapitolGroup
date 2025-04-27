
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

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
  },
  {
    id: "4",
    title: "Essence",
    category: "Photography",
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    slug: "essence",
  },
  {
    id: "5",
    title: "Harmony",
    category: "UI Design",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    slug: "harmony",
  },
  {
    id: "6",
    title: "Tranquil",
    category: "Brand Identity",
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    slug: "tranquil",
  }
];

const Work = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Work</h1>
            <p className="text-lg text-muted-foreground">Selected projects spanning brand strategy, visual identity, web design, and digital experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                slug={project.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
