import "./App.css";
import React from 'react';
import Signlawyer from "./pages/signlawyer.jsx";

import {Route, Routes} from "react-router-dom";
import Landing from "./pages/landing.jsx";
import LogIn from "./pages/logIn.jsx";
import Sign from "./pages/Sign.jsx";
import LawyerProfile from "./pages/LawyerProfile.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import A from "./pages/Lawyers.jsx";
import  B from "./pages/Notifications.jsx";
import Ab from "./pages/Schedule.jsx";
import Abc from "./pages/landing(lawyer).jsx";
import Admin from "./pages/Admin.jsx";
import Waiting from "./pages/Admin2.jsx";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      
      </div>
      
      <Routes>
      <Route path="/" element={<Landing/>}/>
            <Route path="/:id" element={<Landing/>}/>
            <Route path="/logIn" element={<LogIn/>}/>
            <Route path="/SignUp" element={<Sign/>}/>
            <Route path="/Lawyer-profile/:id/:lawyer" element={<LawyerProfile />} />
            <Route path="/Lawyer-profile/:id/:client/:id" element={<LawyerProfile/>}/>
            <Route path="/Lawyer-sign" element={<Signlawyer/>}/>
            <Route path="/About-Us" element={<AboutUs/>}/>
            <Route path="/lawyers" element={<A/>}/>
            <Route path="/Notifications" element={<B/>}/>
            <Route path="/Scheduler/:id/:lawyer" element={<Ab/>}/>
            <Route path="/lawyer" element={<Abc/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/Waiting-list" element={<Waiting/>}/>
        </Routes>
    </div>
  );
}

export default App;
