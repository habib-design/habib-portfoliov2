import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git/GitHub",
      "VS Code",
      "CLI",
      "Vercel",
    ],
  },
  {
    title: "Development",
    skills: [
      "REST APIs",
      "API Integration",
      "Component-based UI",
      "Responsive Web Design",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        {/* Heading */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >

          <h2>
            Tools I use
            <br />
            <span>to build things.</span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <h3>{group.title}</h3>

              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills
