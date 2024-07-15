import { useAuth } from "@/context/authContext";
import { LogOut, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "../../button";
import useCategory from "@/hooks/useCategory";

function Header() {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b w-full p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-zinc-800 text-2xl font-bold">
          Skill<span className="text-blue-700 font-Inter">Verve</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                {categories.map((c) => (
                  <Link
                    key={c._id}
                    to={`/category/${c.slug}`}
                    className="block p-2 hover:bg-gray-200 rounded"
                  >
                    {c.name}
                  </Link>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-zinc-800">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `text-zinc-500 hover:text-slate-600 ${
                isActive ? "border-b-2 border-blue-700" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-zinc-500 hover:text-slate-600 ${
                isActive ? "border-b-2 border-blue-700" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-zinc-500 hover:text-slate-600 ${
                isActive ? "border-b-2 border-blue-700" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-zinc-500 hover:text-slate-600 ${
                isActive ? "border-b-2 border-blue-700" : ""
              }`
            }
          >
            Contact
          </NavLink>
          {!auth.user ? (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `text-zinc-500 hover:text-slate-600 ${
                    isActive ? "border-b-2 border-blue-700" : ""
                  }`
                }
              >
                Register as Learner
              </NavLink>
              <NavLink
                to="/register-admin"
                className={({ isActive }) =>
                  `text-zinc-500 hover:text-slate-600 ${
                    isActive ? "border-b-2 border-blue-700" : ""
                  }`
                }
              >
                Become a Leader 
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-zinc-500 hover:text-slate-600 ${
                    isActive ? "border-b-2 border-blue-700" : ""
                  }`
                }
              >
                Login
              </NavLink>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center" asChild>
                <Button
                  className="text-zinc-500 hover:text-slate-600"
                  variant="outline"
                >
                  {auth.user.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <NavLink
                  to={`/dashboard/${
                    auth?.user?.role === 1 ? "admin" : "user"
                  }/profile`}
                >
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </NavLink>
                <NavLink
                  to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                >
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </NavLink>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `text-zinc-500 hover:text-slate-600 ${
                  isActive ? "border-b-2 border-blue-700" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-zinc-500 hover:text-slate-600 ${
                  isActive ? "border-b-2 border-blue-700" : ""
                }`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-zinc-500 hover:text-slate-600 ${
                  isActive ? "border-b-2 border-blue-700" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-zinc-500 hover:text-slate-600 ${
                  isActive ? "border-b-2 border-blue-700" : ""
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            {!auth.user ? (
              <>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `text-zinc-500 hover:text-slate-600 ${
                      isActive ? "border-b-2 border-blue-700" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Reagister as Learner
                </NavLink>
                <NavLink
                  to="/register-admin"
                  className={({ isActive }) =>
                    `text-zinc-500 hover:text-slate-600 ${
                      isActive ? "border-b-2 border-blue-700" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Become a Leader
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `text-zinc-500 hover:text-slate-600 ${
                      isActive ? "border-b-2 border-blue-700" : ""
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <NavLink
                  to={`/dashboard/${
                    auth?.user?.role === 1 ? "admin" : "user"
                  }/profile`}
                  onClick={toggleMenu}
                >
                  Profile
                </NavLink>
                <NavLink
                  to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                  onClick={toggleMenu}
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="text-zinc-500 hover:text-slate-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
