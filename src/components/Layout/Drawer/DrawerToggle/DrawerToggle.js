import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({ setDrawerOpen }) => {
  return (
    <div
      className={classes.DrawerToggle}
      onClick={() => setDrawerOpen(true)}>
      Toggle
    </div>
  );
}

export default DrawerToggle;