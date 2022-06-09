import React from 'react';
import { Row } from 'react-bootstrap';
import './Projects.css';
import Project from './Project';
const Projects = () => {
    const projects = [
        {
            id: 1, name: 'PharmaBD', description: 'It is an inventory management website for medical products management. This web site is for managing pharmacy products.', img: 'https://i.ibb.co/3S6tqvT/2022-06-09.png', link: "https://pharmabd-9c8e0.web.app/"
        },
        { id: 2, name: 'Red-Onion', description: 'It is a short description2', img: 'https://i.ibb.co/jvzP5qk/2022-06-09-1.png', link: "https://red-onion-c424a.web.app/" },
        { id: 3, name: 'ToolsNestBD', description: 'It is a short description3', img: 'https://i.ibb.co/V3KfvJG/2022-06-08.png', link: "https://toolsnestbd.web.app/" },
    ];
    return (
        <section className='project-section py-4'>
            <div className="container ">
                <h1 className="text-center header mb-4">My Projects</h1>
                <div>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            projects.map(p => <Project key={p.id} name={p.name} description={p.description} img={p.img} link={p.link} />)
                        }
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default Projects;