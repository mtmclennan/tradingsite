import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./TabNav.module.css";

const TabNav = (props) => {
  const Tab = ({ link, label }) => {
    const router = useRouter();

    const currentRoute = router.pathname;

    const className =
      currentRoute === link ? classes.active : classes.nonActive;

    return (
      <Link href={link}>
        <a className={className}>{label}</a>
      </Link>
    );
  };

  return (
    <div className={classes.container}>
      {props.tabs &&
        props.tabs.map((tab) => (
          <Tab key={tab.label} link={tab.link} label={tab.label} />
        ))}
    </div>
  );
};

export default TabNav;
