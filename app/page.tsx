'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Brain,
  Heart,
  Activity,
  Stethoscope,
  ArrowRight,
  Award,
  TrendingUp,
  Shield,
  Droplets,
  Dna,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// Project data
const allProjects = [
  {
    id: 1,
    title: 'Wireless Blackbox for PSV Monitoring',
    description:
      'An award-winning IoT system engineered for real-time monitoring of public service vehicles (PSVs) in Kenya. This blackbox captures critical driving data—acceleration, tilt, vibration, temperature—and transmits it to the cloud (ThingSpeak) for analysis. It features an emergency SMS alert system to improve road safety and accountability',
    image: '/matatu.jpg',
    icon: Activity,
    tags: [
      'ESP32',
      'IoT',
      'GPS',
      'GSM',
      'KiCad',
      'ThingSpeak',
      'C++',
      'PCB Design',
    ],
    status: 'Production',
    domain: 'IoT & Transportation',
    type: 'featured',
    githubUrl: 'https://github.com/Jack-khalif/WirelessBlackBox',
    metrics: [
      { label: 'Awards Won', value: '2' },
      { label: 'Sensors', value: '6+' },
      { label: 'Real-time', value: '24/7' },
    ],
    impact:
      'Enhances public transport safety through real-time monitoring and emergency alerts',
    achievements: [
      'Winner of IEEE Entrepreneurship Summit 2025',
      '1st Runner-up in IEEE CAS Student Design Competition',
      'Real-time cloud data integration with ThingSpeak',
      'SMS alert system for emergency situations',
    ],
  },
  {
    id: 2,
    title: 'Akili Dada - Brain Health ML Model',
    description:
      'A machine learning pipeline designed to classify ADHD and predict biological sex using clinical datasets. Built for the WiDS 2025 Datathon, it utilizes XGBoost and SHAP for accurate and explainable results in mental health diagnostics',
    image: '/AKILIml.png',
    icon: Brain,
    tags: ['Machine Learning', 'Python', 'XGBoost', 'SHAP', 'Data Science'],
    status: 'Research',
    domain: 'Healthcare AI',
    type: 'featured',
    githubUrl: 'https://github.com/Jack-khalif/Akili-DADA',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Features', value: '50+' },
      { label: 'Datathon', value: 'WiDS 2025' },
    ],
    impact:
      'Advancing ADHD diagnosis through explainable AI and clinical feature analysis',
    achievements: [
      'Developed for Women in Data Science (WiDS) 2025 Datathon',
      'SHAP-based model explainability implementation',
      'Advanced class imbalance handling techniques',
      'Clinical feature importance analysis',
    ],
  },
  {
    id: 3,
    title: 'Water Quality Analysis Tool',
    description:
      'Reverse Osmosis water quality monitoring system with AI integration.',
    image: '/davisRO.png',
    icon: Droplets,
    tags: ['Python', 'FASTAPI', 'Langchain', 'React', 'FAISS + BM25'],
    status: 'Production',
    domain: 'Environmental Tech',
    type: 'main',
    githubUrl: 'https://github.com/Jack-khalif/Water-RO-AITool',
    metrics: [
      { label: 'Parameters', value: '8+' },
      { label: 'Accuracy', value: '95%' },
      { label: 'Real-time', value: 'Yes' },
    ],
    impact:
      'Ensures water quality compliance through automated monitoring and analysis',
  },
  {
    id: 4,
    title: 'MERN Stack E-commerce Platform',
    description:
      'Full-featured e-commerce platform built with MongoDB, Express, React, and Node.js.',
    image: '/mernhomepage.png',
    icon: Code,
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'E-commerce'],
    status: 'Production',
    domain: 'Web Development',
    type: 'main',
    githubUrl: 'https://github.com/Jack-khalif/MERN-stack-app',
    metrics: [
      { label: 'Stack', value: 'MERN' },
      { label: 'Features', value: 'Full' },
      { label: 'Auth', value: 'Secure' },
    ],
    impact: 'Complete e-commerce solution with modern web technologies',
  },
  {
    id: 5,
    title: 'F1 Qualifying Predictor',
    description:
      'Machine learning model that predicts Formula 1 qualifying results.',
    image: '/F1.jpg',
    icon: TrendingUp,
    tags: [
      'Machine Learning',
      'Python',
      'Pandas',
      'Scikit-learn',
      'Sports Analytics',
    ],
    status: 'Active',
    domain: 'Sports Analytics',
    type: 'main',
    githubUrl: 'https://github.com/Jack-khalif/Formula_1-qualies-predictor',
    metrics: [
      { label: 'Accuracy', value: '78%' },
      { label: 'Data Years', value: '20+' },
      { label: 'Races', value: '400+' },
    ],
    impact:
      'Predicts F1 qualifying results with high accuracy using historical data',
  },
  {
    id: 6,
    title: 'Clinical Decision Support AI',
    description:
      'AI-powered system that assists healthcare professionals in diagnosis and treatment planning.',
    image: '/akilidada.png',
    icon: Stethoscope,
    tags: ['AI', 'Healthcare', 'NLP', 'Python', 'TensorFlow'],
    status: 'Clinical Trial',
    domain: 'Healthcare AI',
    type: 'additional',
    githubUrl: '#',
  },
  {
    id: 7,
    title: 'Genomic Data Pipeline',
    description:
      'High-performance data processing pipeline for genomic data analysis.',
    image: '/cancer.jpg',
    icon: Dna,
    tags: ['Genomics', 'Big Data', 'Bioinformatics', 'Python', 'Cloud'],
    status: 'Planning',
    domain: 'Bioinformatics',
    type: 'additional',
    githubUrl: '#',
  },
];

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting] as const;
};

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextSection, setNextSection] = useState('');

  // Intersection observer refs for different sections
  const [heroRef, heroInView] = useIntersectionObserver();
  const [projectsRef, projectsInView] = useIntersectionObserver();
  const [skillsRef, skillsInView] = useIntersectionObserver();
  const [contactRef, contactInView] = useIntersectionObserver();

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setPageLoaded(true);
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    setIsTransitioning(true);
    setNextSection(sectionId);

    // Add transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    // Trigger overlay animation
    requestAnimationFrame(() => {
      overlay.classList.add('active');
    });

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      // Remove overlay after scroll
      setTimeout(() => {
        overlay.classList.remove('active');
        setTimeout(() => {
          document.body.removeChild(overlay);
          setIsTransitioning(false);
          setNextSection('');
        }, 500);
      }, 800);
    }, 300);
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 transition-all duration-1000 ${pageLoaded ? 'opacity-100' : 'opacity-0'} ${isTransitioning ? 'transitioning' : ''}`}
    >
      {/* Page Transition Indicator */}
      {isTransitioning && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-emerald-500 z-[60] transition-progress">
          <div className="h-full bg-white/30 animate-pulse"></div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200/50 z-50 transition-all duration-700 ${pageLoaded ? 'translate-y-0' : '-translate-y-full'} ${isTransitioning ? 'nav-transitioning' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className={`text-xl font-bold text-slate-900 tracking-tight transition-all duration-500 delay-300 ${pageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              Jackson Mugwe
            </div>
            <div className="hidden md:flex space-x-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  disabled={isTransitioning}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    activeSection === item.id
                      ? 'bg-slate-900 text-white nav-active'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  } ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${
                    isTransitioning ? 'pointer-events-none' : ''
                  } ${nextSection === item.id ? 'nav-target' : ''}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {item.label}
                  {nextSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-20 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className={`pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden section-transition ${
          activeSection === 'hero' ? 'section-active' : ''
        }`}
      >
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-1000"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center">
            <div
              className={`mb-6 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 animate-pulse-slow">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </span>
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              Jackson Mugwe
            </h1>

            <div
              className={`text-xl md:text-2xl text-slate-300 mb-4 font-light transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Software Engineer & Data Scientist
            </div>

            <div
              className={`text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Building the future of healthcare through innovative technology
              solutions
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-800 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-medium px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                onClick={() => scrollToSection('projects')}
                disabled={isTransitioning}
              >
                <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 font-medium px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => scrollToSection('contact')}
                disabled={isTransitioning}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: '15', label: 'Projects Delivered', icon: Code },
                { number: '1000+', label: 'Lives Impacted', icon: Heart },
                { number: '2', label: 'Startup Patents', icon: Award },
                { number: '92.9%', label: 'System Uptime', icon: Shield },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-800 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${1000 + index * 150}ms` }}
                  onClick={() => scrollToSection('projects')}
                >
                  <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-2 group-hover:scale-125 transition-all duration-300 group-hover:rotate-12" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 transition-all duration-300 group-hover:scale-110">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className={`py-24 bg-white section-transition ${activeSection === 'projects' ? 'section-active' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-6 transform scale-x-0 animate-scale-x"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Innovative technology solutions that transform industries and
              advance research
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {allProjects
              .filter((p) => p.type === 'featured')
              .map((project, index) => (
                <Card
                  key={project.id}
                  className={`overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          project.status === 'Production'
                            ? 'bg-emerald-500'
                            : project.status === 'Research'
                              ? 'bg-purple-500'
                              : 'bg-blue-500'
                        } text-white transition-all duration-300 group-hover:scale-110`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 transition-all duration-300 group-hover:scale-105"
                      >
                        {project.domain}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 transition-all duration-300 group-hover:text-blue-600">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {project.achievements && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {project.achievements
                            .slice(0, 3)
                            .map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start group/item"
                              >
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0 transition-all duration-300 group-hover/item:scale-150"></div>
                                <span className="text-slate-600 text-sm transition-all duration-300 group-hover/item:text-slate-900">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}

                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-center group/metric">
                            <div className="text-lg font-bold text-slate-900 transition-all duration-300 group-hover/metric:scale-110 group-hover/metric:text-blue-600">
                              {metric.value}
                            </div>
                            <div className="text-xs text-slate-500">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 6).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs transition-all duration-300 hover:scale-105 hover:bg-slate-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tags.length > 6 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 6} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="flex-1 group/btn transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                          View Project
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="group/btn transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Main Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {allProjects
              .filter((p) => p.type === 'main')
              .map((project, index) => (
                <Card
                  key={project.id}
                  className={`overflow-hidden hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          project.status === 'Production'
                            ? 'bg-emerald-500'
                            : project.status === 'Research'
                              ? 'bg-purple-500'
                              : project.status === 'Active'
                                ? 'bg-blue-500'
                                : 'bg-orange-500'
                        } text-white transition-all duration-300 group-hover:scale-110`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-white/20 text-white border-white/30 transition-all duration-300 group-hover:scale-105"
                      >
                        {project.domain}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 transition-all duration-300 group-hover:text-blue-600">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    {project.impact && (
                      <p className="text-sm text-slate-500 mb-6 italic">
                        {project.impact}
                      </p>
                    )}

                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-center group/metric">
                            <div className="text-lg font-bold text-slate-900 transition-all duration-300 group-hover/metric:scale-110 group-hover/metric:text-blue-600">
                              {metric.value}
                            </div>
                            <div className="text-xs text-slate-500">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 5).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs transition-all duration-300 hover:scale-105 hover:bg-slate-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 5}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 group/btn transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                          Details
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Additional Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects
              .filter((p) => p.type === 'additional')
              .map((project, index) => (
                <Card
                  key={project.id}
                  className={`hover:shadow-lg transition-all duration-500 group hover:-translate-y-1 ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden mb-4 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12">
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-slate-900 text-sm leading-tight transition-all duration-300 group-hover:text-blue-600">
                        {project.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className={`text-xs ml-2 transition-all duration-300 group-hover:scale-105 ${
                          project.status === 'Production'
                            ? 'border-emerald-500 text-emerald-600'
                            : project.status === 'Research'
                              ? 'border-purple-500 text-purple-600'
                              : project.status === 'Clinical Trial'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-orange-500 text-orange-600'
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <Badge
                      variant="secondary"
                      className="text-xs mb-3 transition-all duration-300 group-hover:scale-105"
                    >
                      {project.domain}
                    </Badge>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs transition-all duration-300 hover:scale-105"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full group/btn text-xs transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 mr-2 group-hover/btn:animate-pulse" />
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={skillsRef}
        className={`py-24 bg-slate-50 section-transition ${activeSection === 'skills' ? 'section-active' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-6 transform scale-x-0 animate-scale-x"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Technologies and frameworks powering innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Software Engineering',
                color: 'blue',
                skills: [
                  'Python',
                  'TypeScript',
                  'Go',
                  'React',
                  'Node.js',
                  'Express.js',
                  'Next.js',
                  'Tailwind CSS',
                  'MongoDB',
                  'PostgreSQL',
                  'Docker',
                  'Kubernetes',
                  'AWS',
                  'CI/CD',
                  'GraphQL',
                  'REST APIs',
                  'Microservices',
                  'Git & GitHub',
                  'Testing (Jest, PyTest)',
                  'Agile & Scrum',
                ],
              },
              {
                icon: Brain,
                title: 'AI & Data Science',
                color: 'purple',
                skills: [
                  'TensorFlow',
                  'PyTorch',
                  'Scikit-learn',
                  'Apache Spark',
                  'MLflow',
                  'Jupyter',
                  'R',
                  'SQL',
                  'Pandas',
                  'NumPy',
                  'Matplotlib & Seaborn',
                  'Keras',
                  'Hugging Face Transformers',
                  'OpenCV',
                  'XGBoost',
                  'LightGBM',
                  'FastAPI (for ML APIs)',
                  'LangChain',
                  'Data Preprocessing & Cleaning',
                  'Model Deployment',
                  'Experiment Tracking',
                  'Feature Engineering',
                  'MLOps',
                  'Prompt Engineering',
                ],
              },
              {
                icon: Stethoscope,
                title: 'Healthcare Technology',
                color: 'emerald',
                skills: [
                  'DICOM',
                  'HL7 FHIR',
                  'FDA 510(k)',
                  'HIPAA',
                  'GxP',
                  'Clinical Trials',
                  'Medical Imaging',
                  'Biosignals',
                  'PCB Design',
                  '3D CAD Modeling',
                  'Medical Device Prototyping',
                  'Electronics Schematic Design',
                  'Embedded Systems',
                  'Microcontrollers (ESP32, Arduino)',
                  'Signal Acquisition & Processing',
                  'Wearable Health Tech',
                  'Biomedical Sensors',
                  'IoT in Healthcare',
                  'Bluetooth Low Energy (BLE)',
                  'Rapid Prototyping',
                ],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-lg transition-all duration-500 group hover:-translate-y-2 cursor-pointer ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
                onClick={() => scrollToSection('contact')}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-${category.color}-100 flex items-center justify-center mb-6 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12`}
                >
                  <category.icon
                    className={`w-8 h-8 text-${category.color}-600`}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-6 transition-all duration-300 group-hover:text-blue-600">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="hover:bg-slate-200 transition-all duration-300 cursor-default hover:scale-110 animate-fade-in-up"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-24 bg-slate-900 section-transition ${activeSection === 'contact' ? 'section-active' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6 transform scale-x-0 animate-scale-x"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to transform industries through technology? Let's discuss
              your next innovative project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'mugwewaithaka2@gmail.com',
                action: 'Send Message',
                href: 'mailto:mugwewaithaka2@gmail.com',
              },
              {
                icon: Linkedin,
                title: 'LinkedIn',
                value: 'Connect professionally',
                action: 'View Profile',
                href: 'https://linkedin.com/in/mugwe-waithaka',
              },
              {
                icon: Github,
                title: 'GitHub',
                value: 'Explore my code',
                action: 'View Repositories',
                href: 'https://github.com/Jack-khalif',
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`p-8 bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-500 group text-center hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                <contact.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12" />
                <h3 className="text-xl font-semibold text-white mb-2 transition-all duration-300 group-hover:text-blue-400">
                  {contact.title}
                </h3>
                <p className="text-slate-300 mb-4">{contact.value}</p>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 w-full transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a
                    href={contact.href}
                    target={
                      contact.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      contact.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {contact.action}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <div
            className={`text-center mt-16 transition-all duration-800 delay-600 ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Jack-khalif"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mugwe-waithaka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mugwewaithaka2@gmail.com"
                className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-125 hover:rotate-12"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400">
              © 2024 Jackson Mugwe. Transforming industries through technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
