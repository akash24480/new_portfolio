import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const WorkCard = () => {
  return (
    <>
      <div className="bg-white shadow-2xl rounded-lg border border-gray-200 p-3 lg:p-5">
        <div className="flex justify-between bg-white shadow-lg py-4 rounded">
          <h1 className="font-medium lg:text-xl">Work Experience</h1>
          <Link className="flex items-center gap-2 text-blue-500">
            Details <IoIosArrowRoundForward />
          </Link>
        </div>
        {/* Manage the experience  */}
        <div className="mt-3">
            <div className="mb-6 md:flex md:items-center md:gap-8 lg:gap-20">
                <span className="font-medium text-gray-400">07/2024 - 11/2024</span>
                <div>
                    <h1 className="font-medium">M7 Corporation</h1>
                    <span className="text-gray-500">Frontend Developer</span>
                </div>
            </div>

            <div className="md:flex md:items-center md:gap-8 lg:gap-20">
                <span className="font-medium text-gray-400">02/2023 - 06/2024</span>
                <div>
                    <h1 className="font-medium">Cameo Corporate Service</h1>
                    <span className="text-gray-500">UAT Testing</span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
