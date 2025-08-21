
import { ArrowRight, Users, Calendar, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import aiNetworkBg from '@/assets/ai-network-bg.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      
      <div className="ai-section text-center text-white relative z-10">
        <div className="ai-fade-in visible">
          {/* Large Circular Logo */}
          <div className="ai-logo-circle-large mx-auto mb-8">
            AI
          </div>
        </div>

        <div className="ai-fade-in visible animation-delay-200">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Where Intelligence Meets{' '}
            <span className="ai-text-gradient">Innovation</span>
          </h1>
        </div>

        <div className="ai-fade-in visible animation-delay-400">
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto text-balance">
            Empowering the next generation of AI innovators through cutting-edge research, 
            collaborative learning, and transformative projects that shape the future.
          </p>
        </div>

        <div className="ai-fade-in visible animation-delay-600">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/membership" className="ai-button-primary group">
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/events" className="ai-button-secondary">
              Explore Events
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="ai-fade-in visible animation-delay-600">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="ai-card bg-white/10 backdrop-blur border-white/20 text-center ai-hover-lift">
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Active Members</div>
            </div>
            <div className="ai-card bg-white/10 backdrop-blur border-white/20 text-center ai-hover-lift animation-delay-200">
              <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Events Hosted</div>
            </div>
            <div className="ai-card bg-white/10 backdrop-blur border-white/20 text-center ai-hover-lift animation-delay-400">
              <Lightbulb className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80">Research Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
