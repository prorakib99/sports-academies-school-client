import { useState, useEffect } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import useTheme from '../../../hooks/useTheme/useTheme';
import { useSpring, animated } from 'react-spring';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
    const [theme, themeToggle] = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, [theme]);

    const iconProps = useSpring({
        transform: `rotate(${isMenuOpen ? 180 : 0}deg)`,
        config: { tension: 300, friction: 20 }
    });

    return (
        <nav className='border-general sticky top-0 z-40 border-b bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80'>
            <div className='container'>
                <div className='relative flex h-16 items-center justify-between'>
                    <div className='flex items-center'>
                        <button className='flex items-center'>
                            <img alt='Logo' src='' />
                        </button>
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
                        <div className='flex space-x-2'>
                            <a
                                href='/'
                                className='cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                            >
                                Home
                            </a>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <button
                                onClick={themeToggle}
                                className='flex-shrink-0 cursor-pointer p-1'
                            >
                                {theme === 'dark' ? <FiSun className='text-white' /> : <FaMoon />}
                            </button>
                            <div className='flex space-x-3'>
                                <button className='bg-slate-900 dark:bg-sky-600 text-sm rounded-full p-2 text-white'>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsive Menu */}
                {isMenuOpen && (
                    <div className='lg:hidden'>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                            <a
                                href='/'
                                className='cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                            >
                                Home
                            </a>
                        </div>
                        <div className='flex space-x-3 py-4 mb-2 border-t'>
                            <button
                                className='bg-slate-900 w-full font-bold text-center dark:bg-sky-600 text-sm rounded-full p-2 text-white'
                                type='button'
                            >
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;
