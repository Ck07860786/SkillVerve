import { useAuth } from '@/context/authContext';
import { Home, Layers, LayoutGrid, LogOut, SquareMousePointer, UserRound } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function AdminMenu() {
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
                                to="/dashboard/admin"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/admin' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/admin')}
                            >
                                <svg
                                    className="w-8 h-8 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="text-3x hover:text-black font-semibold ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/admin/create-category"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/admin/create-category' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/admin/create-category')}
                            >
                                <LayoutGrid />
                                <span className="p-4">Create Category</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/admin/create-course"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/admin/create-course' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/admin/create-course')}
                            >
                                <SquareMousePointer />
                                <span className="p-4">Create Course</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/admin/skills"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/admin/skills' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/admin/skills')}
                            >
                                <Layers />
                                <span className="p-4">All Courses</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/admin/profile"
                                className={`flex items-center p-2 rounded-lg ${
                                    activeLink === '/dashboard/admin/profile' ? 'bg-white text-gray-900' : 'text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700'
                                }`}
                                onClick={() => handleLinkClick('/dashboard/admin/profile')}
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

export default AdminMenu;
