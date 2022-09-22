import { useEffect, useState } from "react";
import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
  const [topBarClass, setTopBarClass] = useState(classes.topBar);
  const [midBarClass, setMidBarClass] = useState(classes.midBar);
  const [bottomBarClass, setbottomBarClass] = useState(classes.bottomBar);

  const hamburgerHandler = () => {
    props.setShowMenu((current) => !current);
  };

  useEffect(() => {
    if (props.showMenu === true) {
      setTopBarClass(classes.topBarOpen);
      setMidBarClass(classes.midBarOpen);
      setbottomBarClass(classes.bottomBarOpen);
    } else {
      setTopBarClass(classes.topBar);
      setMidBarClass(classes.midBar);
      setbottomBarClass(classes.bottomBar);
    }
  }, [props.showMenu]);

  return (
    <div className={classes.ham} onClick={hamburgerHandler}>
      <div className={topBarClass}></div>
      <div className={midBarClass}></div>
      <div className={bottomBarClass}></div>
    </div>
  );
};

export default Hamburger;
