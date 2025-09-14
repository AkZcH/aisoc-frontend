import React, { useMemo, useState } from "react";
import Navigation from '@/components/Navigation';
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';

/**
 * AI Society — Learning Page
 * Theme: Black background, white text, purple gradient accents only
 * Stack: React + TailwindCSS (no extra libs)
 * Notes:
 *  - Replace the DATA content with real items.
 *  - Page includes: Hero, Courses, Tutorials, Resources, Workshops, Certifications,
 *    Study Groups, Research Papers, Tools & Frameworks, Career Paths, Books,
 *    Practice Projects, Mentorship, Progress Tracking, Community Learning.
 */

// ────────────────────────────────────────────────────────────────────────────────
// Utilities & Design Tokens
// ────────────────────────────────────────────────────────────────────────────────
const cx = (...c) => c.filter(Boolean).join(" ");
const gText = "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300";
const gBg = "bg-gradient-to-r from-purple-600 to-purple-400";

// Circle avatar with initials
function Avatar({ name, size = 72 }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      className={cx(
        "rounded-full flex items-center justify-center text-white font-semibold shadow-lg",
        "bg-gradient-to-br from-purple-700 to-purple-400"
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span className="text-xl">{initials}</span>
    </div>
  );
}

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
// Sample DATA
// ────────────────────────────────────────────────────────────────────────────────
const DATA = {
  courses: [
    {
      title: "Machine Learning Fundamentals",
      provider: "Stanford Online",
      level: "Beginner",
      duration: "8 weeks",
      rating: 4.8,
      link: "#",
      tags: ["ML", "Python"]
    },
    {
      title: "Deep Learning Specialization",
      provider: "Coursera",
      level: "Intermediate",
      duration: "16 weeks",
      rating: 4.9,
      link: "#",
      tags: ["Deep Learning", "Neural Networks"]
    },
    {
      title: "Natural Language Processing",
      provider: "Hugging Face",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.7,
      link: "#",
      tags: ["NLP", "Transformers"]
    }
  ],
  tutorials: [
    {
      title: "Building Your First Neural Network",
      author: "AI Society",
      difficulty: "Beginner",
      duration: "45 min",
      link: "#",
      tags: ["Tutorial", "Hands-on"]
    },
    {
      title: "Computer Vision with PyTorch",
      author: "Vision Lab",
      difficulty: "Intermediate",
      duration: "2 hours",
      link: "#",
      tags: ["CV", "PyTorch"]
    },
    {
      title: "Deploying ML Models to Production",
      author: "MLOps Team",
      difficulty: "Advanced",
      duration: "3 hours",
      link: "#",
      tags: ["MLOps", "Deployment"]
    }
  ],
  resources: [
    {
      title: "AI Research Papers Database",
      type: "Database",
      description: "Curated collection of must-read AI papers",
      link: "#"
    },
    {
      title: "ML Cheat Sheets Collection",
      type: "Reference",
      description: "Quick reference guides for algorithms and concepts",
      link: "#"
    },
    {
      title: "Dataset Repository",
      type: "Data",
      description: "High-quality datasets for practice projects",
      link: "#"
    }
  ],
  workshops: [
    {
      title: "Introduction to Transformers",
      date: "2025-09-15",
      instructor: "Dr. Sarah Chen",
      duration: "3 hours",
      level: "Intermediate",
      spots: 25,
      link: "#"
    },
    {
      title: "Computer Vision Bootcamp",
      date: "2025-09-22",
      instructor: "Prof. Michael Zhang",
      duration: "6 hours",
      level: "Beginner",
      spots: 30,
      link: "#"
    }
  ],
  studyGroups: [
    {
      name: "Deep Learning Study Circle",
      members: 12,
      focus: "Neural Networks & Backpropagation",
      schedule: "Tuesdays 7 PM",
      link: "#"
    },
    {
      name: "NLP Research Group",
      members: 8,
      focus: "Latest NLP Papers Discussion",
      schedule: "Fridays 6 PM",
      link: "#"
    }
  ],
  tools: [
    {
      name: "TensorFlow",
      category: "Framework",
      description: "End-to-end ML platform",
      link: "#"
    },
    {
      name: "Jupyter Notebooks",
      category: "Environment",
      description: "Interactive computing environment",
      link: "#"
    },
    {
      name: "Weights & Biases",
      category: "MLOps",
      description: "Experiment tracking and visualization",
      link: "#"
    }
  ],
  books: [
    {
      title: "Pattern Recognition and Machine Learning",
      author: "Christopher Bishop",
      level: "Advanced",
      rating: 4.6,
      link: "#"
    },
    {
      title: "Hands-On Machine Learning",
      author: "Aurélien Géron",
      level: "Intermediate",
      rating: 4.8,
      link: "#"
    }
  ]
};

// ────────────────────────────────────────────────────────────────────────────────
// Navbar + Hero
// ────────────────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src={aisocTransparentLogo} alt="AISOC Logo" className="w-14 h-14 object-contain" />
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#courses" className="hover:underline underline-offset-4">Courses</a>
          <a href="#tutorials" className="hover:underline underline-offset-4">Tutorials</a>
          <a href="#resources" className="hover:underline underline-offset-4">Resources</a>
          <a href="#workshops" className="hover:underline underline-offset-4">Workshops</a>
          <a href="#study-groups" className="hover:underline underline-offset-4">Study Groups</a>
          <a href="#tools" className="hover:underline underline-offset-4">Tools</a>
          <a href="#books" className="hover:underline underline-offset-4">Books</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_50%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img src={aisocTransparentLogo} alt="AISOC Logo" className="w-24 h-24 object-contain" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Learning Hub</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Master AI and Machine Learning through curated courses, hands-on tutorials, and collaborative learning experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#courses" className={cx("px-4 py-2 rounded-full font-medium border", "border-white/20")}>Browse Courses</a>
            <a href="#tutorials" className={cx("px-4 py-2 rounded-full font-medium border", "border-white/20")}>Start Tutorial</a>
            <a href="#study-groups" className={cx("px-4 py-2 rounded-full font-medium border", "border-white/20")}>Join Study Group</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Section Components
// ────────────────────────────────────────────────────────────────────────────────
function CoursesSection() {
  const [filter, setFilter] = useState("All");
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const courses = useMemo(() => {
    if (filter === "All") return DATA.courses;
    return DATA.courses.filter((c) => c.level === filter);
  }, [filter]);

  return (
    <section id="courses" className="mt-12">
      <SectionHeader
        title="Online Courses"
        subtitle="Structured learning paths from top universities and platforms."
        actions={
          <div className="flex items-center gap-2">
            {levels.map((l) => (
              <Tag key={l} label={l} active={l === filter} onClick={() => setFilter(l)} />
            ))}
          </div>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, idx) => (
          <Card key={idx}>
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold">{course.title}</h4>
              <span className="text-xs text-white/60">{course.rating}★</span>
            </div>
            <p className="text-xs text-white/60 mb-2">{course.provider} • {course.duration}</p>
            <p className="text-sm text-white/80 mb-3">Level: {course.level}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {course.tags.map((tag) => (
                <span key={tag} className="text-[11px] border border-white/10 rounded-full px-2 py-0.5 text-white/70">
                  {tag}
                </span>
              ))}
            </div>
            <a href={course.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Enroll Now</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TutorialsSection() {
  return (
    <section id="tutorials" className="mt-12">
      <SectionHeader title="Hands-On Tutorials" subtitle="Step-by-step guides to build real AI projects." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.tutorials.map((tutorial, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold mb-2">{tutorial.title}</h4>
            <p className="text-xs text-white/60 mb-2">By {tutorial.author} • {tutorial.duration}</p>
            <p className="text-sm text-white/80 mb-3">Difficulty: {tutorial.difficulty}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {tutorial.tags.map((tag) => (
                <span key={tag} className="text-[11px] border border-white/10 rounded-full px-2 py-0.5 text-white/70">
                  {tag}
                </span>
              ))}
            </div>
            <a href={tutorial.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Start Tutorial</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section id="resources" className="mt-12">
      <SectionHeader title="Learning Resources" subtitle="Essential tools and references for your AI journey." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.resources.map((resource, idx) => (
          <Card key={idx}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <span className="text-sm font-bold">{resource.type[0]}</span>
              </div>
              <div>
                <h4 className="font-semibold">{resource.title}</h4>
                <p className="text-xs text-white/60">{resource.type}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-3">{resource.description}</p>
            <a href={resource.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Access Resource</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function WorkshopsSection() {
  return (
    <section id="workshops" className="mt-12">
      <SectionHeader title="Upcoming Workshops" subtitle="Interactive sessions with industry experts and researchers." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.workshops.map((workshop, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold mb-2">{workshop.title}</h4>
            <div className="space-y-1 text-sm text-white/70 mb-3">
              <p>📅 {workshop.date}</p>
              <p>👨‍🏫 {workshop.instructor}</p>
              <p>⏱️ {workshop.duration}</p>
              <p>📊 Level: {workshop.level}</p>
              <p>👥 {workshop.spots} spots available</p>
            </div>
            <a href={workshop.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Register</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function StudyGroupsSection() {
  return (
    <section id="study-groups" className="mt-12">
      <SectionHeader title="Study Groups" subtitle="Join collaborative learning communities." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.studyGroups.map((group, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold mb-2">{group.name}</h4>
            <div className="space-y-1 text-sm text-white/70 mb-3">
              <p>👥 {group.members} members</p>
              <p>🎯 Focus: {group.focus}</p>
              <p>📅 {group.schedule}</p>
            </div>
            <a href={group.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Join Group</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ToolsSection() {
  return (
    <section id="tools" className="mt-12">
      <SectionHeader title="Tools & Frameworks" subtitle="Essential software for AI development." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.tools.map((tool, idx) => (
          <Card key={idx}>
            <div className="flex items-center gap-3 mb-3">
              <Avatar name={tool.name} size={48} />
              <div>
                <h4 className="font-semibold">{tool.name}</h4>
                <p className="text-xs text-white/60">{tool.category}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-3">{tool.description}</p>
            <a href={tool.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Learn More</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function BooksSection() {
  return (
    <section id="books" className="mt-12">
      <SectionHeader title="Recommended Books" subtitle="Essential reading for deep understanding." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.books.map((book, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold mb-2">{book.title}</h4>
            <p className="text-sm text-white/70 mb-2">by {book.author}</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/60">Level: {book.level}</span>
              <span className="text-xs text-white/60">{book.rating}★</span>
            </div>
            <a href={book.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">View Book</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function OutroCTA() {
  return (
    <section className="mt-16">
      <Card emphasized>
        <div className="flex flex-col items-center text-center gap-3">
          <h3 className={cx("text-xl md:text-2xl font-bold", gText)}>Start Your AI Learning Journey</h3>
          <p className="text-white/70 max-w-2xl">Join thousands of learners mastering AI through our comprehensive resources and community support.</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a href="#courses" className="px-4 py-2 rounded-full border border-white/20">Browse Courses</a>
            <a href="#study-groups" className="px-4 py-2 rounded-full border border-white/20">Join Community</a>
            <a href="#workshops" className="px-4 py-2 rounded-full border border-white/20">Attend Workshop</a>
          </div>
        </div>
      </Card>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Main Page Export
// ────────────────────────────────────────────────────────────────────────────────
export default function LearningPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <Hero />

        <main className="mx-auto max-w-7xl px-4 pb-24">
          <CoursesSection />
          <TutorialsSection />
          <ResourcesSection />
          <WorkshopsSection />
          <StudyGroupsSection />
          <ToolsSection />
          <BooksSection />
          <OutroCTA />

          <div className="mt-10 text-center">
            <p className={gText}>"Learning never exhausts the mind."</p>
          </div>
        </main>
      </div>
    </div>
  );
}