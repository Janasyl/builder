import classes from "./Logo.module.css";
import logo from "../../images/fast-food.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the fast food project" />
      <div>Fast Food</div>
    </div>
  );
}

export default Logo;