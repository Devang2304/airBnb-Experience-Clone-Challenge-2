import React from "react";
import airbnbimage from "./images/airbnbimage.png";

export default  function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={airbnbimage}/>
        </nav>
    )
} 