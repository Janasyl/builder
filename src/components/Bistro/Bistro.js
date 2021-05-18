import BistroPreview from "./BistroPreview/BistroPreview";
import  BistroControls from "./BistroControls/BistroControls";

import classes from "./BistroShop.module.css";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import withAxios from "../withAxios";
import { load } from "../../store/actions/builder";

const Bistro = ({ history }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.Bistro}>
      <BistroPreview
        ingredients={ingredients}
        price={price} />
      <BistroControls
        ingredients={ingredients}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
          <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(Bistro, axios);