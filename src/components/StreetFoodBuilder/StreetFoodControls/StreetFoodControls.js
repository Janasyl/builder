import Button from "../../UI/Button/Button";
import StreetFoodControl from "./StreetFoodControl/StreetFoodControl";
import classes from "./StreetFoodControls.module.css";

const StreetFoodControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
  
    total += ingredients[ingredient];

    results.push(<StreetFoodControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.StreetFoodControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total}>Order</Button>
    </div>
  );
}

export default StreetFoodControls;