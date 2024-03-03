import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const ForgetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { forgetPassword } = useAuth();
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const handleForgetPassword = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsError(false);
        setIsSuccess(false);

        forgetPassword(email)
            .then(() => {
                // TODO: Check Database user exit or not
                setIsSuccess(true);
                setIsLoading(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsError(true);
                setIsLoading(false);
                console.log(`error Code: ${errorCode}`);
                console.log(`error Message: ${errorMessage}`);
            });
    };
    return (
        <dialog id='my_modal_5' className='modal modal-center dark:bg-black/80 sm:modal-middle'>
            <div className='modal-box dark:bg-slate-900/[0.9]'>
                <h3 className='font-bold text-lg dark:text-slate-400'>
                    Please enter your email address
                </h3>
                <form onSubmit={handleForgetPassword} className='flex mt-3 gap-2 items-center'>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        aria-label='Your email address'
                        placeholder='boss@gmail.com'
                        type='email'
                        name='email'
                        disabled={isSuccess}
                        required
                        className='dark:bg-slate-700 border-2 w-full dark:border-transparent focus:border-sky-600 dark:focus:border-sky-600 outline-none px-4 py-1 rounded-xl dark:text-white/90 text-black/90 placeholder:text-black/40 dark:placeholder:text-white/30 disabled:text-gray-400 dark:disabled:text-gray-400'
                    />
                    <button
                        className='btn btn-sm text-base bg-slate-800 dark:bg-sky-600 rounded-xl font-bold px-5 border-none flex items-center gap-2 hover:bg-slate-900 hover:text-white text-white/90 dark:hover:bg-sky-700 disabled:text-slate-400 dark:disabled:bg-slate-500'
                        type='submit'
                        disabled={isSuccess}
                    >
                        {isLoading && <span className='loading loading-spinner text-white'></span>}
                        <span>Send</span>
                    </button>
                </form>
                {isError && <p className='text-red-500'>User Can not find</p>}
                {isSuccess && (
                    <p className='dark:text-green-500 text-green-600'>
                        Reset Password link sent {email}
                    </p>
                )}
                <div className='modal-action mt-10'>
                    <form method='dialog'>
                        <button className='btn btn-sm bg-red-500 text-white border-none hover:bg-red-600'>
                            Close
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ForgetPassword;
