import Footer from "./Footer";
import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.container}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
