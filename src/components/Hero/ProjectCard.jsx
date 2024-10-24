import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import project from "../../assets/project.jpg";

const ProjectCard = () => {
  return (
    <>
      <div className="bg-white shadow-2xl rounded-lg border border-gray-200 p-3 lg:p-5">
        <div className="flex justify-between bg-white shadow-lg py-4 rounded">
          <h1 className="font-medium lg:text-xl">Recent Projects</h1>
          <Link className="flex items-center gap-2 text-blue-500">
            All Projects <IoIosArrowRoundForward />
          </Link>
        </div>
        {/* Manage the experience  */}
        <div className="mt-3 flex flex-col gap-10 lg:gap-24">
          <div className="relative">
            <img className="rounded-2xl" src={project} alt="" />
            <span className="bg-white/30 text-white backdrop-blur-sm border border-white/30 text-sm rounded-lg p-1 absolute bottom-4 left-4 shadow-lg">
              Product Design
            </span>
          </div>

          <div className="relative">
            <img className="rounded-2xl" src={project} alt="" />
            <span className="bg-white/30 text-white backdrop-blur-sm border border-white/30 text-sm rounded-lg p-1 absolute bottom-4 left-4 shadow-lg">
              Product Design
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
