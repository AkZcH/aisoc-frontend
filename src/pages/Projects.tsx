import Navigation from '@/components/Navigation';
import { Github, ExternalLink, Users, Calendar, Award, Filter, Search } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const ongoingProjects = [
    {
      id: 1,
      title: 'AI-Powered Campus Assistant',
      description: 'Intelligent chatbot helping students navigate university services, course registration, and academic resources using natural language processing and knowledge graphs.',
      category: 'nlp',
      technologies: ['Python', 'NLP', 'React', 'MongoDB', 'FastAPI'],
      teamSize: 6,
      startDate: '2024-01-15',
      status: 'In Progress',
      progress: 70,
      github: 'https://github.com/ai-society/campus-assistant',
      demo: 'https://campus-ai.demo.com',
      lead: 'Sarah Chen',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'Sustainable Energy Predictor',
      description: 'Machine learning model predicting renewable energy generation patterns for campus optimization using IoT sensors and weather data integration.',
      category: 'ml',
      technologies: ['TensorFlow', 'Python', 'IoT', 'Time Series Analysis', 'Docker'],
      teamSize: 4,
      startDate: '2023-11-20',
      status: 'Testing',
      progress: 85,
      github: 'https://github.com/ai-society/energy-predictor',
      demo: 'https://energy-predict.demo.com',
      lead: 'Michael Rodriguez',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'Computer Vision Art Generator',
      description: 'Neural network creating artistic interpretations of campus landmarks using generative adversarial networks and style transfer techniques.',
      category: 'cv',
      technologies: ['PyTorch', 'GANs', 'Computer Vision', 'Style Transfer', 'Flask'],
      teamSize: 5,
      startDate: '2024-02-01',
      status: 'In Progress',
      progress: 45,
      github: 'https://github.com/ai-society/art-generator',
      demo: null,
      lead: 'Emily Zhang',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Medical Image Analysis Tool',
      description: 'Deep learning application for automated detection of anomalies in medical imaging, supporting radiologists in diagnostic processes.',
      category: 'healthcare',
      technologies: ['TensorFlow', 'Medical Imaging', 'CNN', 'Python', 'DICOM'],
      teamSize: 7,
      startDate: '2023-09-10',
      status: 'Publication Ready',
      progress: 95,
      github: 'https://github.com/ai-society/medical-imaging',
      demo: 'https://medical-ai.demo.com',
      lead: 'David Kim',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'Smart Traffic Optimization',
      description: 'AI system optimizing campus traffic flow using real-time data analysis and predictive modeling to reduce congestion and improve safety.',
      category: 'optimization',
      technologies: ['Reinforcement Learning', 'Python', 'OpenCV', 'Real-time Analytics'],
      teamSize: 8,
      startDate: '2024-01-05',
      status: 'In Progress',
      progress: 60,
      github: 'https://github.com/ai-society/traffic-optimizer',
      demo: null,
      lead: 'Lisa Thompson',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Language Learning Companion',
      description: 'Personalized AI tutor for language learning using speech recognition, natural language generation, and adaptive learning algorithms.',
      category: 'education',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'React Native'],
      teamSize: 5,
      startDate: '2023-12-01',
      status: 'Beta Testing',
      progress: 80,
      github: 'https://github.com/ai-society/language-companion',
      demo: 'https://lang-ai.demo.com',
      lead: 'Alex Johnson',
      image: '/api/placeholder/400/300'
    }
  ];

  const completedProjects = [
    {
      title: 'Student Performance Predictor',
      description: 'ML model predicting student success rates using academic and behavioral data.',
      achievements: ['Published in IEEE Conference', 'Best Student Paper Award'],
      technologies: ['Scikit-learn', 'Pandas', 'Jupyter'],
      completedDate: '2023-12-15'
    },
    {
      title: 'Automated Essay Scoring',
      description: 'NLP system for automated evaluation of student essays with detailed feedback.',
      achievements: ['Deployed in 3 courses', '95% accuracy rate'],
      technologies: ['BERT', 'Transformers', 'Python'],
      completedDate: '2023-10-20'
    },
    {
      title: 'COVID-19 Spread Predictor',
      description: 'Epidemiological model for predicting virus spread patterns on campus.',
      achievements: ['Used by university administration', 'Featured in local news'],
      technologies: ['SIR Models', 'Data Visualization', 'R'],
      completedDate: '2023-08-10'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'nlp', label: 'Natural Language Processing' },
    { value: 'cv', label: 'Computer Vision' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'healthcare', label: 'Healthcare AI' },
    { value: 'education', label: 'Educational AI' },
    { value: 'optimization', label: 'Optimization' }
  ];

  const filteredProjects = ongoingProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    const colors = {
      'In Progress': 'bg-blue-100 text-blue-800',
      'Testing': 'bg-yellow-100 text-yellow-800',
      'Beta Testing': 'bg-orange-100 text-orange-800',
      'Publication Ready': 'bg-green-100 text-green-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-primary text-white">
        <div className="ai-section text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 ai-fade-in">
            Research & Projects
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto ai-fade-in animation-delay-200">
            Discover the innovative AI projects our community is building to solve real-world problems and advance the field of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-secondary">
        <div className="ai-section">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-lg ai-fade-in">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground"
              />
            </div>
            
            <div className="flex items-center space-x-4 ai-fade-in animation-delay-200">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
                className="bg-background border border-border rounded-lg px-4 py-3 text-foreground min-w-[200px]"
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20">
        <div className="ai-section">
          <h2 className="text-4xl font-bold text-foreground mb-12 ai-fade-in">
            Ongoing Projects ({filteredProjects.length})
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="ai-card ai-hover-lift ai-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex space-x-2">
                    <a href={project.github} className="text-primary hover:text-primary/80">
                      <Github className="h-5 w-5" />
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="text-primary hover:text-primary/80">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    Team Lead: {project.lead} • {project.teamSize} members
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Started: {new Date(project.startDate).toLocaleDateString()}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-secondary">
        <div className="ai-section">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 ai-fade-in">
            Completed Projects & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="ai-card ai-hover-lift ai-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center text-sm text-primary">
                      <Award className="w-3 h-3 mr-2" />
                      {achievement}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground">
                  Completed: {new Date(project.completedDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="ai-section text-center">
          <h2 className="text-4xl font-bold mb-6 ai-fade-in">
            Have a Project Idea?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto ai-fade-in animation-delay-200">
            Join our community and turn your AI ideas into reality. We provide mentorship, resources, and a collaborative environment to bring your projects to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center ai-fade-in animation-delay-400">
            <button className="ai-button-secondary bg-white text-primary hover:bg-white/90">
              Submit Project Proposal
            </button>
            <button className="ai-button-secondary border-white text-white hover:bg-white hover:text-primary">
              Join Existing Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;