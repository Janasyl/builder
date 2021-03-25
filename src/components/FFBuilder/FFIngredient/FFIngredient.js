import classes from "./FFngredient.module.css";

import frenchBackground from "../../../images/french-fries.svg";


const FFIngredient = ({ type }) => {
  const types = {
    french: { backgroundImage: `url(${frenchBackground})`, width: "35px", height: "35px" },
   
  };

  function getPosition(ingredientWidth) {
    const fastfoodRadius = fastfoodDiameter / 2;
    const fastfoodRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * fastfoodDiameter);
    const ingredientLeft = Math.round(Math.random() * fastfoodDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - fastfoodRadius, 2) + Math.pow(ingredientLeft - fastfoodRadius, 2)
    ) + ingredientRadius;

    return distance < fastfoodRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  const position = getPosition(types[type].width);
  types[type].top = position.top + "px";
  types[type].left = position.left + "px";
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.FFIngredient} style={types[type]}></div>
  );
}

export default FFIngredient;