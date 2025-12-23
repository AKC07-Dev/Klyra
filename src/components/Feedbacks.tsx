import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const feedbacks = [
  {
    name: 'Sakshi G.',
    location: 'Bhokardan, IN',
    text: 'Thankyou Klyra. All the pieces are beyond beautiful and elegant, good for the quality.',
  },
  {
    name: 'Poorva',
    location: 'Maharashtra, IN',
    text: 'Klyra has become one of my favourite jewellery brands. Their small beaded pieces are so elegant, lightweight & comfortable for daily use. The colours & detailing are beautiful, & the quality is much better than I expected at this price. Would definitely buy again!',
  },
  {
    name: 'Samrudhi K.',
    location: 'Sillod, IN',
    text: 'Sophisticated, charming, and thoughtfully designed—Klyra jewellery effortlessly adds elegance to any look.',
  },
  {
    name: 'Yash',
    location: 'Jaipur, IN',
    text: 'I bought this Klyra bracelet for my sister, and she absolutely loved it. The design is elegant, the quality feels premium, and it’s perfect for everyday wear as well as special occasions. Great value for money and a lovely gifting option.',
  },
  {
    name: 'Sakshi',
    location: 'Maharashtra',
    text: 'The anklet I ordered feels like it was made just for me. Delicate, feminine and so comfortable to wear every day.',
  },
  {
    name: 'Shweta',
    location: 'Pune, IN',
    text: 'Klyra pieces have a quiet luxury to them. Understated, but everyone asks where my bracelet is from.',
  },
  {
    name: 'Manasi',
    location: 'Maharashtra',
    text: 'I love how lightweight the necklaces are while still feeling premium. They layer beautifully with everything.',
  },
  {
    name: 'Latika',
    location: 'Malegaon, IN',
    text: 'From unboxing to wearing, the experience feels truly special. This is my new go-to gift for my friends.',
  },
  {
    name: 'Vaishnavi',
    location: 'Maharashtra',
    text: 'The craftsmanship is impeccable. Every tiny detail feels considered and intentional.',
  },
  {
    name: 'Shrawni',
    location: 'Maharashtra',
    text: 'The bracelet hasn’t left my wrist since it arrived. It makes even simple outfits feel elevated.',
  },
];

const duplicatedRows = [...feedbacks, ...feedbacks, ...feedbacks];

const Feedbacks = () => {
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
      className="relative py-24 lg:py-32 bg-background border-t border-foreground/5 overflow-hidden"
    >
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-6 lg:px-12"
      >
        {/* Section heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <p className="text-sm uppercase tracking-luxury text-accent">
            Voices of Klyra
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Loved in Every Detail
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-light max-w-2xl mx-auto">
            Stories from those who wear Klyra every day. 
            Gentle reflections of how small details can transform 
            the way you feel in your own skin.
          </p>
        </div>

        {/* Floating, auto-scrolling feedbacks */}
        <div className="relative">
          {/* Gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/60 to-transparent" />

          <div className="space-y-8">
            {/* Row 1 */}
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedRows.map((feedback, index) => (
                <motion.article
                  key={`row1-${index}-${feedback.name}`}
                  className="min-w-[260px] md:min-w-[320px] lg:min-w-[360px] text-foreground px-6 py-6 md:px-8 md:py-8 rounded-3xl border border-gold/20 shadow-[0_18px_45px_rgba(180,137,68,0.45)] backdrop-blur-sm"
                  style={{ backgroundColor: '#EFE8D8' }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm md:text-base leading-relaxed mb-5 md:mb-6 font-light text-foreground/90">
                    “{feedback.text}”
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm uppercase tracking-luxury text-foreground/80">
                    <span>{feedback.name}</span>
                    <span className="text-foreground/60">{feedback.location}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Row 2 (opposite direction for a floating feel) */}
            <motion.div
              className="flex gap-6 md:gap-8"
              animate={{ x: ['-50%', '0%'] }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedRows.map((feedback, index) => (
                <motion.article
                  key={`row2-${index}-${feedback.name}`}
                  className="min-w-[260px] md:min-w-[320px] lg:min-w-[360px] text-foreground px-6 py-6 md:px-8 md:py-8 rounded-3xl border border-gold/25 shadow-[0_18px_45px_rgba(180,137,68,0.35)] backdrop-blur-sm"
                  style={{ backgroundColor: '#F8F4EC' }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm md:text-base leading-relaxed mb-5 md:mb-6 font-light text-foreground/90">
                    “{feedback.text}”
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm uppercase tracking-luxury text-foreground/80">
                    <span>{feedback.name}</span>
                    <span className="text-foreground/60">{feedback.location}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Feedbacks;


