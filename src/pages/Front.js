import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import DayForecast from '../components/DayForecast';
import WeekForecast from '../components/WeekForecast';

function Front({ userSearchData, templateSearchData }) {

    return (
        <Col fluid="true" className="front-wrapper">

            <Row className="cityName-wrapper rounded mb-4 shadow">
                <Col>
                    <h4 className="pt-3 pb-3 ml-2">Helsinki, Suomi</h4>
                </Col>
            </Row>
            <DayForecast userSearchData={userSearchData} templateSearchData={templateSearchData} />
            <WeekForecast userSearchData={userSearchData} />
        </Col>
    );
}

export default Front;