// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.5 });
  const [projectsRef, projectsInView] = useIntersectionObserver({ threshold: 0.4 });
  const [skillsRef, skillsInView] = useIntersectionObserver({ threshold: 0.4 });
  const [contactRef, contactInView] = useIntersectionObserver({ threshold: 0.4 });

  useEffect(() => {
    setPageLoaded(true);
    setIsVisible(true);
  }, []);

  // Track active section
  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    else if (projectsInView) setActiveSection("projects");
    else if (skillsInView) setActiveSection("skills");
    else if (contactInView) setActiveSection("contact");
  }, [heroInView, projectsInView, skillsInView, contactInView]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsTransitioning(true);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 transition-all duration-1000 ${
        pageLoaded ? "opacity-100" : "opacity-0"
      } ${isTransitioning ? "transitioning" : ""}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-xl font-bold text-slate-900">Jack Khalif</h1>
          <div className="flex gap-4">
            {[
              { id: "hero", label: "Home" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  activeSection === item.id
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-16"> {/* padding to offset fixed navbar */}
        <section id="hero" ref={heroRef as any}>
          <Hero isVisible={heroInView && isVisible} />
        </section>
        <section id="projects" ref={projectsRef as any}>
          <Projects isInView={projectsInView} />
        </section>
        <section id="skills" ref={skillsRef as any}>
          <Skills isInView={skillsInView} />
        </section>
        <section id="contact" ref={contactRef as any}>
          <Contact isInView={contactInView} />
        </section>
      </div>
    </div>
  );
}
