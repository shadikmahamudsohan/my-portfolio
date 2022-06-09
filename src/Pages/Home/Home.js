import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import HeaderNav from './HeaderNav/HeaderNav';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div className=''>
            <HeaderNav />
            <Banner />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;