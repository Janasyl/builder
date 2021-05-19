import classes from "./Order.module.css";

const Order = ({ name, phone, address, menus, price }) => {
  const outputMenus = Object.keys(menus).map((menu) => (
    <em>
      {menu} - {menus[menu]}
    </em>
  ));
  console.log(outputMenus);
  return (
    <div className={classes.Order}>
      <div>
        {name}, {phone}, {address}
      </div>
      <div>{outputMenus}</div>
      <strong>{price}</strong>
    </div>
  );
};

export default Order;