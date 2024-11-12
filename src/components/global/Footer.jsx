import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-info p-10 text-info-content">
      <nav className="flex flex-wrap gap-4 sm:hidden sm:flex-row justify-center">
        <NavLink to="/" className="link-hover link text-xl">
          Home
        </NavLink>
        <NavLink to="/#about" className="link-hover link text-xl">
          About
        </NavLink>
        <NavLink to="/#project" className="link-hover link text-xl">
          Project
        </NavLink>
        <NavLink to="/blog" className="link-hover link text-xl">
          Blog
        </NavLink>
        <NavLink to="/#contact" className="link-hover link text-xl">
          Contact
        </NavLink>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="tooltip cursor-pointer text-2xl sm:text-2xl md:text-3xl"
            data-tip="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            className="tooltip cursor-pointer text-2xl sm:text-2xl md:text-3xl"
            data-tip="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            className="tooltip cursor-pointer text-2xl sm:text-2xl md:text-3xl"
            data-tip="Git Hub"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          M1RZODEV
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
