
import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const Subsidiaries = () => {
  const companies = [
    {
      name: "Capitol Design & Build",
      focus: "Architectural Design",
      description: "Specializing in high-end residential and commercial architecture.",
      projects: "120+",
      location: "New York"
    },
    {
      name: "Capitol Sustainable Solutions",
      focus: "Environmental Engineering",
      description: "Leading the way in green building technologies and sustainable design.",
      projects: "85+",
      location: "San Francisco"
    },
    {
      name: "Capitol Urban Development",
      focus: "Urban Planning",
      description: "Creating integrated urban spaces that enhance community life.",
      projects: "45+",
      location: "Chicago"
    },
    {
      name: "Capitol Innovations",
      focus: "Research & Development",
      description: "Advancing architectural technology and sustainable building practices.",
      projects: "30+",
      location: "Boston"
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-serif">Subsidiaries</h1>
          </div>

          <p className="text-xl mb-12 text-muted-foreground">
            Capitol Group's family of companies works together to deliver comprehensive 
            architectural and development solutions across the United States.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="border border-border p-6 rounded-lg hover:bg-secondary transition-colors">
                <h2 className="text-2xl font-serif mb-2">{company.name}</h2>
                <p className="text-muted-foreground mb-4">{company.focus}</p>
                <p className="mb-6">{company.description}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Completed Projects: {company.projects}</span>
                  <span>Location: {company.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-secondary rounded-lg">
            <h2 className="text-2xl font-serif mb-6">Global Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-serif mb-2">4</p>
                <p className="text-muted-foreground">Major Cities</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">280+</p>
                <p className="text-muted-foreground">Total Projects</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">500+</p>
                <p className="text-muted-foreground">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subsidiaries;
