import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;