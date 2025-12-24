import { motion } from 'framer-motion';

const Footer = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal links (starting with #)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerOffset = 80; // Account for fixed header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // External links (like Instagram) will work normally
  };

  const footerLinks = {
    Explore: [
      { name: 'Anklets', href: '#collections' },
      { name: 'Necklaces', href: '#collections' },
      { name: 'Bracelets', href: '#collections' },
      { name: 'All Collections', href: '#collections' },
    ],
    about: [
      { name: 'Our Story', href: '#story' },
      { name: 'Craftsmanship', href: '#story' },
      
    ],
    support: [
      { name: 'Contact', href: 'https://www.instagram.com/klyrajewels/?igsh=bHQyd2I2cnB6enI4#' },
     
    ],
  };

  return (
    <footer className="bg-linen-dark py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <a href="/" className="font-serif text-2xl tracking-editorial block mb-6">
              KLYRA
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Handcrafted luxury anklets, necklaces, and bracelets made with 
              ethically sourced materials. Each piece tells a story of artistry and elegance.
              <br></br>
              For more details reach us at Instagram 
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/klyrajewels/?igsh=bHQyd2I2cnB6enI4#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-luxury"
                aria-label="Instagram"
              >
                Instagram
              </a>
              
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-sm uppercase tracking-luxury mb-6">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      onClick={(e) => handleScrollToSection(e, link.href)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-12 mb-12"
        >
          <div className="max-w-md">
            <h3 className="font-serif text-2xl mb-4">Join Our World</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Be the first to discover new collections and exclusive pieces.
            </p>
            <form className="flex gap-4">
             
              <button
                type="submit"
                className="text-sm  tracking-luxury hover:text-accent transition-colors"
              >
                Klyra793@gmail.com
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs uppercase tracking-luxury">
            © 2025 Klyra. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs uppercase tracking-luxury"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs uppercase tracking-luxury"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
