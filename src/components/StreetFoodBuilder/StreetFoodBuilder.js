/* eslint-disable react/jsx-no-undef */
import StreetFoodPreview from "./StreetFoodPreview/StreetFoodPreview";
import StreetFoodControls from "./StreetFoodControls/StreetFoodControls";

import classes from "./StreetFoodBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const StreetFoodBuilder = () => {
  const prices = {
    burger: 150,
    frenchfries: 200,
    coffee: 30,
    coke: 25,
    shawrma: 130,
    pepsi: 35,
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(
    () => axios
      .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      }), []
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.StreetFoodBuilder}>
      <StreetFoodPreview
        ingredients={ingredients}
        price={price} />
      <StreetFoodControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default StreetFoodBuilder;