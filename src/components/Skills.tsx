
import React, { useState } from 'react';
import { Code, Database, Cloud, Brain, Wrench, Globe, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code,
      color: 'from-primary to-primary/80',
      skills: [
        { name: 'Python', level: 90, color: 'bg-primary' },
        { name: 'TypeScript', level: 85, color: 'bg-primary' },
        { name: 'JavaScript', level: 85, color: 'bg-primary' },
        { name: 'Java', level: 75, color: 'bg-primary' },
        { name: 'C++', level: 70, color: 'bg-primary' },
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Globe,
      color: 'from-primary to-primary/80',
      skills: [
        { name: 'React/Next.js', level: 90, color: 'bg-primary' },
        { name: 'FastAPI', level: 85, color: 'bg-primary' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-primary' },
        { name: 'Node.js', level: 80, color: 'bg-primary' },
        { name: 'Express.js', level: 75, color: 'bg-primary' },
      ]
    },
    {
      id: 'databases',
      title: 'Databases & Cloud',
      icon: Database,
      color: 'from-primary to-primary/80',
      skills: [
        { name: 'MongoDB', level: 85, color: 'bg-primary' },
        { name: 'AWS Cloud', level: 70, color: 'bg-primary' },
        { name: 'Supabase', level: 80, color: 'bg-primary' },
        { name: 'Firebase', level: 80, color: 'bg-primary' },
        { name: 'MySQL', level: 75, color: 'bg-primary' },
        
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-primary to-primary/80',
      skills: [
        { name: 'scikit-learn', level: 80, color: 'bg-primary' },
        { name: 'Pytorch', level: 85, color: 'bg-primary' },
        { name: 'MistralAI API', level: 90, color: 'bg-primary' },
        { name: 'Gemini API', level: 85, color: 'bg-primary' },
        { name: 'Hugging Face', level: 80, color: 'bg-primary' },
      ]
    },
    {
      id: 'automation',
      title: 'Automation & Tools',
      icon: Wrench,
      color: 'from-primary to-primary/80',
      skills: [
        { name: 'n8n', level: 90, color: 'bg-primary' },
        { name: 'Git/GitHub', level: 90, color: 'bg-primary' },
        { name: 'Docker', level: 70, color: 'bg-primary' },
        { name: 'Workflow Automation', level: 85, color: 'bg-primary' },
        { name: 'API Integration', level: 90, color: 'bg-primary' },
      ]
    },
    {
      id: 'data-science',
      title: 'Data Science',
      icon: Cloud,
      color: 'from-primary to-primary/80',
      skills: [
        { name: 'pandas', level: 85, color: 'bg-primary' },
        { name: 'NumPy', level: 80, color: 'bg-primary' },
        { name: 'Data Analysis', level: 85, color: 'bg-primary' },
        { name: 'Statistical Modeling', level: 75, color: 'bg-primary' },
        { name: 'Data Visualization', level: 80, color: 'bg-primary' },
      ]
    }
  ];

  const handleCardEnter = (categoryId: string) => {
    setHoveredCategory(categoryId);
  };

  const handleCardLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50"
              onMouseEnter={() => handleCardEnter(category.id)}
              onMouseLeave={handleCardLeave}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                  <ChevronRight 
                    className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${
                      hoveredCategory === category.id ? 'rotate-90 text-primary' : ''
                    }`} 
                  />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="group/skill"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="text-sm font-medium">
                        {skill.name}
                      </Badge>
                      <span className="text-sm font-semibold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{
                            width: hoveredCategory === category.id ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                      
                      {/* Animated glow effect */}
                      <div
                        className={`absolute top-0 h-full ${skill.color} rounded-full opacity-30 blur-sm transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredCategory === category.id ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-muted-foreground">Skill Categories</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border/50 hover:shadow-md transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Avg Proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
