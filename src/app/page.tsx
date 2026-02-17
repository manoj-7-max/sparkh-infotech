import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import LocalAuthority from '@/components/LocalAuthority';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import LeadCapture from '@/components/LeadCapture';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <LocalAuthority />
      <Services />
      <Pricing />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <LeadCapture />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
