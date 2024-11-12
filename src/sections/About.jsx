import { FaCheckCircle } from "react-icons/fa";
import React, { useState } from "react";

const About = () => {
  const [selectedSection, setSelectedSection] = useState("educations");

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <section className="align-elements py-5" id="about">
      <h3 className="menu-title text-center text-4xl">About Me</h3>
      <div className="flex w-full flex-col-reverse items-center justify-center gap-5 text-center md:flex-row-reverse md:justify-between md:text-left">
        <div className="w-full sm:w-3/5 md:w-2/4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl">
            20 Year’s Experience on Product Design
          </h2>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl">
            Hello there! I'm Robert Junior. I specialize in web design and
            development, and I'm deeply passionate and committed to my craft.
            With 20 years of experience as a professional graphic designer
          </p>
          <div className="flex flex-col gap-4 pt-2 md:flex-row">
            <button
              className={`btn sm:w-full md:w-auto md:grow ${
                selectedSection === "educations" ? "btn-info" : "btn-outline"
              }`}
              onClick={() => handleClick("educations")}
            >
              Educations
            </button>
            <button
              className={`btn sm:w-full md:w-auto md:grow ${
                selectedSection === "experience" ? "btn-info" : "btn-outline"
              }`}
              onClick={() => handleClick("experience")}
            >
              Experience
            </button>
          </div>

          {/* Timeline content */}
          <ul className="timeline timeline-vertical mt-3 max-md:timeline-compact">
            {selectedSection === "educations" ? (
              <>
                {/* Education Timeline */}
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="font-mono italic">2022-2026</time>
                    <div className="text-lg font-black">
                      Fergana Polytechnic Institute
                    </div>
                    Student of "Computerized project systems" faculty
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <div className="timeline-start mb-10">
                    <time className="font-mono italic">2022-2023</time>
                    <div className="text-lg font-black">
                      Najot Ta'lim Fergana branch
                    </div>
                    Successfully completed React.js course
                  </div>
                  <hr />
                </li>
              </>
            ) : (
              <>
                {/* Experience Timeline */}
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="font-mono italic">2020-2021</time>
                    <div className="text-lg font-black">Creative Agency</div>
                    Worked as a Junior Web Designer
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <FaCheckCircle className="text-lg" />
                  </div>
                  <div className="timeline-start mb-10">
                    <time className="font-mono italic">2021-2022</time>
                    <div className="text-lg font-black">
                      Freelance Web Designer
                    </div>
                    Specialized in creating UX/UI for startups
                  </div>
                  <hr />
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="w-2/5">
          <img
            src="./public/images/about.png"
            alt="m1rzodev picture"
            className="rounded-full bg-info shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
