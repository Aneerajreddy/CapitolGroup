
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowLeft } from 'lucide-react';

// Sample project data - in a real app this would come from an API
const projectsData = {
  "minima": {
    title: "Minima",
    category: "Brand Identity",
    description: "A minimalist brand identity for a modern architecture firm focused on sustainable design.",
    client: "Minima Architecture",
    year: "2023",
    services: ["Brand Strategy", "Visual Identity", "Print Design"],
    images: [
      "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    ]
  },
  "lumina": {
    title: "Lumina",
    category: "Web Design",
    description: "A dynamic website redesign for a lighting design company, showcasing their portfolio and services.",
    client: "Lumina Designs",
    year: "2022",
    services: ["Web Design", "UI/UX", "Development"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a",
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
    ]
  },
  "serenity": {
    title: "Serenity",
    category: "Mobile App",
    description: "A meditation and mindfulness mobile application designed to help users find calm in their daily lives.",
    client: "Serenity Wellness",
    year: "2023",
    services: ["App Design", "UI/UX", "Prototyping"],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    ]
  },
};

type ProjectSlug = keyof typeof projectsData;

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectSlug = slug as ProjectSlug;
  
  const project = projectsData[projectSlug];
  
  if (!project) {
    return (
      <Layout>
        <div className="container-custom py-24 text-center">
          <h1 className="text-3xl font-serif mb-6">Project Not Found</h1>
          <Link to="/work" className="link-hover">
            Return to Work
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section className="py-12">
        <div className="container-custom max-w-5xl">
          <Link to="/work" className="inline-flex items-center mb-12 group">
            <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" size={20} />
            Back to Work
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-12">{project.category}</p>
          
          <div className="space-y-16 mb-24">
            {project.images.map((image, index) => (
              <div key={index} className="animate-image-fade">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif mb-4">About the Project</h2>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Client</h3>
                <p className="text-muted-foreground">{project.client}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Year</h3>
                <p className="text-muted-foreground">{project.year}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Services</h3>
                <ul className="text-muted-foreground">
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-16">
            <h3 className="text-2xl font-serif mb-8">More Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(projectsData)
                .filter(([key]) => key !== projectSlug)
                .slice(0, 2)
                .map(([key, project]) => (
                  <Link 
                    key={key}
                    to={`/work/${key}`}
                    className="group block relative overflow-hidden"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="text-xl font-serif">{project.title}</h3>
                      <p className="text-muted-foreground">{project.category}</p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
