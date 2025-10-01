// components/sections/Projects.tsx
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import { projects, Project } from '@/data/projects';

function ProjectCard({ project, variant }: { project: Project; variant: 'featured' | 'main' | 'additional' }) {
  return (
    <Card className="overflow-hidden shadow-md rounded-2xl">
      <img
        src={project.image}
        alt={project.title}
        className={`w-full ${variant === 'featured' ? 'h-56' : variant === 'main' ? 'h-44' : 'h-40'} object-cover`}
      />
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <project.icon className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </div>

        <p className="text-slate-600 mb-4 text-sm">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Metrics (if available) */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <p className="text-lg font-bold">{m.value}</p>
                <p className="text-sm text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank">
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
            </Button>
          )}
          {project.impact && (
            <Button variant="default" asChild>
              <a href={project.githubUrl} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" /> Learn More
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects({ isInView }: { isInView: boolean }) {
  return (
    <section id="projects" className="py-24 bg-white section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Innovative technology solutions that transform industries and advance research
          </p>
        </div>

        {/* Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter((p) => p.type === 'featured').map((p) => (
            <ProjectCard key={p.id} project={p} variant="featured" />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.filter((p) => p.type === 'main').map((p) => (
            <ProjectCard key={p.id} project={p} variant="main" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter((p) => p.type === 'additional').map((p) => (
            <ProjectCard key={p.id} project={p} variant="additional" />
          ))}
        </div>
      </div>
    </section>
  );
}
