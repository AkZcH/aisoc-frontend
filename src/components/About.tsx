import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible with artificial intelligence and machine learning.'
    },
    {
      icon: Users,
      title: 'Collaborative Community',
      description: 'Building a diverse, inclusive community where everyone can contribute and grow together.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Fostering a culture of lifelong learning and knowledge sharing across all experience levels.'
    }
  ];

  const committee = [
    {
      name: 'Sarah Chen',
      role: 'President',
      bio: 'PhD candidate in Machine Learning, specialized in Computer Vision and Neural Networks.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Vice President',
      bio: 'Master\'s student in AI Ethics, focusing on responsible AI development and deployment.'
    },
    {
      name: 'Emily Zhang',
      role: 'Research Director',
      bio: 'Undergraduate researcher in Natural Language Processing and Computational Linguistics.'
    },
    {
      name: 'David Kim',
      role: 'Events Coordinator',
      bio: 'Computer Science senior with expertise in AI applications and industry partnerships.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Community Manager',
      bio: 'Graduate student in Human-Computer Interaction, passionate about AI accessibility.'
    },
    {
      name: 'Alex Johnson',
      role: 'Technical Lead',
      bio: 'Research assistant in Robotics and Autonomous Systems, open-source contributor.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="ai-section">
        {/* Our Story */}
        <div className="text-center mb-16 ai-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2019 by a group of passionate computer science students, the University AI Society 
              began as a small study group exploring the fascinating world of artificial intelligence. 
              What started with weekly discussions about neural networks has evolved into one of the most 
              active and influential student organizations on campus.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we're a thriving community of over 500 students, researchers, and faculty members 
              united by our shared passion for AI and its potential to transform the world. From 
              undergraduate beginners to PhD researchers, we welcome everyone eager to learn, 
              collaborate, and innovate in the field of artificial intelligence.
            </p>
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="ai-card text-center ai-fade-in">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To democratize AI education, foster innovative research, and prepare the next generation 
              of AI leaders through hands-on learning and collaborative projects.
            </p>
          </div>
          <div className="ai-card text-center ai-fade-in animation-delay-200">
            <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              A future where AI technology is developed responsibly, accessibly, and ethically, 
              creating positive impact for society and advancing human potential.
            </p>
          </div>
          <div className="ai-card text-center ai-fade-in animation-delay-400">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, collaboration, inclusivity, ethical responsibility, and continuous learning 
              guide everything we do as a community of AI enthusiasts.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 ai-fade-in">
            What Drives Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="ai-card ai-hover-lift ai-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Committee */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 ai-fade-in">
            Executive Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committee.map((member, index) => (
              <div key={index} className="ai-card text-center ai-hover-lift ai-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Advisors */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8 ai-fade-in">
            Faculty Advisors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="ai-card text-center ai-fade-in">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Dr. Jennifer Martinez</h4>
              <p className="text-primary font-medium mb-3">Professor of Computer Science</p>
              <p className="text-sm text-muted-foreground">
                Specializes in Machine Learning and Neural Networks. Published researcher with 
                100+ papers in top-tier AI conferences.
              </p>
            </div>
            <div className="ai-card text-center ai-fade-in animation-delay-200">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Dr. Robert Chen</h4>
              <p className="text-primary font-medium mb-3">Associate Professor of AI Ethics</p>
              <p className="text-sm text-muted-foreground">
                Expert in AI Ethics and Policy. Advisor to government committees on 
                responsible AI development and regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;