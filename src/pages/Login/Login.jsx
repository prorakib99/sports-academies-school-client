import { IoEyeSharp } from 'react-icons/io5';
import { IoMdEyeOff } from 'react-icons/io';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [show, setShow] = useState(false);
    const { handleLogin, isLoading, setIsLoading } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        setIsLoading(true);
        handleLogin(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err.message);
            });
    };
    return (
        <main className='lg:min-h-[70vh] dark:bg-slate-800 flex justify-center items-center'>
            <div className='py-14 lg:py-20'>
                <div className='container'>
                    <div
                        className={`flex justify-center items-center px-8 py-6 lg:w-[500px] mx-auto dark:bg-black/10 shadow-2xl dark:shadow-white/10 rounded-md ${
                            isLoading ? 'blur-sm' : ''
                        }`}
                    >
                        <div className='w-full space-y-8 dark:text-slate-400 text-black relative z-10'>
                            <div>
                                <h1 className='text-center text-3xl font-bold mb-2 text-black/80 dark:text-white/80'>
                                    Please
                                    <span className='dark:text-sky-600'> Login</span>
                                </h1>
                                <p className='mx-auto w-full text-center'>
                                    Do not share your login information with anyone.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                                <div className=''>
                                    <label htmlFor='email' id='email-label' className=''>
                                        Your Email Address
                                        <span className='' aria-hidden='true'>
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            aria-label='Your email address'
                                            placeholder='boss@gmail.com'
                                            {...register('email', { required: true })}
                                            id='email'
                                            type='email'
                                            className='dark:bg-slate-700 border-2 w-full dark:border-transparent focus:border-sky-600 dark:focus:border-sky-600 outline-none px-4 py-2 rounded dark:text-white/90 text-black/90 placeholder:text-black/40 dark:placeholder:text-white/30'
                                        />
                                        {errors.email && (
                                            <span className='dark:text-white text-red-500'>
                                                Email field is required*
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className=''>
                                    <label htmlFor='password' id='password-label' className=''>
                                        Enter Password
                                        <span className='' aria-hidden='true'>
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                    <div className='mt-1 relative'>
                                        <div>
                                            <input
                                                type={show ? 'text' : 'password'}
                                                required=''
                                                {...register('password', { required: true })}
                                                className='dark:bg-slate-700 border-2 w-full dark:border-transparent focus:border-sky-600 dark:focus:border-sky-600 outline-none px-4 py-2 rounded dark:text-white/90 text-black/90 placeholder:text-black/40 dark:placeholder:text-white/30'
                                                id='password'
                                                placeholder='anyPassword1971'
                                                aria-label='Your password'
                                            />
                                            {errors.password && (
                                                <span className='dark:text-white text-red-500'>
                                                    Password field is required*
                                                </span>
                                            )}
                                        </div>
                                        <div className='absolute right-0 top-0 mt-3 mr-3'>
                                            <button
                                                onClick={() => setShow(!show)}
                                                className=''
                                                type='button'
                                            >
                                                {show ? (
                                                    <IoMdEyeOff className='text-xl' />
                                                ) : (
                                                    <IoEyeSharp className='text-xl' />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <Link
                                        className='text-sm hover:text-sky-500 duration-300'
                                        to='/forget-password'
                                    >
                                        Forgot Password?
                                    </Link>
                                    <button
                                        className='btn btn-sm text-base bg-slate-800 dark:bg-sky-600 rounded-full font-bold px-5 border-none flex items-center gap-2 hover:bg-slate-900 text-white'
                                        type='submit'
                                    >
                                        {isLoading && (
                                            <span className='loading loading-spinner text-white'></span>
                                        )}
                                        <span>Login</span>
                                    </button>
                                </div>
                                <div className='text-center'>
                                    <p>
                                        New here? Please{' '}
                                        <Link to='/register' className='font-bold hover:underline'>
                                            Create an account
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
