import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const process = [
  {
    name: "Understand",
    description: "Begin with empathy and clarity.",
    icon: Lightbulb,
  },
  {
    name: "Design",
    description: "Shape ideas into visuals.",
    icon: PenTool,
  },
  {
    name: "Build",
    description: "Transform vision into interactive reality.",
    icon: Code2,
  },
  {
    name: "Deploy",
    description: "Deliver to the world.",
    icon: Rocket,
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          Problem solver{" "}
          <span className="about-coder">&lt;coder&gt;</span>
        </motion.div>

        <motion.div
          className="about-process"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          {process.map((step) => {
            const Icon = step.icon;

            return (
              <div className="process-step" key={step.name}>
                <div className="process-icon">
                  <Icon size={22} strokeWidth={1.4} />
                </div>

                <strong className="process-name">
                  {step.name}
                </strong>

                <p className="process-description">
                  {step.description}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default About;
