import React from 'react';
import './App.css';
import Login from'./components/login';
import Dash from'./components/dashboard';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
     <Route path="/login" element={<Login/>} />
     <Route path="/dash" element={<Dash/>} />
     </Routes>
     </Router>
  
 
  );
}

export default App;
