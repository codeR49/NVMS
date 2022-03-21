import "./sidebar.scss";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import StoreIcon from "@mui/icons-material/Store";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";


const Sidebar = () => {
  let navigate = useNavigate()
  
  //logout handler
  const logutHandler = (e) =>{
    localStorage.clear();
    navigate("/");
  }

  function CheckforSuperAdmin(props) {
    if (localStorage.getItem('role')==='Super Admin') {
      return(<><p className="title">MAIN</p>
      <li>
        <DashboardIcon className="icon"  />
        <Link to='/home' style={{ textDecoration: "none" }}>
        <span>Admin Dashboard</span>
        </Link>
        
      </li></>)
    
    }  else
    return(<><p className="title">MAIN</p>
    <li>
      <DashboardIcon className="icon"  />
      <Link to='/home' style={{ textDecoration: "none" }}>
      <span>Vendor Dash</span>
      </Link>
      
    </li></>)
  }
 
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">LOGO</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"  />
            <Link to='/home' style={{ textDecoration: "none" }}>
            <span>Dashboard</span>
            </Link>
            
          </li> */}
            <CheckforSuperAdmin/>,
          
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Manage Users</span>
            </li>
          </Link>
          <Link to="/job" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Manage Job</span>
            </li>
          </Link>
      
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={logutHandler}>Logout</span>
          </li>
        </ul>
      </div>
   
    </div>
  );
};

export default Sidebar;
