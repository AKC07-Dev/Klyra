import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  hoverImage?: string;
  name: string;
  price: string;
  description: string;
  size?: 'default' | 'large' | 'wide';
}

const ProductCard = ({
  image,
  hoverImage,
  name,
  price,
  description,
  size = 'default',
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    default: 'aspect-[3/4]',
    large: 'aspect-[3/4] md:row-span-2',
    wide: 'aspect-[4/3] md:col-span-2',
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden bg-secondary/30 ${sizeClasses[size]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-700 ease-luxury ${
            isHovered && hoverImage ? 'opacity-0' : 'opacity-100'
          } ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${name} - Lifestyle`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Product Info */}
      <div className="absolute bottom-6 left-6 right-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <p className="text-background/80 text-xs uppercase tracking-luxury mb-1">
            {description}
          </p>
          <h3 className="font-serif text-background text-xl md:text-2xl mb-1">{name}</h3>
          <p className="text-background/90 text-sm">{price}</p>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProductCard;