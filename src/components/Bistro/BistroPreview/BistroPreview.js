import BistroMenu from "../BistroMenu/BistroMenu";

import classes from "./BistroPreview.module.css";
// import menuBackground from "../../../images/cheese.svg";

const BistroPreview = ({ foods, price }) => {
  const result = [];
  for (const food in foods) {
    for (let i = 0; i < foods[food]; i++) {
      result.push(<BistroMenu key={food + i} type={food} />);
    }
  }

  return (
    <div className={classes.BistroPreview}>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
};

export default BistroPreview;
