import { NavLink, Link } from "react-router-dom";

import { LoginLink } from "./";

const navItems = [
  {
    id: 1,
    label: "Pricing",
    href: "/pricing",
  },
  {
    id: 2,
    label: "Product",
    href: "/product",
  },
];

const Header = () => {
  return (
    <header className="py-6 px-8">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="h-12 object-cover" src="/assets/logo.png" alt="WorldWise Logo" />
          </Link>
        </div>

        <nav>
          <ul className="flex items-center space-x-10">
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <NavLink
                  className={({ isActive }) =>
                    `text-zinc-50 transition-colors hover:text-zinc-400 hover:underline hover:underline-offset-6 uppercase text-base ${
                      isActive ? "text-zinc-400 underline underline-offset-6" : ""
                    }`
                  }
                  to={navItem.href}>
                  {navItem.label}
                </NavLink>
              </li>
            ))}
            <li>
              <LoginLink>Login</LoginLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
