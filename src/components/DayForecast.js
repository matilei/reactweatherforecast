import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import clouds from '../pictures/Iconixar/clouds.png';

function DayForecast({ userSearchData, templateSearchData }) {

    //Confirm that data is not empty
    if (templateSearchData !== undefined) {
        let timeStamp = "";

        //Forecast list for 7 next hours (in progress)
        const forecastList = [];
        if (userSearchData !== undefined) {
            timeStamp = userSearchData["wfs:FeatureCollection"]["$"]["timeStamp"];
            for (let i = 2; i < 9; i++) {
                forecastList.push(userSearchData["wfs:FeatureCollection"]["wfs:member"][i]);
            }
        } else {
            timeStamp = templateSearchData["wfs:FeatureCollection"]["$"]["timeStamp"];
            for (let i = 2; i < 9; i++) {
                forecastList.push(templateSearchData["wfs:FeatureCollection"]["wfs:member"][i]);
            }
        }

        // Formatting timestamp to "01.01" format
        const formatted_timeStamp = 
        timeStamp.split("T").shift().split("-").reverse().slice(0,2).join(".");
        const weekday = (new Date().toLocaleString('en-us', {  weekday: 'long' }));

        // Mapping the list creating a component for each member
        const dayForecastComponent = forecastList.map((item, index) => {

            // Formatting date to "00:00" format
            const date = item["BsWfs:BsWfsElement"][0]["BsWfs:Time"][0];
            const formatted_hour = new Date(date).toLocaleTimeString('en',
            {timeStyle : 'short', hour12: false })

            return (
                <Col className="pt-3 pb-3 border" key={index}>
                    <Col className="center pt-2 pb-2">
                        {formatted_hour}
                    </Col>
                    <Col className="center pt-2 pb-3">
                        <Image src={clouds}/>
                    </Col>
                    <Col className="center pt-2 pb-2">
                        {item["BsWfs:BsWfsElement"][0]["BsWfs:ParameterValue"][0]} °C
                    </Col>
                </Col>
            )
        });

        return (
            <Row className="dayForecast-wrapper rounded mb-4 shadow">
                <Col>
                    <h5 className="pt-3 pb-1 ml-2">
                        {weekday} {formatted_timeStamp} - Hourly Forecast
                    </h5>
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