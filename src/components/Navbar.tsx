
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-4 bg-background/90 backdrop-blur-md" : "py-8"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="text-xl md:text-2xl font-serif">
            Alireza
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="link-hover">Home</Link></li>
            <li><Link to="/work" className="link-hover">Work</Link></li>
            <li><Link to="/about" className="link-hover">About</Link></li>
            <li><Link to="/contact" className="link-hover">Contact</Link></li>
          </ul>
        </nav>

        <button 
          onClick={toggleMenu} 
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <Link to="/" onClick={toggleMenu} className="link-hover">Home</Link>
            <Link to="/work" onClick={toggleMenu} className="link-hover">Work</Link>
            <Link to="/about" onClick={toggleMenu} className="link-hover">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="link-hover">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
