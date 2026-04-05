import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Leading the frontend team in building a modern enterprise web application. Architected the design system and improved performance by 40%.',
  },
  {
    role: 'Software Engineer',
    company: 'Startup Inc',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple React applications. Implemented complex state management and integrated RESTful APIs.',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2017 - 2019',
    description: 'Created responsive, pixel-perfect landing pages and marketing websites for various clients using HTML, CSS, and JavaScript.',
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        
        <div className="prose prose-invert prose-lg mb-16 text-zinc-400">
          <p>
            Hello! I'm a software engineer based in the internet. I have a passion for creating 
            beautiful, intuitive, and highly functional digital experiences. My journey in web 
            development started back in 2015 when I decided to try editing custom Tumblr themes — 
            turns out hacking together HTML & CSS taught me a lot about the web!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, 
            a start-up, and a huge corporation. My main focus these days is building accessible, 
            inclusive products and digital experiences for a variety of clients.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-10">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-4 items-baseline">
                <div className="mb-2 md:mb-0 text-sm text-zinc-500 font-medium md:text-right md:pr-8">
                  {exp.period}
                </div>
                <div className="md:col-span-3 md:pl-8 md:border-l md:border-zinc-800 relative">
                  <div className="hidden md:block absolute w-3 h-3 bg-zinc-800 rounded-full -left-[6.5px] top-1.5 border-2 border-zinc-950" />
                  <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                  <div className="text-blue-400 font-medium mb-4">{exp.company}</div>
                  <p className="text-zinc-400">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}