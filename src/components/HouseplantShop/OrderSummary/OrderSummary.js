import classes from "./OrderSummary.module.css";

const OrderSummary = ({pots , price}) => {
    const labels = {
        alocasia: "alocasias",
        bonsai: "bonsais",
        begonia:"begonias",
        cyclamen:"cyclamens",
        calathea:"calatheas",
        dracaena:"dracaenas"
    }
    const results =Object.keys(pots)
     .map(type => <li>{labels[type]} : {pots[type]}</li>)
    return ( 
        <div className={classes.OrderSummary}>
            <h3>Order Summary:</h3>
            <ul>
                {results}
            </ul>
            <strong>Total price: {price.toFixed(1)} som</strong>
        </div>
     );
}
 
export default OrderSummary;