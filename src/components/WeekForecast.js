import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

function DayForecast() {
    return (
        <Row className="weekForecast-wrapper rounded shadow mb-5">
            <Col>
                <h5 className="pt-3 pb-1 ml-2">Daily Forecast</h5>
                <Row className="my-4 pr-4 pl-4">
                    <Col className="pt-3 pb-3 border">
                        <Col className="center pt-2 pb-2">To 18.2</Col>
                        <Col className="center pt-2 pb-3">
                            <Image src="./pictures/clear.png" />
                        </Col>
                        <Col className="center pt-2 pb-2">-13 °C</Col>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default DayForecast;