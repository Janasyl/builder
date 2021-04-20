
import Burger from "../../../images/burger.svg"
import Kebab from "../../../images/kebab.svg"

const BistroMenuSize =({type}) => {
    const types = {
        alocasia : {backgroundImage : `url(${Burger})` , width:"60px", height:"60px"},
        begonia : {backgroundImage : `url(${Kebab})` , width:"60px", height:"60px"}
    }
    return ( 
        <div style={types[type]}></div>
     );
}
 
export default BistroMenuSize;