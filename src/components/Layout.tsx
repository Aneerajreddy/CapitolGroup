
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import BackgroundScene from './3d/BackgroundScene';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundScene />
      <Navbar />
      <main className="flex-grow pt-32">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
