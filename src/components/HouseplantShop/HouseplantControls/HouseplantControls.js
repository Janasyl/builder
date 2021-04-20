import HouseplantControl from "./HouseplantControl";
import classes from "./HouseplantControls.module.css";
import Button from "../../UI/Button/Button"

const HouseplantControls = ({pots , addPot , removePot , startOrdering}) => {
    const results =[];
    let total = 0;
    for (const pot in pots) {
        total += pots[pot];
        results.push(<HouseplantControl type={pot} addPot={addPot} removePot={removePot} count={pots[pot]}/>)
    }
    return ( 
        <div className={classes.HouseplantControls}>
            {results}
            <Button disabled={!total} onClick={startOrdering}>Order</Button>
        </div>
     );
}
 
export default HouseplantControls;