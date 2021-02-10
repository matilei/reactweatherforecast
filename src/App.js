import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Container, Row, Col, Button, Navbar, InputGroup, FormControl, ListGroup, Image, Table } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

//Toimii sivun ympäryksenä, Switch näyttää painetun alasivun
function App() {
  return (
    <Container fluid="true" className="page-wrapper">
      <Router>
        <Header />
        <Row fluid="true" className="content-wrapper">
          <Sidebar />
          <Switch>
            <Route exact path="/sadetutka" component={Radar}></Route>
            <Route exact path="/saaennustetietoa" component={ForecastInfo}></Route>
            <Route exact path="/tietoasivustosta" component={About}></Route>
            <Route exact path="/" component={Front}></Route>
          </Switch>
        </Row>
      </Router>
    </Container>
  );
}

//onChange={event => "setCity(event.target.value)"}
//Toimii sivun yläpalkkina
function Header() {
  return (
    <Container fluid fixed="top" className="header shadow">
      <Row>
        <Col className="header-paddingFront"></Col>
        <Col>
          <Navbar className="py-3">
            <InputGroup className="inputSearch">
              <FormControl
                placeholder="Hae kaupungin sääennuste"
                style={{ fontStyle: "italic" }} />
              <InputGroup.Append>
                <Button >Button</Button>
              </InputGroup.Append>
            </InputGroup>
          </Navbar>
        </Col>
        <Col className="header-paddingBack"></Col>
      </Row>

      <Row className="header-secondary pb-2">
        <Col>
          <NavLink exact to="/" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded">Etusivu</ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/sadetutka" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded">Sadetutka</ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/saaennustetietoa" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded">Sääennustetietoa</ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/tietoasivustosta" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded">Tietoa sivustosta</ListGroup.Item>
          </NavLink>
        </Col>
      </Row>

    </Container>
  );
}

//Toimii sivuston navigaatiosivupalkkina
function Sidebar() {

  return (
    <ListGroup className="sidebar mb-5 ml-5 mr-5">

      <NavLink exact to="/" activeClassName="active-sidebar">
        <ListGroup.Item className="mr-5 rounded text-primary" action >Etusivu</ListGroup.Item>
      </NavLink>

      <NavLink exact to="/sadetutka" activeClassName="active-sidebar">
        <ListGroup.Item className="mr-5 rounded text-primary" action >Sadetutka</ListGroup.Item>
      </NavLink>

      <NavLink exact to="/saaennustetietoa" activeClassName="active-sidebar">
        <ListGroup.Item className="mr-5 rounded text-primary" action >Sääennustetietoa</ListGroup.Item>
      </NavLink>

      <NavLink exact to="/tietoasivustosta" activeClassName="active-sidebar">
        <ListGroup.Item className="mr-5 rounded text-primary" action >Tietoa sivustosta</ListGroup.Item>
      </NavLink>

    </ListGroup>
  );
}

//Etusivu
function Front() {
  return (
    <Col fluid="true" className="front-wrapper">

      <Row className="cityName-wrapper rounded mb-4">
        <Col>
          <h4 className="pt-3 pb-3 ml-2">Kaupungin nimi, Valtio</h4>
        </Col>
      </Row>

      <Row className="dayForecast-wrapper rounded mb-4">
        <Col>
          <h6 className="pt-3 pb-1 ml-2">Tiistai 26.1 - Tuntiennuste</h6>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="weekForecast-wrapper rounded">
        <Col>
          <h6 className="pt-3 pb-1 ml-2">Lähipäivien ennuste</h6>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
            <Col className="pt-4 pb-4 border">
              <Col className="border"><Image src="/icons/Iconixar/clear.png" /></Col>
              <Col className="border">a</Col>
              <Col className="border">a</Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

//Sadetutka
function Radar() {
  return (
    <Col fluid="true" className="radar-wrapper rounded pt-3 pb-3">
      <Image src="/pictures/radar.jpg" fluid />
    </Col>
  );
}

//Sääennustetietoa
function ForecastInfo() {
  return (
    <Col fluid="true" className="forecastInfo-wrapper pr-5 pl-5 pt-4 pb-4 rounded">
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
        <p>Vestibulum fringilla dapibus ligula sit amet fringilla. Proin elementum cursus massa non iaculis. Cras feugiat, velit eu gravida congue, nibh nulla pretium orci, quis egestas lorem nunc in magna. In varius purus turpis, et posuere augue iaculis id. Duis sit amet suscipit ligula.
          Nunc eget euismod mi. Cras pellentesque, turpis quis vestibulum consectetur, nunc diam scelerisque enim, sit amet imperdiet est dolor sed felis. Nulla nec nibh vestibulum velit molestie congue. Integer fermentum nunc quis arcu posuere, quis elementum ligula dapibus. Integer ut rhoncus ligula. Nam tempus augue tortor, sit amet pellentesque lacus vehicula eu. Sed tincidunt gravida lobortis. Donec mauris sem, porttitor eu mollis in, tempus sed arcu.</p>
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
function About() {
  return (
    <Col fluid="true">
      <Row>
        <Col fluid="true" className="aboutFirst-wrapper pr-5 pl-5 pt-4 pb-4 rounded">
          <h5>Merkkien selitykset</h5>
          <br />

          <Table>
            <tbody>
              <tr>
                <td><Image src="/icons/Iconixar/clear.png" /></td>
                <td className="align-middle">Aurinkoista</td>
              </tr>
              <tr>
                <td><Image src="/icons/Iconixar/clouds.png" /></td>
                <td className="align-middle">Pilvipoutaa / pilvilauttoja</td>
              </tr>
              <tr>
                <td><Image src="/icons/Iconixar/mist.png" /></td>
                <td className="align-middle">Pilvistä / sumuista</td>
              </tr>
              <tr>
                <td><Image src="/icons/Iconixar/rain.png" /></td>
                <td className="align-middle">Vesisadetta</td>
              </tr>
              <tr>
                <td><Image src="/icons/Iconixar/snow.png" /></td>
                <td className="align-middle">Lumisadetta</td>
              </tr>
              <tr>
                <td><Image src="/icons/Iconixar/thunderstorm.png" /></td>
                <td className="align-middle">Ukkosta</td>
              </tr>
              <tr>
                <td><Image src="/icons/Iconixar/night.jpg" /></td>
                <td className="align-middle">Yö / pilvetön</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col fluid="true" className="aboutSecond-wrapper pr-5 pl-5 pt-4 pb-4 rounded">
          <h5>Materiaali</h5>
          <hr />

          <h6>Kuvat:</h6>
          <br />

          <p >Säämerkit:</p>
          <a href="https://www.flaticon.com/authors/iconixar">Flaticon.com - Iconixar</a>

          <br /><br />

          <p>Sadetutka:</p>
          <a href="https://unsplash.com/photos/qYMlpeQypGU">Unsplash.com - British Libary</a>

          <br /><br />

          <p>Sääennustetietoa:</p>
          <a href="https://unsplash.com/photos/yZygONrUBe8">Unsplash.com - NASA</a>

          <br /><br />

          <p>Tietoja sivustosta:</p>
          <a href="https://pixabay.com/fi/photos/pilvi%C3%A4-taivas-s%C3%A4%C3%A4-kumpupilvi%C3%A4-3488632/">Pixabay.com - anncapictures</a>

          <hr />

          <h6>Tiedot:</h6>
          <br />

          <p>Ilmatieteen laitos 2021, Sääennuste teematietoa. www.ilmatieteenlaitos.fi/saaennuste</p>
        </Col>
      </Row>
    </Col>

  );
}

export default App;
