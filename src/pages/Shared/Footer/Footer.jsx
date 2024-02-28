import { Link } from 'react-router-dom';
import lightLogo from '../../../assets/light-logo.png';
import darkLogo from '../../../assets/dark-logo.png';
import { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='py-16 bg-gray-100 dark:bg-slate-800'>
            <div className='container'>
                <div>
                    <div>
                        <Link>
                            <img src={theme === 'dark' ? darkLogo : lightLogo} alt='Logo' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
