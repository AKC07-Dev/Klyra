import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

// Importing assets (keeping your existing imports)
import Bracelettt from '@/assets/hero-jewelry.jpeg';

import necklace from '@/assets/necklace2.jpeg';
import anklet from '@/assets/anklet.jpeg';
import anklet2 from '@/assets/anklet2.jpeg';
import anklet3 from '@/assets/anklet3.jpeg';
import anklet4 from '@/assets/anklet4.jpeg';
import anklet5 from '@/assets/anklet5.jpeg';
import anklet6 from '@/assets/anklet6.jpeg';
import anklet7 from '@/assets/anklet7.jpeg';
import anklet8 from '@/assets/anklet8.jpeg';
import anklet9 from '@/assets/anklet9.jpeg';
import Bracelet from '@/assets/hero-jewelry.jpeg';
import Bracelet1 from '@/assets/bracelet1.jpeg';
import Bracelet2 from '@/assets/bracelet2.jpeg';
import Bracelet3 from '@/assets/bracelet3.jpeg';
import Bracelet4 from '@/assets/bracelet4.jpeg';
import Bracelet5 from '@/assets/bracelet5.jpeg';
import Bracelet6 from '@/assets/bracelet6.jpeg';
import Bracelet7 from '@/assets/bracelet7.jpeg';
import Bracelet8 from '@/assets/bracelet8.jpeg';
import Bracelet9 from '@/assets/bracelet9.jpeg';
import Bracelet10 from '@/assets/bracelet10.jpeg';
import Bracelet11 from '@/assets/bracelet11.jpeg';
import Bracelet12 from '@/assets/bracelet12.jpeg';
import necklace3 from '@/assets/necklace3.jpeg';
import necklace4 from '@/assets/necklace4.jpeg';
import necklace5 from '@/assets/necklace5.jpeg';
import necklace6 from '@/assets/necklace6.jpeg';
import necklace7 from '@/assets/necklace7.jpeg';
import necklace8 from '@/assets/necklace8.jpeg';



type Category = 'all' | 'anklets' | 'necklaces' | 'bracelets';

const products = [
   {
    id: 1,
    image: Bracelet,
    hoverImage: Bracelet,
    name: 'Elegant Pearl Bracelet',
    price: '60/-',
    description: 'Handcrafted Elegance',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 2,
    image: Bracelet1,
    name: 'Loveable Pearl Bracelet',
    price: '60/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 3,
    image: Bracelet7,
    name: 'Soft Love Bracelet',
    price: '60/-',
    description: 'Crafted with Love',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 4,
    image: necklace,
    name: 'Classic Daisy Necklace',
    price: '100/-',
    description: 'The new aesthetics',
    size: 'wide' as const,
    category: 'necklaces',
  },
  {
    id: 5,
    image: Bracelet2,
    hoverImage: Bracelet2,
    name: 'Daisy Bloom Bracelet',
    price: '60/-',
    description: 'Our new collection',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 6,
    image: Bracelet8,
    name: 'Black Daisy Bracelet',
    price: '60/-',
    description: 'Timeless Beauty',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 7,
    image: anklet,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },
  {
    id: 8,
    image: Bracelet9,
    name: 'Mini Daisy Bracelet',
    price: '60/-',
    description: 'Our new collection',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 9,
    image: Bracelet4,
    name: 'Golden Sunflower Bracelet',
    price: '60/-',
    description: 'Crafted with Love',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 10,
    image: Bracelet3,
    name: 'Daisy Bloom Bracelet',
    price: '60/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 11,
    image: Bracelet5,
    name: 'White Daisy Bracelet',
    price: '60/-',
    description: 'Timeless Beauty',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 12,
    image: Bracelet6,
    name: 'Sunflower Petal Bracelet',
    price: '60/-',
    description: 'Handcrafted Elegance',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 13,
    image: Bracelet10,
    name: 'Pink Daisy Bracelet',
    price: '60/-',
    description: 'Timeless Beauty',
    size: 'default' as const,
    category: 'bracelets',
  },
  {
    id: 14,
    image: anklet2,
    name: 'aesthetic anklet',
    price: '80/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'anklets',
  },
  {
    id: 15,
    image: necklace3,
    name: 'Pink Daisy Necklace',
    price: '100/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'necklaces',
  },
  {
    id: 16,
    image: necklace4,
    name: 'Cutest Daisy Necklace',
    price: '100/-',
    description: 'The new aesthetics',
    size: 'wide' as const,
    category: 'necklaces',
  },
  {
    id: 17,
    image: necklace5,
    name: 'Pearl Daisy Necklace',
    price: '100/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'necklaces',
  },
  {
    id: 18,
    image: anklet3,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },
  {
    id: 19,
    image: anklet4,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },
  {
    id: 20,
    image: anklet5,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },
  {
    id: 21,
    image: anklet6,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },
  {
    id: 22,
    image: anklet7,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },
  {
    id: 23,
    image: anklet8,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },


   
   {
    id: 24,
    image: anklet9,
    name: 'Beaded Anklet',
    price: '80/-',
    description: 'Summer Vibes',
    size: 'default' as const,
    category: 'anklets',
  },
   {
    id: 25,
    image: necklace6,
    name: 'Pearl Daisy Necklace',
    price: '100/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'necklaces',
  },
   {
    id: 26,
    image: necklace7,
    name: 'Pink Daisy Necklace',
    price: '100/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'necklaces',
  },
   {
    id: 27,
    image: necklace8,
    name: 'Pearl Daisy Necklace',
    price: '100/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'necklaces',
  },
    {
    id: 28,
    image: Bracelet11,
    name: 'Daisy Bloom Bracelet',
    price: '60/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'bracelets',
  },
   {
    id: 29,
    image: Bracelet12,
    name: 'Daisy Bloom Bracelet',
    price: '60/-',
    description: 'The new aesthetics',
    size: 'default' as const,
    category: 'bracelets',
  },



];

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const categories: Category[] = ['all', 'anklets', 'necklaces', 'bracelets'];

  const handleScrollToCollections = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('collections');
    
    if (targetElement) {
      const headerOffset = 80; // Account for fixed header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-luxury text-accent mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
            Curated Jewelry
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative text-sm uppercase tracking-widest transition-colors duration-300 ${
                  activeCategory === cat ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid with Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                hoverImage={product.hoverImage}
                name={product.name}
                price={product.price}
                description={product.description}
                size={product.size}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a href="https://www.instagram.com/klyrajewels/?igsh=bHQyd2I2cnB6enI4#" className="btn-ghost-luxury" >
            <span>For more details click here</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
