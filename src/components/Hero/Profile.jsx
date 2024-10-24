import profile from '../../assets/profile.jpg'
import WorkCard from './WorkCard';
import EducationCard from './EducationCard';
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";




const Profile = () => {
  return (
    <>
      <div className="mt-7 flex flex-col md:mt-10 lg:flex-row gap-8">
        <div className="bg-white shadow-2xl rounded-lg border border-gray-200 p-3  lg:w-1/3 lg:p-5">
            <div className='flex items-center justify-center rounded-lg bg-gray-200'>
                <img className='pt-6 rounded' src={profile} alt="" />
            </div>
            <div className='mt-7'>
                <h1 className='text-3xl font-semibold'>Akash Kumar 👋</h1>
                <p className='py-5 font-medium text-gray-600 lg:pr-10'>A Passionate Full Stack Developer 🖥️ & Product Designer having 12 years of Experiences over 24+ Country Worldwide.</p>
            </div>

            <div className='flex flex-col gap-6 w-[65vw] md:flex-row md:w-full'>
                <button className='flex items-center gap-4 p-4 bg-blue-600 rounded-lg text-white font-medium'><IoCall /> Book A Call</button>
                <button className='flex items-center gap-4 p-4 bg-white rounded-lg text-black border border-gray-300 font-medium'><IoCopyOutline /> Copy Email</button>
            </div>

            <div className='mt-2 py-5 flex items-center gap-5'>
                <Link to="/"><FaGithub className='text-3xl' /></Link>
                <Link to='/'><FaLinkedin className='text-3xl' /></Link>
                <Link to='/'><SiLeetcode className='text-3xl' /></Link>
                
                

            </div>
        </div>

        <div className='flex flex-col gap-12 lg:gap-10 lg:w-1/3'>
            <WorkCard />
            <EducationCard />
        </div>

        <div className='flex flex-col gap-12 lg:gap-10 lg:w-1/3'>
        
        </div>

      </div>
    </>
  );
};

export default Profile;
