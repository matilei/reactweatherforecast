import React, { useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';

function DayForecast({ userSearchData, templateSearchData }) {

    //console.log(templateSearchData);

    //Confirm that data is not empty
    if (templateSearchData !== undefined) {

        //Forecast list for 7 next hours (in progress)
        const forecastList = [];
        if (userSearchData !== undefined) {
            for (let i = 2; i < 9; i++) {
                forecastList.push(userSearchData["wfs:FeatureCollection"]["wfs:member"][i]);
            }
        } else {
            for (let i = 2; i < 9; i++) {
                forecastList.push(templateSearchData["wfs:FeatureCollection"]["wfs:member"][i]);
            }
        }

        //console.log(forecastList);

        //Mapping the list creating a component for each member
        const dayForecastComponent = forecastList.map((item, index) => {
            return (
                <Col className="pt-3 pb-3 border" key={index}>
                    <Col className="center pt-2 pb-2">{item["BsWfs:BsWfsElement"][0]["BsWfs:Time"][0]}</Col>
                    <Col className="center pt-2 pb-3"><Image src='./pictures/clear.png' /></Col>
                    <Col className="center pt-2 pb-2">{item["BsWfs:BsWfsElement"][0]["BsWfs:ParameterValue"][0]} °C</Col>
                </Col>
            )
        });

        return (
            <Row className="dayForecast-wrapper rounded mb-4 shadow">
                <Col>
                    <h5 className="pt-3 pb-1 ml-2">Keskiviikko 17.2 - Hourly Forecast</h5>
                    <Row className="my-4 pr-4 pl-4">
                        {dayForecastComponent}
                    </Row>
                </Col>
            </Row>
        );
    }

    return (
        <Row></Row>
    );


}

export default DayForecast;