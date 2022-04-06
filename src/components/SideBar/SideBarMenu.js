import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBarMenu=({item})=>{
const [subnav,setSubnav]=useState(false)
const showSubnav=()=>setSubnav(!subnav)
  return (
    <>
     <Link to={item.path} className="side-menu"onClick={item.subNav&&showSubnav}>
        <div>
          {item.icon}
          <span className="sidebar-label">{item.title}</span>
          </div>
          <div>
            {item.subNav && subnav 
            ? item.iconOpened
            : item.subNav 
            ? item.iconClosed 
            : null} 
          </div>
       </Link>
       {subnav&&item.subNav.map((item,index)=>{
         return(
           <Link to={item.path} key={index} className="dropdown">
             {item.icon}
             <label>{item.title}</label>
           </Link>
         )
       })}
    </>
  );
};
export default SideBarMenu;