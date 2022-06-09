import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className='bg-dark py-5'>
            <Form className='container bg-light py-5 rounded'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className='btn btn-primary'>Submit</button>
            </Form>
        </section>
    );
};

export default Contact;