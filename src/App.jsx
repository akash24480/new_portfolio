import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from 'react-router-dom';



const App = () => {
  return (
    <>
     <BrowserRouter>
     <div>
     <Navbar />
     </div>
        </BrowserRouter>
    </>
  )
}



export default App;