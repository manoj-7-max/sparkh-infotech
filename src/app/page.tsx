import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-dark-navy text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
