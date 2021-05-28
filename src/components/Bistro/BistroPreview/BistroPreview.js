import BistroMenu from "../BistroMenu/BistroMenu";

import classes from "./BistroPreview.module.css";

const BistroPreview = ({ menus, price }) => {
  const result = [];
  for (const menu in menus) {
    for (let i = 0; i < menus[menu]; i++) {
      result.push(<BistroMenu key={menu + i} type={menu} />)
    }
  }

  return (
    <div className={classes.BistroPreview}>
      <div className={classes.bistro}>
        
          {result}
        </div>
      
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default BistroPreview;