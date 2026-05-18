import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { 
  Menu, X, Code2, Zap, Smartphone, Database, 
  ExternalLink, Mail, ChevronRight, Download, Linkedin
} from "lucide-react";
import portraitImg from "@/assets/portrait.png";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card text-sm font-bold tracking-tighter hover:border-primary transition-colors">
          jd
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-card/50 backdrop-blur-sm border border-border rounded-full px-2 py-1">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="mailto:hello@example.com"
            className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:hello@example.com"
            className="w-full text-center py-3 mt-4 rounded-lg bg-primary text-primary-foreground font-medium"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
              Front-End <br />
              <span className="text-muted-foreground">Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              I build clean, high-performance interfaces that turn ideas into exceptional digital experiences.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={18} />
                Download CV
              </a>
              <div className="flex items-center gap-3 pl-4 border-l border-border">
                <a href="#" className="p-3 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  <SiGithub size={20} />
                </a>
                <a href="#" className="p-3 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:ml-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card shadow-2xl"
          >
            {/* Minimalist image treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img 
              src={portraitImg} 
              alt="Developer Portrait" 
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-lighten"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code2 size={24} />,
      title: "UI Development",
      description: "Pixel-perfect component implementation with clean, maintainable architecture.",
      tags: ["React", "TypeScript", "Tailwind"]
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Blazing fast load times & high Core Web Vitals scores.",
      tags: ["Lighthouse", "Code Splitting", "Lazy Loading"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive Design",
      description: "Flawless experiences across every screen size and device.",
      tags: ["Mobile First", "CSS Grid", "Flexbox"]
    },
    {
      icon: <Database size={24} />,
      title: "API Integration",
      description: "Seamlessly connecting frontends to powerful backend services.",
      tags: ["REST", "GraphQL", "React Query"]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What I Offer</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:bg-secondary/20 hover:border-border/80 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center text-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Crafted with Purpose</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-2xl mx-auto">
              I believe great software is built at the intersection of rigorous engineering and thoughtful design. 
              Every line of code should serve the user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your goals and users deeply" },
              { num: "02", title: "Design", desc: "Translating ideas into intuitive interfaces" },
              { num: "03", title: "Deliver", desc: "Shipping polished, production-ready code" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-6 border-l border-border"
              >
                <div className="absolute top-0 left-0 w-[3px] h-8 bg-primary -ml-[2px] rounded-r-full"></div>
                <span className="text-sm font-mono text-muted-foreground mb-2 block">{step.num}</span>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-2xl border border-border bg-background"
          >
            <div className="text-center sm:border-r border-border pb-6 sm:pb-0">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Years Experience</div>
            </div>
            <div className="text-center sm:border-r border-border pb-6 sm:pb-0">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Clients Served</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend Frameworks",
      skills: ["React", "Next.js", "Vue.js", "Svelte"]
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "CSS Modules", "Framer Motion", "shadcn/ui"]
    },
    {
      title: "Languages & Tools",
      skills: ["TypeScript", "JavaScript", "HTML5", "Git"]
    },
    {
      title: "Testing & Perf",
      skills: ["Vitest", "Playwright", "Lighthouse", "Webpack"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="text-muted-foreground max-w-md text-sm">
            My toolkit is constantly evolving, but my focus remains on technologies that enable fast, accessible, and maintainable applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/50"
            >
              <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-border/50">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-secondary text-sm font-medium text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      desc: "Admin panel with real-time analytics and inventory management.",
      tags: ["React", "TypeScript", "Recharts"],
      color: "from-blue-900/20 to-transparent"
    },
    {
      title: "SaaS Landing Page",
      desc: "High-converting marketing site with 98 Lighthouse score.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      color: "from-purple-900/20 to-transparent"
    },
    {
      title: "Mobile Banking UI",
      desc: "Cross-platform fintech app with biometric auth.",
      tags: ["React Native", "Expo", "TypeScript"],
      color: "from-emerald-900/20 to-transparent"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Work</h2>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-background overflow-hidden hover:border-border/80 transition-colors"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${proj.color} border-b border-border/50 flex items-center justify-center relative overflow-hidden`}>
                {/* Decorative pattern for the placeholder */}
                <div className="absolute inset-0 opacity-10" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-card border border-border shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Code2 size={24} className="text-muted-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 h-10">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group/link">
                  View Project 
                  <ChevronRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card text-lg font-bold tracking-tighter hover:border-primary transition-colors">
            jd
          </a>
          <p className="text-muted-foreground text-sm max-w-xs">
            Designing and building digital experiences with purpose and precision.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><SiGithub size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={20} /></a>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-8">
            &copy; {new Date().getFullYear()} Front-End Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
