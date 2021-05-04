import classes from "./Logo.module.css"
import logo from "../../images/waiter.svg"
const Logo = () => {
    return ( 
        <div className={classes.Logo}>
            <img  alt="Logo of the Bistro project" src={logo} className={classes.Logo} />
            <div>Fast Food</div>
        </div>
     );
}
 
export default Logo;