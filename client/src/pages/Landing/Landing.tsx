import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CTA from './components/CTA';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

export default function Landing() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
