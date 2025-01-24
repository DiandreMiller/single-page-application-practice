import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloFreshHome from './HelloFresh/HelloFreshHome';
// import DataDogNavbar from './DataDog/DataDogNavbar'


import './App.css'

function App() {
  
  return (
    <div>
      
      <BrowserRouter>
      
          <Routes>
            <Route element={<HelloFreshHome />} path='/'/>
            
            {/* <Route element={<DataDogNavbar /> }path='/data-dog' /> */}
            
            
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
