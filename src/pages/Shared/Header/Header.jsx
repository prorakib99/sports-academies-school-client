import { useState, useEffect } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import { useSpring, animated } from 'react-spring';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import lightLogo from '../../../assets/light-logo.png';
import darkLogo from '../../../assets/dark-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { useContext } from 'react';
import { nav } from '../../../localData/nav';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
    const { theme, themeToggle } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [theme]);

    // Sign Out handler
    const handleSignOut = () => {
        logOut()
            .then()
            .catch((err) => console.log(err));
    };

    const iconProps = useSpring({
        transform: `rotate(${isMenuOpen ? 180 : 0}deg)`,
        config: { tension: 300, friction: 20 }
    });

    const navigation = (
        <>
            {nav.map((n) => (
                <NavLink
                    key={n.id}
                    to={n.path}
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'active text-white bg-gray-800 cursor-pointer rounded-md px-3 py-2 text-sm font-medium dark:bg-slate-800 dark:text-slate-200'
                            : 'cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                    }
                >
                    {n.page}
                </NavLink>
            ))}
            <NavLink
                to='/dashboard'
                className='cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            >
                Dashboard
            </NavLink>
        </>
    );

    return (
        <nav className='border-general sticky top-0 z-40 border-b dark:border-[#0B1120] bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/90'>
            <div className='container'>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='flex items-center'>
                        <Link to='/' className='flex items-center'>
                            <img
                                className='object-cover w-full h-12'
                                alt='Logo'
                                src={theme === 'dark' ? darkLogo : lightLogo}
                            />
                        </Link>
                    </div>

                    <div className='flex space-x-4 lg:hidden'>
                        <button onClick={themeToggle} className='flex-shrink-0 cursor-pointer p-1'>
                            {theme === 'dark' ? <FiSun className='text-white' /> : <FaMoon />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className='text-gray-400 hover:text-white focus:outline-none'
                        >
                            <animated.div style={iconProps}>
                                {isMenuOpen ? (
                                    <MdClose className='text-2xl text-black dark:text-white' />
                                ) : (
                                    <HiBars3 className='text-2xl text-black dark:text-white' />
                                )}
                            </animated.div>
                        </button>
                    </div>

                    <div className='hidden lg:flex lg:items-center lg:space-x-4'>
                        <div className='flex space-x-2'>{navigation}</div>
                        <div className='flex items-center space-x-4'>
                            <button
                                onClick={themeToggle}
                                className='flex-shrink-0 cursor-pointer p-1'
                            >
                                {theme === 'dark' ? <FiSun className='text-white' /> : <FaMoon />}
                            </button>
                            <div className='flex space-x-3'>
                                {user ? (
                                    <>
                                        <div className='dropdown dropdown-end'>
                                            <div
                                                tabIndex={0}
                                                role='button'
                                                className='btn btn-ghost btn-circle avatar'
                                            >
                                                <div className='w-9 rounded-full border-2 border-black dark:border-sky-600'>
                                                    <img
                                                        className='object-top'
                                                        alt={user?.displayName}
                                                        src={user?.photoURL}
                                                    />
                                                </div>
                                            </div>
                                            <ul
                                                tabIndex={0}
                                                className='mt-3 z-[1] p-2 flex flex-col gap-2 items-center shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40 dark:bg-[#0B1120]/90 font-bold dark:text-white/60'
                                            >
                                                <li>
                                                    <button className='dark:hover:text-white'>
                                                        Profile
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={handleSignOut}
                                                        className='dark:hover:text-white'
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                ) : (
                                    <Link to='/login'>
                                        <button className='bg-slate-900 dark:bg-sky-600 text-sm rounded-full px-4 font-bold py-1.5 text-white dark:text-white/90 hover:text-white'>
                                            Login
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsive Menu */}
                {isMenuOpen && (
                    <div className='lg:hidden'>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                            {navigation}
                        </div>
                        <div className='flex space-x-3 py-4 mb-2 border-t'>
                            {user ? (
                                <>
                                    <div>
                                        {user?.photoURL ? (
                                            <>
                                                <img
                                                    className='w-9 h-9 border-2 border-black dark:border-sky-600 rounded-full'
                                                    src={user?.photoURL}
                                                    alt={user?.displayName}
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <div className='w-9 h-9 bg-orange-400 text-black font-bold flex justify-center items-center uppercase text-lg rounded-full'>
                                                    {user?.displayName.slice(0, 1) || 'd'}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <Link to='/login'>
                                    <button
                                        className='bg-slate-900 w-full font-bold text-center dark:bg-sky-600 text-sm rounded-full p-2 text-white'
                                        type='button'
                                    >
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
