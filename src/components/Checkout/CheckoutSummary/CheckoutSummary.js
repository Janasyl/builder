import classes from "./CheckoutSummary.module.css";
import BistroPreview from "../../HouseplantShop/BistroPreview/BistroPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BistroPreview pots={{
          alocasia: 5, 
          bonsai: 1,
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