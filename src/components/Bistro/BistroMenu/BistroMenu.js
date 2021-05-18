import classes from "./BistroMenu.module.css";

import burger from "../../../images/burger.svg";
import coffee from "../../../images/coffee.svg";
import cola from "../../../images/cola.svg";
import kebab from "../../../images/kebab.svg";
import potato from "../../../images/potato.svg";
import waiter from "../../../images/waiter.svg";
const BistroMenu = ({ type }) => {
  const types = {
    burger: {
      backgroundImage: `url(${burger})`,
      width: "80px",
      height: "80px",
    },
    coffee: {
      backgroundImage: `url(${coffee})`,
      width: "80px",
      height: "80px",
    },
    cola: { backgroundImage: `url(${cola})`, width: "80px", height: "80px" },
    kebab: { backgroundImage: `url(${kebab})`, width: "80px", height: "80px" },
    potato: {
      backgroundImage: `url(${potato})`,
      width: "80px",
      height: "80px",
    },
    waiter: {
      backgroundImage: `url(${waiter})`,
      width: "80px",
      height: "80px",
    },
  };
  return <div className={classes.BistroMenu} style={types[type]}></div>;
};

export default BistroMenu;
