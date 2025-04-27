
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, category, imageUrl, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/work/${slug}`}
      className="group block relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "aspect-[4/3] w-full overflow-hidden",
          "transition-all duration-700 ease-in-out"
        )}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className={cn(
            "w-full h-full object-cover",
            "transition-all duration-700 ease-in-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-serif">{title}</h3>
        <p className="text-muted-foreground">{category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
