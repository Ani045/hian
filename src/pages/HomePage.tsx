import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Products from '../components/Products';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import HowWeWork from '../components/HowWeWork';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Clients />
      {/* <Products /> */}
      {/* <Footer /> */}
      {/* <WhyChooseUs />
      <HowWeWork />
      <CTA /> */}
    </div>
  );
}
