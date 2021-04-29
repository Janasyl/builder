import classes from "./CheckoutSummary.module.css";
import BistroPreview from "../../Bistro/BistroPreview/BistroPreview";
import Button from "../../UI/Button/Button";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BistroPreview pots={{
          Kebab: 5, 
          Burger: 1,
        }} price={150} />
      </div>
<CheckoutForm />


    </div>
  );
}

export default CheckoutSummary; 