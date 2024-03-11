import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHelloFresh from './HelloFresh/NavbarHelloFresh'
import HelloFreshMain from './HelloFresh/HelloFreshMain';

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <NavbarHelloFresh />
          <Routes>
            <Route />
            
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
