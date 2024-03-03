import { IoEyeSharp } from 'react-icons/io5';
import { IoMdEyeOff } from 'react-icons/io';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const imageUploadKey = import.meta.env.VITE_UPLOAD_PHOTO_KEY;

const Register = () => {
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { logOut, handleRegister, profileUpdate, isLoading, setIsLoading } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const password = watch('password', '');

    const onSubmit = (data) => {
        setIsLoading(true);
        const photoData = new FormData();
        photoData.append('image', data.photo[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${imageUploadKey}`, {
            method: 'POST',
            body: photoData
        })
            .then((res) => res.json())
            .then((imgRes) => {
                if (imgRes.success) {
                    const { name, email, password } = data;
                    const newUser = {
                        name,
                        email,
                        password,
                        photoURL: imgRes.data.display_url,
                        role: 'student'
                    };
                    console.log(newUser);
                    handleRegister(email, password)
                        .then((result) => {
                            const registeredUser = result.user;
                            profileUpdate(registeredUser, name, newUser?.photoURL)
                                .then((res) => {
                                    console.log(res);
                                    logOut()
                                        .then(() => navigate('/login'))
                                        .catch((err) => console.log(err));
                                })
                                .catch((err) => console.log(err));
                            console.log(registeredUser);
                        })
                        .catch((err) => {
                            const message = err.message;
                            console.log(err, `Message: ${message}`);
                        });
                }
            });
    };

    return (
        <main className='lg:min-h-[70vh] dark:bg-slate-800 flex justify-center items-center'>
            <div className='py-14 lg:py-20'>
                <div className='container'>
                    <div className='flex justify-center items-center px-8 py-6 lg:w-[500px] mx-auto dark:bg-black/10 shadow-2xl dark:shadow-white/10 rounded-md'>
                        <div className='w-full space-y-8 dark:text-slate-400 text-black relative z-10'>
                            <div>
                                <h1 className='text-center text-3xl font-bold mb-2 text-black/80 dark:text-white/80'>
                                    Please
                                    <span className='dark:text-sky-600'> Register</span>
                                </h1>
                                <p className='mx-auto w-full text-center'>
                                    Do not share your Personal information with anyone.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                                {/* Name Field */}
                                <div className=''>
                                    <label htmlFor='name' id='name-label' className=''>
                                        Your Full Name
                                        <span className='' aria-hidden='true'>
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                    <div className='mt-1'>
                                        <input
                                            aria-label='Your Full Name'
                                            placeholder='Full Name'
                                            {...register('name', { required: true })}
                                            id='name'
                                            type='name'
                                            className='dark:bg-slate-700 border-2 w-full dark:border-transparent focus:border-sky-600 dark:focus:border-sky-600 outline-none px-4 py-2 rounded dark:text-white/90 text-black/90 placeholder:text-black/40 dark:placeholder:text-white/30'
                                        />
                                        {errors.name && (
                                            <span className='dark:text-white text-red-500'>
                                                Name field is required*
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Email Field */}
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
                                {/* Password Field */}
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
                                                {...register('password', {
                                                    required: true,
                                                    minLength: 6,
                                                    pattern: /(?=.*[A-Z])(?=.*[@$!%*#?&])/
                                                })}
                                                className='dark:bg-slate-700 border-2 w-full dark:border-transparent focus:border-sky-600 dark:focus:border-sky-600 outline-none px-4 py-2 rounded dark:text-white/90 text-black/90 placeholder:text-black/40 dark:placeholder:text-white/30'
                                                id='password'
                                                placeholder='anyPassword1971'
                                                aria-label='Your password'
                                            />
                                            {errors.password?.type === 'required' && (
                                                <span className='dark:text-white text-red-500'>
                                                    Password field is required*
                                                </span>
                                            )}
                                            {errors.password?.type === 'minLength' && (
                                                <span className='dark:text-white text-red-500'>
                                                    Password must be 6 character
                                                </span>
                                            )}
                                            {errors.password?.type === 'pattern' && (
                                                <span className='dark:text-white text-red-500'>
                                                    Password must be a Capital latter and a special
                                                    character
                                                </span>
                                            )}
                                        </div>
                                        <div className='absolute right-0 top-0 mt-3 mr-3'>
                                            <div
                                                onClick={() => setShow(!show)}
                                                className='cursor-pointer'
                                                type='button'
                                            >
                                                {show ? (
                                                    <IoMdEyeOff className='text-xl' />
                                                ) : (
                                                    <IoEyeSharp className='text-xl' />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Confirm Password Field */}
                                <div className=''>
                                    <label
                                        htmlFor='confirmPassword'
                                        id='password-confirm-label'
                                        className=''
                                    >
                                        Enter Confirm Password
                                        <span className='' aria-hidden='true'>
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                    <div className='mt-1 relative'>
                                        <div>
                                            <input
                                                type={showConfirm ? 'text' : 'password'}
                                                {...register('confirmPassword', {
                                                    required: true,
                                                    validate: (value) =>
                                                        value === password ||
                                                        'Passwords do not match'
                                                })}
                                                className='dark:bg-slate-700 border-2 w-full dark:border-transparent focus:border-sky-600 dark:focus:border-sky-600 outline-none px-4 py-2 rounded dark:text-white/90 text-black/90 placeholder:text-black/40 dark:placeholder:text-white/30'
                                                id='confirmPassword'
                                                placeholder='anyPassword1971'
                                                aria-label='Your Confirm password'
                                            />
                                            {errors.confirmPassword?.type === 'required' && (
                                                <span className='dark:text-white text-red-500'>
                                                    Confirm Password field is required*
                                                </span>
                                            )}
                                            {errors.confirmPassword?.type === 'validate' && (
                                                <span className='dark:text-white text-red-500'>
                                                    {errors.confirmPassword.message}
                                                </span>
                                            )}
                                        </div>
                                        <div className='absolute right-0 top-0 mt-3 mr-3'>
                                            <div
                                                onClick={() => setShowConfirm(!showConfirm)}
                                                className='cursor-pointer'
                                                type='button'
                                            >
                                                {showConfirm ? (
                                                    <IoMdEyeOff className='text-xl' />
                                                ) : (
                                                    <IoEyeSharp className='text-xl' />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Photo Field */}
                                <div className=''>
                                    <label htmlFor='photo' id='photo-label' className=''>
                                        Upload Your Photo
                                        <span className='' aria-hidden='true'>
                                            {' '}
                                            *
                                        </span>
                                    </label>
                                    <div className='mt-1'>
                                        <div>
                                            <input
                                                type='file'
                                                {...register('photo', { required: true })}
                                                className='dark:bg-slate-700 border-2 file:bg-black/80 file:border-none dark:file:bg-black/40 file:text-white file:rounded file:px-4 w-full font-bold file:font-normal dark:border-transparent focus:border-sky-600 dark:focus:border-sky-600 outline-none px-4 py-2'
                                                id='photo'
                                                accept='image/*'
                                            />
                                            {errors.photo && (
                                                <span className='dark:text-white text-red-500'>
                                                    Photo field is required*
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* Submit button */}
                                <div className='flex justify-center items-center'>
                                    <button
                                        className='btn btn-sm bg-slate-800 dark:bg-sky-600 rounded-full font-bold px-5 text-base hover:bg-slate-900 border-none flex items-center gap-2 text-white'
                                        type='submit'
                                    >
                                        {isLoading && (
                                            <span className='loading loading-spinner text-white'></span>
                                        )}
                                        <span>Register</span>
                                    </button>
                                </div>
                                <div className='text-center'>
                                    <p>
                                        Already Have an Account? Please{' '}
                                        <Link
                                            to='/login'
                                            className='font-bold text-sky-600 hover:underline'
                                        >
                                            Login Here
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

export default Register;
