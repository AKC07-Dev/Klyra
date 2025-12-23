import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import sizeGuideImage from '@/assets/sizechart.jpeg';

const SizeChartSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 1], ['20%', '0%']);

  return (
    <section
      ref={sectionRef}
      id="sizes"
      className="relative bg-background border-t border-foreground/5 py-24 lg:py-32 overflow-hidden"
    >
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-6 lg:px-12"
      >
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-2 items-center">
          {/* Description */}
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-luxury text-accent">
              Size & Fit
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Find your
              <br />
              perfect length
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-xl">
              Every Klyra piece is designed to sit just right — softly following
              your natural lines without feeling tight or heavy. Use this simple
              guide to choose the length that frames your
              ankle with quiet confidence.
            </p>

            <div className="grid grid-cols-2 gap-8 text-sm md:text-base">
              

              
            </div>

            <p className="text-xs md:text-sm text-muted-foreground max-w-md">
              For a custom fit, measure with a soft tape and add 1–2cm for gentle
              movement. Each piece includes a subtle extension chain so you can
              adjust it to your preferred drape.
            </p>
          </div>

          {/* Liquid image frame */}
          <div className="relative">
            <div className="liquid-frame max-w-md ml-auto">
              <div className="liquid-frame-inner">
                <img
                  src={sizeGuideImage}
                  alt="Kylra size guide visual with layered necklaces and bracelets"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SizeChartSection;






