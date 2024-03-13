import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloFreshMain from './HelloFresh/HelloFreshMain';
import DataDogNavbar from './DataDog/DataDogNavbar'


import './App.css'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      
          <Routes>
            <Route element={<HelloFreshMain />} path='/hello-fresh'/>
            {/* <Route element={<DataDogNavbar /> }path='/data-dog' /> */}
            
            
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
