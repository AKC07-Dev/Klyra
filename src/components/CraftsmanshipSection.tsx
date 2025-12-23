import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import craftsmanshipImage from '@/assets/hero-jewelry.jpeg';

const CraftsmanshipSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative min-h-screen flex items-center overflow-hidden bg-foreground"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0"
      >
        <img
          src={craftsmanshipImage}
          alt="Kylra artisan crafting anklets, necklaces and bracelets"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            style={{ y: textY, opacity }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm uppercase tracking-luxury text-gold"
            >
              Our Craft
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight"
            >
              Crafted with Passion
              <br />
              Worn with Pride
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-background/70 text-lg md:text-xl font-light leading-relaxed"
            >
              At Klyra, each anklet, necklace, and bracelet is hand-crafted 
              with pure love, shaped by hands who love to 
              create something beautiful. 
              We believe in slow luxury — where every curve, every link, 
              every finish tells a story of patience and precision. 
              Every piece is designed to become a part of your story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
              >
                <span className="text-sm uppercase tracking-luxury">
                  Discover Our Process
                </span>
                <span className="w-8 h-px bg-gold group-hover:w-12 transition-all duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-16 border-t border-background/10"
          >
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold mb-2">25+</p>
                <p className="text-background/60 text-sm uppercase tracking-luxury">
                  Collections
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold mb-2">100%</p>
                <p className="text-background/60 text-sm uppercase tracking-luxury">
                  Handcrafted
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold mb-2">∞</p>
                <p className="text-background/60 text-sm uppercase tracking-luxury">
                  Stories to Tell
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
