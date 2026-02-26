import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

const navItems = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" }, // 👈 Projects should be last
  { name: "Contact", path: "/contact" }, // 👈 Projects should be last
];
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
        <div className="w-full px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-indigo-400">Savan Rathod</div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 text-xl font-medium">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-indigo-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Toggle Button for Mobile */}
          <button
            className="lg:hidden text-2xl text-indigo-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-64 bg-gray-800 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 flex flex-col items-center space-y-6 text-lg font-medium">
          <button
            className="self-end text-indigo-400 hover:text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}