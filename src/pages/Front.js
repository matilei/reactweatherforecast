import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DayForecast from '../components/DayForecast';
import WeekForecast from '../components/WeekForecast';

function Front({ userSearchData, templateSearchData, searchTerm }) {

    let city_name = "Helsinki";

    if (userSearchData) {
        city_name = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
    }

    return (
        <Col fluid="true" className="front-wrapper">

            <Row className="cityName-wrapper rounded mb-4 shadow">
                <Col>
                    <h4 className="pt-3 pb-3 ml-2">{city_name}</h4>
                </Col>
            </Row>
            <DayForecast userSearchData={userSearchData}
                templateSearchData={templateSearchData} />
            <WeekForecast userSearchData={userSearchData} />
        </Col>
    );
}

export default Front;