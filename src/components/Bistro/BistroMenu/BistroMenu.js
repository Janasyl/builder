import React from "react";

import classes from "./BistroMenu.module.css";
import burgerBackground from "../../../images/burger.svg";
import shawarmaBackground from "../../../images/kebab.svg";
import frenchfriesBackground from "../../../images/potato.svg";
import coffeeBackground from "../../../images/coffee.svg";
import colaBackground from "../../../images/cola.svg";


const BistroMenu = ({ type, fixed }) => {
  const types = {
    burger: { backgroundImage: `url(${burgerBackground})`, width: "50px", height: "50px" },
    shawarma: { backgroundImage: `url(${shawarmaBackground})`, width: "50px", height: "50px" },
    frenchfries: { backgroundImage: `url(${frenchfriesBackground})`, width: "50px", height: "50px" },
    coffee: { backgroundImage: `url(${coffeeBackground})`, width: "50px", height: "45px" },
    cola: { backgroundImage: `url(${colaBackground})`, width: "50px", height: "50px" },
    
  };

  return (
    <div className={classes.BistroMenu} style={types[type]}></div>
  );
}

export default React.memo(BistroMenu);