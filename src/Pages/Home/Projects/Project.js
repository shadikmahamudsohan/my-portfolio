import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Project = ({ name, description, img, link, id }) => {
    const navigate = useNavigate();
    return (
        <Col>
            <div class="project"> <img className='project-img' src={img} alt="" />
                <div className='project-text text-center'>
                    <h3 className='fw-bold'>{name}</h3>
                    <p className=''><small>{description}</small></p>
                    <div className="btn btn-light" onClick={() => navigate(`project/${id}`)}>Details</div>
                </div>
            </div>
        </Col>
    );
};

export default Project;