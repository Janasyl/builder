import classes from "./FFBuilder.module.css";
import PizzaPreview from "./FFPreview/FFPreview";
import PizzaControls from "./FFControls/FFControls";

const FFBuilder = () => {
  const ingredients = {
    tomato: 20,
    salami: 20,
    greenOlive: 20,
    blackOlive: 20,
    redPepper: 20,
    yellowPepper: 15,
  };

  return (
    <div className={classes.FFBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls />
    </div>
  );
}

export default FFBuilder;