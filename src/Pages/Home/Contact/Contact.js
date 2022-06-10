import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setLoading(true);
            emailjs.sendForm('service_52pzts8', 'template_i0ozwp3', event.target, '0eKoB3IdMy7pPubVL').then(res => {
                toast.success("Email Sended!");
                setLoading(false);
            }).catch(error => toast.error("Some thing went wrong!"));
        }
        setValidated(true);
    };
    return (
        <section id='contact' className='contact-page py-5 py-4 d-flex align-items-center justify-content-center'>
            <div className='container'>
                <h1 className="header text-center mb-4">Get in touch</h1>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className='form-container mx-auto w-100 py-5 rounded-3 px-4'>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="name" name='name' required placeholder="Enter your name" />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='user_email' required placeholder="Enter your email" />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>You message</Form.Label>
                                <Form.Control name='message' required as="textarea" rows={3} />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a message.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className='row px-2 items-center'>
                                <button type="submit" disabled={loading} className='btn btn-info col col-md-3 py-2'>Submit</button>
                            </div>
                        </Form>
                    </div>
                    <div className="col-12 col-md-6 other-contact">
                        <h2 className="title mb-4">Or you can contact with</h2>
                        <p><strong>Phone:</strong> +8801779099705</p>
                        <p><strong>Email:</strong> shadikmahamudsohan@gamil.com</p>
                        <p><strong>Country:</strong> Bangladesh</p>
                        <p><strong>City:</strong> Barishal</p>
                        <div className='mt-4'>
                            <a href='https://www.facebook.com/shadik.mahamud.58' target='_blank' without rel="noreferrer" className="btn me-3 px-4 btn-light">FaceBook</a>
                            <a href='https://www.linkedin.com/in/shadik-mahamud-53a553240/' target='_blank' without rel="noreferrer" className="btn px-4 btn-info">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;