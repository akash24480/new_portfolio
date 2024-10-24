import Profile from "./components/Hero/Profile";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <>
     <BrowserRouter>
     <div className="px-4 md:px-10">
     <Navbar />
     <Profile />
     </div>
        </BrowserRouter>
    </>
  )
}



export default App;