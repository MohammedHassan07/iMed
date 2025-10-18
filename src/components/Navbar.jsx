import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Sales",
      submenu: [
        { name: "Add Sales", path: "/sales/add" },
        { name: "Return Sales", path: "/sales/return" },
      ],
    },
    {
      name: "Item",
      submenu: [
        { name: "Add Item", path: "/item/add" },
        { name: "Get Item", path: "/item/" },
      ],
    },
    {
      name: "Stock",
      submenu: [
        { name: "Purchase", path: "/purchase/" },
        { name: "Return Purchase", path: "/purchase/return-purchase" },
        { name: "Update Purchase", path: "/purchase/update-purchase" },
      ],
    },
    {
      name: "Inventory",
      submenu: [
        { name: "Add Inventory", path: "/inventory/add" },
        { name: "Get Inventory", path: "/inventory/get" },
      ],
    },
    {
      name: "Taxes", path: '/taxes'
    },
    {
      name: "Suppliers", path: '/supplier'
    },

  ];

  return (
    <nav className="bg-blue-950 text-white shadow-md" ref={dropdownRef}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LEFT SIDE: Logo + Menu */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link to="/" className="font-semibold">
            <span className="text-blue-300 text-2xl">i</span> <span className="text-xl -ml-1">Med</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-1 hover:text-gray-300"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="absolute bg-white text-gray-800 mt-4 rounded-md shadow-md w-44 z-50">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 hover:bg-blue-100"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-gray-300"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>

        {/* RIGHT SIDE: Profile */}
        <div className="hidden md:flex items-center space-x-2 cursor-pointer hover:text-gray-300">
          <User size={20} />
          <Link to="/profile">Profile</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800 px-4 pb-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full text-left flex justify-between items-center py-2"
                  >
                    {item.name}
                    <ChevronDown size={16} />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="ml-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                          className="block py-1 hover:text-gray-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block py-2 hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <hr className="border-gray-600 my-2" />
          <Link
            to="/profile"
            onClick={() => setIsOpen(false)}
            className=" py-2 hover:text-gray-300 flex items-center space-x-2"
          >
            <User size={18} /> <span>Profile</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
