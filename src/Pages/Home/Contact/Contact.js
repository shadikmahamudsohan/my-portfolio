import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            // event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        if (validated) {
            emailjs.sendForm('service_52pzts8', 'template_i0ozwp3', event.target, '0eKoB3IdMy7pPubVL').then(res => {
                toast.success("Email Sended!");
            }).catch(error => toast.error("Some thing went wrong!"));
        }
    };

    return (
        <section className='contact-page py-5 py-4 d-flex align-items-center justify-content-center'>
            <div>
                <h1 className="header text-center mb-4">Please Contact With Me</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='container bg-light py-5 rounded-3 px-4'>
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
                    <Form.Group className="mb-3" name='message' controlId="message">
                        <Form.Label>You message</Form.Label>
                        <Form.Control required as="textarea" rows={3} />
                        <Form.Control.Feedback type="invalid">
                            Please choose a message.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </Form>
            </div>
        </section>
    );
};

export default Contact;