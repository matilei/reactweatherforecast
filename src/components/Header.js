import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, ListGroup, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Header({ onSearch }) {

    const [input, setInput] = useState("");

    //Called when input is submitted (Enter-key or Button)
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
        setInput("");
    }

    return (
        <Container fluid className="header shadow">
            <Row>
                <Col className="header-paddingFront"></Col>
                <Col className="header-search">
                    <Form className="py-3" onSubmit={(e) => onFormSubmit(e)}>
                        <InputGroup>
                            <Form.Control
                                className="inputSearch"
                                type="text"
                                placeholder="Enter city..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            ></Form.Control>
                            <InputGroup.Append>
                                <Button onClick={(e) => onFormSubmit(e)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </Col>
                <Col className="header-paddingBack"></Col>
            </Row>

            <Row className="header-secondary pb-3">
                <Col>
                    <NavLink exact to="/">
                        <ListGroup.Item action 
                            className="border text-center text-primary rounded">
                            <h6>Home</h6>
                        </ListGroup.Item>
                    </NavLink>
                </Col>

                <Col>
                    <NavLink exact to="/radar" >
                        <ListGroup.Item action 
                        className="border text-center text-primary rounded">
                            <h6>Radar</h6>
                        </ListGroup.Item>
                    </NavLink>
                </Col>

                <Col>
                    <NavLink exact to="/forecastinfo" >
                        <ListGroup.Item action 
                        className="border text-center text-primary rounded">
                            <h6>Forecast Info</h6>
                        </ListGroup.Item>
                    </NavLink>
                </Col>

                <Col>
                    <NavLink exact to="/about" >
                        <ListGroup.Item action 
                        className="border text-center text-primary rounded">
                            <h6>About</h6>
                        </ListGroup.Item>
                    </NavLink>
                </Col>
            </Row>

        </Container>
    );
}

export default Header;