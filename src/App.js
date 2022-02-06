import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Front from './pages/Front';
import Radar from './pages/Radar';
import ForecastInfo from './pages/ForecastInfo';
import About from './pages/About';
import { fmi } from './api/fmi';

function App() {

  const [template, setTemplate] = useState();
  const [forecast, setForecast] = useState();
  const [searchTerm, setSearchTerm] = useState();

  //Template forecast when opening the app
  useEffect(() => {
    fmi("Helsinki", setTemplate);
  }, [])

  //User made search from Header input
  const onSearchSubmit = (userSearchTerm) => {
    setSearchTerm(userSearchTerm);
    fmi(userSearchTerm, setForecast);
  }

  return (
    <Container fluid="true" className="page-wrapper">
      <Router>
        <Header onSearch={onSearchSubmit} />
        <Row fluid="true" className="content-wrapper">
          <Col xl={1}></Col>
          <Sidebar />
          <Col fluid="true" className="wrapper">
            <Switch>
              <Route exact path="/" >
                <Front userSearchData={forecast} 
                templateSearchData={template}
                searchTerm={searchTerm} />
              </Route>
              <Route exact path="/radar">
                <Radar />
              </Route>
              <Route exact path="/forecastinfo">
                <ForecastInfo />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </Col>
          <Col xl={1}></Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
