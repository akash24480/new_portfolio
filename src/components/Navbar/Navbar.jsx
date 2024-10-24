import { Link, NavLink } from "react-router-dom";
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
      <nav className="flex items-center justify-between h-[10vh] bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 px-10 shadow-2xl rounded-md">
        <div className="flex items-center gap-3 text-[5vw] md:text-[3vw] font-bold mr-3 lg:text-[2vw]">
          <BsFillGrid1X2Fill />
          <span className="text-blue-500">AKASH</span>
        </div>
        <div className={`absolute top-0 flex flex-col justify-between h-screen bg-white w-[70vw] py-5 shadow-2xl lg:hidden ${isOpen ? 'transform translate-x-[-18vw] md:translate-x-[-11vw] transition-all duration-1000' : 'transform -translate-x-[100vw] transition-all duration-1000'}`}>
          <div className="ml-6">
            <div className="flex items-center gap-3 text-[6vw] font-bold mr-3">
              <BsFillGrid1X2Fill />
              <span className="text-blue-500">AKASH</span>
            </div>
            <ul className="mt-8 flex  flex-col gap-3 mr-3">
              <li className="flex gap-3 items-center text-xl text-gray-600  p-3 rounded">

                <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`} to="/"><MdHomeFilled /> Home</NavLink>
              </li>
              <li className="flex gap-3 items-center text-xl text-gray-600 active:bg-[#F0F2F5] active:text-black p-3 rounded">
                
                <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`} to="/about"><FaUserTie /> About</NavLink>
              </li>
              <li className="flex gap-3 items-center text-xl text-gray-600 active:bg-[#F0F2F5] active:text-black p-3 rounded">
                
                <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`} to="/work"><BsPersonWorkspace /> Works</NavLink>
              </li>
              <li className="flex gap-3 items-center text-xl text-gray-600 active:bg-[#F0F2F5] active:text-black p-3 rounded">
                
                <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`} to="/project"><FaFileAlt /> Resume</NavLink>
              </li>
            </ul>
          </div>
          <div className="ml-6">
            <NavLink to='/contact' className="p-3 bg-blue-600 rounded-md text-white text-xl w-[55vw]">Let's Talk</NavLink>
          </div>
        </div>

        <div className="hidden lg:block">
            <ul className="md:flex md:items-center md:gap-3">
              <li className="flex gap-3 items-center text-lg text-gray-600  p-3 rounded">
 
                  <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`} to="/"><MdHomeFilled /> Home</NavLink>
              </li>
              <li className="flex gap-3 items-center text-lg text-gray-600  p-3 rounded">
                
                <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`} to="/about"><FaUserTie /> About</NavLink>
              </li>
              <li className="flex gap-3 items-center text-lg text-gray-600  p-3 rounded">

                <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`}  to="/work"><BsPersonWorkspace /> Works</NavLink>
              </li>
              <li className="flex gap-3 items-center text-lg text-gray-600  p-3 rounded">

                <NavLink className={({isActive}) => `flex items-center gap-2 rounded-md p-1 ${isActive ? 'bg-gray-200 text-black duration-1000 transition-all' : 'bg-white text-gray-600'}`} to="/project"><FaFileAlt /> Resume</NavLink>
              </li>
            </ul>
          </div>
          <div className="ml-6 hidden lg:block">
            <button className="p-3 bg-blue-600 rounded-md text-white text-xl w-[55vw] lg:w-[10vw] lg:text-lg">Let's Talk</button>
          </div>

        <div onClick={handleChage} className="lg:hidden">
            {isOpen ? <IoCloseOutline className="text-[5vw] md:text-[3vw]  lg:text-[2vw]" />  : <CiMenuFries className="text-[5vw] md:text-[3vw]  lg:text-[2vw]" /> }
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
