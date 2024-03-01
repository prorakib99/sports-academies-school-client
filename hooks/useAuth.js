import { useContext } from 'react';
import { AuthContext } from '../src/providers/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;
