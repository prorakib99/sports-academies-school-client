import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// Popup login providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SocialLogin = () => {
    const { loginWithPopup } = useAuth();
    const navigate = useNavigate();

    const handleSocialLogin = (provider) => {
        loginWithPopup(provider)
            .then((result) => {
                console.log(result);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className='mt-8 space-y-5'>
            <p className='dark:text-white/70 text-center'>
                Continue With <span className='font-bold'>Google</span> or{' '}
                <span className='font-bold'>Github</span>
            </p>
            <div className='flex justify-center gap-3 sm:gap-5 items-center flex-col sm:flex-row flex-wrap'>
                <button
                    onClick={() => handleSocialLogin(googleProvider)}
                    className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-300 dark:hover:bg-slate-50 duration-500 rounded-2xl py-2 px-6 flex items-center gap-2 w-48 justify-center'
                >
                    <FcGoogle className='text-2xl' />
                    <span>Google</span>
                </button>
                <span className='text-xl dark:text-white/80'>or</span>
                <button
                    onClick={() => handleSocialLogin(githubProvider)}
                    className='bg-slate-200 hover:bg-slate-300 dark:bg-slate-300 dark:hover:bg-slate-50 duration-500 rounded-2xl py-2 px-6 flex items-center gap-2 w-48 justify-center'
                >
                    <FaGithub className='text-2xl' />
                    <span>Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
