import { useEffect, useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const themeToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return [theme, themeToggle];
};

export default useTheme;
