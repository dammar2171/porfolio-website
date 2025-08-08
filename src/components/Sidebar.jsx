import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaUserAlt, FaFolderOpen } from "react-icons/fa";
import { IoBagAdd, IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "../css/Sidebar.css";
import profile from "../assets/profile-img.jpg";

const Sidebar = ({ active, setActive, darkMode, setDarkMode }) => {
  const handleActive = (buttonName) => {
    setActive(buttonName);
  };

  const buttons = [
    { name: "home", icon: <IoMdHome />, label: "Home" },
    { name: "about", icon: <FaUserAlt />, label: "About" },
    { name: "project", icon: <FaFolderOpen />, label: "Project" },
    { name: "experience", icon: <IoBagAdd />, label: "Experience" },
    { name: "services", icon: <IoSettings />, label: "Services" },
    { name: "contact", icon: <MdEmail />, label: "Contact" },
  ];

  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profile} alt="Profile" className="profile-img" />
        <h2>Dammar_Bhatt</h2>
        <p>(Web Developer)</p>
        <div className="line"></div>
      </div>

      <nav className="menu">
        {buttons.map((btn) => (
          <button
            key={btn.name}
            className={`sidebar_btn ${active === btn.name ? "active" : ""}`}
            onClick={() => handleActive(btn.name)}
          >
            <span
              className="icon"
              style={{ color: active === btn.name ? "#000" : "#fff" }}
            >
              {btn.icon}
            </span>
            {btn.label}
          </button>
        ))}
        <div className="line1"></div>
      </nav>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/dammar-bhatt-0a41aa302/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/dammar2171">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/dammar.bhatt/">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/dammar.bhatt.146">
          <FaFacebook />
        </a>
      </div>

      <button
        className="sidebar_btn_mode"
        onClick={() => setDarkMode(!darkMode)}
      >
        <MdOutlineDarkMode className="icon" />
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
