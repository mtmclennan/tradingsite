"use client";

import Footer from "./Footer";
import { Fragment } from "react";
import Image from "next/legacy/image";
import classes from "./Layout.module.scss";
import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathName = usePathname();

  return (
    <Fragment>
      <MainHeader currentRoute={pathName} />
      <main className={classes.container}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
