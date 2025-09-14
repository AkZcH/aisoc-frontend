import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Loading from '@/components/Loading';
import { Calendar, BookOpen, Users, Github, Award, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import aisocTransparentLogo from '@/assets/AISOC_transparent.png';

const Home = () => {
  const upcomingEvents = [
    {
      date: 'Feb 15',
      title: 'Symposium v2.0',
      description: 'AI Ethics Workshop',
      type: 'Workshop'
    },
    {
      date: 'Feb 22',
      title: 'Chronus v1.0',
      description: '24-hour intensive AI Hackathon with a prizepool of 30K.',
      type: 'Hackathon'
    },
    {
      date: 'Mar 1',
      title: 'Creativista v2.0',
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
    <div className="min-h-screen relative z-10 bg-black">
      {/* Uncomment to test loading animation */}
      {/* <Loading /> */}
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
              <div key={index} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 shadow-md hover:shadow-xl hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
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
      <section className="py-20 bg-black relative z-10">
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
              <div key={index} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 shadow-md hover:shadow-xl hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                  <a href={project.github} className="text-white hover:text-white/80">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
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
      <section className="py-20 bg-black/80 backdrop-blur-sm relative z-10">
        <div className="ai-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
              <Link to="/membership" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-gray-200 text-black font-bold text-lg rounded-xl hover:from-gray-100 hover:to-white hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 group">
                Become a Member
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <Users className="h-12 w-12 text-white mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80">Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80">Events</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">25+</div>
                  <div className="text-white/80">Projects</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <Award className="h-12 w-12 text-white mx-auto mb-4" />
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're proud to collaborate with leading technology companies and research institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-lg font-semibold text-white">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-sm text-white py-20 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src={aisocTransparentLogo} alt="AISOC Logo" className="w-20 h-20 object-contain" />
                {/* <span className="text-2xl font-bold">AISOC</span> */}
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Empowering the next generation of AI innovators through education, research, and collaboration.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link to="/about" className="hover:text-purple-400 transition-colors duration-200">About Us</Link></li>
                <li><Link to="/events" className="hover:text-purple-400 transition-colors duration-200">Events</Link></li>
                <li><Link to="/projects" className="hover:text-purple-400 transition-colors duration-200">Projects</Link></li>
                <li><Link to="/membership" className="hover:text-purple-400 transition-colors duration-200">Membership</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link to="/learning" className="hover:text-purple-400 transition-colors duration-200">Learning Hub</Link></li>
                <li><Link to="/community" className="hover:text-purple-400 transition-colors duration-200">Community</Link></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Connect</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"><Github size={16} />GitHub</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"><Linkedin size={16} />LinkedIn</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"><Instagram size={16} />Instagram</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"><Twitter size={16} />Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/60">
            <p>&copy; 2024 AISOC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;