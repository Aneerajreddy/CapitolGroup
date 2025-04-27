
import React from 'react';
import Layout from '@/components/Layout';
import { MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Media = () => {
  const news = [
    {
      date: "April 15, 2025",
      title: "Capitol Group Announces Carbon-Neutral Initiative",
      description: "Leading the industry with commitment to sustainable architecture.",
      category: "Press Release"
    },
    {
      date: "March 28, 2025",
      title: "Innovative Design Wins Global Recognition",
      description: "Our eco-friendly tower project receives international acclaim.",
      category: "Awards"
    },
    {
      date: "March 10, 2025",
      title: "New Community Development Project Launched",
      description: "Transforming urban spaces with sustainable design solutions.",
      category: "Project Update"
    }
  ];

  const resources = [
    {
      title: "Sustainability Report 2025",
      type: "PDF",
      size: "2.4 MB"
    },
    {
      title: "Design Philosophy White Paper",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Community Impact Study",
      type: "PDF",
      size: "3.1 MB"
    }
  ];

  return (
    <Layout>
      <section className="py-12 md:py-24">
        <div className="container-custom max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <MessageSquare className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-serif">Media</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif mb-6">Latest News</h2>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                        <span className="text-xs bg-secondary px-2 py-1 rounded">{item.category}</span>
                      </div>
                      <h3 className="text-lg font-serif">{item.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-6">Resources</h2>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium mb-1">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.type} • {resource.size}</p>
                      </div>
                      <button className="text-sm hover:underline">Download</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
