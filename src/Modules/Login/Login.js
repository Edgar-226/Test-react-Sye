import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { login } from "../../App/Appslice";
import { useNavigate } from "react-router-dom";



export default function Login() {



    const app = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();




    const [formulario, setFormulario] = useState({
        user: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleSubmit = (event) => {
        dispatch(login(formulario));

    };

    useEffect(() => {
        if (app?.user)
            navigate('/');
    }, [app,navigate])

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} sm={9} md={7} lg={5}>
                        <Card border="0" className="shadow rounded-3 my-5">
                            <Card.Body className="p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>User</Form.Label>
                                        <Form.Control
                                            type="input"
                                            placeholder="User"
                                            value={formulario.user}
                                            onChange={handleChange}
                                            name="user"
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={formulario.password}
                                            onChange={handleChange}
                                            name="password"
                                            required
                                        />
                                    </Form.Group>
                                    <Button variant="dark" className="btn-login text-uppercase fw-bold" type="submit">
                                        Acceder
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}