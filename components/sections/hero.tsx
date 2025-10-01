// components/sections/Hero.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Heart, Award, Shield, Mail } from 'lucide-react';

export function Hero({ isVisible }: { isVisible: boolean }) { // Pass visibility if needed
  return (
    <section
      id="hero"
      className={`pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden section-transition`}
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
            Software & Biomedical Engineer
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
            >
              <ArrowRight className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 font-medium px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: '11', label: 'Projects Delivered', icon: Code },
              { number: '100+', label: 'Lives Impacted', icon: Heart },
              { number: '2', label: 'Startup Patents', icon: Award },
              { number: '92.9%', label: 'System Uptime', icon: Shield },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-800 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1000 + index * 150}ms` }}
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
  );
}