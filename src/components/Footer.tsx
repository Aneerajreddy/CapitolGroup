
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Alireza</h3>
            <p className="text-muted-foreground">Creative designer & developer<br />based in New York</p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="link-hover text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/work" className="link-hover text-muted-foreground hover:text-foreground transition-colors">Work</Link></li>
              <li><Link to="/about" className="link-hover text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/contact" className="link-hover text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-hover text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link-hover text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-hover text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link-hover text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>&copy; {currentYear} Alireza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
