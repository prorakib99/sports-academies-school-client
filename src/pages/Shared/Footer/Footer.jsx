import { Link } from 'react-router-dom';
import lightLogo from '../../../assets/light-logo.png';
import darkLogo from '../../../assets/dark-logo.png';
import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { nav } from '../../../localData/nav';

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    const date = new Date().getFullYear();

    return (
        <div className='pt-12 bg-gray-100 dark:bg-slate-800 border-t-2 border-gray-300 dark:border-white/10'>
            <div className='container'>
                <div className='pb-12'>
                    <div className='flex flex-wrap gap-8 justify-center lg:justify-between items-center'>
                        <Link>
                            <img
                                className='w-56'
                                src={theme === 'dark' ? darkLogo : lightLogo}
                                alt='Logo'
                            />
                        </Link>
                        <div className=' flex gap-6 text-base dark:text-white text-black justify-center items-center flex-wrap'>
                            {nav.map((n) => (
                                <Link to={n.path} key={n.id} className='hover:text-sky-600'>
                                    {n.page}
                                </Link>
                            ))}
                        </div>
                        <div className='flex gap-4 text-2xl dark:text-white text-black'>
                            <button className='border dark:border-sky-600 p-2 rounded border-black'>
                                <FaFacebookF />
                            </button>
                            <button className='border dark:border-sky-600 p-2 rounded border-black'>
                                <FaInstagram />
                            </button>
                            <button className='border dark:border-sky-600 p-2 rounded border-black'>
                                <RiTwitterXLine />
                            </button>
                            <button className='border dark:border-sky-600 p-2 rounded border-black'>
                                <FaYoutube />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center dark:text-white border-t dark:bg-slate-900/50 dark:border-white/20 border-black/20 text-black text-lg py-2 px-6'>
                <p>
                    Copyright &#169; by{' '}
                    <a href='https://github.com/prorakib99/' target='_blank'>
                        Rakibul Islam
                    </a>{' '}
                    - Summer Sports Academies {date}
                </p>
            </div>
        </div>
    );
};

export default Footer;
