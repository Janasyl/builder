import FastFoodIngredient from "../FastFoodIngredient/FastFoodIngredient";
import classes from "./FastFoodPreview.module.css";
import ingredientsBackground from "../../../images/french-fries.svg";

const FastFoodPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FastFoodIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.FastFoodPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default FastFoodPreview;