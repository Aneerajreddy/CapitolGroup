import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, MapPin, Users, Building2, TreePine } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';

const projects = [
  {
    id: "1",
    title: "Green Valley Estates",
    category: "Residential Development",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800",
    slug: "green-valley-estates",
  },
  {
    id: "2",
    title: "Horizon Gardens",
    category: "Planned Community",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800",
    slug: "horizon-gardens",
  },
  {
    id: "3",
    title: "Parkview Heights",
    category: "Premium Plots",
    imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800",
    slug: "parkview-heights",
  }
];

const services = [
  {
    icon: MapPin,
    title: "Strategic Land Development",
    description: "Identifying and developing prime locations with high growth potential and excellent connectivity."
  },
  {
    icon: TreePine,
    title: "Sustainable Planning",
    description: "Creating well-planned communities that harmonize with the natural environment and promote sustainable living."
  },
  {
    icon: Users,
    title: "Community Design",
    description: "Designing spaces that foster community connections and enhance quality of life for residents."
  },
  {
    icon: Building2,
    title: "Infrastructure Development",
    description: "Implementing modern infrastructure and amenities that add long-term value to your investment."
  }
];

const stats = [
  { value: "1000+", label: "Acres Developed" },
  { value: "15+", label: "Communities Built" },
  { value: "5000+", label: "Happy Residents" },
  { value: "12", label: "Cities Present" }
];

const Index = () => {
  return (
    <Layout>
      <section className="py-12 md:py-24 min-h-[85vh] flex flex-col justify-center relative">
        <Scene3D />
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif max-w-4xl leading-tight mb-8 md:mb-12">
            Building Tomorrow's Communities Today
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-8 md:mb-12 text-muted-foreground">
            Capitol Groups creates well-planned, high-value plotted communities where people can invest with confidence and build their future.
          </p>
          
          <div className="mt-8 md:mt-12">
            <Link 
              to="/work" 
              className="inline-flex items-center text-lg group px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Explore Our Projects
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
            <h2 className="text-3xl md:text-4xl font-serif mb-6">About Capitol Groups</h2>
            <p className="text-lg text-muted-foreground">
              Founded with a vision to transform land development, Capitol Groups has established itself as a 
              trusted leader in creating premium plotted developments. Our commitment to quality, transparency, 
              and long-term value creation has made us the preferred choice for investors and homeowners alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">Our Approach</h3>
              <p className="mb-4">
                At Capitol Groups, we believe in thoughtful development that creates lasting value. Each project 
                begins with careful location selection, followed by meticulous planning that considers both 
                current needs and future growth.
              </p>
              <p className="mb-4">
                Our developments feature world-class infrastructure, sustainable design principles, and 
                amenities that enhance community living, ensuring that your investment grows in value over time.
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
              Capitol Groups is committed to leading the industry in environmental stewardship. 
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
