
import React from 'react';
import Layout from '@/components/Layout';
import { MessageSquare } from 'lucide-react';

const Intent = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <MessageSquare className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-serif">Our Intent</h1>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-8 text-muted-foreground">
              Capitol Group's mission is to revolutionize architectural design through sustainable innovation 
              and environmental stewardship.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-serif mb-4">Vision</h2>
                <p className="text-muted-foreground">
                  To be the global leader in sustainable architectural solutions, creating spaces that 
                  harmonize with nature while meeting the evolving needs of communities worldwide.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-serif mb-4">Mission</h2>
                <p className="text-muted-foreground">
                  To deliver innovative architectural designs that prioritize environmental responsibility, 
                  social impact, and aesthetic excellence.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-serif mb-6">Our Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-serif mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Achieving carbon neutrality in all projects by 2030 through innovative materials and design.
                </p>
              </div>
              
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-serif mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Pioneering new technologies and methodologies in architectural design and construction.
                </p>
              </div>
              
              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="text-xl font-serif mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Creating spaces that foster connection and enhance quality of life for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Intent;
