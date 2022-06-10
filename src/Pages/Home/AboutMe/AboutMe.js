import React from 'react';
import './AboutMe.css';
import { FaReact, FaNodeJs, FaBootstrap, FaGithub } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';

const AboutMe = () => {
    return (
        <div id='about' className='About-section d-flex justify-content-center align-items-center py-5'>
            <div className='container'>
                <h1 className="work-title text-center fw-bold">About Me</h1>
                <p className='text-center'>I am a <strong>Front-end web developer</strong> . I started web developing on 2021 in the covid-19 pandemic. I live in Bangladesh. I am a student. I read in class nine. I am Skilled at writing well-designed, clean code and planing my tasks. I am Fast learner, hard worker. I never thing any thing impossible. If I got stuck at some thing I keep patient and try to fixed it. If I don't know any thing about a topic I don't hesitate to learn that.</p>
                <p className='text-center'>I know front end and back end language.I am skilled in react and javaScript. I am also good at backed language. <br /> My languages are</p>
                <div className='d-flex justify-content-center'>
                    <AiFillHtml5 className='skill-icon' />
                    <DiCss3 className='skill-icon' />
                    <TbBrandJavascript className='skill-icon' />
                    <FaReact className='skill-icon' />
                    <FaNodeJs className='skill-icon' />
                    < FaBootstrap className='skill-icon' />
                    <FaGithub className='skill-icon' />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;