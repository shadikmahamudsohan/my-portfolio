import React from 'react';
import { Col } from 'react-bootstrap';

const Project = ({ name, description, img, link }) => {
    return (
        <Col>
            <div class="project"> <img className='project-img' src={img} alt="" />
                <div className='project-text text-center'>
                    <h3 className='fw-bold'>{name}</h3>
                    <p className=''><small>{description}</small></p>
                    <a className='btn btn-light' href={link} target="_blank" rel="noreferrer">Vew Website</a>
                </div>
            </div>
        </Col>
    );
};

export default Project;