import Navigation from '@/components/Navigation';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
  const [filter, setFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'AI Ethics Workshop',
      date: '2024-02-15',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Science Building, Room 101',
      type: 'workshop',
      description: 'Deep dive into ethical considerations in AI development, including bias detection, fairness metrics, and responsible deployment strategies.',
      capacity: 50,
      registered: 32,
      image: '/api/placeholder/400/200'
    },
    {
      id: 2,
      title: 'Machine Learning Hackathon',
      date: '2024-02-22',
      time: '9:00 AM - 9:00 PM',
      location: 'Innovation Hub',
      type: 'competition',
      description: '48-hour intensive coding competition focusing on real-world ML problems. Teams of 3-4 students compete for prizes worth $5000.',
      capacity: 120,
      registered: 89,
      image: '/api/placeholder/400/200'
    },
    {
      id: 3,
      title: 'Guest Lecture: Dr. Sarah Kim - Medical AI',
      date: '2024-03-01',
      time: '6:00 PM - 7:30 PM',
      location: 'Auditorium A',
      type: 'lecture',
      description: 'Latest research insights in deep learning applications for medical imaging, including diagnostic accuracy improvements and clinical deployment challenges.',
      capacity: 200,
      registered: 156,
      image: '/api/placeholder/400/200'
    },
    {
      id: 4,
      title: 'Natural Language Processing Workshop',
      date: '2024-03-08',
      time: '1:00 PM - 4:00 PM',
      location: 'Lab 205',
      type: 'workshop',
      description: 'Hands-on session covering transformer architectures, fine-tuning BERT models, and building chatbots with modern NLP techniques.',
      capacity: 30,
      registered: 28,
      image: '/api/placeholder/400/200'
    },
    {
      id: 5,
      title: 'AI Research Symposium',
      date: '2024-03-15',
      time: '9:00 AM - 6:00 PM',
      location: 'Main Campus Center',
      type: 'conference',
      description: 'Annual symposium featuring student research presentations, industry panel discussions, and networking opportunities with leading AI researchers.',
      capacity: 300,
      registered: 203,
      image: '/api/placeholder/400/200'
    },
    {
      id: 6,
      title: 'Computer Vision Study Group',
      date: '2024-03-22',
      time: '3:00 PM - 5:00 PM',
      location: 'Study Room 12',
      type: 'study-group',
      description: 'Weekly study group focusing on recent papers in computer vision, object detection, and image segmentation techniques.',
      capacity: 15,
      registered: 12,
      image: '/api/placeholder/400/200'
    }
  ];

  const pastEvents = [
    {
      title: 'Introduction to Deep Learning',
      date: '2024-01-20',
      attendees: 85,
      type: 'workshop'
    },
    {
      title: 'AI in Healthcare Panel',
      date: '2024-01-15',
      attendees: 120,
      type: 'panel'
    },
    {
      title: 'Python for ML Bootcamp',
      date: '2024-01-10',
      attendees: 67,
      type: 'bootcamp'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Events' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'lecture', label: 'Lectures' },
    { value: 'competition', label: 'Competitions' },
    { value: 'conference', label: 'Conferences' },
    { value: 'study-group', label: 'Study Groups' }
  ];

  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter);

  const getEventTypeColor = (type: string) => {
    const colors = {
      workshop: 'bg-blue-100 text-blue-800',
      lecture: 'bg-green-100 text-green-800',
      competition: 'bg-red-100 text-red-800',
      conference: 'bg-purple-100 text-purple-800',
      'study-group': 'bg-yellow-100 text-yellow-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-primary text-white">
        <div className="ai-section text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 ai-fade-in">
            Events & Activities
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto ai-fade-in animation-delay-200">
            Join us for workshops, lectures, competitions, and study groups designed to expand your AI knowledge and connect with the community.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="ai-section">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6 md:mb-0 ai-fade-in">
              Upcoming Events
            </h2>
            
            {/* Filter */}
            <div className="flex items-center space-x-4 ai-fade-in">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="bg-card border border-border rounded-lg px-4 py-2 text-foreground"
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="ai-card ai-hover-lift ai-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1).replace('-', ' ')}
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {event.registered}/{event.capacity} registered
                    </div>
                    <div className="w-20 bg-secondary rounded-full h-2 mt-1">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Capacity: {event.capacity} participants
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {event.description}
                </p>

                <button className="ai-button-primary w-full group">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No events found</h3>
              <p className="text-muted-foreground">Try adjusting your filter or check back later for new events.</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-secondary">
        <div className="ai-section">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 ai-fade-in">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="ai-card text-center ai-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getEventTypeColor(event.type)}`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-2">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-sm text-muted-foreground">
                  {event.attendees} attendees
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 ai-fade-in">
            <button className="ai-button-secondary">
              View All Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="ai-section text-center">
          <h2 className="text-4xl font-bold mb-6 ai-fade-in">
            Never Miss an Event
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto ai-fade-in animation-delay-200">
            Subscribe to our newsletter to get notified about upcoming events, workshops, and exclusive opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto ai-fade-in animation-delay-400">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <button className="ai-button-secondary bg-white text-primary hover:bg-white/90">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;