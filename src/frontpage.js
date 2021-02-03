import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Form, InputGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';


function Frontpage() {
    return (
        <Col fluid="true" className="main-content mr-5 ml-3" sm={7}>

            <Row className="cityName-wrapper rounded mb-4">
                <Col className="pt-2 pb-2">
                    <h4>Kaupungin nimi, Valtio</h4>
                </Col>
            </Row>

            <Row className="dayForecast-wrapper rounded mb-4">
                <Col className="pt-2 pb-2">
                    <h6>Tiistai 26.1 - Tuntiennuste</h6>
                </Col>
            </Row>

            <Row className="weekForecast-wrapper rounded">
                <Col className="pt-2 pb-2">
                    <h6>Lähipäivien ennuste</h6>
                </Col>
            </Row>
        </Col>
    );
}

export default Frontpage;