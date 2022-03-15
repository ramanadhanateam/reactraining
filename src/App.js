import React from 'react';
import './App.css';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={< Login />}/>
                <Route path="/dash" element={< DashBoard />}/>
            </Routes>
        </Router>

    );
}

export default App;
