import classes from "./Logo.module.css";
import logo from "../../Picture/banana_pancake.svg";

function Logo() {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Pancake logo" />
            <span>Pancake</span>
        </div>
    );
}

export default Logo;