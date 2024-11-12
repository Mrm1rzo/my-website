import { FaCode, FaEye, FaInfoCircle } from "react-icons/fa";
const ProjectCart = () => {
  return (
    <div className="group relative w-80 overflow-hidden rounded-2xl bg-info md:bg-transparent">
      <img
        src="../public/images/projects/preview1.png"
        alt="project desktop img"
      />
      <div className="flex flex-col justify-between gap-3 px-4 pb-2 pt-5 md:hidden">
        <h5 className="text-xl text-gray-900">Site title</h5>
        <div className="flex w-full justify-between md:hidden">
          <button
            className="btn btn-circle tooltip flex cursor-pointer items-center justify-center"
            data-tip="Code"
          >
            <FaCode className="text-xl" />
          </button>
          <button
            className="btn btn-circle tooltip flex cursor-pointer items-center justify-center"
            data-tip="Info"
          >
            <FaInfoCircle className="text-xl" />
          </button>
          <button
            className="btn btn-circle tooltip flex cursor-pointer items-center justify-center"
            data-tip="Website"
          >
            <FaEye className="text-xl" />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 z-20 hidden h-full w-full rounded-2xl bg-[#00000081] opacity-0 transition-all duration-300 group-hover:opacity-100 md:flex "></div>
      <div className="absolute inset-0">
        <div className="absolute left-2/4 top-2/4 z-30 hidden -translate-x-2/4 -translate-y-2/4 gap-5 opacity-0 group-hover:opacity-100 md:flex">
          <button
            className="btn btn-circle tooltip flex cursor-pointer items-center justify-center"
            data-tip="Code"
          >
            <FaCode className="text-xl" />
          </button>
          <button
            className="btn btn-circle tooltip flex cursor-pointer items-center justify-center"
            data-tip="Info"
          >
            <FaInfoCircle className="text-xl" />
          </button>
          <button
            className="btn btn-circle tooltip flex cursor-pointer items-center justify-center"
            data-tip="Website"
          >
            <FaEye className="text-xl" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 z-30 hidden w-full translate-x-0 gap-5 bg-[#00000081] px-4 py-5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:flex">
          <h5 className="text-xl text-info">Site title</h5>
        </div>
      </div>
    </div>
  );
};

export default ProjectCart;
