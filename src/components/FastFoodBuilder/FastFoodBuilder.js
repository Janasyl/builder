import classes from "./FastFoodBuilder.module.css";
import FastFoodPreview from ".../FastFoodPreview/FastFoodPreview";
import FastFoodControls from ".../FastFoodControls/FastFoodControls";

const FastFoodBuilder = () => {
  const ingredients = {
    potato: 20,
  
  };

  return (
    <div className={classes.FastFoodBuilder}>
      <FastFoodPreview ingredients={ingredients} />
      <FastFoodControls />
    </div>
  );
}

export default FastFoodBuilder;