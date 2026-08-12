import { motion } from "framer-motion";

const navItems = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "work", href: "#work" },
];

function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container navbar-inner">

        <a href="#home" className="brand">
          <span className="brand-name">
            <span className="brand-h brand-h-white">H</span>
            <span className="brand-h brand-h-colored">H</span>
          </span>
        </a>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </motion.header>
  );
}

export default Navbar;
