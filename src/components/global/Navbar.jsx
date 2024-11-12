import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const themeFromLocalStroge = () => {
  return localStorage.getItem("theme") || "sunset";
};

const Navbar = () => {
  const [theme, setTheme] = useState(themeFromLocalStroge());

  const toggleTheme = () => {
    const newTheme = theme == "sunset" ? "pastel" : "sunset";

    setTheme(newTheme);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true); // Scroll boshlanganda navbarni "fixed" qilish
      } else {
        setIsFixed(false); // Yuqoriga qaytganda "fixed" holatini olib tashlash
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`left-0 top-0 z-40 w-full bg-info text-info-content transition-all duration-500 ${
        isFixed ? "fixed w-screen shadow-2xl" : ""
      }`}
    >
      <div className="align-elements navbar">
        <div className="navbar-start flex items-center">
          <NavLink to="/" href="#" className="hidden sm:flex md:flex">
            <img
              src="./public/images/logo.png"
              alt="m1rzodev website logo"
              className="w-16 sm:w-28 md:w-40"
            />
          </NavLink>
          <div className="dropdown sm:hidden md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <RiMenu2Line className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-info p-2 shadow-2xl"
            >
              <li className="text-xl">
                <Link
                  to="/"
                  className={`activeSection === 'home' ? 'byactive' : ''`}
                >
                  Home
                </Link>
              </li>
              <li className="text-xl">
                <Link to="/#about">About</Link>
              </li>
              <li className="text-xl">
                <Link to="/#project">Project</Link>
              </li>
              <li className="text-xl">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-xl">
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center flex items-center">
          <NavLink to="/" href="#" className="sm:hidden md:hidden">
            <img
              src="./public/images/logo.png"
              alt="m1rzodev website logo"
              className="w-20 sm:w-28 md:w-40"
            />
          </NavLink>
          <ul className="menu menu-horizontal hidden px-1 sm:flex md:flex">
            <li className="text-xl">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xl">
              <Link to="/#about">About</Link>
            </li>
            <li className="text-xl">
              <Link to="/#project">Project</Link>
            </li>
            <li className="text-xl">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="text-xl">
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center sm:w-2/12">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={toggleTheme}
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <FaSun className="swap-off fill-current text-xl" />

            {/* moon icon */}
            <FaMoon className="swap-on fill-current text-xl" />
          </label>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
