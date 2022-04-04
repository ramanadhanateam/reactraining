import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import SubBarMenu from './SideBarMenu'
import { IconContext } from 'react-icons/lib';
import { Button,Typography } from '@mui/material';
import "../Style.css";
const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const handleLogout=()=>{
    localStorage.clear()
    window.location.replace("/")
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff4' }}>
        <div className="nav">
          <Link to='#' className='nav-icon'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Button variant="contained" className='button-logout'type="submit" onClick={handleLogout}>LogOut</Button>
        </div>
        <nav className="sidebar"style={{ left: sidebar ? '0' : '-100%'}}>
          <div className='sidebar-wrap'>
            <Link to='#' className='nav-icon'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
            {SideBarData.map((item, index) => {
              return <SubBarMenu item={item} key={index} />;
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default SideBar;