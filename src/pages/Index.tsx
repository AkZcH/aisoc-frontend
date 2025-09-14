import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { Calendar, BookOpen, Users, Github, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const upcomingEvents = [
    {
      date: 'Feb 15',
      title: 'AI Ethics Workshop',
      description: 'Exploring responsible AI development and deployment practices.',
      type: 'Workshop'
    },
    {
      date: 'Feb 22',
      title: 'Machine Learning Hackathon',
      description: '48-hour intensive coding competition with industry prizes.',
      type: 'Competition'
    },
    {
      date: 'Mar 1',
      title: 'Guest Lecture: Dr. Sarah Kim',
      description: 'Deep Learning for Medical Imaging - Latest Research Insights.',
      type: 'Lecture'
    }
  ];

  const featuredProjects = [
    {
      title: 'AI-Powered Campus Assistant',
      description: 'Chatbot helping students navigate university services and resources.',
      tech: ['NLP', 'Python', 'React'],
      github: '#'
    },
    {
      title: 'Sustainable Energy Predictor',
      description: 'ML model predicting renewable energy generation for campus optimization.',
      tech: ['TensorFlow', 'Time Series', 'IoT'],
      github: '#'
    },
    {
      title: 'Computer Vision Art Generator',
      description: 'Neural network creating artistic interpretations of campus landmarks.',
      tech: ['GANs', 'PyTorch', 'Computer Vision'],
      github: '#'
    }
  ];

  const partners = [
    'Microsoft', 'Google AI', 'NVIDIA', 'OpenAI', 'IBM Research', 'Meta AI'
  ];

  return (
    <div className="min-h-screen relative z-10">
      <Navigation />
      <Hero />
      
      {/* Quick Highlights Carousel */}
      <section className="py-20 bg-primary/95 backdrop-blur-sm text-white relative z-10">
        <div className="ai-section">
          <div className="text-center mb-16 ai-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's Happening
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Stay up to date with our latest events, research breakthroughs, and community activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="ai-card bg-white/10 backdrop-blur border-white/20 ai-hover-lift ai-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-white/80">{event.type}</span>
                  <span className="text-sm font-bold text-white">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                <p className="text-white/80 mb-4">{event.description}</p>
                <Link to="/events" className="text-white hover:text-white/80 font-medium flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-black/80 backdrop-blur-sm relative z-10">
        <div className="ai-section">
          <div className="text-center mb-16 ai-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the innovative AI projects our members are building to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={index} className="ai-card ai-hover-lift ai-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <a href={project.github} className="text-primary hover:text-primary/80">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center ai-fade-in">
            <Link to="/projects" className="ai-button-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-20 bg-black/30 backdrop-blur-sm relative z-10">
        <div className="ai-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="ai-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Connect with like-minded students, access exclusive resources, and be part of 
                cutting-edge AI research and development projects.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="text-white">Access to exclusive workshops and seminars</span>
                </div>
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="text-white">Mentorship from faculty and industry experts</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-white">Opportunity to lead research projects</span>
                </div>
              </div>
              <Link to="/membership" className="ai-button-primary">
                Become a Member
              </Link>
            </div>
            <div className="ai-fade-in animation-delay-400">
              <div className="grid grid-cols-2 gap-6">
                <div className="ai-card text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80">Members</div>
                </div>
                <div className="ai-card text-center">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">Events</div>
                </div>
                <div className="ai-card text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">25+</div>
                  <div className="text-white/80">Projects</div>
                </div>
                <div className="ai-card text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">15+</div>
                  <div className="text-white/80">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <section className="py-20 bg-black/80 backdrop-blur-sm relative z-10">
        <div className="ai-section">
          <div className="text-center mb-16 ai-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're proud to collaborate with leading technology companies and research institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="ai-card text-center hover:opacity-100 transition-opacity ai-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-lg font-semibold text-white">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 backdrop-blur-sm text-white py-16 relative z-10">
        <div className="ai-section">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="ai-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="ai-logo-circle">AI</div>
                <span className="text-xl font-bold">AI Society</span>
              </div>
              <p className="text-white/80 mb-4">
                Empowering the next generation of AI innovators through education, research, and collaboration.
              </p>
            </div>
            <div className="ai-fade-in animation-delay-200">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/events" className="hover:text-white">Events</Link></li>
                <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
                <li><Link to="/membership" className="hover:text-white">Membership</Link></li>
              </ul>
            </div>
            <div className="ai-fade-in animation-delay-400">
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/learning" className="hover:text-white">Learning Hub</Link></li>
                <li><Link to="/community" className="hover:text-white">Community</Link></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Newsletter</a></li>
              </ul>
            </div>
            <div className="ai-fade-in animation-delay-600">
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white">Discord</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 University AI Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
