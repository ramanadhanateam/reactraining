import React from 'react';
import './App.css';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Formstepper from'./components/Formstepper';
import SideBar from './components/SideBar/SideBar';
function App() {
  const loggedIn=localStorage.getItem('user')
  return (
    <>
    <Router>
     {loggedIn && <SideBar/>}  
      <Routes>
        <Route path="/login" element ={loggedIn?<Navigate to="/dashboard"/>:<Login/>} />
        <Route path="/dashboard" element={loggedIn?<DashBoard />:<Navigate to="/login"/>} />
        <Route path="/signup"element ={loggedIn?<Navigate to="/dashboard"/>:<Formstepper/>}></Route>
        <Route path='*'element={<Navigate to="/login"/>}></Route>
      </Routes>
    </Router>
    </>
  );
}
export default App;