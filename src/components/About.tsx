import React, { useMemo, useState, useEffect } from "react";
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';

/**
 * AI Society — About Page
 * Theme: Black background, white text, purple gradient accents only
 * Stack: React + TailwindCSS (single-file component)
 * Notes:
 *  - Swap placeholder DATA with real society content.
 *  - Includes: Hero, Intro, Mission/Vision/Values, Leadership, Timeline, Activities,
 *    Partnerships, Achievements (animated counters), Testimonials, Ethics & Responsibility,
 *    Join Us CTA, Gallery, FAQs, Contact, Footer with circular logo container.
 */

// ────────────────────────────────────────────────────────────────────────────────
// Utilities & Design Tokens
// ────────────────────────────────────────────────────────────────────────────────
const cx = (...c) => c.filter(Boolean).join(" ");
const gText = "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300";
const gBg = "bg-gradient-to-r from-purple-600 to-purple-400";

function Avatar({ name = "AI", size = 72 }) {
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

function Card({ children, className = "", as: As = "div" }) {
  return (
    <As
      className={cx(
        "relative group rounded-2xl p-5 bg-black/40 border border-white/10 backdrop-blur-sm",
        "hover:-translate-y-[2px] transition-transform duration-300",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.14),transparent_60%)]" />
      {children}
    </As>
  );
}

function SectionHeader({ id, eyebrow, title, subtitle, actions }) {
  return (
    <header id={id} className="mb-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          {eyebrow && (
            <p className="text-xs tracking-widest text-white/60 uppercase">{eyebrow}</p>
          )}
          <h2 className={cx("text-2xl md:text-3xl font-bold", gText)}>{title}</h2>
          {subtitle && <p className="mt-2 text-white/70 max-w-3xl">{subtitle}</p>}
        </div>
        {actions}
      </div>
      <GradientRule />
    </header>
  );
}

// Simple accordion
function AccordionItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-white/10 rounded-xl">
      <button
        className="w-full text-left px-4 py-3 flex items-center justify-between"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <span className="text-white/60">{open ? "–" : "+"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-white/80">{a}</div>}
    </div>
  );
}

// Animated counter for achievements
function useCounter(target, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 12);
    const id = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= target) clearInterval(id);
    }, stepTime);
    return () => clearInterval(id);
  }, [target, duration]);
  return value;
}

// ────────────────────────────────────────────────────────────────────────────────
// DATA (replace with real content)
// ────────────────────────────────────────────────────────────────────────────────
const DATA = {
  hero: {
    title: "Empowering the Future of AI, Together.",
    subtitle:
      "The University AI Society is a hub for innovation, research, and collaboration in Artificial Intelligence.",
  },
  intro: {
    who:
      "We are a student-driven organization uniting researchers, builders, and enthusiasts to explore and advance Artificial Intelligence across disciplines.",
    why:
      "We exist to bridge classrooms, labs, and industry—giving students access to hands-on learning, mentorship, and real-world impact.",
    unique:
      "From faculty-collab research sprints to industry-led workshops, we run programs that turn curiosity into contributions.",
  },
  values: [
    { name: "Innovation", desc: "We encourage bold ideas and rapid prototyping." },
    { name: "Collaboration", desc: "We work across disciplines, backgrounds, and teams." },
    { name: "Ethics", desc: "We champion safety, fairness, and responsible use." },
    { name: "Sharing", desc: "We publish, teach, and open-source our work." },
    { name: "Inclusion", desc: "We welcome newcomers and diverse perspectives." },
  ],
  leadership: {
    faculty: [
      { name: "Prof. Meera Kulkarni", title: "Faculty-in-Charge", bio: "Robotics & Learning; leads Human-In-The-Loop Lab." },
    ],
    executives: [
      { name: "Arjun Verma", title: "President" },
      { name: "Ananya Gupta", title: "Vice President (Research)" },
      { name: "Dev Patel", title: "Secretary" },
      { name: "Sara Iqbal", title: "Treasurer" },
    ],
  },
  timeline: [
    { year: "2022", title: "Society Founded", desc: "Kickstarted with 25 members and a weekend ML bootcamp." },
    { year: "2023", title: "First Hackathon", desc: "200+ participants; 18 open-source toolkits released." },
    { year: "2024", title: "Industry Partnerships", desc: "Collaborations with 5 companies and 2 labs; campus AI summit." },
    { year: "2025", title: "Research Track", desc: "Student papers in workshops; evaluation toolkit v2 launched." },
  ],
  activities: [
    { name: "Workshops & Seminars", desc: "Deep dives on ML, DL, NLP, CV, GenAI with hands-on labs." },
    { name: "Research Collaborations", desc: "Faculty-guided projects, reading groups, and paper sprints." },
    { name: "Hackathons & Competitions", desc: "Internal build sprints and external contest participation." },
    { name: "Industry Networking", desc: "Guest talks, mentorship, and career pathways." },
    { name: "Community Projects", desc: "Open-source tools and AI-for-good initiatives." },
  ],
  partners: [
    { name: "NVIDIA University" },
    { name: "Hugging Face" },
    { name: "Open Source Lab" },
  ],
  achievements: [
    { label: "Active Members", value: 320 },
    { label: "Workshops Conducted", value: 54 },
    { label: "Papers & Posters", value: 12 },
    { label: "Partners & Labs", value: 7 },
  ],
  testimonials: [
    {
      name: "Kriti Sharma",
      quote:
        "I found mentors, co-authors, and friends. The Society made research approachable and fun.",
      role: "NLP Track Lead",
    },
    {
      name: "Ayush Srivastava",
      quote:
        "Weekly code clinics helped me ship my first production model and win a hackathon.",
      role: "Competitive Programming Lead",
    },
  ],
  ethics: {
    text:
      "We commit to responsible AI. Our events include fairness, interpretability, and safety sessions, and our projects follow an ethics checklist.",
    bullets: [
      "Model Cards & Datasheets with every release",
      "Bias audits in tutorials & projects",
      "Privacy-first data handling",
      "Accessibility & inclusion principles",
    ],
  },
  gallery: [
    { title: "Hackathon Night" },
    { title: "Guest Lecture" },
    { title: "Workshop" },
    { title: "Reading Group" },
  ],
  faqs: [
    { q: "Do I need prior experience?", a: "No. We have on-ramps for beginners and peer mentors to help you start." },
    { q: "How often are events hosted?", a: "We run weekly sessions during term and monthly hackathons." },
    { q: "Can non‑CS students join?", a: "Absolutely. Interdisciplinary perspectives are a strength." },
    { q: "How do I join a research project?", a: "Apply to a track (NLP, CV, Systems) and attend a reading sprint to meet teams." },
  ],
  contact: {
    email: "ai.society@university.edu",
    location: "Innovation Lab, Building C, Room 204",
    socials: [
      { name: "LinkedIn", link: "#" },
      { name: "X/Twitter", link: "#" },
      { name: "Instagram", link: "#" },
      { name: "YouTube", link: "#" },
    ],
  },
};

// ────────────────────────────────────────────────────────────────────────────────
// Navbar + Hero
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
          <h1 className="text-3xl md:text-5xl font-bold">{DATA.hero.title}</h1>
          <p className="mt-3 max-w-3xl text-white/70">{DATA.hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#activities" className="px-4 py-2 rounded-full border border-white/20">Explore Our Work</a>
            <a href="#contact" className="px-4 py-2 rounded-full border border-white/20">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Section Components
// ────────────────────────────────────────────────────────────────────────────────
function IntroSection() {
  return (
    <section id="intro" className="mt-10">
      <SectionHeader
        eyebrow="Who We Are"
        title="About the Society"
        subtitle="A community of students, researchers, and builders advancing Artificial Intelligence."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <h3 className="font-semibold">Who We Are</h3>
          <p className="mt-2 text-white/80">{DATA.intro.who}</p>
        </Card>
        <Card className="lg:col-span-1">
          <h3 className="font-semibold">Why We Exist</h3>
          <p className="mt-2 text-white/80">{DATA.intro.why}</p>
        </Card>
        <Card className="lg:col-span-1">
          <h3 className="font-semibold">What Makes Us Unique</h3>
          <p className="mt-2 text-white/80">{DATA.intro.unique}</p>
        </Card>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section id="mission" className="mt-12">
      <SectionHeader
        eyebrow="Mission, Vision & Values"
        title="Our Guiding Principles"
        subtitle="Clear goals with values that shape how we learn, build, and share."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className={cx("font-semibold", gText)}>Mission</h3>
          <p className="mt-2 text-white/80">
            To foster innovation and knowledge in AI by bridging academia, research, and industry.
          </p>
        </Card>
        <Card>
          <h3 className={cx("font-semibold", gText)}>Vision</h3>
          <p className="mt-2 text-white/80">
            To become a leading student-led AI community that shapes ethical, cutting-edge innovation.
          </p>
        </Card>
        <Card>
          <h3 className={cx("font-semibold", gText)}>Values</h3>
          <ul className="mt-3 space-y-2 list-disc list-inside text-white/80">
            {DATA.values.map((v, i) => (
              <li key={i}><span className="font-medium">{v.name}:</span> {v.desc}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section id="leadership" className="mt-12">
      <SectionHeader
        eyebrow="Leadership"
        title="Faculty & Executive Team"
        subtitle="Guided by experienced mentors and a driven student leadership."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Faculty */}
        <Card>
          <h3 className={cx("font-semibold", gText)}>Faculty Advisors</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.leadership.faculty.map((m, i) => (
              <Card key={i}>
                <div className="flex items-start gap-4">
                  <Avatar name={m.name} size={56} />
                  <div className="min-w-0">
                    <h4 className="font-semibold">{m.name}</h4>
                    <p className="text-xs text-white/60 mt-1">{m.title}</p>
                    <p className="mt-2 text-white/80">{m.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
        {/* Execs */}
        <Card>
          <h3 className={cx("font-semibold", gText)}>Executive Committee</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DATA.leadership.executives.map((m, i) => (
              <Card key={i}>
                <div className="flex items-start gap-4">
                  <Avatar name={m.name} size={56} />
                  <div className="min-w-0">
                    <h4 className="font-semibold">{m.name}</h4>
                    <p className="text-xs text-white/60 mt-1">{m.title}</p>
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

function TimelineSection() {
  return (
    <section id="timeline" className="mt-12">
      <SectionHeader
        eyebrow="History & Milestones"
        title="Our Journey"
        subtitle="Key moments that shaped the Society."
      />
      <div className="relative pl-6">
        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-purple-600 to-purple-400" />
        <div className="space-y-6">
          {DATA.timeline.map((t, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-black border border-white/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              </div>
              <Card>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-sm text-white/60">{t.year}</span>
                  <h4 className="font-semibold">{t.title}</h4>
                </div>
                <p className="mt-2 text-white/80">{t.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section id="activities" className="mt-12">
      <SectionHeader
        eyebrow="What We Do"
        title="Programs & Activities"
        subtitle="Hands-on learning, research, competitions, and networking."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DATA.activities.map((a, i) => (
          <Card key={i}>
            <h4 className="font-semibold">{a.name}</h4>
            <p className="mt-2 text-white/80">{a.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section id="partners" className="mt-12">
      <SectionHeader
        eyebrow="Collaborations"
        title="Partners & Labs"
        subtitle="Organizations that support our mission."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {DATA.partners.map((p, i) => (
          <Card key={i}>
            <div className="flex items-center gap-3">
              <div className="rounded-full p-[2px] bg-gradient-to-r from-purple-600 to-purple-400"><div className="rounded-full bg-black p-2"><Avatar name={p.name} size={40} /></div></div>
              <div>
                <p className="font-medium">{p.name}</p>
                <a href="#" className="text-xs underline decoration-white/30 hover:decoration-white/80">Visit</a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="mt-12">
      <SectionHeader
        eyebrow="Impact"
        title="Achievements & Recognition"
        subtitle="Highlights that reflect our community's growth and outcomes."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {DATA.achievements.map((s, i) => (
          <Card key={i} className="text-center">
            <Counter value={s.value} />
            <p className="text-sm text-white/70 mt-1">{s.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Counter({ value }) {
  const v = useCounter(value);
  return (
    <p className={cx("text-3xl md:text-4xl font-bold", gText)}>{v}</p>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="mt-12">
      <SectionHeader
        eyebrow="Community Voices"
        title="What Members Say"
        subtitle="Stories from students who shaped and were shaped by the Society."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DATA.testimonials.map((t, i) => (
          <Card key={i}>
            <p className="text-white/90">“{t.quote}”</p>
            <div className="mt-4 flex items-center gap-3">
              <Avatar name={t.name} size={48} />
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-white/60">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function EthicsSection() {
  return (
    <section id="ethics" className="mt-12">
      <SectionHeader
        eyebrow="Responsible AI"
        title="Ethics & Social Responsibility"
        subtitle="How we design, build, and teach with care."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <p className="text-white/80">{DATA.ethics.text}</p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {DATA.ethics.bullets.map((b, i) => (
              <li key={i} className="border border-white/10 rounded-xl px-3 py-2 text-sm">{b}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h4 className="font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="underline decoration-white/30 hover:decoration-white/80">Ethics Checklist Template</a></li>
            <li><a href="#" className="underline decoration-white/30 hover:decoration-white/80">Model Card Example</a></li>
            <li><a href="#" className="underline decoration-white/30 hover:decoration-white/80">Fairness Workshop Slides</a></li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="mt-12">
      <SectionHeader
        eyebrow="Moments"
        title="Gallery"
        subtitle="Snapshots from workshops, hackathons, and talks."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {DATA.gallery.map((g, i) => (
          <a key={i} href="#" className="aspect-video bg-white/5 rounded-xl flex items-center justify-center text-xs text-white/60 border border-white/10">
            {g.title}
          </a>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faqs" className="mt-12">
      <SectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Everything you might want to know before joining."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DATA.faqs.map((f, i) => (
          <AccordionItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mt-12">
      <SectionHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We’d love to collaborate, mentor, or speak at your event."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <h4 className="font-semibold">Email</h4>
          <p className="text-white/80 mt-2">{DATA.contact.email}</p>
        </Card>
        <Card>
          <h4 className="font-semibold">Office</h4>
          <p className="text-white/80 mt-2">{DATA.contact.location}</p>
        </Card>
        <Card>
          <h4 className="font-semibold">Socials</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {DATA.contact.socials.map((s, i) => (
              <a key={i} href={s.link} className="px-3 py-1 rounded-full text-xs border border-white/20">{s.name}</a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function OutroCTA() {
  return (
    <section className="mt-16">
      <Card>
        <div className="flex flex-col items-center text-center gap-3">
          <h3 className={cx("text-xl md:text-2xl font-bold", gText)}>Become a Member</h3>
          <p className="text-white/70 max-w-2xl">Join the Society to learn, build, and lead. Access mentorship, projects, and events.</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a href="#contact" className="px-4 py-2 rounded-full border border-white/20">Apply Now</a>
            <a href="#activities" className="px-4 py-2 rounded-full border border-white/20">Explore Activities</a>
          </div>
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Circular logo container in footer */}
          <div className="rounded-full p-[2px] bg-gradient-to-r from-purple-600 to-purple-400">
            <div className="rounded-full bg-black p-2">
              <Avatar name="AI" size={36} />
            </div>
          </div>
          <div>
            <p className="font-semibold">AI Society</p>
            <p className="text-xs text-white/60">Empowering the Future of AI, Together.</p>
          </div>
        </div>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} AI Society. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Main Page Export
// ────────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      <main className="mx-auto max-w-7xl px-4 pb-24">
        <IntroSection />
        <MissionSection />
        <LeadershipSection />
        <TimelineSection />
        <ActivitiesSection />
        <PartnersSection />
        <AchievementsSection />
        <TestimonialsSection />
        <EthicsSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
        <OutroCTA />
        <div className="mt-10 text-center">
          <p className={gText}>“Knowledge grows when it’s shared.”</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
