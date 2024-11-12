import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { About, Contact, Hero, Project, Skills } from "../sections";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
