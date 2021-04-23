import classes from "./CheckoutSummary.module.css";
import BistroPreview from "../../Bistro/BistroPreview/BistroPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BistroPreview pots={{
          Kebab: 5, 
          Burger: 1,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}

export default CheckoutSummary; 