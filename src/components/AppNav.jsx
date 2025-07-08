import { NavLink } from "react-router-dom";
import classNames from "classnames";

const appNavItems = [
  {
    id: 1,
    label: "Cities",
    href: "cities",
  },
  {
    id: 2,
    label: "Countries",
    href: "countries",
  },
];

const AppNav = () => {
  return (
    <ul className="flex bg-zinc-700 text-white rounded-[7px] overflow-hidden">
      {appNavItems.map((appNavItem) => (
        <li key={appNavItem.id}>
          <NavLink
            className={({ isActive }) =>
              classNames("outline-none block py-1.5 px-5 uppercase text-xs font-bold max-w-sm", {
                "bg-zinc-800/65 rounded-[7px]": isActive,
              })
            }
            to={appNavItem.href}>
            {appNavItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AppNav;
