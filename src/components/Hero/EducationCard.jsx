import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const EducationCard = () => {
  return (
    <>
      <div className="bg-white shadow-2xl rounded-lg border border-gray-200 p-3 lg:p-5">
        <div className="flex justify-between bg-white shadow-lg py-4 rounded">
          <h1 className="font-medium lg:text-xl">Education</h1>
          <Link className="flex items-center gap-2 text-blue-500">
            Details <IoIosArrowRoundForward />
          </Link>
        </div>
        {/* Manage the experience  */}
        <div className="mt-3">
          <div className="mb-4 md:flex md:items-center md:gap-8 lg:gap-12">
            <span className="font-medium text-gray-400">2022 - 2024</span>
            <div>
              <h1 className="font-medium">S.R.M University</h1>
              <span className="text-gray-500">Master Of Computer Application - </span>
              <span className="text-gray-500">90%</span>
            </div>
          </div>

          <div className="mb-4 md:flex md:items-center md:gap-8 lg:gap-12">
            <span className="font-medium text-gray-400">2019 - 2022</span>
            <div>
              <h1 className="font-medium">A.M.Jain College</h1>
              <span className="text-gray-500">BSc(Computer Science) - </span>
              <span className="text-gray-500">89%</span>
            </div>
          </div>

          <div className="mb-4 md:flex md:items-center md:gap-8 lg:gap-12">
            <span className="font-medium text-gray-400">2017 - 2019</span>
            <div>
              <h1 className="font-medium">Elite Matric Hr.Sec.School</h1>
              <span className="text-gray-500">64%</span>
            </div>
          </div>

          <div className="md:flex md:items-center md:gap-8 lg:gap-12">
            <span className="font-medium text-gray-400">2016 - 2017</span>
            <div>
              <h1 className="font-medium">Elite Matriculation School</h1>
              <span className="text-gray-500">90%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
