
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="container-custom py-24 min-h-[60vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl md:text-8xl font-serif mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center text-lg px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
