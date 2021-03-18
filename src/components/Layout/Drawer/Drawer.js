import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import classes from "./Drawer.module.css";

const Drawer = ({ open }) => {
  const drawerClasses = [classes.content];
  if (open) {
    drawerClasses.push(classes.open);
  }
  else {
    drawerClasses.push(classes.closed);
  }

  return (
    <div className={classes.Drawer}>
      <div className={drawerClasses.join(" ")}>
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
 
export default Drawer;