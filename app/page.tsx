'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';
import { allProjects } from '../lib/ProjectData';

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export default function Portfolio() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    // Paper background with a subtle grid/lined pattern
    <div className={`min-h-screen bg-[#fdfbf7] text-slate-900 transition-opacity duration-1000 ${pageLoaded ? 'opacity-100' : 'opacity-0'} relative`}
         style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 2rem' }}>
      
      {/* Navigation - Sketched Style */}
      <nav className="w-full border-b-2 border-slate-900 bg-[#fdfbf7] z-50 p-4 sticky top-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase transform -rotate-1">
            Jackson.Mugwe 
          </div>
          <div className="hidden md:flex space-x-6 font-bold">
            <a href="#hero" className="hover:underline decoration-wavy decoration-2 underline-offset-4"> Home</a>
            <a href="#projects" className="hover:underline decoration-wavy decoration-2 underline-offset-4">Work</a>
            <a href="#contact" className="hover:underline decoration-wavy decoration-2 underline-offset-4">Ping Me</a>
          </div>
        </div>
      </nav>

     {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Text */}
          <div className="flex-1 flex flex-col items-start">
            <div className="inline-flex items-center px-4 py-2 mb-6 border-2 border-slate-900 bg-yellow-200 transform -rotate-2 shadow-[4px_4px_0px_0px_#0f172a]">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="font-bold text-sm uppercase tracking-wide">Building in Public</span>
            </div>

            <RoughNotationGroup show={pageLoaded}>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase">
                <RoughNotation type="highlight" color="#fef08a" animationDuration={1200} padding={[0, 10]}>
                   Engineer
                </RoughNotation>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mt-2 block">
                  <RoughNotation type="underline" color="#0f172a" strokeWidth={3} animationDuration={1000}>
                    & Full stack software developer
                  </RoughNotation>
                </span>
              </h1>

              <p className="text-2xl md:text-3xl mb-10 font-medium leading-relaxed border-l-4 border-slate-900 pl-6">
               Architecting scalable web and mobile systems, robust data pipelines, and automated QA systems.
                <br/><br/>
                <RoughNotation type="box" color="#ef4444" strokeWidth={2} animationDuration={1500} padding={[5, 5]}>
                  Documenting the journey, the failures, and the breakthroughs
                </RoughNotation> {' '}of building high-performance tech—with specialized experience in IoT and Medical Software (SaMD).
              </p>
            </RoughNotationGroup>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-slate-900 text-white font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all flex items-center">
                View my Featured work <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="https://github.com/jack-khalif" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-slate-900 font-bold border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all transform rotate-1">
                Review my Github
              </a>
            </div>
          </div>

          {/* Right Side: The Sketched Graphic */}
          <div className="flex-1 w-full flex justify-center md:justify-end relative hidden md:flex">
             {/* Decorative background blob */}
             <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
             
             {/* Hand-drawn SVG representing Bio-Signal to Data */}
             <svg viewBox="0 0 400 400" className="w-full max-w-md transform rotate-2 drop-shadow-2xl z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* The Paper Box */}
                <rect x="20" y="20" width="360" height="360" fill="white" stroke="#0f172a" strokeWidth="8" />
                <rect x="30" y="30" width="360" height="360" fill="transparent" stroke="#0f172a" strokeWidth="4" className="opacity-20" />
                
                {/* The ECG / Signal Line */}
                <path d="M 40 200 L 120 200 L 150 100 L 200 320 L 240 160 L 270 200 L 360 200" stroke="#ef4444" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round" />
                
                {/* The AI / Node Connections */}
                <circle cx="270" cy="200" r="15" fill="#fef08a" stroke="#0f172a" strokeWidth="6" />
                <path d="M 270 215 L 270 280 L 320 280" stroke="#0f172a" strokeWidth="8" strokeLinejoin="round" />
                <circle cx="320" cy="280" r="10" fill="#3b82f6" stroke="#0f172a" strokeWidth="4" />
                <circle cx="270" cy="280" r="10" fill="#3b82f6" stroke="#0f172a" strokeWidth="4" />
                
                <circle cx="120" cy="200" r="15" fill="#fef08a" stroke="#0f172a" strokeWidth="6" />
                <path d="M 120 185 L 120 120 L 70 120" stroke="#0f172a" strokeWidth="8" strokeLinejoin="round" />
                <circle cx="70" cy="120" r="10" fill="#10b981" stroke="#0f172a" strokeWidth="4" />
                
                {/* Little decorative sketched stars/crosshairs */}
                <path d="M 50 60 L 70 60 M 60 50 L 60 70" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
                <path d="M 330 80 L 350 80 M 340 70 L 340 90" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
                <path d="M 80 340 L 100 340 M 90 330 L 90 350" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
             </svg>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t-2 border-slate-900 border-dashed">
        <h2 className="text-4xl font-black mb-12 uppercase inline-block border-b-4 border-slate-900 pb-2">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allProjects.map((project) => (
            <Card key={project.id} className="bg-white border-2 border-slate-900 rounded-none shadow-[6px_6px_0px_0px_#0f172a] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#0f172a] transition-all duration-300">
              <div className="p-6 border-b-2 border-slate-900 bg-slate-50 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <project.icon className="w-8 h-8 text-slate-900" />
                    <h3 className="text-2xl font-black uppercase tracking-tight">{project.title}</h3>
                 </div>
              </div>
              <div className="w-full h-56 md:h-64 border-b-2 border-slate-900 overflow-hidden bg-slate-200 relative">
                {/* Vintage Lab Photo Effect: Grayscale by default, full color on hover */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-lg font-medium mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} className="bg-blue-100 text-blue-900 border-2 border-slate-900 rounded-none font-bold uppercase text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center font-bold hover:underline decoration-2">
                      <Github className="w-5 h-5 mr-1" /> Source Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
     

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center border-t-2 border-slate-900 border-dashed">
        <h2 className="text-4xl font-black mb-6 uppercase transform -rotate-1">Let's Pioneer Together</h2>
        <p className="text-xl font-medium mb-10">
          Interested in Scalable impactful systems, high-frequency data pipelines, or just want to talk about scaling your medtech projects? Drop a line.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:mugwewaithaka2@gmail.com" className="p-4 bg-yellow-200 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all">
            <Mail className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/mugwe-waithaka" className="p-4 bg-blue-200 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#0f172a] transition-all transform rotate-2">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </section>
    </div>
  );
}