import classes from "./BistroMenu.module.css"

import Burger from "../../../images/burger.svg"
import Kebab from "../../../images/kebab.svg"

const BistroMenu =({type}) => {
    const types = {
        alocasia : {backgroundImage : `url(${Burger})` , width:"80px", height:"80px"},
        begonia : {backgroundImage : `url(${Kebab})` , width:"80px", height:"80px"}

    }
    return ( 
        <div className={classes.BistroMenu} style={types[type]}></div>
     );
}
 
export default BistroMenu;