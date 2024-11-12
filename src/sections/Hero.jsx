import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="align-elements py-5">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div className="w-full sm:w-3/5 md:w-2/4">
          <h4 className="text-lg sm:text-xl md:text-2xl">
            Welcome to my Portfolio
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl">
            Hi I’m <br /> Humoyun Mirzo
          </h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl">
            Collaborating with highly skilled individuals, our agency delivers
            top-quality services.
          </p>
          <div className="flex flex-col gap-4 pt-2 md:flex-row">
            <NavLink
              to="/#about"
              className="btn btn-info sm:w-full md:w-auto md:grow"
            >
              Hire Me!
            </NavLink>
            <a
              download
              href="./public/file/Abdurasuljonov Humoyun Mirzo.pdf"
              className="btn btn-outline sm:w-full md:w-auto md:grow"
            >
              Download CV <MdOutlineFileDownload className="text-xl" />
            </a>
          </div>
        </div>
        <div className="avatar w-2/5">
          <div className="mask mask-hexagon ">
            <img
              src="./public/images/hero.jpg"
              alt="m1rzodev picture"
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
