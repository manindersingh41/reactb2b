import React from "react";

import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Wrapper = styled.div.attrs({
    className: 'dashboard'
})`
   &.dashboard{
 
    box-sizing: border-box;
    background-color: #E0EAFC;
  }
  .topbar {
    background: linear-gradient(to bottom, #00d2ff, #7157f7);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  .topbar h2 {
    color: #fff;
    font-size: 35px;
  }


  .dashboard-content {
    display: flex;
  }

  .sidebar {
    width: 250px;
    background-color: #CFDEF3;
    height: 100vh;
  
  }
  .sidebar-title {
 
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: #E0EAFC;
    width: 100%;

  }

  @media (max-width: 992px) {
    &.dashboard{
    height: 100vh;
    box-sizing: border-box;
  }

  .topbar {

    padding: 10px;
  }

  .topbar h2 {
    color: #fff;
    font-size: 25px;
  }

    .sidebar{
        display: none;
    }


  }


`;
const Dashboard = () => {
  return (
    <Wrapper>
      <div className="topbar">
        <h2>Dashboard</h2>
      </div>
      <div className="dashboard-content">
        <div className="sidebar">
          <div class="sidebar-title">
            <h2>Sidebar</h2>
          </div>
        </div>
        <div className="main">
        
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
