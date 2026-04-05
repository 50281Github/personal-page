import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const allProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and an admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Code Assistant',
    description: 'An AI-powered tool that helps developers write better code faster. Integrates with popular IDEs and provides real-time suggestions.',
    tags: ['OpenAI', 'TypeScript', 'VS Code API'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
          A collection of my recent work. Ranging from full-stack applications to open-source tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-zinc-800/80 text-zinc-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}