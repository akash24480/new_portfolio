import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <>
     <BrowserRouter>
     <div className="px-4 md:px-10">
     <Navbar />
     </div>
        </BrowserRouter>
    </>
  )
}



export default App;