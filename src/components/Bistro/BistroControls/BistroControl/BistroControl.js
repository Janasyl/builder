import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";
import Button from "../../../UI/Button/Button";
import BistroMenu from "../../BistroMenu/BistroMenu";
import classes from "./BistroControl.module.css";

const BistroControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.BistroControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <BistroMenu type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default BistroControl;