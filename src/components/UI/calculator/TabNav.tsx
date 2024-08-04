import Link from "next/link";
import { usePathname } from "next/navigation";

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
    const currentRoute = usePathname();

    const className =
      currentRoute === link ? classes.active : classes.nonActive;

    return (
      <Link href={link} className={className}>
        {label}
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
