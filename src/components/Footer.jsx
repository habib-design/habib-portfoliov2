import { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";

function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const newDelhiTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

      setTime(newDelhiTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Signature */}
        <div className="footer-signature">
          <img
            src="/signature-dark.png"
            alt="Habibul Haque signature"
          />
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Meta */}
        <div className="footer-meta">

          <div className="footer-meta-item">
            <Lightbulb className="footer-bulb" size={15} strokeWidth={1.5} />
            <span>Last updated on 12 Aug, 2026</span>
          </div>

          <div className="footer-meta-item">
            <span className="footer-status"></span>
            <span>New Delhi, {time}</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
