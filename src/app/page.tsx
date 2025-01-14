
import React from 'react';
import { Home } from '@/views/Home';
import "../styles/_index.scss";
import StartApp from '../features/Home/StartApp';


const HomePage = () => {


    return (
        <>
            <StartApp />
            <Home />
        </>
    );
};

export default HomePage;