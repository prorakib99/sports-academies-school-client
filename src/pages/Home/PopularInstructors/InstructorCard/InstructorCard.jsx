import { IoIosPlayCircle } from 'react-icons/io';
import { FaUserGraduate } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { useState } from 'react';

const InstructorCard = () => {
    const [socialPosition, setSocialPosition] = useState(false);

    return (
        <div
            className='text-center relative overflow-hidden border border-gray-300 dark:border-none dark:bg-black/20 hover:scale-105 duration-500 rounded shadow-lg'
            onMouseEnter={() => setSocialPosition(true)}
            onMouseLeave={() => setSocialPosition(false)}
        >
            <div className='h-72 w-full'>
                <img
                    src='https://html.hixstudio.net/epora/epora/assets/img/bg/instructor-bg-01.jpg'
                    className='h-full w-full object-top object-cover rounded'
                    alt='instructor-profile'
                />
            </div>
            <div className='space-y-4 pt-6 pb-8 dark:text-slate-400'>
                <span className='text-xl font-bold'>Instructor</span>
                <h4 className='relative text-2xl font-bold !mt-1'>Brooklyn Simmons</h4>
                <div className='!mb-8 relative dark:bg-slate-400 before:absolute before:w-1/3 dark:before:bg-slate-400 before:h-[3px] before:bg-black before:left-0 after:absolute dark:after:bg-slate-400 after:bg-black after:w-1/3 after:h-[3px] after:right-0'></div>
                <div className='flex items-center gap-6 flex-wrap justify-center text-lg'>
                    <div className='flex items-center gap-1'>
                        <IoIosPlayCircle className='text-xl' />
                        <p>
                            <span className='font-bold'>35</span> Classes
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaUserGraduate />
                        <p>
                            <span className='font-bold'>291+</span> Students
                        </p>
                    </div>
                </div>
                <div
                    className={`flex flex-col gap-4 duration-500 absolute top-0 ${
                        socialPosition ? '-right-0' : '-right-44'
                    } mr-6 !my-10`}
                >
                    <button
                        className='w-10 h-10 flex justify-center items-center bg-white rounded-full p-3 hover:bg-black dark:hover:bg-sky-600 hover:text-white duration-500 text-black text-lg'
                        href='#'
                    >
                        <FaFacebookF />
                    </button>
                    <button
                        className='w-10 h-10 flex justify-center items-center bg-white rounded-full p-3 hover:bg-black dark:hover:bg-sky-600 hover:text-white duration-500 text-black text-lg'
                        href='#'
                    >
                        <FaFacebookF />
                    </button>
                    <button
                        className='w-10 h-10 flex justify-center items-center bg-white rounded-full p-3 hover:bg-black dark:hover:bg-sky-600 hover:text-white duration-500 text-black text-lg'
                        href='#'
                    >
                        <FaFacebookF />
                    </button>
                    <button
                        className='w-10 h-10 flex justify-center items-center bg-white rounded-full p-3 hover:bg-black dark:hover:bg-sky-600 hover:text-white duration-500 text-black text-lg'
                        href='#'
                    >
                        <FaFacebookF />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
