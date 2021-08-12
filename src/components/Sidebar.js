import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <Col className="sidebar mr-3" xl={2.5}>
            <Row className="sidebar-navigation">
                <ListGroup className="mb-5 ml-5 mr-5 shadow">
                    <NavLink exact to="/" activeClassName="active-sidebar">
                        <ListGroup.Item className="mr-5 rounded text-primary" action><h6>Home</h6></ListGroup.Item>
                    </NavLink>

                    <NavLink exact to="/radar" activeClassName="active-sidebar">
                        <ListGroup.Item className="mr-5 rounded text-primary" action><h6>Weather Radar</h6></ListGroup.Item>
                    </NavLink>

                    <NavLink exact to="/forecastinfo" activeClassName="active-sidebar">
                        <ListGroup.Item className="mr-5 rounded text-primary" action><h6>Forecast Info</h6></ListGroup.Item>
                    </NavLink>

                    <NavLink exact to="/about" activeClassName="active-sidebar">
                        <ListGroup.Item className="mr-5 rounded text-primary" action><h6>About</h6></ListGroup.Item>
                    </NavLink>
                </ListGroup>
            </Row>
        </Col>
    );
}

export default Sidebar;