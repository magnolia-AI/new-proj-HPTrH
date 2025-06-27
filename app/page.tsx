'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

// Temporary type definition for FEATURED_PRODUCTS
interface Product {
  name: string;
  description: string;
  imageUrl: string;
}

const FEATURED_PRODUCTS = [
  {
    name: "Classic Espresso Martini",
    description: "Our signature blend with premium vodka and freshly brewed espresso",
    imageUrl: "https://storage.googleapis.com/magnolia-storage-dev-test-123/images/rhLhDnCjOb/image.jpg"
  },
  {
    name: "Vanilla Bean Espresso Martini",
    description: "Smooth vanilla infusion with rich espresso notes",
    imageUrl: "https://storage.googleapis.com/magnolia-storage-dev-test-123/images/IHEpUFzgEi/image.jpg"
  },
  {
    name: "Caramel Espresso Martini",
    description: "Decadent caramel swirl in our classic espresso base",
    imageUrl: "https://storage.googleapis.com/magnolia-storage-dev-test-123/images/SEJjOxz8dm/image.jpg"
  }
];

export default function Home() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/80 to-background z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-in">
            Crafted Espresso Martini
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-muted-foreground animate-in" style={{ animationDelay: '0.1s' }}>
            Premium espresso, premium vodka, perfected over time
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => toast({ title: "Order Placed!", description: "Your espresso martini is on its way" })}
            >
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg"
              onClick={() => toast({ title: "Learn More", description: "Discover our craft process" })}
            >
              Our Process
            </Button>
          </div>
        </div>
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/magnolia-storage-dev-test-123/videos/2fpfxEwQCc/video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Featured Products */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center animate-in" style={{ animationDelay: '0.3s' }}>
          Signature Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <Card key={product.name} className="bg-card/80 backdrop-blur-sm border-border overflow-hidden animate-in" 
                 style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
              <div className="h-48 relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Brand Story */}
      <section className="py-20 px-4 bg-gradient-to-br from-card to-background">
        <div className="max-w-4xl mx-auto text-center animate-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafted with Precision</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Each espresso martini is meticulously crafted using only the finest ingredients. 
            Our premium vodka is distilled five times for exceptional smoothness, 
            combined with freshly roasted espresso beans and a hint of vanilla.
          </p>
          <Button variant="outline">Discover Our Process</Button>
        </div>
      </section>
    </div>
  );
}





