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
            <p style={{ color: '#A9D6E5', background: '#012A4A', margin: '0' }} className='py-3 text-center'>&copy; 2022 All right reserved</p>
        </div>
    );
};

export default Home;