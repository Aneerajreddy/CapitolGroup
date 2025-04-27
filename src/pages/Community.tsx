
import React from 'react';
import Layout from '@/components/Layout';
import { Users } from 'lucide-react';

const Community = () => {
  const initiatives = [
    {
      title: "Urban Development",
      description: "Revitalizing neighborhoods through thoughtful architectural integration and community spaces.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e"
    },
    {
      title: "Environmental Programs",
      description: "Leading sustainability workshops and green building initiatives in local communities.",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
    },
    {
      title: "Educational Outreach",
      description: "Partnering with schools to inspire the next generation of sustainable architects.",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363"
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-serif">Community</h1>
          </div>

          <p className="text-xl mb-12 text-muted-foreground">
            At Capitol Group, we believe in building more than just structures – we build communities 
            that thrive and prosper.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <div key={index} className="group">
                <div className="aspect-square mb-4 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">{initiative.title}</h3>
                <p className="text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-6">Community Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-serif mb-2">50+</p>
                <p className="text-muted-foreground">Community Projects</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">100k+</p>
                <p className="text-muted-foreground">Lives Impacted</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-2">25+</p>
                <p className="text-muted-foreground">Partner Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
