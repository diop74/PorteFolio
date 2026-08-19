import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import WhyBoth from "@/components/portfolio/WhyBoth";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    window.__lenis = lenis;
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="App relative">
      <div className="pointer-events-none fixed inset-0 z-0 matrix-grid" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0 scanlines opacity-40" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,217,255,0.05), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(0,255,157,0.04), transparent 60%)" }} />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <WhyBoth />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
