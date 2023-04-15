import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./TabNav.module.scss";

interface TabProps {
  label: string;
  link: string;
}
interface TabNavProps {
  tabs: TabProps[];
}

const TabNav = ({ tabs }: TabNavProps) => {
  const Tab = ({ link, label }: TabProps) => {
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
      {tabs &&
        tabs.map((tab) => (
          <Tab key={tab.label} link={tab.link} label={tab.label} />
        ))}
    </div>
  );
};

export default TabNav;
