import FFIngredient from "../FFIngredient/FFIngredient";
import classes from "./FFPreview.module.css";
import ingredientsBackground from "../../../images/french-fries.svg";

const FFPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FFIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.FFPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default FFPreview;