const MenuLoading = () => {
    return (
        <div>
            <div className='flex space-x-4 lg:hidden animate-pulse'>
                <div className='flex-shrink-0 cursor-pointer p-1 bg-gray-200 rounded h-6 w-6'></div>
                <div className='text-gray-400 hover:text-white focus:outline-none bg-gray-200 rounded h-6 w-6'></div>
            </div>

            <div className='hidden lg:flex lg:items-center lg:space-x-4 animate-pulse'>
                <div className='flex space-x-2 h-6 bg-gray-200 w-40 rounded'></div>
                <div className='flex space-x-2 h-6 bg-gray-200 w-24 rounded'></div>
                <div className='flex space-x-2 h-6 bg-gray-200 w-40 rounded'></div>

                <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0 cursor-pointer p-1 bg-gray-200 rounded h-6 w-6'></div>
                    <div className='flex space-x-3'>
                        <div className='flex space-x-3'>
                            <div className='dropdown dropdown-end'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div className='w-9 rounded-full border-2 border-black dark:border-sky-600 bg-gray-200'></div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='mt-3 z-[1] p-2 flex flex-col gap-2 items-center shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40 dark:bg-[#0B1120]/90 font-bold dark:text-white/60'
                                >
                                    <li className='w-full bg-gray-200 h-4 rounded'></li>
                                    <li className='w-full bg-gray-200 h-4 rounded mt-2'></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuLoading;
