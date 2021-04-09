import classes from "./Logo.module.css";
import logo from "../../../images/logo2.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the StreetFood project" />
      <div>StreetFood</div>
    </div>
  );
}

export default Logo;