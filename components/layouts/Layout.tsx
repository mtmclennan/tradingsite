import Footer from "./Footer";
import { Fragment, ReactNode } from "react";
import classes from "./Layout.module.css";
import MainHeader from "./MainHeader";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
