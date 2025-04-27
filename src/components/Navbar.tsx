
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
            CAPITOL GROUP
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link to="/" className="link-hover">Home</Link></li>
            <li><Link to="/intent" className="link-hover">Intent</Link></li>
            <li><Link to="/community" className="link-hover">Community</Link></li>
            <li><Link to="/about" className="link-hover">About Us</Link></li>
            <li><Link to="/media" className="link-hover">Media</Link></li>
            <li><Link to="/studio" className="link-hover">Studio</Link></li>
            <li><Link to="/subsidiaries" className="link-hover">Subsidiaries</Link></li>
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
            <Link to="/intent" onClick={toggleMenu} className="link-hover">Intent</Link>
            <Link to="/community" onClick={toggleMenu} className="link-hover">Community</Link>
            <Link to="/about" onClick={toggleMenu} className="link-hover">About Us</Link>
            <Link to="/media" onClick={toggleMenu} className="link-hover">Media</Link>
            <Link to="/studio" onClick={toggleMenu} className="link-hover">Studio</Link>
            <Link to="/subsidiaries" onClick={toggleMenu} className="link-hover">Subsidiaries</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
