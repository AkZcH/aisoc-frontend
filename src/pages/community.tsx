import React, { useMemo, useState } from "react";
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';

/**
 * AI Society — Community Page
 * Theme: Black background, white text, purple gradient accents only
 * Stack: React + TailwindCSS (no extra libs)
 * Notes:
 *  - Replace the DATA content with real items.
 *  - Page includes: Hero, Newsletter Archive, AI News, Innovations, Projects, Blogs,
 *    Spotlights (Members/Alumni), Forums/Discussion, Learning Hub, Events & Meetups,
 *    Media Gallery, Podcast/Video Series, Contribution Form, Partners, Outro CTA.
 *  - Accessible components, responsive grids, subtle motion/hover states.
 */

// ────────────────────────────────────────────────────────────────────────────────
// Utilities & Design Tokens
// ────────────────────────────────────────────────────────────────────────────────
const cx = (...c) => c.filter(Boolean).join(" ");
const gText = "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300";
const gBg = "bg-gradient-to-r from-purple-600 to-purple-400";

// Circle avatar with initials (no external image required)
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
// Sample DATA (replace with live data / CMS later)
// ────────────────────────────────────────────────────────────────────────────────
const DATA = {
  newsletter: {
    subscribeUrl: "#",
    latest: {
      title: "Vol. 07 — Frontier Models & Campus Research Roundup",
      date: "Aug 2025",
      summary:
        "Coverage of foundation models, campus paper highlights, upcoming hackathon, and a deep-dive on reproducibility.",
      download: "#",
    },
    issues: Array.from({ length: 8 }, (_, i) => ({
      title: `Vol. 0${8 - i} — Monthly Dispatch`,
      date: `2025-0${(8 - i).toString().padStart(2, "0")}`,
      link: "#",
      tags: [i % 2 ? "Research" : "Events", i % 3 ? "Careers" : "Projects"],
    })),
  },
  aiNews: [
    {
      title: "New Efficient Vision Transformer Beats Baselines",
      source: "Open Research Blog",
      date: "2025-08-18",
      summary: "Parameter-efficient ViT variant with improved training stability and smaller compute budget.",
      link: "#",
      tags: ["Research", "Vision"],
    },
    {
      title: "Toolkit: Lightweight Serving for Edge LLMs",
      source: "Community",
      date: "2025-08-16",
      summary: "Open-source runtime enabling quantized LLM inference on consumer GPUs.",
      link: "#",
      tags: ["Systems", "Open-Source"],
    },
    {
      title: "Policy Note: Campus Guidelines for GenAI Use",
      source: "University",
      date: "2025-08-10",
      summary: "Draft ethics & policy recommendations for responsible AI practice in coursework.",
      link: "#",
      tags: ["Policy", "Ethics"],
    },
  ],
  innovations: [
    {
      title: "Diffusion-Guided Control for Robotics",
      contributor: "Robotics Lab",
      summary: "Combines diffusion priors with classical control for robust manipulation.",
      link: "#",
      tags: ["Robotics", "Generative"],
    },
    {
      title: "AutoEval: Zero-Setup Eval Framework",
      contributor: "AI Society",
      summary: "Run standardized evals for NLP/Multimodal tasks with one YAML.",
      link: "#",
      tags: ["Evaluation", "Toolkit"],
    },
    {
      title: "LoRA++: Structured Adapters for LLMs",
      contributor: "NLP Group",
      summary: "Improves adaptation while preserving instruction-following quality.",
      link: "#",
      tags: ["NLP", "LLM"],
    },
  ],
  projects: [
    {
      title: "CampusGPT",
      desc: "Q&A agent over university handbooks, schedules, and policies.",
      github: "#",
      team: ["Akshat", "Rohit", "Jasmine"],
    },
    {
      title: "Vision-Board",
      desc: "Real-time CV dashboard for lab hardware and dataset status.",
      github: "#",
      team: ["Neha", "Dev", "Rhea"],
    },
    {
      title: "JudgeAI",
      desc: "Competition problem grader with sandboxed execution and analytics.",
      github: "#",
      team: ["Ayush", "Meera"],
    },
  ],
  blogs: [
    {
      title: "A Friendly Intro to RLHF for Students",
      author: "Ananya Gupta",
      date: "2025-08-12",
      link: "#",
      tags: ["Tutorial", "NLP"],
    },
    {
      title: "From Kaggle to ICPC: My CP Journey",
      author: "Ayush Srivastava",
      date: "2025-08-05",
      link: "#",
      tags: ["Career", "CP"],
    },
    {
      title: "Figma to Code: Design Systems for Devs",
      author: "Kriti Sharma",
      date: "2025-07-30",
      link: "#",
      tags: ["Design", "Web"],
    },
  ],
  spotlights: {
    members: [
      {
        name: "Sara Iqbal",
        role: "AI/ML Co‑Lead",
        blurb: "Paper accepted at ACL Student Research Workshop on evaluation reliability.",
      },
      {
        name: "Dev Patel",
        role: "Web Dev Lead",
        blurb: "Shipped a campus-wide attendance dashboard used by 1k+ students.",
      },
    ],
    alumni: [
      {
        name: "Siddharth Jain",
        role: "Ex Web Dev Lead (’23)",
        blurb: "Now SDE at a top cloud company; maintains OSS libraries.",
      },
      {
        name: "Aishwarya Rao",
        role: "Ex AI/ML Lead (’24)",
        blurb: "Published at NeurIPS Datasets & Benchmarks; PhD incoming.",
      },
    ],
  },
  learning: {
    courses: [
      { title: "Intro to ML", provider: "fast.ai", level: "Beginner", link: "#" },
      { title: "Deep Learning Specialization", provider: "Coursera", level: "Intermediate", link: "#" },
      { title: "Probabilistic ML", provider: "MIT OCW", level: "Advanced", link: "#" },
    ],
    papers: [
      { title: "Attention Is All You Need", area: "NLP", link: "#" },
      { title: "Masked Autoencoders", area: "Vision", link: "#" },
      { title: "LoRA", area: "Adapters", link: "#" },
    ],
    cheatsheets: [
      { title: "PyTorch Quick Ref", topic: "DL", link: "#" },
      { title: "NLP Preprocessing", topic: "NLP", link: "#" },
    ],
  },
  events: {
    upcoming: [
      { title: "AI Ethics Roundtable", date: "2025-09-05", where: "Auditorium A", reg: "#" },
      { title: "HackAI 2025", date: "2025-10-12", where: "Innovation Lab", reg: "#" },
    ],
    past: [
      { title: "Summer Workshop: Diffusion", date: "2025-07-10" },
      { title: "CP Sprint #4", date: "2025-06-02" },
    ],
  },
  media: {
    photos: [
      { title: "Hackathon Night", alt: "Hackathon crowd", link: "#" },
      { title: "Guest Lecture", alt: "Lecture hall", link: "#" },
      { title: "Workshop", alt: "Workshop", link: "#" },
    ],
    videos: [
      { title: "AI Summit Recap", link: "#" },
      { title: "Interview: Faculty Mentor", link: "#" },
    ],
  },
  podcast: [
    { title: "Episode 01 — Scaling LLMs on Campus", guest: "Research Lead", link: "#" },
    { title: "Episode 02 — Ethics x AI", guest: "Philosophy Dept.", link: "#" },
  ],
  partners: [
    { name: "NVIDIA University", link: "#" },
    { name: "Hugging Face", link: "#" },
    { name: "Open Source Lab", link: "#" },
  ],
  submit: { form: "#" },
};

// ────────────────────────────────────────────────────────────────────────────────
// Navbar + Hero
// ────────────────────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          {/* AISOC Logo */}
          <div className="w-100 h-100 flex items-center justify-center">
            <img src={aisocTransparentLogo} alt="AISOC Logo" className="w-14 h-14 object-contain" />
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#newsletter" className="hover:underline underline-offset-4">Newsletter</a>
          <a href="#ainews" className="hover:underline underline-offset-4">AI News</a>
          <a href="#innovations" className="hover:underline underline-offset-4">Innovations</a>
          <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
          <a href="#blogs" className="hover:underline underline-offset-4">Blogs</a>
          <a href="#learning" className="hover:underline underline-offset-4">Learning</a>
          <a href="#events" className="hover:underline underline-offset-4">Events</a>
          <a href="#media" className="hover:underline underline-offset-4">Media</a>
          <a href="#podcast" className="hover:underline underline-offset-4">Podcast</a>
          <a href="#partners" className="hover:underline underline-offset-4">Partners</a>
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
          <h1 className="text-3xl md:text-5xl font-bold">Community Hub</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Where minds meet and ideas grow — newsletters, AI news, innovations, student projects, learning, and more.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#newsletter" className={cx("px-4 py-2 rounded-full font-medium border", "border-white/20")}>Subscribe</a>
            <a href="#submit" className={cx("px-4 py-2 rounded-full font-medium border", "border-white/20")}>Submit Work</a>
            <a href="#forums" className={cx("px-4 py-2 rounded-full font-medium border", "border-white/20")}>Join Discussion</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Section Components
// ────────────────────────────────────────────────────────────────────────────────
function NewsletterSection() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "Research", "Events", "Careers", "Projects"];
  const issues = useMemo(() => {
    if (filter === "All") return DATA.newsletter.issues;
    return DATA.newsletter.issues.filter((i) => i.tags.includes(filter));
  }, [filter]);

  return (
    <section id="newsletter" className="mt-12">
      <SectionHeader
        title="Newsletter Archive"
        subtitle="Monthly dispatches featuring campus research, events, and opportunities."
        actions={
          <div className="flex items-center gap-2">
            {tags.map((t) => (
              <Tag key={t} label={t} active={t === filter} onClick={() => setFilter(t)} />
            ))}
            <a
              href={DATA.newsletter.subscribeUrl}
              className="ml-2 px-3 py-1 rounded-full text-xs border border-white/20"
            >
              Subscribe
            </a>
          </div>
        }
      />

      {/* Latest Highlight */}
      <Card emphasized>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
          <Avatar name={DATA.newsletter.latest.title} size={72} />
          <div className="min-w-0">
            <h3 className="text-xl font-semibold">{DATA.newsletter.latest.title}</h3>
            <p className="text-white/70 text-sm mt-1">{DATA.newsletter.latest.date}</p>
            <p className="text-white/80 mt-3 max-w-3xl">{DATA.newsletter.latest.summary}</p>
            <a href={DATA.newsletter.latest.download} className="mt-3 inline-block text-xs underline decoration-white/30 hover:decoration-white/80">Download PDF</a>
          </div>
        </div>
      </Card>

      {/* Past Issues Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {issues.map((i, idx) => (
          <Card key={idx}>
            <div className="flex items-start gap-4">
              <Avatar name={i.title} size={56} />
              <div className="min-w-0">
                <h4 className="font-semibold truncate">{i.title}</h4>
                <p className="text-xs text-white/60 mt-1">{i.date}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {i.tags.map((t) => (
                    <span key={t} className="text-[11px] border border-white/10 rounded-full px-2 py-0.5 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={i.link} className="mt-3 inline-block text-xs underline decoration-white/30 hover:decoration-white/80">Open</a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function NewsSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Research", "Vision", "Systems", "Open-Source", "Policy", "Ethics"];
  const items = useMemo(() => {
    if (filter === "All") return DATA.aiNews;
    return DATA.aiNews.filter((n) => n.tags.includes(filter));
  }, [filter]);

  return (
    <section id="ainews" className="mt-12">
      <SectionHeader
        title="AI News & Global Updates"
        subtitle="Curated breakthroughs, industry updates, and policy notes."
        actions={
          <div className="flex items-center gap-2">
            {categories.map((c) => (
              <Tag key={c} label={c} active={c === filter} onClick={() => setFilter(c)} />
            ))}
          </div>
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((n, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold">{n.title}</h4>
            <p className="text-xs text-white/60 mt-1">{n.source} • {n.date}</p>
            <p className="mt-3 text-white/80">{n.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {n.tags.map((t) => (
                <span key={t} className="text-[11px] border border-white/10 rounded-full px-2 py-0.5 text-white/70">
                  {t}
                </span>
              ))}
            </div>
            <a href={n.link} className="mt-3 inline-block text-xs underline decoration-white/30 hover:decoration-white/80">Read more</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function InnovationsSection() {
  const [tab, setTab] = useState("All");
  const tags = ["All", "Robotics", "Generative", "Evaluation", "Toolkit", "NLP", "LLM"];
  const items = useMemo(() => (tab === "All" ? DATA.innovations : DATA.innovations.filter((i) => i.tags.includes(tab))), [tab]);
  return (
    <section id="innovations" className="mt-12">
      <SectionHeader
        title="Innovations & Discoveries"
        subtitle="New tools, frameworks, and campus-led breakthroughs."
        actions={<div className="flex items-center gap-2">{tags.map((t) => <Tag key={t} label={t} active={t===tab} onClick={() => setTab(t)} />)}</div>}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold">{i.title}</h4>
            <p className="text-xs text-white/60 mt-1">{i.contributor}</p>
            <p className="mt-3 text-white/80">{i.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {i.tags.map((t) => (
                <span key={t} className="text-[11px] border border-white/10 rounded-full px-2 py-0.5 text-white/70">{t}</span>
              ))}
            </div>
            <a href={i.link} className="mt-3 inline-block text-xs underline decoration-white/30 hover:decoration-white/80">Explore</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="mt-12">
      <SectionHeader title="Community Projects" subtitle="Student-led initiatives, hackathon builds, and research tools." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.projects.map((p, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold">{p.title}</h4>
            <p className="mt-2 text-white/80">{p.desc}</p>
            <p className="mt-2 text-xs text-white/60">Team: {p.team.join(", ")}</p>
            <a href={p.github} className="mt-3 inline-block text-xs underline decoration-white/30 hover:decoration-white/80">GitHub</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function BlogsSection() {
  const [tag, setTag] = useState("All");
  const tags = ["All", "Tutorial", "NLP", "Career", "CP", "Design", "Web"];
  const posts = useMemo(() => (tag === "All" ? DATA.blogs : DATA.blogs.filter((b) => b.tags.includes(tag))), [tag]);
  return (
    <section id="blogs" className="mt-12">
      <SectionHeader
        title="Student Blogs & Thought Pieces"
        subtitle="Editorially reviewed articles from the community."
        actions={<div className="flex items-center gap-2">{tags.map((t) => <Tag key={t} label={t} active={t===tag} onClick={() => setTag(t)} />)}</div>}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((b, idx) => (
          <Card key={idx}>
            <h4 className="font-semibold">{b.title}</h4>
            <p className="text-xs text-white/60 mt-1">By {b.author} • {b.date}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {b.tags.map((t) => (
                <span key={t} className="text-[11px] border border-white/10 rounded-full px-2 py-0.5 text-white/70">{t}</span>
              ))}
            </div>
            <a href={b.link} className="mt-3 inline-block text-xs underline decoration-white/30 hover:decoration-white/80">Read</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SpotlightsSection() {
  return (
    <section id="spotlights" className="mt-12">
      <SectionHeader title="Community Spotlights" subtitle="Celebrating standout members and alumni." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card emphasized>
          <h3 className={cx("text-lg font-semibold", gText)}>Members</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.spotlights.members.map((m, i) => (
              <Card key={i}>
                <div className="flex items-start gap-4">
                  <Avatar name={m.name} size={56} />
                  <div className="min-w-0">
                    <h4 className="font-semibold">{m.name}</h4>
                    <p className="text-xs text-white/60 mt-1">{m.role}</p>
                    <p className="mt-2 text-white/80">{m.blurb}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
        <Card emphasized>
          <h3 className={cx("text-lg font-semibold", gText)}>Alumni</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.spotlights.alumni.map((m, i) => (
              <Card key={i}>
                <div className="flex items-start gap-4">
                  <Avatar name={m.name} size={56} />
                  <div className="min-w-0">
                    <h4 className="font-semibold">{m.name}</h4>
                    <p className="text-xs text-white/60 mt-1">{m.role}</p>
                    <p className="mt-2 text-white/80">{m.blurb}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function ForumsSection() {
  return (
    <section id="forums" className="mt-12">
      <SectionHeader
        title="Discussion & Forums"
        subtitle="Ask questions, discuss papers, and collaborate."
        actions={<a href="#" className="px-3 py-1 rounded-full text-xs border border-white/20">Open Forum</a>}
      />
      <Card>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <li className="border border-white/10 rounded-xl p-4">Coding Help (AI/ML)</li>
          <li className="border border-white/10 rounded-xl p-4">Paper Discussions</li>
          <li className="border border-white/10 rounded-xl p-4">Competitions & Hackathons</li>
          <li className="border border-white/10 rounded-xl p-4">Career Advice</li>
        </ul>
        <p className="text-white/70 text-sm mt-4">Tip: Link your Discord/Discourse here for SSO.</p>
      </Card>
    </section>
  );
}

function LearningHubSection() {
  return (
    <section id="learning" className="mt-12">
      <SectionHeader title="Learning Hub" subtitle="Curated courses, must-read papers, and handy cheat sheets." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card emphasized>
          <h3 className="font-semibold">Courses</h3>
          <ul className="mt-3 space-y-3">
            {DATA.learning.courses.map((c, i) => (
              <li key={i} className="flex items-center justify-between gap-4">
                <div>
                  <p>{c.title}</p>
                  <p className="text-xs text-white/60">{c.provider} • {c.level}</p>
                </div>
                <a href={c.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Open</a>
              </li>
            ))}
          </ul>
        </Card>
        <Card emphasized>
          <h3 className="font-semibold">Key Papers</h3>
          <ul className="mt-3 space-y-3">
            {DATA.learning.papers.map((p, i) => (
              <li key={i} className="flex items-center justify-between gap-4">
                <div>
                  <p>{p.title}</p>
                  <p className="text-xs text-white/60">{p.area}</p>
                </div>
                <a href={p.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Read</a>
              </li>
            ))}
          </ul>
        </Card>
        <Card emphasized>
          <h3 className="font-semibold">Cheat Sheets</h3>
          <ul className="mt-3 space-y-3">
            {DATA.learning.cheatsheets.map((p, i) => (
              <li key={i} className="flex items-center justify-between gap-4">
                <div>
                  <p>{p.title}</p>
                  <p className="text-xs text-white/60">{p.topic}</p>
                </div>
                <a href={p.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Open</a>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function EventsSection() {
  return (
    <section id="events" className="mt-12">
      <SectionHeader title="Events & Meetups" subtitle="What’s next on campus, and what you may have missed." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card emphasized>
          <h3 className="font-semibold">Upcoming</h3>
          <ul className="mt-3 space-y-3">
            {DATA.events.upcoming.map((e, i) => (
              <li key={i} className="flex items-center justify-between gap-4">
                <div>
                  <p>{e.title}</p>
                  <p className="text-xs text-white/60">{e.date} • {e.where}</p>
                </div>
                <a href={e.reg} className="text-xs underline decoration-white/30 hover:decoration-white/80">Register</a>
              </li>
            ))}
          </ul>
        </Card>
        <Card emphasized>
          <h3 className="font-semibold">Past Events</h3>
          <ul className="mt-3 space-y-3">
            {DATA.events.past.map((e, i) => (
              <li key={i} className="flex items-center justify-between gap-4">
                <div>
                  <p>{e.title}</p>
                  <p className="text-xs text-white/60">{e.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function MediaSection() {
  return (
    <section id="media" className="mt-12">
      <SectionHeader title="Media Gallery" subtitle="Highlights from workshops, hackathons, and talks." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card emphasized>
          <h3 className="font-semibold">Photos</h3>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {DATA.media.photos.map((p, i) => (
              <a key={i} href={p.link} className="aspect-video bg-white/5 rounded-xl flex items-center justify-center text-xs text-white/60 border border-white/10">
                {p.title}
              </a>
            ))}
          </div>
        </Card>
        <Card emphasized>
          <h3 className="font-semibold">Videos</h3>
          <div className="mt-3 grid grid-cols-1 gap-3">
            {DATA.media.videos.map((v, i) => (
              <a key={i} href={v.link} className="aspect-video bg-white/5 rounded-xl flex items-center justify-center text-xs text-white/60 border border-white/10">
                {v.title}
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function PodcastSection() {
  return (
    <section id="podcast" className="mt-12">
      <SectionHeader title="Podcast / Video Series" subtitle="Interviews, roundtables, and research explainers." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.podcast.map((e, i) => (
          <Card key={i}>
            <h4 className="font-semibold">{e.title}</h4>
            <p className="text-xs text-white/60 mt-1">Guest: {e.guest}</p>
            <a href={e.link} className="mt-3 inline-block text-xs underline decoration-white/30 hover:decoration-white/80">Play</a>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SubmitSection() {
  return (
    <section id="submit" className="mt-12">
      <SectionHeader title="Community Contributions" subtitle="Got a project, article, or news to share? Submit below." />
      <Card>
        <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm" placeholder="Your Name" />
          <input className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm" placeholder="Email" />
          <input className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm md:col-span-2" placeholder="Title" />
          <select className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm">
            <option>Project</option>
            <option>Blog</option>
            <option>News</option>
            <option>Event</option>
          </select>
          <input className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm" placeholder="Link (GitHub/Doc)" />
          <textarea className="w-full rounded-xl bg-black border border-white/10 px-3 py-2 text-sm md:col-span-2" placeholder="Short Description" rows={4} />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-xs text-white/60">By submitting, you agree to our editorial guidelines.</p>
            <button className="px-4 py-2 rounded-full border border-white/20 text-sm">Submit</button>
          </div>
        </form>
      </Card>
      <p className="text-xs text-white/60 mt-3">Alternatively, link an external form (Google Forms, Typeform) here: {DATA.submit.form}</p>
    </section>
  );
}

function PartnersSection() {
  return (
    <section id="partners" className="mt-12">
      <SectionHeader title="Partners & Collaborations" subtitle="Organizations that support our mission." />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {DATA.partners.map((p, i) => (
          <Card key={i}>
            <div className="flex items-center gap-3">
              <div className="rounded-full p-[2px] bg-gradient-to-r from-purple-600 to-purple-400"><div className="rounded-full bg-black p-2"><Avatar name={p.name} size={40} /></div></div>
              <div>
                <p className="font-medium">{p.name}</p>
                <a href={p.link} className="text-xs underline decoration-white/30 hover:decoration-white/80">Visit</a>
              </div>
            </div>
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
          <h3 className={cx("text-xl md:text-2xl font-bold", gText)}>Join our community of innovators today</h3>
          <p className="text-white/70 max-w-2xl">Be part of the newsletter, participate in events, publish your work, and shape the future of AI on campus.</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a href="#newsletter" className="px-4 py-2 rounded-full border border-white/20">Subscribe</a>
            <a href="#submit" className="px-4 py-2 rounded-full border border-white/20">Submit Work</a>
            <a href="#forums" className="px-4 py-2 rounded-full border border-white/20">Join Discussion</a>
          </div>
        </div>
      </Card>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Main Page Export
// ────────────────────────────────────────────────────────────────────────────────
export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-24">
        <NewsletterSection />
        <NewsSection />
        <InnovationsSection />
        <ProjectsSection />
        <BlogsSection />
        <SpotlightsSection />
        <ForumsSection />
        <LearningHubSection />
        <EventsSection />
        <MediaSection />
        <PodcastSection />
        <SubmitSection />
        <PartnersSection />
        <OutroCTA />

        <div className="mt-10 text-center">
          <p className={gText}>“Knowledge grows when it’s shared.”</p>
        </div>
      </main>
    </div>
  );
}
