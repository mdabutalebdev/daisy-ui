import { NavLink } from "react-router";

 

 

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto flex items-center justify-between">
        {/* Logo & Mobile Dropdown */}
        <div className="flex items-center gap-4">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md font-medium ${
                      isActive
                        ? "text-[#4F39F6]"
                        : "text-gray-700 hover:text-[#4F39F6] duration-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">ATK</a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex gap-10">
          <ul className="flex items-center gap-10 px-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `text-md font-medium duration-300 ${
                    isActive
                      ? "text-[#4F39F6]"
                      : "text-gray-700 hover:text-[#4F39F6]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-[#4F39F6] px-4 py-2 rounded-md text-white">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
