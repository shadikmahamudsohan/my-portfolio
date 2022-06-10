import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedPage from '../../AnimatedPage/AnimatedPage';
import './ProjectPage.css';

const ProjectPage = () => {
    const [projects, setProjects] = useState({});
    const [slider, setSlider] = useState("");
    const [selected, setSelected] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`/projects${id}.json`)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setSlider(data?.img[0]);
            });
    }, [id]);

    console.log();
    const handleSelect = (i) => {
        const slider = projects?.img[i];
        setSlider(slider);
        setSelected(i);
    };
    return (
        <AnimatedPage>
            <div className='project-container'>
                <div className='container py-5'>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={slider?.png} className='w-100 rounded-3 shadow' alt="" />
                            <br />
                            <div className='row g-3'>
                                {
                                    projects?.img?.map((p, i) => <div key={i} className='col-3'>
                                        <img src={p.png} className={`img-fluid mt-3 slider-img rounded-3 shadow ${selected === i && 'border border-3 border-dark'}`} onClick={() => handleSelect(i)} alt=''></img>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1 className='work-title'>{projects?.name}</h1>
                            <p>{projects.description}</p>
                            <a className='btn btn-light' href={projects?.link} target="_blank" rel="noreferrer">Vew Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>

    );
};

export default ProjectPage;