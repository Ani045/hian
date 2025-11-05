import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Products from '../components/Products';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import HowWeWork from '../components/HowWeWork';
import CTA from '../components/CTA';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <Services onNavigate={onNavigate} />
      <Clients />
      {/* <Products /> */}
      {/* <Footer /> */}
      {/* <WhyChooseUs />
      <HowWeWork />
      <CTA /> */}
    </div>
  );
}
