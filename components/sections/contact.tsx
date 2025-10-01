// components/sections/Contact.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    detail: "mugwewaithaka2@gmail.com",
    link: "mailto:mugwewaithaka2@gmail.com",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    detail: "linkedin.com/in/mugwewaithaka",
    link: "www.linkedin.com/in/mugwe-waithaka",
  },
  {
    icon: Github,
    title: "GitHub",
    detail: "github.com/Jack-khalif",
    link: "https://github.com/Jack-khalif",
  },
];

export function Contact({ isInView }: { isInView: boolean }) {
  return (
    <section id="contact" className="py-24 bg-slate-900 section-transition">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6" />
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to transform industries through technology? Let’s discuss your
            next innovative project.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((contact, index) => (
            <Card
              key={index}
              className="bg-slate-800 hover:bg-slate-700 transition shadow-md border-0"
            >
              <CardContent className="p-6 text-center">
                <contact.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-slate-400 mb-4">{contact.detail}</p>
                <Button asChild variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-16 transition-all duration-800 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="mailto:mugwewaithaka2@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mugwe-waithaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Jack-khalif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jack Khalif. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
