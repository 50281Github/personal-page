import { motion } from 'framer-motion';
import { ArrowRight, Code, Terminal, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'React / Next.js', icon: <Code className="w-6 h-6 text-blue-400" /> },
  { name: 'TypeScript', icon: <Terminal className="w-6 h-6 text-blue-400" /> },
  { name: 'Tailwind CSS', icon: <Zap className="w-6 h-6 text-blue-400" /> },
];

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '/projects',
  },
  {
    title: 'AI Code Assistant',
    description: 'An AI-powered tool that helps developers write better code faster.',
    tags: ['OpenAI', 'TypeScript', 'VS Code'],
    link: '/projects',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950 to-zinc-950 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Building digital <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              experiences
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Hi, I'm a passionate software engineer specializing in building exceptional websites, applications, and everything in between.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 group"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-full font-medium transition-all"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-7xl mx-auto py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition-colors"
              >
                <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                  {skill.icon}
                </div>
                <span className="text-lg font-medium text-zinc-200">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="w-full max-w-7xl mx-auto py-20 px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-zinc-900/30 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-colors block"
            >
              <div className="h-48 bg-zinc-800/50 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}