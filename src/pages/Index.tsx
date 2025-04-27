
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, Building, Globe, Users, Award, BookOpen } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';

const projects = [
  {
    id: "1",
    title: "Urban Renewal Complex",
    category: "Sustainable Architecture",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800",
    slug: "urban-renewal",
  },
  {
    id: "2",
    title: "Eco Towers",
    category: "Green Buildings",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800",
    slug: "eco-towers",
  },
  {
    id: "3",
    title: "Forest Integration",
    category: "Biophilic Design",
    imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800",
    slug: "forest-integration",
  }
];

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    description: "Creating innovative, sustainable building designs that harmonize with their surroundings while meeting functional needs."
  },
  {
    icon: Globe,
    title: "Environmental Planning",
    description: "Developing comprehensive environmental strategies to minimize ecological impact and enhance natural surroundings."
  },
  {
    icon: Users,
    title: "Community Development",
    description: "Building spaces that foster community connection, focusing on public engagement and social infrastructure."
  },
  {
    icon: Award,
    title: "Sustainability Consultation",
    description: "Providing expert guidance on implementing sustainable practices throughout the building lifecycle."
  }
];

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "150+", label: "Completed Projects" },
  { value: "45", label: "Global Awards" },
  { value: "17", label: "Countries" }
];

const Index = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24 min-h-[85vh] flex flex-col justify-center relative">
        <Scene3D />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight mb-8 md:mb-12">
            Building a sustainable future through architectural innovation
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-8 md:mb-12 text-muted-foreground">
            Capitol Group combines visionary architecture with environmental stewardship to create spaces that inspire, endure, and harmonize with nature.
          </p>
          
          <div className="mt-8 md:mt-12">
            <Link 
              to="/work" 
              className="inline-flex items-center text-lg group px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Explore Our Work
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-serif mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">About Capitol Group</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 1998, Capitol Group has been at the forefront of architectural innovation, 
              specializing in the integration of modern design with natural elements. Our approach 
              challenges conventional building paradigms by prioritizing environmental harmony 
              alongside structural integrity and aesthetic appeal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Our Philosophy</h3>
              <p className="mb-4">
                At Capitol Group, we believe that architecture should serve as a bridge between human habitat and 
                natural ecosystems. Each project begins with a thorough understanding of the local environment, 
                cultural context, and community needs.
              </p>
              <p className="mb-4">
                Our interdisciplinary teams of architects, environmental scientists, and community planners 
                collaborate to create buildings that minimize environmental impact while maximizing 
                energy efficiency, durability, and human comfort.
              </p>
              <div className="mt-6">
                <Link to="/about" className="link-hover text-lg">
                  Learn more about our approach
                </Link>
              </div>
            </div>
            <div className="aspect-square bg-accent rounded-md overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&w=800" 
                alt="Architectural concept sketch" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif mb-16 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-muted rounded-md">
                <service.icon className="mb-4 h-8 w-8" />
                <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-serif">Featured Projects</h2>
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
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 filter grayscale"
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Commitment</h2>
            <p className="text-lg mb-8">
              Capitol Group is committed to leading the industry in environmental stewardship. 
              We pledge that by 2030, all our projects will be carbon-neutral or carbon-negative, 
              utilizing innovative materials, renewable energy systems, and regenerative design principles.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/intent" 
                className="inline-flex items-center text-lg px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Read Our Manifesto
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-lg px-6 py-3 border border-foreground hover:bg-foreground/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
