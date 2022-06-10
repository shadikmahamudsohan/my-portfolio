import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

const Home = () => {
    var currentYear = new Date().getFullYear();
    return (
        <div className=''>
            <Banner />
            <Projects />
            <Contact />
            <p style={{ color: '#A9D6E5', background: '#012A4A', margin: '0' }} className='py-3 text-center'>&copy; {currentYear} All right reserved</p>
        </div>
    );
};

export default Home;