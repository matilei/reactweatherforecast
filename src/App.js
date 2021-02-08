import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Container, Row, Col, Button, Navbar, Nav, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Toimii sivun ympäryksenä, Switch näyttää painetun alasivun
function App() {
  return (
    <Container fluid="true" className="page-wrapper">
      <Router>
        <Header />
        <Row fluid="true" className="content-wrapper mt-5 mb-5 ml-5 mr-5">
          <Sidebar />
          <Switch>
            <Route path="/sadetutka">
              <Radar />
            </Route>
            <Route path="/saaennustetietoa">
              <ForecastInfo />
            </Route>
            <Route path="/tietoasivustosta">
              <About />
            </Route>
            <Route path="/">
              <Front />
            </Route>
          </Switch>
        </Row>
      </Router>
    </Container>
  );
}

//onChange={event => "setCity(event.target.value)"}
//Toimii sivun yläpalkkina
const Header = () => {
  return (
    <Container fluid fixed="top" className="header shadow">
      <Row>
        <Col className="header-paddingFront"></Col>
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
        <Col className="header-paddingBack"></Col>
      </Row>

      <Row className="header-secondary pb-2">
        <Col >
          <Link to="/">
            <ListGroup.Item action variant="primary" className="border text-center text-primary rounded">Etusivu</ListGroup.Item>
          </Link>
        </Col>

        <Col>
          <Link to="/sadetutka">
            <ListGroup.Item action variant="secondary" className="border text-center text-primary rounded">Sadetutka</ListGroup.Item>
          </Link>
        </Col>

        <Col>
          <Link to="/saaennustetietoa">
            <ListGroup.Item action variant="secondary" className="border text-center text-primary rounded">Sääennustetietoa</ListGroup.Item>
          </Link>
        </Col>

        <Col>
          <Link to="/tietoasivustosta">
            <ListGroup.Item action variant="secondary" className="border text-center text-primary rounded">Tietoa sivustosta</ListGroup.Item>
          </Link>
        </Col>
      </Row>

    </Container>
  );
}

//Toimii sivuston navigaatiosivupalkkina
const Sidebar = () => {
  return (
    <ListGroup className="sidebar mb-5 ml-5 mr-5">

      <Link to="/">
        <ListGroup.Item className="mr-5 rounded text-primary" action variant="primary">Etusivu</ListGroup.Item>
      </Link>

      <Link to="/sadetutka">
        <ListGroup.Item className="mr-5 rounded text-primary" action variant="">Sadetutka</ListGroup.Item>
      </Link>

      <Link to="/saaennustetietoa">
        <ListGroup.Item className="mr-5 rounded text-primary" action variant="">Sääennustetietoa</ListGroup.Item>
      </Link>

      <Link to="/tietoasivustosta">
        <ListGroup.Item className="mr-5 rounded text-primary" action variant="">Tietoa sivustosta</ListGroup.Item>
      </Link>

    </ListGroup>
  );
}

//Etusivu
const Front = () => {
  return (
    <Col fluid="true" className="front-wrapper mr-5 ml-3">

      <Row className="cityName-wrapper rounded mb-4">
        <Col >
          <h4 className="pt-3 pb-3 ml-2">Kaupungin nimi, Valtio</h4>
        </Col>
      </Row>

      <Row className="dayForecast-wrapper rounded mb-4">
        <Col>
          <h6 className="pt-3 pb-1 ml-2">Tiistai 26.1 - Tuntiennuste</h6>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-4 pb-4 border">1 of 3</Col>
            <Col className="pt-4 pb-4 border">2 of 3</Col>
            <Col className="pt-4 pb-4 border">3 of 3</Col>
            <Col className="pt-4 pb-4 border">1 of 3</Col>
            <Col className="pt-4 pb-4 border">2 of 3</Col>
            <Col className="pt-4 pb-4 border">3 of 3</Col>
            <Col className="pt-4 pb-4 border">2 of 3</Col>
            <Col className="pt-4 pb-4 border">3 of 3</Col>
          </Row>
        </Col>
      </Row>

      <Row className="weekForecast-wrapper rounded">
        <Col>
          <h6 className="pt-3 pb-1 ml-2">Lähipäivien ennuste</h6>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-4 pb-4 border">1 of 3</Col>
            <Col className="pt-4 pb-4 border">2 of 3</Col>
            <Col className="pt-4 pb-4 border">3 of 3</Col>
            <Col className="pt-4 pb-4 border">1 of 3</Col>
            <Col className="pt-4 pb-4 border">2 of 3</Col>
            <Col className="pt-4 pb-4 border">3 of 3</Col>
            <Col className="pt-4 pb-4 border">2 of 3</Col>
            <Col className="pt-4 pb-4 border">3 of 3</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

//Sadetutka
const Radar = () => {
  return (
    <Col fluid="true" className="radar-wrapper mr-5 ml-3 rounded">Hello! This is radar!</Col>
  );
}

//Sääennustetietoa
const ForecastInfo = () => {
  return (
    <Col fluid="true" className="forecastInfo-wrapper mr-5 ml-5 pr-5 pl-5 pt-4 pb-4 rounded">
      <Col>
        <h3>Sääennuste</h3>
        <p>Sääennuste muodostuu meteorologin tekemästä ennustuksesta, jossa käytetään monenlaisia säähavaintoja ja sääennustusmalleja.
        Meteorologilla täytyy olla myös kattava kokemus sään käyttäytymisestä teoreettisesti ja konkreettisesti, jotta sääennusteen osuvuus olisi mahdollisimman osuva. (Ilmatieteen laitos 2021)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tristique nulla, ac pharetra nulla consectetur nec. Proin molestie nisl non tincidunt lacinia. Phasellus lobortis volutpat
          lacus a vulputate. Aenean euismod ipsum id gravida tincidunt. Suspendisse tempor dolor ex, ac fermentum quam cursus at.</p>

        <br />

        <h5>Säähavainnot</h5>
        <p>Säähavaintoja saadaan erilaisten laitteiden ja teknologioiden ansiosta. Säähavaintoja saadaan esimerkiksi sääluotausasemilta, sääsatelliiteista ja säätutkista. Havaintolaitteista saatu mitattu
          tieto tallennetaan tietokantaan. Meteorologi muokkaa näitä tietoja ja tallentaa muokatut tiedot takaisin tietokantaan. Muokatuista tiedoista luodaan lopulta sääennuste. Säähavaintojen avulla voidaan luoda sääennuste pariksi lähitunniksi. (Ilmatieteen laitos 2021)</p>
      
        <br />

        <h5>Sääennustemallit</h5>
        <p>Sääennustemalleja käytetään lähihetkiennusteihin ja pisimmillään jopa kuukausiennusteihin. Mallien tarkoituksena on laskea ilmakehän tilaa kolmiulotteisesti ajassa eteenpäin. 
          Nämä mallit ovat ilmakehän tilaa kuvaavia fysiikan yhtälöitä, joiden laskemiseen tarvitaan tehokkaita supertietokoneita. (Ilmatieteen laitos 2021)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tristique nulla, ac pharetra nulla consectetur nec. Proin molestie nisl non tincidunt lacinia. Phasellus lobortis volutpat lacus a vulputate. 
          Aenean euismod ipsum id gravida tincidunt. Suspendisse tempor dolor ex, ac fermentum quam cursus at.</p>
      
        <br />

        <h5>Meteorologi</h5>
        <p>Meteorologi on sääennusteen laatija, kuka yhdistää saamansa tiedon säähavainnoista ja sääennustemalleista ennusteeksi tulevasta säätilasta. 
          Meteorologia tarvitaan varsinkin tilanteissa, joissa havainnoista ja malleista saatavat tiedot eivät riitä sääennustuksen luomiseen. Tällaisia tilanteita on mm. voimakkaat sääilmiöt ja nopeasti muuttuvat sääolosuhteet. (Ilmatieteen laitos 2021)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tristique nulla, ac pharetra nulla consectetur nec. Proin molestie nisl non tincidunt lacinia. Phasellus lobortis volutpat lacus a vulputate. 
          Aenean euismod ipsum id gravida tincidunt. Suspendisse tempor dolor ex, ac fermentum quam cursus at.</p>
      </Col>
    </Col>
  );
}

//Tietoa sivustosta
const About = () => {
  return (
    <Col fluid="true">
      <Row>
        <Col fluid="true" className="aboutFirst-wrapper mr-5 ml-3 rounded">Hello! This is the About page!</Col>
        <Col fluid="true" className="aboutSecond-wrapper mr-5 ml-3 rounded">Hello! This is the About page!</Col>
      </Row>
    </Col>

  );
}

export default App;
