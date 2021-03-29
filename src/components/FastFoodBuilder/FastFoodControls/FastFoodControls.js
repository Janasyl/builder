import FastFoodControl from "./FastFoodControl/FastFoodControl";
import classes from "./FastFoodControls.module.css";

const FastFoodControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<FastFoodControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.FastFoodControls}>
      <strong>Ingredients</strong>
      {results}
    </div>
  );
}

export default FastFoodControls;