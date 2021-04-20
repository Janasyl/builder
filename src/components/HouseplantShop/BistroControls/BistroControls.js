import BistroControl from "./BistroControl";
import classes from "./BistroControls.module.css";
import Button from "../../UI/Button/Button"

const BistroControls = ({pots , addPot , removePot , startOrdering}) => {
    const results =[];
    let total = 0;
    for (const pot in pots) {
        total += pots[pot];
        results.push(<BistroControl type={pot} addPot={addPot} removePot={removePot} count={pots[pot]}/>)
    }
    return ( 
        <div className={classes.BistroControls}>
            {results}
            <Button disabled={!total} onClick={startOrdering}>Order</Button>
        </div>
     );
}
 
export default BistroControls;