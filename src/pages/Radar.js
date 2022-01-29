import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import radar from '../pictures/radar.jpg';

function Radar() {
    return (
        <Col>
            <Row>
                <Col xl={11} className="radar-wrapper rounded mb-4">
                    <h4 className="pt-3 pb-3 ml-4">Sadetutka</h4>
                    <Image 
                    className="shadow rounded border border-secondary mb-4" fluid 
                    src={radar}/>
                </Col>
            </Row>
        </Col>
    );
}

export default Radar;