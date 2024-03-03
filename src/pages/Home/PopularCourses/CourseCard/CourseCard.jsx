import { FiStar } from 'react-icons/fi';
import { FaUserGraduate } from 'react-icons/fa6';
import cardImg from '../../../../assets/card-demo.jpg';
import instructorImg from '../../../../assets/instractor-demo.png';
import { FaCartPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CourseCard = () => {
    return (
        <div className='shadow-xl rounded-md dark:bg-slate-950/[.5] hover:scale-105 border-b-4 border-black dark:border-sky-600 duration-500 overflow-hidden'>
            <div className='relative rounded w-full'>
                <Link to='/'>
                    <img src={cardImg} className='rounded' alt='course-thumb' />
                </Link>
                <div className='absolute left-0 bottom-0 ms-5 mb-4 border-2 rounded-full shadow-2xl border-black dark:border-green-600'>
                    <img src={instructorImg} alt='course-avatar' />
                </div>
            </div>
            <div className='px-6 space-y-4 mt-6'>
                <div className=''>
                    <button
                        type='button'
                        className='bg-black text-white dark:bg-sky-500 px-6 py-2 font-bold rounded'
                    >
                        Design
                    </button>
                </div>
                <div className=''>
                    <h4 className='text-2xl font-bold dark:text-slate-400'>
                        Master Web Design in Adobe XD: Complete UI/UX Masterclass
                    </h4>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-2 dark:text-slate-400'>
                    <div>
                        <div className='flex items-center gap-1'>
                            <span className='font-bold text-xl'>4.7</span>
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar className='' />
                            <p className=''>
                                (<span className='font-bold'>125</span>)
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-lg'>
                        <FaUserGraduate className='text-xl' />
                        <span className=''>
                            <span className='font-bold'>291</span> Students
                        </span>
                    </div>
                </div>
                <div className='flex items-center justify-between pb-5 dark:text-slate-400 border-t dark:border-white/30 py-4'>
                    <h5 className='text-2xl font-bold'>$29.99</h5>
                    <button className='border-2 hover:bg-black hover:text-white dark:text-sky-600 dark:hover:text-white dark:hover:bg-sky-600 duration-500 border-black dark:border-sky-500 font-bold rounded-full px-6 py-1 flex items-center gap-2'>
                        <FaCartPlus />
                        <span>Select</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
