import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='d-flex align-items-center justify-content-center banner' id='home'>
            <div className='container row pt-3'>
                <div className='col-md-7 d-flex align-items-center text-center text-lg-start'>
                    <div>
                        <h4 className='title small-title'>Hello! my Name is</h4>
                        <h1 className='title name-title'>M.d. Shadik Mahamud</h1>
                        <h1 className='title work-title'>I am a web developer!</h1>
                        <a className="btn btn-light mt-5 py-lg-2 px-lg-3 py-3 px-5" href="https://drive.google.com/file/d/1N1YUwIi6Xnqf-qvKLhy_glELG0ziDxvj/view?usp=sharing" target="_blank" without rel="noreferrer" download>Download Resume</a>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img src="https://i.ibb.co/DWNr1tG/image1-removebg-preview-1.png" className='w-100' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;