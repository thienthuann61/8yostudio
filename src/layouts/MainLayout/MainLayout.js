import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function MainLayout({ children }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);
    return (
        <>
            <Header />
            <>{children}</>
            <Footer />
        </>
    );
}

export default MainLayout;
