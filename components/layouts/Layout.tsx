import Footer from "./Footer";
import { Fragment, ReactNode, useEffect, useState } from "react";
import Image from "next/legacy/image";
import classes from "./Layout.module.scss";
import { useRouter } from "next/router";
import MainHeader from "./MainHeader";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Fragment>
      <MainHeader currentRoute={currentRoute} />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
