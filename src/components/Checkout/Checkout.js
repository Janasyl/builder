import BistroPreview from "../Bistro/BistroPreview/BistroPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {
  const { token, id } = useSelector(state => state.auth); 
  const menus = useSelector(state => state.builder.menus);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json?auth=' + token, {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      menus: menus,
      price: price,
      userId: id
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <BistroPreview menus={menus} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
    </div>
  );
}
 
export default withAxios(Checkout, axios);