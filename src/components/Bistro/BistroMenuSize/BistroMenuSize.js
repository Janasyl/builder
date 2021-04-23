
// import alocasia from "../../../images/alocasia.svg"
import burger from "../../../images/burger.svg"
import potato from "../../../images/potato.svg"
import coffee from "../../../images/coffee.svg"
import cola from "../../../images/cola.svg"
import waiter from "../../../images/waiter.svg"
const BistroMenuSize =({type}) => {
    const types = {
        // alocasia : {backgroundImage : `url(${alocasia})` , width:"60px", height:"60px"},
        burger : {backgroundImage : `url(${burger})` , width:"60px", height:"60px"},
        potato : {backgroundImage : `url(${potato})` , width:"60px", height:"60px"},
        coffee : {backgroundImage : `url(${coffee})` , width:"60px", height:"60px"},
        cola : {backgroundImage : `url(${cola})` , width:"60px", height:"60px"},
        waiter : {backgroundImage : `url(${waiter})` , width:"60px", height:"60px"}
    }
    return ( 
        <div style={types[type]}></div>
     );
}
 
export default BistroMenuSize;