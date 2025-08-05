
import React, { useState } from 'react';
import { ArrowDown, Download, Eye } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[80vh] py-8 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-teal-400 dark:bg-teal-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 md:mt-20">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="flex flex-col items-center mb-4 animate-fade-in-up">
            <Avatar className="h-32 w-32 md:h-44 md:w-44 shadow-[0_8px_32px_0_rgba(16,185,129,0.25)] border-4 border-white dark:border-gray-800 transition-shadow duration-500">
              <AvatarImage src="/Profile_img.jpeg" alt="Adithya N T" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            {/* Social Icons */}
            <div className="flex gap-6 mt-6 mb-2">
              <a href="https://www.linkedin.com/in/adithya982/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-2xl">
                <Linkedin />
              </a>
              <a href="https://github.com/adhi982" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-2xl">
                <Github />
              </a>
              <a href="mailto:adithyant982@gmail.com" aria-label="Email" className="text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-2xl">
                <Mail />
              </a>
            </div>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
            Hi, I'm{' '}
            <span className="text-gray-900 dark:text-white font-bold">ADITHYA N T</span>
          </h1>
          {/* Impactful Bio/Tagline */}
          <div className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-3 md:mb-5 font-medium max-w-3xl mx-auto text-center leading-relaxed">
            <p>
              Data Science student with proficiency in Python, N8N automation, and prompt engineering.
            </p>
            <p className="mt-2">
              Proficient in multiple programming languages and experienced in building projects. Delivered weekly hackathon projects, peer-reviewed by 5+ seniors.
            </p>
          </div>

          <div className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-6 md:mb-8 space-y-2">
            <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Data Science Enthusiast → Automation Expert → Prompt Engineer
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Building intelligent solutions with modern technology
            </p>
          </div>

          <div className="flex flex-col w-full max-w-xs mx-auto sm:max-w-none sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToProjects}
              className="group flex items-center justify-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto mb-2 sm:mb-0"
            >
              <Eye className="h-5 w-5" />
              <span>View My Work</span>
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="group flex items-center justify-center space-x-2 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  <Eye className="h-5 w-5" />
                  <span>Resume</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/resume.png" target="_blank" rel="noopener noreferrer">
                    View Resume
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Removed the extra downward arrow icon here */}
      </div>
    </section>
  );
};

export default Hero;
