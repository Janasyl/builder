
import alocasia from "../../../images/alocasia.svg"
import begonia from "../../../images/begonia.svg"
import bonsai from "../../../images/bonsai.svg"
import calathea from "../../../images/calathea.svg"
import cyclamen from "../../../images/cyclamen.svg"
import dracaena from "../../../images/dracaena.svg"
const HouseplantPotSize =({type}) => {
    const types = {
        alocasia : {backgroundImage : `url(${alocasia})` , width:"60px", height:"60px"},
        begonia : {backgroundImage : `url(${begonia})` , width:"60px", height:"60px"},
        bonsai : {backgroundImage : `url(${bonsai})` , width:"60px", height:"60px"},
        calathea : {backgroundImage : `url(${calathea})` , width:"60px", height:"60px"},
        cyclamen : {backgroundImage : `url(${cyclamen})` , width:"60px", height:"60px"},
        dracaena : {backgroundImage : `url(${dracaena})` , width:"60px", height:"60px"}
    }
    return ( 
        <div style={types[type]}></div>
     );
}
 
export default HouseplantPotSize;