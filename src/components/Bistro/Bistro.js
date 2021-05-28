import BistroPreview from "./BistroPreview/BistroPreview";
import BistroControls from "./BistroControls/BistroControls";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./Bistro.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const Bistro = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const menus = useSelector(state => state.builder.menus);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    }
    else {
      history.push("/auth");
    }
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
        menus={menus}
        price={price} />
      <BistroControls
        menus={menus}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            menus={menus}
            price={price}
            />
          <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(Bistro, axios);