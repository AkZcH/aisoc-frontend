import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Github, ExternalLink, Users, Calendar, Star, Filter } from 'lucide-react';
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';

/**
 * AI Society — Projects Page
 * Theme: Black background, white text, purple gradient accents
 * Stack: React + TailwindCSS
 */

// ────────────────────────────────────────────────────────────────────────────────
// Utilities & Design Tokens
// ────────────────────────────────────────────────────────────────────────────────
const cx = (...c) => c.filter(Boolean).join(" ");
const gText = "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300";
const gBg = "bg-gradient-to-r from-purple-600 to-purple-400";

function GradientRule({ className = "mt-4" }) {
  return <div className={cx("h-px w-full", gBg, className)} />;
}

function SectionHeader({ id, title, subtitle, actions }) {
  return (
    <header id={id} className="mb-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className={cx("text-2xl md:text-3xl font-bold", gText)}>{title}</h2>
          {subtitle && <p className="mt-2 text-white/70 max-w-3xl">{subtitle}</p>}
        </div>
        {actions}
      </div>
      <GradientRule />
    </header>
  );
}

function Card({ children, as: As = "div", emphasized = false, className = "" }) {
  return (
    <As
      className={cx(
        "relative group rounded-2xl p-5 bg-black/40 border border-white/10 backdrop-blur-sm",
        emphasized
          ? "shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
          : "hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.18),transparent_60%)]" />
      {children}
    </As>
  );
}

function Tag({ label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "px-3 py-1 rounded-full text-xs border transition",
        active
          ? "border-white/30 text-white"
          : "border-white/10 text-white/70 hover:text-white hover:border-white/30"
      )}
    >
      {label}
    </button>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────────────────────────────
const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Study Assistant",
    description: "An intelligent tutoring system that helps students learn more effectively using natural language processing and adaptive learning algorithms.",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    category: "Education",
    status: "Active",
    contributors: 8,
    stars: 124,
    lastUpdated: "2024-03-10",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Computer Vision for Medical Imaging",
    description: "Deep learning models for automated detection of anomalies in medical scans, helping radiologists make faster and more accurate diagnoses.",
    technologies: ["PyTorch", "OpenCV", "Flask", "Docker"],
    category: "Healthcare",
    status: "Active",
    contributors: 6,
    stars: 89,
    lastUpdated: "2024-03-08",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  }
];

const allProjects = [
  {
    id: 3,
    title: "Smart Campus Navigation",
    description: "AR-based navigation system for university campus using computer vision and GPS integration.",
    technologies: ["Unity", "ARCore", "Python", "Firebase"],
    category: "AR/VR",
    status: "Active",
    contributors: 5,
    stars: 67,
    lastUpdated: "2024-03-05",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis of social media posts with interactive visualization dashboard.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    category: "NLP",
    status: "Active",
    contributors: 4,
    stars: 45,
    lastUpdated: "2024-03-03",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Automated Code Review Bot",
    description: "AI-powered bot that provides intelligent code review suggestions and detects potential bugs.",
    technologies: ["Python", "GitHub API", "Machine Learning"],
    category: "DevTools",
    status: "Beta",
    contributors: 3,
    stars: 78,
    lastUpdated: "2024-02-28",
    githubUrl: "#",
    liveUrl: null
  },
  {
    id: 6,
    title: "Voice-Controlled IoT System",
    description: "Smart home automation system controlled through natural language voice commands.",
    technologies: ["Raspberry Pi", "Python", "Speech Recognition"],
    category: "IoT",
    status: "Completed",
    contributors: 7,
    stars: 92,
    lastUpdated: "2024-02-20",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const categories = ["All", "Education", "Healthcare", "AR/VR", "NLP", "DevTools", "IoT"];
const statusOptions = ["All", "Active", "Beta", "Completed"];

// ────────────────────────────────────────────────────────────────────────────────
// Components
// ────────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_50%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img src={aisocTransparentLogo} alt="AISOC Logo" className="w-24 h-24 object-contain" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Student Projects</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Explore innovative AI projects built by our community members. From research prototypes to production applications.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#featured" className="px-4 py-2 rounded-full border border-white/20">Featured Projects</a>
            <a href="#all-projects" className="px-4 py-2 rounded-full border border-white/20">Browse All</a>
            <a href="#contribute" className="px-4 py-2 rounded-full border border-white/20">Contribute</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectsSection() {
  return (
    <section id="featured" className="mt-12">
      <SectionHeader
        title="Featured Projects"
        subtitle="Highlighting our most impactful and innovative student-led AI projects."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <Card key={project.id} emphasized>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                Featured
              </span>
            </div>

            <p className="text-white/80 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-white/70 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {project.contributors}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {project.stars}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(project.lastUpdated).toLocaleDateString()}
                </div>
              </div>
              <span className={cx(
                "px-2 py-1 text-xs rounded-full",
                project.status === "Active" ? "bg-green-600/20 text-green-300 border border-green-500/30" :
                project.status === "Beta" ? "bg-yellow-600/20 text-yellow-300 border border-yellow-500/30" :
                "bg-blue-600/20 text-blue-300 border border-blue-500/30"
              )}>
                {project.status}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a 
                href={project.githubUrl}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-white/90 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function AllProjectsSection() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = categoryFilter === "All" || project.category === categoryFilter;
    const matchesStatus = statusFilter === "All" || project.status === statusFilter;
    return matchesCategory && matchesStatus;
  });

  return (
    <section id="all-projects" className="mt-12">
      <SectionHeader
        title="All Projects"
        subtitle="Browse through our complete collection of student AI projects."
        actions={
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-white/70" />
              <select 
                value={categoryFilter} 
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white backdrop-blur-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-black text-white">
                    {category}
                  </option>
                ))}
              </select>
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white backdrop-blur-sm"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status} className="bg-black text-white">
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-white/60 text-xs">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-white/60 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {project.contributors}
                </div>
                <div className="flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  {project.stars}
                </div>
              </div>
              <span className={cx(
                "px-2 py-1 rounded-full",
                project.status === "Active" ? "bg-green-600/20 text-green-300" :
                project.status === "Beta" ? "bg-yellow-600/20 text-yellow-300" :
                "bg-blue-600/20 text-blue-300"
              )}>
                {project.status}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href={project.githubUrl}
                className="flex items-center gap-1 px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg transition-colors"
              >
                <Github className="w-3 h-3" />
                Code
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  className="flex items-center gap-1 px-3 py-2 bg-white text-black hover:bg-white/90 text-xs rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Demo
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <Github className="h-16 w-16 text-white/70 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
          <p className="text-white/70">Try adjusting your filters or check back later for new projects.</p>
        </div>
      )}
    </section>
  );
}

function ContributeSection() {
  return (
    <section id="contribute" className="mt-12">
      <Card emphasized>
        <div className="text-center">
          <h2 className={cx("text-2xl md:text-3xl font-bold mb-4", gText)}>Contribute to Our Projects</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community of builders and contribute to exciting AI projects. Whether you're a beginner or expert, there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#"
              className="px-6 py-3 bg-white text-black hover:bg-white/90 rounded-lg font-medium transition-all duration-300"
            >
              Submit Your Project
            </a>
            <a 
              href="#"
              className="px-6 py-3 bg-transparent text-white border border-white/20 hover:bg-white hover:text-black rounded-lg font-medium transition-all duration-300"
            >
              Join Existing Project
            </a>
          </div>
        </div>
      </Card>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Main Page Export
// ────────────────────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <Hero />

        <main className="mx-auto max-w-7xl px-4 pb-24">
          <FeaturedProjectsSection />
          <AllProjectsSection />
          <ContributeSection />

          <div className="mt-10 text-center">
            <p className={gText}>"Innovation distinguishes between a leader and a follower."</p>
          </div>
        </main>
      </div>
    </div>
  );
}