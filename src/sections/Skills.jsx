import React, { useState } from "react";
import SkillsContainer from "../components/SkillsContainer";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState("main");

  const handleSkillChange = (skill) => {
    setSelectedSkill(skill);
  };
  return (
    <div className="flex flex-col gap-3">
      <h3 className="menu-title text-center text-4xl">My Skills</h3>
      <div className="join join-horizontal mx-auto lg:join-horizontal">
        <button
          className={`btn join-item ${
            selectedSkill === "main" ? "btn-info" : "btn-outline"
          }`}
          onClick={() => handleSkillChange("main")}
        >
          Main skills
        </button>
        <button
          className={`btn join-item ${
            selectedSkill === "technical" ? "btn-info" : "btn-outline"
          }`}
          onClick={() => handleSkillChange("technical")}
        >
          Technical skills
        </button>
      </div>

      {/* SkillsContainer tarkibini tanlangan skill asosida o'zgartiramiz */}
      <SkillsContainer selectedSkill={selectedSkill} />
    </div>
  );
};

export default Skill;
