import React from 'react';
import './App.css';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Signup from'./components/Signup';
import SideBar from './components/SideBar/SideBar';
import UserList from './components/Users/UserList';
import { UserMenu } from './components/Users/UserMenu';
import {UserManagement} from './components/Users/UserManagement'
import GalleryView from './components/Gallery/GalleryView';
import Todos from './components/Users/Todos';
import { pink, purple } from '@mui/material/colors';
import { ThemeProvider,createTheme} from '@mui/material/styles';

const theme=createTheme({
  palette:{
    primary:{
      main:pink[500]
    },
    secondary:{
      main:purple[500]
    },
  },
});
function App() {
  const loggedIn=localStorage.getItem('user')
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
     {loggedIn && <SideBar/>}  
      <Routes>
        <Route path="/login" element ={loggedIn?<Navigate to="/dashboard"/>:<Login/>} />
        <Route path="/dashboard/usermanagement" element={loggedIn?<UserManagement />:<Navigate to="/login"/>} />
        <Route path="/dashboard/usermanagement/usermenu" element={loggedIn?<UserMenu />:<Navigate to="/login"/>} />
        <Route path="/dashboard/usermanagement/userlist" element={loggedIn?<UserList />:<Navigate to="/login"/>} />
        <Route path="/dashboard/gallery" element={loggedIn?<GalleryView />:<Navigate to="/login"/>} />
        <Route path="/dashboard/todos" element={loggedIn?<Todos />:<Navigate to="/login"/>} />
        <Route path="/dashboard" element={loggedIn?<DashBoard />:<Navigate to="/login"/>} />
        <Route path="/signup"element ={loggedIn?<Navigate to="/dashboard"/>:<Signup/>}></Route>
        <Route path='*'element={<Navigate to="/login"/>}></Route>
      </Routes>
    </Router>
    </ThemeProvider>
    </>
  );
}
export default App;