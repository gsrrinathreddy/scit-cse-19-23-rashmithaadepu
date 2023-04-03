import React from 'react';
import { Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutus from './pages/Aboutus';
import Certificates from './pages/Certificates';
import Contactme from './pages/Contactme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Workshop from './pages/Workshop';

import './App.css';
function App() { 
  return (
    <div className="App">
      
    <INavbar/>
      <Routes>

         <Route path = "Aboutus" element ={<Aboutus/>}/>
         <Route path = "Certificates" element ={<Certificates/>}/> 
         <Route path = "Contactme" element ={<Contactme/>}/>
         <Route path = "Experience" element ={<Experience/>}/>
         <Route path = "Hobbies" element ={<Hobbies/>}/>
         <Route path = "Projects" element ={<Projects/>}/>
         <Route path = "Qualification" element ={<Qualification/>}/>
         <Route path = "Skills" element ={<Skills/>}/>
         <Route path = "Workshop" element ={<Workshop/>}/>
         

      </Routes>
          </div>
  );
}
 
export default App;
