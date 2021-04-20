import classes from "./Logo.module.css"
import logo from "../../images/logo.svg"
const Logo = () => {
    return ( 
        <div className={classes.Logo}>
            <img  alt="Logo of the Houseplant project" src={logo} className={classes.Logo} />
            <div>Houseplant</div>
        </div>
     );
}
 
export default Logo;