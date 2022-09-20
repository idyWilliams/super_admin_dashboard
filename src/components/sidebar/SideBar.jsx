import React from "react";
import "./sideBar.scss";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TopicIcon from "@mui/icons-material/Topic";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Wild dev</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardCustomizeIcon  className= "icons"/>
            <span>Dashboard</span>{" "}
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonIcon />
            <span>User</span>{" "}
          </li>
          <li>
            <ProductionQuantityLimitsIcon  className= "icons"/>
            <span>Product</span>{" "}
          </li>
          <li>
            <PaymentIcon  className= "icons"/>
            <span>Orders</span>{" "}
          </li>
          <li>
            <LocalShippingIcon className= "icons" />
            <span>Delivery</span>{" "}
          </li>
          <p className="title">LINKS</p>
          <li>
            <TrendingUpIcon />
            <span>Stat</span>{" "}
          </li>
          <li>
            <NotificationsIcon  className= "icons"/>
            <span>Notification</span>{" "}
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon  className= "icons"/>
            <span>System Health</span>{" "}
          </li>
          <li>
            <TopicIcon  className= "icons"/>
            <span>Logs</span>{" "}
          </li>
          <li>
            <SettingsIcon  className= "icons"/>
            <span>Setting</span>{" "}
          </li>
          <p className="title">USERS</p>
          <li>
            <AccountCircleIcon  className= "icons"/>
            <span>Profile</span>{" "}
          </li>
          <li>
            <ExitToAppIcon  className= "icons"/>
            <span>Logout</span>{" "}
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default SideBar;
