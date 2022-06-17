import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import CadidateRegistration from './component/CadidateRegistration';
import Navbar from './component/Navbar';
import RegisterdScreen from './component/RegisterdScreen';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<CadidateRegistration/>}/>
      <Route path='/list' element={<RegisterdScreen/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;