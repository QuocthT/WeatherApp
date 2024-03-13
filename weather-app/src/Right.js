import React, {useState} from "react";
import Footer from "./Footer.js";
import './Right.css'

function Search() {
    return(
        <div id="container">
            <div id="top">
                <div id="searchBox" className="box">
                    <input type="text" className="search" placeholder="search"></input>
                </div>
                <div id="details1" className="box">
                    AirQuality
                    Rainfall
                </div>
            </div>
            <div id="bottom">
                <div id="details2" className="box">
                    Details
                </div>
                <div id="details3" className="box">
                    Sunrise and Sunset
                </div>
            </div>
        </div>
    );
}

function Main() {
    return (
      <div className="main">
        <header className="App-header"></header>
        <Search />
        <Footer />
        
      </div>
    );
}

export default Main;