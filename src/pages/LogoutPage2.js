/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const handleLogout = () => {

    const router = useRouter();
    useEffect(() => {
    localStorage.removeItem('token');
    window.location= ('/');
    return (handleLogout)

}, [router]);
}

export default handleLogout