import classes from "./BistroPreview.module.css";
import BistroMenu from "../BistroMenu/BistroMenu"

const BistroPreview = ({ pots, price }) => {
  const result = [];
  for (const pot in pots) {
    for (let i = 0; i < pots[pot]; i++) {
      result.push(<BistroMenu type={pot} />)
    }
  }
  return (
    <div>
    <div className={classes.BistroPreview}>
        <div className={classes.pots}>
          {result}
        </div>
    </div> 
    <div> 
        <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
    </div>
  );
}

export default BistroPreview;