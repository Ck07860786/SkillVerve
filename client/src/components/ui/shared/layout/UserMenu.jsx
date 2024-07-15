import { useAuth } from '@/context/authContext';
import { Home, Layers, LogOut, SquareMousePointer, UserRound } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function UserMenu() {
    const [auth, setAuth] = useAuth();
    const [activeLink, setActiveLink] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
    };

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        // Close sidebar on link click in mobile view
        if (window.innerWidth < 640) {
            setIsSidebarOpen(false);
        }
    };

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <button
                type="button"
                onClick={handleSidebarToggle}
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>
            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
                }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-blue-600 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to="/dashboard/user"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/user' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/user')}
                            >
                                <UserRound />
                                <span className="text-3x hover:text-black font-semibold ms-3">My Dashboard</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link
                                to="/dashboard/user/my-courses"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/user/my-courses' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/user/my-courses')}
                            >
                                <Layers />
                                <span className="p-4">My Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/dashboard/user/skills'
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/user/create-course' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/user/skills')}
                            >
                                <SquareMousePointer />
                                <span className="p-4">All Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/user/profile"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/user/profile' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/user/profile')}
                            >
                                <UserRound />
                                <span className="p-4">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/home"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/home' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/home')}
                            >
                                <Home />
                                <span className="p-4">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/login' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={handleLogout}
                            >
                                <LogOut />
                                <span className="p-4">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default UserMenu;
