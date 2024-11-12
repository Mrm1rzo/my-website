import ProjectCart from "./ProjectCart";

const ProjectContainer = () => {
  return (
    <div className="flex gap-5 flex-wrap justify-center py-5">
      <ProjectCart></ProjectCart>
      <ProjectCart></ProjectCart>
      <ProjectCart></ProjectCart>
      <ProjectCart></ProjectCart>
    </div>
  );
};

export default ProjectContainer;
