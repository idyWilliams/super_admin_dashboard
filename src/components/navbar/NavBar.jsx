import React from "react";
import "./navBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import img from "../../Asset/images/img.jpeg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <ModeNightIcon />
          </div>

          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <NotificationsActiveIcon />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListIcon />
          </div>
          <div className="item">
            <img src={img} alt="img" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
