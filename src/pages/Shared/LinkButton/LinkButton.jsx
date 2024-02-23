import { FaExternalLinkAlt } from 'react-icons/fa';

const LinkButton = ({ text }) => {
    return (
        <button className='flex items-center gap-2 border-black text-black hover:text-white hover:bg-black duration-500 dark:hover:bg-sky-600 dark:hover:text-white dark:border-sky-600 dark:text-sky-600 font-bold rounded-full px-4 py-2 border-2'>
            <FaExternalLinkAlt /> {text}
        </button>
    );
};

export default LinkButton;
