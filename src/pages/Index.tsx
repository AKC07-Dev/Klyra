import { useLenis } from '@/hooks/useLenis';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import SizeChartSection from '@/components/SizeChartSection';
import Feedbacks from '@/components/Feedbacks';
import Footer from '@/components/Footer';

const Index = () => {
  useLenis();

  return (
    <main className="cursor-none md:cursor-none">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <CraftsmanshipSection />
      <SizeChartSection />
      <Feedbacks />
      <Footer />
    </main>
  );
};

export default Index;
