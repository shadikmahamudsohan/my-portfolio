import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedPage from '../../AnimatedPage/AnimatedPage';
AOS.init();

const Home = () => {
    var currentYear = new Date().getFullYear();
    return (
        <AnimatedPage>
            <div className=''>
                <Banner />
                <AboutMe />
                <Projects />
                <Contact />
                <p style={{ color: '#A9D6E5', background: '#012A4A', margin: '0' }} className='py-3 text-center'>&copy; {currentYear} All right reserved</p>
            </div>
        </AnimatedPage>
    );
};

export default Home;