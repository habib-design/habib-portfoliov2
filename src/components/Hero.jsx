import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import habibPc from "../assets/habib-pc.png";
import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/habib-design",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/habibhaq15/",
    icon: FaLinkedin,
  },
  {
    label: "Twitter",
    href: "https://x.com/habibsamhaq",
    icon: FaXTwitter,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/1309773628711370782",
    icon: FaDiscord,
  },
  {
    label: "Email",
    href: "mailto:sameerhaque0@gmail.com",
    icon: FaEnvelope,
  },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-label">
            <span className="hero-dot" />
            Frontend Engineer
          </div>

          <h1>
            Habibul
            <span>Haque</span>
          </h1>

          <p className="hero-description">
            I create thoughtful, responsive interfaces and polished web
            experiences using modern frontend technologies.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-work-link">
              <span>Explore my work</span>
              <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-socials">
  {socialLinks.map(({ label, href, icon: Icon }) => (
    <a
      key={label}
      href={href}
      target={label === "Email" ? undefined : "_blank"}
      rel={label === "Email" ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="social-link"
    >
      <Icon size={14} strokeWidth={1.8} />
      <span>{label}</span>
    </a>
  ))}
</div>
        </motion.div>

        {/* Hero image */}
        <motion.img
          className="hero-image"
          src={habibPc}
          alt="Habibul Haque holding a desktop PC"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        />

      </div>
    </section>
  );
}

export default Hero;
