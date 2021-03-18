import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

const Toolbar = ({ setDrawerOpen }) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <Nav />
      <DrawerToggle setDrawerOpen={setDrawerOpen} />
    </div>
  );
}
 
export default Toolbar;