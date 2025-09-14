import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';

/**
 * AI Society — Events Page
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
const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to Machine Learning",
    date: "2024-03-15",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Auditorium",
    capacity: 100,
    description: "Learn the fundamentals of ML with hands-on examples and real-world applications.",
    type: "workshop",
    featured: true
  },
  {
    id: 2,
    title: "AI Ethics Panel Discussion",
    date: "2024-03-20",
    time: "6:00 PM - 8:00 PM",
    location: "Conference Room A",
    capacity: 50,
    description: "Join industry experts discussing the ethical implications of AI development.",
    type: "seminar",
    featured: false
  },
  {
    id: 3,
    title: "Deep Learning Workshop",
    date: "2024-03-25",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Lab 1",
    capacity: 30,
    description: "Hands-on workshop covering neural networks and deep learning frameworks.",
    type: "workshop",
    featured: true
  },
  {
    id: 4,
    title: "AI Startup Pitch Competition",
    date: "2024-04-01",
    time: "1:00 PM - 6:00 PM",
    location: "Innovation Hub",
    capacity: 200,
    description: "Students present AI-powered startup ideas to industry judges.",
    type: "competition",
    featured: false
  }
];

const pastEvents = [
  { title: "Computer Vision Bootcamp", date: "2024-02-15", attendees: 85, type: "workshop" },
  { title: "NLP Research Symposium", date: "2024-02-10", attendees: 120, type: "seminar" },
  { title: "AI Hackathon 2024", date: "2024-01-28", attendees: 150, type: "competition" },
  { title: "Robotics Workshop", date: "2024-01-20", attendees: 60, type: "workshop" },
  { title: "Industry Networking Night", date: "2024-01-15", attendees: 95, type: "networking" },
  { title: "TensorFlow Study Group", date: "2024-01-10", attendees: 40, type: "study-group" }
];

const filterOptions = [
  { value: 'all', label: 'All Events' },
  { value: 'workshop', label: 'Workshops' },
  { value: 'seminar', label: 'Seminars' },
  { value: 'competition', label: 'Competitions' },
  { value: 'networking', label: 'Networking' }
];

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
          <h1 className="text-3xl md:text-5xl font-bold">Events & Workshops</h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Join our community events, workshops, and competitions to learn, network, and grow in the field of AI.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#upcoming" className="px-4 py-2 rounded-full border border-white/20">View Events</a>
            <a href="#newsletter" className="px-4 py-2 rounded-full border border-white/20">Subscribe</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function UpcomingEventsSection() {
  const [filter, setFilter] = useState('all');
  
  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter);

  return (
    <section id="upcoming" className="mt-12">
      <SectionHeader
        title="Upcoming Events"
        subtitle="Don't miss out on our latest workshops, seminars, and networking opportunities."
        actions={
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-white/70" />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white backdrop-blur-sm"
            >
              {filterOptions.map(option => (
                <option key={option.value} value={option.value} className="bg-black text-white">
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {filteredEvents.map((event) => (
          <Card key={event.id} emphasized={event.featured}>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              {event.featured && (
                <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                  Featured
                </span>
              )}
            </div>

            <div className="space-y-2 mb-4 text-sm text-white/70">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-white" />
                {new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-white" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-white" />
                {event.location}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-white" />
                Capacity: {event.capacity} participants
              </div>
            </div>

            <p className="text-white/80 mb-6">{event.description}</p>

            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20">
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
              <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-all duration-300 group">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform inline" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-white/70 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
          <p className="text-white/70">Try adjusting your filter or check back later for new events.</p>
        </div>
      )}
    </section>
  );
}

function PastEventsSection() {
  return (
    <section id="past" className="mt-12">
      <SectionHeader
        title="Past Events"
        subtitle="Take a look at our recent successful events and workshops."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastEvents.map((event, index) => (
          <Card key={index}>
            <div className="text-center">
              <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-white/20 text-white">
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
              <p className="text-white/70 mb-2">
                {new Date(event.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-sm text-white/60">{event.attendees} attendees</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-transparent text-white border border-white/20 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition-all duration-300">
          View All Past Events
        </button>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section id="newsletter" className="mt-12">
      <Card emphasized>
        <div className="text-center">
          <h2 className={cx("text-2xl md:text-3xl font-bold mb-4", gText)}>Never Miss an Event</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events, workshops, and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm"
            />
            <button className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </Card>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────────────────
// Main Page Export
// ────────────────────────────────────────────────────────────────────────────────
export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-16">
        <Hero />

        <main className="mx-auto max-w-7xl px-4 pb-24">
          <UpcomingEventsSection />
          <PastEventsSection />
          <NewsletterSection />

          <div className="mt-10 text-center">
            <p className={gText}>"Great things happen when minds meet."</p>
          </div>
        </main>
      </div>
    </div>
  );
}