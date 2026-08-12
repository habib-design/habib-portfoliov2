import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CVBrain",
    category: "AI Resume Analyzer",
    description:
      "An AI-powered resume analyzer that evaluates resumes and provides actionable feedback to improve content, structure, and overall resume quality.",
    tech: ["React", "JavaScript", "Puter.js"],
    image: "/projects/cvbrain.png",
    github: "https://github.com/habib-design/ai-resume-analyzer",
    live: "https://ai-resume-analyzer-cvbrain.vercel.app/",
  },

  {
    title: "Design AI",
    category: "AI Design Tool",
    description:
      "An interactive 3D design experience exploring how generative AI can be integrated into modern and intuitive user interfaces.",
    tech: ["React", "Three.js", "AI"],
    image: "/projects/design-ai.png",
    github: "https://github.com/habib-design/Design-AI",
    live: "https://aishirtprint.netlify.app/",
  },

  {
    title: "Cinemora",
    category: "Movie Discovery Platform",
    description:
      "A responsive movie discovery platform for exploring movies, searching titles, and discovering trending content through the TMDB API.",
    tech: ["React", "Vite", "Tailwind CSS"],
    image: "/projects/cinemora.png",
    github: "https://github.com/habib-design/cinemora",
    live: "https://cinemora-web.vercel.app/",
  },

  {
    title: "HooBank",
    category: "Modern Landing Page",
    description:
      "A modern financial landing page built with React, focusing on reusable components, responsive layouts, clean UI, and a polished experience.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "/projects/hoobank.png",
    github: "https://github.com/habib-design/HooBank",
    live: "https://hoo-bank-page-pi.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="work" className="projects-section">
      <div className="projects-container">

        {/* Section Heading */}
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>
  My <span className="projects-dev">{"{dev}"}</span> projects
</h2>
          <p>
            A collection of things I've built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              {/* Project Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />
              </div>

              {/* Project Content */}
              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">

                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-live"
                    >
                      See live
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="project-live project-disabled">
                      See live
                    </span>
                  )}

                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      See on GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="project-github project-disabled">
                      See on GitHub
                    </span>
                  )}

                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
