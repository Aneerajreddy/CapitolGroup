import React from 'react';
import Layout from '@/components/Layout';
import { Building } from 'lucide-react';
import ArchitecturalModel3D from '@/components/3d/ArchitecturalModel3D';

const Studio = () => {
  const capabilities = [
    {
      title: "Architectural Design",
      description: "Creating innovative and sustainable building designs.",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a"
    },
    {
      title: "Urban Planning",
      description: "Developing comprehensive city development solutions.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    },
    {
      title: "Interior Design",
      description: "Crafting spaces that inspire and enhance living.",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <Building className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-serif">Studio</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-6">
                Capitol Group Studio combines innovative design thinking with sustainable practices 
                to create architectural solutions that stand the test of time.
              </p>
              <p className="text-muted-foreground">
                Our integrated approach brings together experts in architecture, engineering, 
                and environmental science to deliver comprehensive solutions.
              </p>
            </div>

            <div className="aspect-square relative">
              <ArchitecturalModel3D />
            </div>
          </div>

          <h2 className="text-2xl font-serif mb-8">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="aspect-video mb-4 overflow-hidden">
                  <img 
                    src={capability.image} 
                    alt={capability.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
