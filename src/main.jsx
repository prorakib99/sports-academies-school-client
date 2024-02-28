import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'swiper/css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.jsx';
import ThemeProvider from './providers/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
