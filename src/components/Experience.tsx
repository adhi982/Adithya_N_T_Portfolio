
import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp, Briefcase, GraduationCap } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const experienceItems = [
    {
      title: 'Deep Research AI Agent - Internship',
      organization: 'LimitlessMind.AI',
      location: 'Remote',
      period: 'Jan 2025 - Mar 2025',
      description: 'Spearheaded construction of LimitlessAI.AI web application integrating AI agents for innovative project UI. Implemented real-time mind map generation, supporting 100+ nodes per map and 50+ user prompts per day.',
      achievements: [
        'Built NLP services with 50+ user prompts processing capability',
        'Developed web app with caching, authentication, database access',
        'Designed and deployed fully functional tech stack with backend automation',
        'Utilized React, HTML, CSS, Three.js, n8n automation, Gemini API, Supabase DB'
      ],
      skills: ['React', 'Three.js', 'n8n', 'Gemini API', 'Supabase', 'NLP']
    }
  ];

  const educationItems = [
    {
      title: 'Bachelor of Technology - Computer Science (Data Science)',
      organization: 'Garden City University',
      location: 'Bangalore, India',
      period: '2022 - 2026',
      description: 'Currently pursuing BTech in Computer Science with specialization in Data Science. Maintaining strong academic performance while working on practical projects.',
      achievements: [
        'Specialization in Data Science and Machine Learning',
        'Active participation in technical projects and competitions',
        'Strong foundation in algorithms, data structures, and statistical analysis'
      ],
      skills: ['Data Science', 'Machine Learning', 'Python', 'Statistics']
    },
    {
      title: 'Higher Secondary Education',
      organization: 'Sri Chaitanya Techno School',
      location: 'Bangalore, India',
      period: '2020 - 2022',
      description: 'Completed higher secondary education with excellent grades, developing strong analytical and problem-solving skills.',
      achievements: [
        'Strong performance in Mathematics and Sciences',
        'Developed early interest in programming and technology',
        'Participated in various technical competitions'
      ],
      skills: ['Mathematics', 'Physics', 'Chemistry', 'Programming Basics']
    },
    {
      title: 'Secondary Education',
      organization: 'SSLC Poorna Prajna Education Centre',
      location: 'Belur, Hassan, Karnataka, India',
      period: '2019 - 2020',
      description: 'Completed secondary education with distinction, building foundation for future technical studies.',
      achievements: [
        'Excellent academic performance',
        'Early exposure to computer programming',
        'Active participation in science exhibitions'
      ],
      skills: ['English', 'Kannada', 'Mathematics', 'Science', 'Social Studies']
    }
  ];

  const toggleExpanded = (index: number, section: 'experience' | 'education') => {
    const itemId = section === 'experience' ? index : index + 1000;
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isExpanded = (index: number, section: 'experience' | 'education') => {
    const itemId = section === 'experience' ? index : index + 1000;
    return expandedItems.includes(itemId);
  };

  const renderTimelineSection = (
    items: typeof experienceItems,
    sectionType: 'experience' | 'education',
    icon: React.ReactNode,
    title: string,
    subtitle: string
  ) => (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full">
            {icon}
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-teal-600 md:left-1/2 md:transform md:-translate-x-1/2" />

        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-start space-x-6 md:space-x-0 animate-fade-in ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-gradient-to-br from-teal-400 to-teal-600 md:left-1/2 md:transform md:-translate-x-1/2 z-10 shadow-lg animate-pulse" />

              {/* Content */}
              <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <Collapsible>
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <CollapsibleTrigger
                      className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={() => toggleExpanded(index, sectionType)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              sectionType === 'experience' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            }`}>
                              {sectionType === 'experience' ? 'Professional' : 'Academic'}
                            </span>
                            <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{item.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {item.title}
                          </h4>
                          <p className="text-md text-teal-600 dark:text-teal-400 font-medium mb-2">
                            {item.organization}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {isExpanded(index, sectionType) ? (
                            <ChevronUp className="h-5 w-5 text-gray-400 transition-transform duration-200" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200" />
                          )}
                        </div>
                      </div>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800">
                        <div className="pt-4 space-y-4">
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              Key Achievements
                            </h5>
                            <div className="space-y-2">
                              {item.achievements.map((achievement, achievementIndex) => (
                                <div key={achievementIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                                  <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {achievement}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              Technologies & Skills
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors duration-200"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </div>

              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my professional experience and educational background through an interactive timeline
          </p>
        </div>

        {renderTimelineSection(
          experienceItems,
          'experience',
          <Briefcase className="h-6 w-6 text-teal-600" />,
          'Professional Experience',
          'Building innovative solutions in AI and web development'
        )}

        {renderTimelineSection(
          educationItems,
          'education',
          <GraduationCap className="h-6 w-6 text-teal-600" />,
          'Educational Background',
          'Academic foundation in computer science and data science'
        )}
      </div>
    </section>
  );
};

export default Experience;
