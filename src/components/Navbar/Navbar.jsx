import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { useState } from "react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleChage = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
      {/* We are going to have the three section Logo,Links,talk and for the mobile hamburger icon */}
      <nav className="flex items-center justify-between  h-[10vh] bg-slate-300">
        <div className="flex items-center gap-3 text-[7vw] font-bold mr-3">
          <BsFillGrid1X2Fill />
          <span className="text-blue-500">AKASH</span>
        </div>
        <div className={`absolute top-0 flex flex-col justify-between h-screen bg-white w-[70vw] shadow-2xl ${isOpen ? 'transform translate-x-0 transition-all duration-1000' : 'transform -translate-x-[100vw] transition-all duration-1000'}`}>
          <div className="ml-5">
            <div className="flex items-center gap-3 text-[8vw] font-bold mr-3">
              <BsFillGrid1X2Fill />
              <span className="text-blue-500">AKASH</span>
            </div>
            <ul className="mt-8 flex  flex-col gap-3 mr-3">
              <li className="flex gap-3 items-center text-xl text-gray-600 active:bg-[#F0F2F5] active:text-black p-3 rounded">
                <span>
                  <MdHomeFilled />
                </span>
                <Link to="/">Home</Link>
              </li>
              <li className="flex gap-3 items-center text-xl text-gray-600 active:bg-[#F0F2F5] active:text-black p-3 rounded">
                <span>
                  <FaUserTie />
                </span>
                <Link to="/about">About</Link>
              </li>
              <li className="flex gap-3 items-center text-xl text-gray-600 active:bg-[#F0F2F5] active:text-black p-3 rounded">
                <span>
                  <BsPersonWorkspace />
                </span>
                <Link to="/work">Works</Link>
              </li>
              <li className="flex gap-3 items-center text-xl text-gray-600 active:bg-[#F0F2F5] active:text-black p-3 rounded">
                <span>
                  <FaFileAlt />
                </span>
                <Link to="/project">Resume</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button>Let's Talk</button>
          </div>
        </div>

        <div onClick={handleChage}>
            {isOpen ? <IoCloseOutline className="text-[7vw]" />  : <CiMenuFries className="text-[7vw]" /> }
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
