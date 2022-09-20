import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineIcon className="icon" style={{ color:"crimson", backgroundColor: "#ff00004c",}}/>,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartIcon className="icon" style={{ color:"purple", backgroundColor: "#80008042",}}/>,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnIcon className="icon" style={{ color:"#0eb683", backgroundColor: "#0eb68442",}}/>,
      };
      break;
    case "balances":
      data = {
        title: "BALANCES",
        isMoney: true,
        link: "See all users",
        icon: <AccountBalanceWalletIcon className="icon" style={{ color:"orange", backgroundColor: "#ffa60045" }} />,
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
