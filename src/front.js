import React, { useState, useMemo, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './front.css';
import { Container, Row, Col, Button, Navbar, Form, InputGroup, FormControl } from 'react-bootstrap';


function Front() {
    return (
        <Container fluid="true">
            <Header />
        </Container>
    );
}


//onChange={event => "setCity(event.target.value)"}
const Header = () => {
    return (
        <Navbar className="navbar" style={{ backgroundColor: "#b3b7bd" }}>
            <InputGroup className="">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Navbar>
    );
}

const Sidebar = () => {
    return (
        <Container>

        </Container>
    );
}

export default Front;