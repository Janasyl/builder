import Button from "../../../UI/Button/Button"
import classes from "./CheckoutForm.module.css"

const CheckoutForm = ({ cancelCallback }) => {
     return (
          <form className={classes.CheckoutForm}>
               <div>
                    <label>Name:</label>
                    <input type="text" id="name" name="name" />
               </div>

               <div>
                    <label>Phone:</label>
                    <input type="tel" id="phone" name="phone" />
               </div>
               <div>
                    <label>Address:</label>
                    <input type="text" id="adress" name="address" />
               </div>

               <Button>Checkout</Button>
               <Button
               onClick={cancelCallback}
               >Cancel</Button>
          </form>
     );
}

export default CheckoutForm;