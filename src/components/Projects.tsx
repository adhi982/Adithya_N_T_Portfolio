
import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  metrics: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'devops-orchestrator',
      title: 'DevOps Multi-Agent Orchestrator',
      summary: 'Event-driven CI/CD orchestrator leveraging autonomous agents and ML-powered code analysis.',
      description: `- Architected a modular pipeline with 4 agents (lint, test, build, security) enforcing strict dependencies and sequential execution.\n- Implemented an ML lint agent using a fine-tuned CodeT5+ model (PyTorch, GPU-accelerated), delivering real-time code review and actionable suggestions (80% accuracy).\n- Implemented Kafka-based communication (less than 1s propagation) for reliable, scalable messaging.\n- Automated end-to-end execution, reducing manual steps by 80% and increasing code quality via HTML/JSON reports and AI feedback.\n- Structured agent outputs for human-readable and machine-consumable analytics.`,
      techStack: ['Python', 'Docker', 'Apache Kafka', 'REST API', 'Fine-Tuned ML Model', 'PyTorch'],
      metrics: ['80% Manual Step Reduction', 'Real-time Code Review', 'CodeT5+ Fine-Tuned Model'],
      images: [
        '/DevOps AI Agent/Main.png',
        '/DevOps AI Agent/Lint_agent_suggestion.png',
        '/DevOps AI Agent/Sec_error.png',
        '/DevOps AI Agent/Security_agent_suggestion.png',
        '/DevOps AI Agent/Workflow.png'
      
      ],
      githubUrl: 'https://github.com/adhi982/Orchestr_AI',
      thumbnail: '/DevOps AI Agent/Main.png'
    },
    
    {
      id: 'ecosense',
      title: 'EcoSense',
      summary: 'Sustainable living platform promoting eco-friendly habits through education and community engagement.',
      description: `- Developed a carbon footprint calculator used by 120+ monthly active users, driving an average 15% emissions reduction per user.\n- Designed 10+ interactive modules, achieving a 90% completion rate in sustainability quizzes.\n- Architected real-time chat and mentorship features, enabling 300+ one-on-one support sessions and increasing user retention by 25%.\n- Built a mobile-first interface with Tailwind CSS, optimized for devices with <2s load time and 95+ Lighthouse performance score.`,
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js'],
      metrics: ['120+ Monthly Active Users', '15% Average Emission Reduction', '90% Quiz Completion Rate'],
      images: [
        '/Ecosense img/main.png',
        '/Ecosense img/quiz.png',
        '/Ecosense img/chat.png',
        '/Ecosense img/carbon.png'
      ],
      githubUrl: 'https://github.com/adhi982/EcoSense.git',
      liveUrl: 'https://ecosence.onrender.com',
      thumbnail: '/Ecosense img/main.png'
    },
    {
      id: 'mindmapai',
      title: 'MindMapAI',
      summary: 'AI-powered mind mapping tool for generating, visualizing, and organizing ideas interactively.',
      description: `- Developed NLP backend services handling 50K+ requests per month with 99.8% uptime.\n- Implemented real-time mind map generation, handling 100+ nodes per map and supporting drag-and-drop with zero-lag UI.\n- Integrated secure API key management and authentication for user data protection.\n- Built NLP services that processed 500+ user prompts/day, with ~90% accuracy in concept extraction.`,
      techStack: ['React', 'Python', 'FastAPI', 'Supabase', 'OpenAI API', 'D3.js'],
      metrics: ['100+ Nodes Per Map', '50+ User Prompts/Day', '90% Accuracy in Generation'],
      images: [
        '/Mindmap img/main.png',
        '/Mindmap img/signup.png',
        '/Mindmap img/generator.png',
        '/Mindmap img/mindmap.png'
      ],
      githubUrl: 'https://github.com/adhi982/MindMapAI',
      liveUrl: 'https://mindmapai-ns7n.onrender.com',
      thumbnail: '/Mindmap img/main.png'
    },
    {
      id: 'deep-research',
      title: 'Deep Research AI Agent',
      summary: 'Advanced AI agent for comprehensive research with automation and intelligent data processing.',
      description: `- Spearheaded construction of a web application integrating AI agents for comprehensive topic research, resulting in recognition from senior leadership as the most innovative project of CI.\n- Engineered fully functional web app with caching, authentication, database access, backend automation.\n- Designed and deployed a LangChain-based chatbot achieving ~85% resolution rate using semantic search over 200k+ documents.`,
      techStack: ['Python', 'LangChain', 'n8n', 'FastAPI', 'Gemini API', 'PostgreSQL'],
      metrics: ['99.8% Uptime', 'Tech Stack Integration', 'Real-time Processing'],
      images: [
        '/Deep Research img/main.png',
        '/Deep Research img/agents.png',
        '/Deep Research img/front.png'
      ],
      githubUrl: 'https://github.com/adhi982/Deep_Research_AI',
      thumbnail: '/Deep Research img/main.png'
    }
    
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in data science, AI automation, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-36 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mb-4">
                  {/* GitHub Link (always shown if available) */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow group"
                      title="View on GitHub"
                    >
                      <Github className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-teal-600 transition-colors" strokeWidth={2.2} />
                    </a>
                  )}
                  {/* Website Link (only for first two projects) */}
                  {project.liveUrl && (project.id === 'ecosense' || project.id === 'mindmapai') && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow group"
                      title="Visit Website"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-teal-600 transition-colors" strokeWidth={2.2} />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                >
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
