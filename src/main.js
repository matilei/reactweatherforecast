import React, { useState, useMemo, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import Frontpage from './frontpage.js';
import { Container, Row, Col, Button, Navbar, Nav, Form, InputGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';


function Main() {
    return (
        <Container fluid="true" className="page-wrapper">
            <Header />
            <Row fluid="true" className="content-wrapper mt-5 mb-5 ml-5 mr-5">

                <Col fluid="true" className="sidebar-wrapper static ml-5 mb-5 pr-5" sm={3}>
                    <Sidebar />
                </Col>

                <Frontpage />
            </Row>
        </Container>
    );
}


//onChange={event => "setCity(event.target.value)"}
const Header = () => {
    return (
        <Container fluid className="header shadow">
            <Row>
                <Col></Col>
                <Col>
                    <Navbar className="py-3">
                        <InputGroup className="inputSearch">
                            <FormControl
                                placeholder="Hae kaupungin sääennuste"
                                style={{ fontStyle: "italic" }}
                            />
                            <InputGroup.Append>
                                <Button variant="primary">Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Navbar>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

const Sidebar = () => {
    return (
        <ListGroup className="sidebar">
            <ListGroup.Item action variant="primary">Etusivu</ListGroup.Item>
            <ListGroup.Item action variant="">Sadetutka</ListGroup.Item>
            <ListGroup.Item action variant="">Sääennustetietoa</ListGroup.Item>
            <ListGroup.Item action variant="">Tietoa sivustosta</ListGroup.Item>
        </ListGroup>
    );
}

const Content = () => {

}

export default Main;