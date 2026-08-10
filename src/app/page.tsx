import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Studies } from '@/components/sections/Timeline';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { ParticlesBackground } from '@/components/ui/ParticlesBackground';
import { Loader, BackToTop } from '@/components/ui/Chrome';

export default function HomePage() {
  return (
    <>
      <Loader />
      <ParticlesBackground />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Studies />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
