import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home'
import Projects from "./routes/Projects";
// import ProjectOngoing from "./components/ProjectOngoing";
import ProjectComponent from "./components/ProjectComponent";
import ProjectOngoing from "./components/ProjectOngoing";
import { Rent } from "./routes/Rent";
import Laxmiraaj from "./components/Laxmiraaj";
import Laxmishru from "./components/Laxmishru";
import Laxmisans from "./components/Laxmisans";
import Shantiheight from './components/Shantiheight'
import Contact from "./routes/contact"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projectscom" element={<ProjectComponent/>}/>
      <Route path="/projectsong" element={<ProjectOngoing/>}/>
      <Route path="/rent" element={<Rent/>}/>
      <Route path="/laxmi_raj" element={<Laxmiraaj/>}/>
      <Route path="/laxmi_shru" element={<Laxmishru/>}/>
      <Route path="/laxmi_sans" element={<Laxmisans/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/shanti_height" element={<Shantiheight/>}/>
    </Routes>
    </>
  );
}

export default App;
