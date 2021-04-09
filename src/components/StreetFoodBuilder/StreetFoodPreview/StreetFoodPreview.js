import StreetFoodIngredient from "../StreetFoodIngredient/StreetFoodIngredient";

import classes from "./StreetFoodPreview.module.css";


const StreetFoodPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<StreetFoodIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.StreetFoodPreview}>
      <div className={classes.streetfood}>
        <div className={classes.podnos}>
          
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default StreetFoodPreview;