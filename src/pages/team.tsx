import React from "react";
import Navigation from '@/components/Navigation';
import TeamLoading from '@/components/TeamLoading';
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';
import { Instagram, Linkedin, Github } from 'lucide-react';

/**
 * AI Society — Teams Page
 * Design: Black background, white text, purple gradient accents only
 * Tech: React + TailwindCSS (no external deps).
 * Notes:
 *  - Update the `DATA` object with real people, roles, and links.
 *  - Lead & Co‑Lead cards are visually emphasized vs team members.
 *  - Faculty-in-Charge, Secretaries, Domains, and Alumni are included.
 *  - Responsive grid (1–4 columns) + section anchors for in-page nav.
 */

// ────────────────────────────────────────────────────────────────────────────────
// Utilities
// ────────────────────────────────────────────────────────────────────────────────
const cx = (...classes) => classes.filter(Boolean).join(" ");

const gradientText = "text-white";
const gradientBg = "bg-white";
const purpleGradientText = "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300";
const gradientRing = "ring-2 ring-transparent bg-clip-padding"; // used with pseudo gradient wrappers

// Placeholder avatar with initials
function Avatar({ name, size = 80 }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const style = { width: size, height: size };
  return (
    <div
      className={cx(
        "rounded-full flex items-center justify-center text-white font-semibold",
        "shadow-lg",
        "bg-gradient-to-br from-gray-700 to-gray-400"
      )}
      style={style}
      aria-hidden
    >
      <span className="text-xl" aria-hidden>
        {initials}
      </span>
    </div>
  );
}

// Card shells
function CardShell({ children, emphasized = false }) {
  return (
    <div
      className={cx(
        "relative group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1",
        "bg-black/40 backdrop-blur-sm border border-white/10",
        emphasized
          ? "shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
          : "shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
      )}
    >
      {/* glow frame */}
      <div
        className={cx(
          "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300",
          "[background:radial-gradient(60%_60%_at_50%_0%,rgba(168,85,247,0.18),transparent_60%)]"
        )}
      />
      {children}
    </div>
  );
}

function RoleBadge({ children, variant = "member" }) {
  const base = "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-wide";
  if (variant === "lead")
    return (
      <span className={cx(base, "border border-white/20", gradientText)}>
        {children}
      </span>
    );
  if (variant === "colead")
    return (
      <span className={cx(base, "border border-white/10 text-white/90")}>{children}</span>
    );
  return <span className={cx(base, "text-white/70 border border-white/10")}>{children}</span>;
}

function MemberCard({ person, emphasis = "member" }) {
  const { name, role, bio, intro, image, instagram, linkedin, github } = person;
  const isLead = emphasis === "lead";
  const isCoLead = emphasis === "colead";
  const isPresident = emphasis === "president";
  const isVicePresident = emphasis === "vicepresident";
  
  return (
    <CardShell emphasized={isLead || isPresident}>
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <Avatar name={name} size={96} />
          )}
        </div>
        
        <h4 className={cx("font-semibold", isLead || isPresident ? "text-lg" : "text-base")}>{name}</h4>
        <p className={cx("mt-0.5", (isLead || isPresident) ? purpleGradientText : (isCoLead || isVicePresident) ? "text-white/90" : "text-white/70")}>{role}</p>
        
        {/* One-liner intro for leads, co-leads, secretaries, president, vice-president */}
        {intro && <p className="mt-2 text-sm text-white/80 italic">"{intro}"</p>}
        
        {bio && <p className="mt-3 text-sm text-white/70 line-clamp-3">{bio}</p>}
        
        {/* Social Media Icons */}
        <div className="flex gap-3 mt-4">
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </CardShell>
  );
}

function SectionHeader({ title, subtitle, id }) {
  return (
    <div id={id} className="mb-6">
      <h2 className={cx("text-2xl md:text-3xl font-bold", purpleGradientText)}>{title}</h2>
      {subtitle && <p className="mt-2 text-white/70 max-w-3xl">{subtitle}</p>}
      <div className={cx("mt-4 h-px w-full", gradientBg)} />
    </div>
  );
}

function DomainBlock({ domain }) {
  return (
    <section className="mt-12">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h3 className={cx("text-xl md:text-2xl font-semibold", purpleGradientText)}>{domain.name}</h3>
      </div>

      {/* Leads Row */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {domain.lead && <MemberCard person={domain.lead} emphasis="lead" />}
        {domain.coLead && <MemberCard person={domain.coLead} emphasis="colead" />}
      </div>

      {/* Members Grid */}
      {domain.members?.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {domain.members.map((m, idx) => (
            <MemberCard key={idx} person={m} emphasis="member" />
          ))}
        </div>
      )}
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// DATA (Replace with your actual people)
// ────────────────────────────────────────────────────────────────────────────────
const DATA = {
  facultyInCharge: {
    name: "Dr. Murari Mandal",
    role: "Faculty-in-Charge, Department of Computer Science",
    bio: "Guiding the AI Society with research expertise in machine learning and responsible AI.",
    image: null,
    instagram: "#",
    linkedin: "#",
    github: "#",
  },
  president: {
    name: "Nafisa Hassan",
    role: "President",
    intro: "Leading with vision, inspiring innovation in AI",
    bio: "Passionate about advancing AI research and fostering collaborative learning in our community.",
    image: null,
    instagram: "#",
    linkedin: "#",
    github: "#",
  },
  vicePresident: {
    name: "Khusbu Raj",
    role: "Vice President",
    intro: "Bridging ideas and execution for impactful AI solutions",
    bio: "Dedicated to creating meaningful connections between technology and real-world applications.",
    image: "https://drive.google.com/open?id=1PGdxNxCO4cIX3e2Fi7UALvF4cxHr7Flp",
    instagram: "https://www.instagram.com/khusbu_raj_.06",
    linkedin: "https://www.linkedin.com/in/khusbu-raj-bb7571284",
    github: "#",
  },
  secretaries: [
    {
      name: "Arkabrata Roy",
      role: "General Secretary",
      intro: "Orchestrating excellence in every society initiative",
      bio: "Oversees society operations, partnerships, and strategic initiatives.",
      image: "https://drive.google.com/open?id=1XkSQupiCx0dxAczao7_ZIxEIjGfbzdVL",
      instagram: "https://www.instagram.com/_golokdhada_10",
      linkedin: "https://www.linkedin.com/in/arkabrata-roy-b006a6280/",
      github: "https://github.com/arka2024",
    },
    {
      name: "Pratyay Bera",
      role: "Joint Secretary",
      intro: "Connecting minds, building the future of AI together",
      bio: "Coordinates cross-domain collaborations and academic programming.",
      image: "https://drive.google.com/open?id=1l-JvkRqzejRnWDYc0x4somqkCAT9mznA",
      instagram: "https://www.instagram.com/pratyay_bera_1",
      linkedin: "https://www.linkedin.com/in/pratyay-bera-52a5492ab",
      github: "https://github.com/Pratyay-Bera",
    },
    {
      name: "Manish Dey",
      role: "Joint Secretary",
      intro: "Driving innovation through collaborative leadership",
      bio: "Coordinates cross-domain collaborations and academic programming.",
      image: null,
      instagram: "https://www.instagram.com/manishdey_87",
      linkedin: "https://www.linkedin.com/in/manish-dey-096029313",
      github: "https://github.com/foresto-dreamer",
    },
    {
      name: "Venya Kejriwal",
      role: "Joint Secretary",
      intro: "Empowering teams through strategic coordination",
      bio: "Coordinates cross-domain collaborations and academic programming.",
      image: "https://drive.google.com/open?id=1ZHEUU39uH-e2RtL9Z_J4Qd8ABBEx_Ru_",
      instagram: "https://www.instagram.com/vennzss",
      linkedin: "https://www.linkedin.com/in/venya-kejriwal-5646a0333",
      github: "https://github.com/VENNZSS",
    },
  ],
  domains: [
    {
      name: "AI/ML",
      lead: { name: "Sarthakbrata Halder", role: "AI/ML Lead", intro: "Pushing boundaries in machine learning research", bio: "Interests: LLMs, Vision, MLOps.", image: "https://drive.google.com/open?id=10C-hLdViTeCyxZPSkn-YRuF8ujg2utVn", instagram: "https://www.instagram.com/_shale156", linkedin: "https://www.linkedin.com/in/sarthakhal/", github: "https://github.com/Sar-Hal" },
      coLead: { name: "Vaibhav Bhaskar", role: "AI/ML Co‑Lead", intro: "Championing ethical AI development", bio: "NLP, model evaluation, ethics.", image: null, instagram: "#", linkedin: "#", github: "#" },
      members: [
        { name: "Rohan Kumar Das", role: "Research Member", image: null, instagram: "#", linkedin: "https://www.linkedin.com/in/rohan-kumar-das-84446628b/", github: "https://github.com/a34656" },
        { name: "Snehashis Mandal", role: "Research Member", image: null, instagram: "https://www.instagram.com/_smshxsnwr7_", linkedin: "http://linkedin.com/in/snehashismandal005", github: "https://github.com/IamSnehashis" },
        { name: "Udit Senapaty", role: "Research Member", image: "https://drive.google.com/open?id=1PI88bvRUyAzeFpN1YN63M5xIcjy2YbWl", instagram: "#", linkedin: "https://www.linkedin.com/in/udit-senapaty-us2004/", github: "https://github.com/uzzyDizzy/" },
        { name: "Raja Das", role: "Research Member", image: null, instagram: "#", linkedin: "https://www.linkedin.com/in/raja-das-81b1712a8", github: "#" },
        { name: "Swarnajit Mondal", role: "Research Member", image: "https://drive.google.com/open?id=1Oh1SpF-CIQm-Srl-lUTZ9y7t8oPmQYsR", instagram: "https://www.instagram.com/jax___noi", linkedin: "https://www.linkedin.com/in/swarnajit-mondal-4b782b286", github: "https://github.com/SWARNAJ1T" },
        { name: "Sarthak Singh", role: "Research Member", image: "https://drive.google.com/open?id=19eU789av0iwgGswPqlC7xFOPJhUhbDYI", instagram: "https://www.instagram.com/sarthakk2_?igsh=Nm1scjdrMGhwY2d2", linkedin: "https://www.linkedin.com/in/sarthak-singh-3b0488219", github: "https://github.com/sarthakksingh2" },
        { name: "Prabhutva Mehta", role: "Research Member", image: "https://drive.google.com/open?id=1yvktWDI9R6Hz3MqZuYzx0io5OAq7e25U", instagram: "#", linkedin: "https://www.linkedin.com/in/prabhutva-mehta-30a0b330b/", github: "https://github.com/Prxbhutva" },
        { name: "Tithi Biswas", role: "Research Member", image: "https://drive.google.com/open?id=1qzmGiw_e1qfQvacna-VHEoK1XxbL06qZ", instagram: "#", linkedin: "https://www.linkedin.com/in/tithi-biswas-65bba6334", github: "https://github.com/Tithibiswas901" },
      ],
    },
    {
      name: "Web Development",
      lead: {
        name: "Akshat Chauhan",
        role: "Web Dev Lead",
        intro: "The Architect of Systems",
        bio: "Full‑stack, Cloud, DevOps.",
        image: null,
        instagram: "https://www.instagram.com/one._autumnleaf/",
        linkedin: "https://www.linkedin.com/in/akshat-chauhan-ai/",
        github: "https://github.com/AkZcH"
      },
      coLead: {
        name: "Mansha Mundhra",
        role: "Web Dev Co‑Lead",
        intro: "Crafting seamless user experiences",
        bio: "Design systems & tooling.",
        image: "https://drive.google.com/open?id=1SOiwTHIp5ZgRN8W-24zl3l41JgNyfKmy",
        instagram: "https://www.instagram.com/manshamundhra19",
        linkedin: "https://www.linkedin.com/in/mansha-mundhra-155140283/",
        github: "https://github.com/MANSAMUNDHRA"
      },
      members: [
        {
          name: "Ishika Jaiswal",
          role: "Developer",
          image: null,
          instagram: "#",
          linkedin: "#",
          github: "#"
        },
        {
          name: "Ishayan Kundu",
          role: "Developer",
          image: "https://drive.google.com/open?id=1DLtPHf6FiEO8irKCkK_1SHo1Tjass3-N",
          instagram: "https://www.instagram.com/ishayan_06",
          linkedin: "https://www.linkedin.com/in/ishayan-kundu-2790202b0",
          github: "https://github.com/Ishayan06"
        },
        {
          name: "Satvik Upadhyaya",
          role: "Developer",
          image: "https://drive.google.com/open?id=1ECyRkxl2WFgZG6UA0xGGRBqYdWrhb0kZ",
          instagram: "https://www.instagram.com/being_shelbish",
          linkedin: "https://www.linkedin.com/in/satvik-upadhyaya-073978334/",
          github: "https://github.com/SATVIKsynopsis"
        },
        {
          name: "Samridhi Sinha",
          role: "Developer",
          image: "https://drive.google.com/open?id=134TRrLE_UkSTQfxehf-vxsFFUGOQrWQ4",
          instagram: "https://www.instagram.com/samridhi217/",
          linkedin: "https://www.linkedin.com/in/samridhi-sinha-20b170318",
          github: "https://github.com/Samridhi024"
        },
        
      ],
    },
    {
      name: "Game Development",
      lead: { name: "Arjun Malhotra", role: "Game Dev Lead", bio: "Unity, shaders, gameplay." },
      coLead: { name: "Sneha Pillai", role: "Game Dev Co‑Lead", bio: "Art direction & UX." },
      members: [
        { name: "Manav Kapoor", role: "Dev" },
        { name: "Zoya Khan", role: "Level Design" },
        { name: "Rahul S", role: "VFX" },
      ],
    },
    {
      name: "Competitive Programming",
      lead: { name: "Ayush Srivastava", role: "CP Lead", bio: "ICPC, Codeforces Specialist." },
      coLead: { name: "Meera Bansal", role: "CP Co‑Lead", bio: "DP & Graphs." },
      members: [
        { name: "Nitin Joshi", role: "Member" },
        { name: "Lakshmi Nair", role: "Member" },
        { name: "Zubin Irani", role: "Member" },
      ],
    },
    {
      name: "Operations & Public Relations",
      lead: { name: "Samar Kapoor", role: "Ops & PR Lead", bio: "Strategic ops, partnerships." },
      coLead: { name: "Tanya Arora", role: "Ops & PR Co‑Lead", bio: "Campus outreach." },
      members: [
        { name: "Raghav Jain", role: "Ops" },
        { name: "Ritika Bose", role: "PR" },
      ],
    },
    {
      name: "Broadcasting",
      lead: { name: "Farhan Ali", role: "Broadcast Lead", bio: "AV, livestreaming, audio ops." },
      coLead: { name: "Niharika S", role: "Broadcast Co‑Lead", bio: "Editing & post." },
      members: [
        { name: "Yash T", role: "AV" },
        { name: "Payal G", role: "AV" },
      ],
    },
    {
      name: "Social Media",
      lead: { name: "Ritika Menon", role: "Social Media Lead", bio: "Content strategy & analytics." },
      coLead: { name: "Aarav Kulkarni", role: "Social Media Co‑Lead", bio: "Calendar & copy." },
      members: [
        { name: "Divya P", role: "Content" },
        { name: "Omkar R", role: "Community" },
      ],
    },
    {
      name: "Graphic Design",
      lead: { name: "Kriti Sharma", role: "Design Lead", bio: "Brand systems & posters." },
      coLead: { name: "Harsh Vardhan", role: "Design Co‑Lead", bio: "Motion & layouts." },
      members: [
        { name: "Vaidehi S", role: "Designer" },
        { name: "Pranav B", role: "Designer" },
      ],
    },
  ],
  alumni: [
    { name: "Aishwarya Rao", role: "Ex AI/ML Lead (Batch '24)", link: "#" },
    { name: "Siddharth Jain", role: "Ex Web Dev Lead (Batch '23)", link: "#" },
    { name: "Nandini Gupta", role: "Ex Secretary (Batch '23)", link: "#" },
    { name: "Mohit Khanna", role: "Ex CP Lead (Batch '22)", link: "#" },
  ],
};

// ────────────────────────────────────────────────────────────────────────────────
// HERO (Teams intro)
// ────────────────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* subtle backdrop effect */}
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_50%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <img src={aisocTransparentLogo} alt="AISOC Logo" className="w-24 h-24 object-contain" />
          </div>
          <h1 className={cx("text-3xl md:text-5xl font-bold", purpleGradientText)}>Meet Our Team</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Driven by passion. United by innovation. Explore the people who power our society — faculty mentors,
            secretaries, domain leaders, contributors, and alumni.
          </p>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ────────────────────────────────────────────────────────────────────────────────
export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative z-10">
      {/* Uncomment to test team loading animation */}
      <TeamLoading />
      
      <Navigation />
      <div className="pt-16">
        <Hero />

        <main className="mx-auto max-w-7xl px-4 pb-24">
          {/* Faculty-in-Charge */}
          <SectionHeader id="faculty" title="Faculty‑in‑Charge" subtitle="Academic leadership guiding our initiatives." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MemberCard person={DATA.facultyInCharge} emphasis="lead" />
          </div>

          {/* President & Vice President */}
          <section className="mt-12" id="leadership">
            <SectionHeader title="Leadership" subtitle="Visionary leaders driving our society forward." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <MemberCard person={DATA.president} emphasis="president" />
              <MemberCard person={DATA.vicePresident} emphasis="vicepresident" />
            </div>
          </section>

          {/* Secretaries */}
          <section className="mt-12" id="secretaries">
            <SectionHeader title="Secretaries" subtitle="Operational leadership of the society." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DATA.secretaries.map((s, i) => (
                <MemberCard key={i} person={s} emphasis={i === 0 ? "lead" : "colead"} />
              ))}
            </div>
          </section>

          {/* Domains */}
          <section className="mt-12" id="domains">
            <SectionHeader title="Domains" subtitle="Each domain is led by a Lead and Co‑Lead, supported by talented members." />
            {DATA.domains.map((d, i) => (
              <DomainBlock key={i} domain={d} />
            ))}
          </section>

          {/* Alumni */}
          <section className="mt-12" id="alumni">
            <SectionHeader title="Alumni" subtitle="Celebrating those who built the foundation and continue to inspire us." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {DATA.alumni.map((a, i) => (
                <MemberCard key={i} person={a} emphasis="member" />
              ))}
            </div>
          </section>

          {/* Footer Quote */}
          <div className="mt-16 text-center">
            <p className={cx("text-sm", purpleGradientText)}>
              "Our strength lies in the people who power the society."
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}