import React from "react";
import Chart from "../components/chart/Chart";
import Featured from "../components/featured/Featured";
import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";
import Widget from "../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets ">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balances" />
        </div>
        <div className="charts">
          <Featured/>
          < Chart/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
