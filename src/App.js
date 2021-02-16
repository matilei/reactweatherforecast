import { React, useState, useMemo, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Button, InputGroup, ListGroup, Image, Table, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { CityContext } from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import radarPic from './pictures/radar.jpg';
import forecastinfoPic from './pictures/forecastinfo.jpg';
import clear from './Iconixar/clear.png';
import clouds from './Iconixar/clouds.png';
import mist from './Iconixar/mist.png';
import night from './Iconixar/night.jpg';
import rain from './Iconixar/rain.png';
import snow from './Iconixar/snow.png';
import thunderstorm from './Iconixar/thunderstorm.png';

//Toimii sivun ympäryksenä, Switch näyttää painetun alasivun
function App() {
  const [city, setCity] = useState({});
  const CityProvider = useMemo(() => ({ city, setCity }));

  return (
    <CityContext.Provider value={CityProvider}>
      <Container fluid="true" className="page-wrapper">
        <Router>
          <Header />
          <Row fluid="true" className="content-wrapper">
            <Sidebar />
            <Col fluid="true" className="wrapper">
              <Switch>
                <Route exact path="/reactweatherforecast/radar" component={Radar}></Route>
                <Route exact path="/reactweatherforecast/forecastinfo" component={ForecastInfo}></Route>
                <Route exact path="/reactweatherforecast/about" component={About}></Route>
                <Route exact path="/reactweatherforecast/frontpage" component={Front}></Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    </CityContext.Provider>
  );
}

//Toimii sivun yläpalkkina
function Header() {
  const { city, setCity } = useContext(CityContext);

  const { searchCity, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(JSON.stringify(data));
    console.log(city);
  };

  return (
    <Container fluid className="header shadow">
      <Row>
        <Col className="header-paddingFront"></Col>
        <Col className="header-search">
          <Form className="py-3" onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
              <Form.Control className="inputSearch" name='cityName' type="text" ref={searchCity} placeholder="Hae kaupungin sääennuste" onChange={(e) => setCity(e.target.value)}></Form.Control>
              <InputGroup.Append>
                <Button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
        <Col className="header-paddingBack"></Col>
      </Row>

      <Row className="header-secondary pb-3">
        <Col>
          <NavLink exact to="/reactweatherforecast/frontpage" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Etusivu</h6></ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/reactweatherforecast/radar" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Sadetutka</h6></ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/reactweatherforecast/forecastinfo" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Sääennustetietoa</h6></ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/reactweatherforecast/about" activeClassName="active-header">
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Tietoa sivustosta</h6></ListGroup.Item>
          </NavLink>
        </Col>
      </Row>

    </Container>
  );
}

function Sidebar() {

  return (
    <Col className="sidebar mr-3" lg={2.5}>
      <Row className="sidebar-navigation">
        <ListGroup className="mb-5 ml-5 mr-5 shadow">
          <NavLink exact to="/reactweatherforecast/frontpage" activeClassName="active-sidebar">
            <ListGroup.Item className="mr-5 rounded text-primary" action><h6>Etusivu</h6></ListGroup.Item>
          </NavLink>

          <NavLink exact to="/reactweatherforecast/radar" activeClassName="active-sidebar">
            <ListGroup.Item className="mr-5 rounded text-primary" action><h6>Sadetutka</h6></ListGroup.Item>
          </NavLink>

          <NavLink exact to="/reactweatherforecast/forecastinfo" activeClassName="active-sidebar">
            <ListGroup.Item className="mr-5 rounded text-primary" action><h6>Sääennustetietoa</h6></ListGroup.Item>
          </NavLink>

          <NavLink exact to="/reactweatherforecast/about" activeClassName="active-sidebar">
            <ListGroup.Item className="mr-5 rounded text-primary" action><h6>Tietoa sivustosta</h6></ListGroup.Item>
          </NavLink>
        </ListGroup>
      </Row>
    </Col>
  );
}

function Front() {
  const { city, setCity } = useContext(CityContext);

  return (
    <Col fluid="true" className="front-wrapper">

      <Row className="cityName-wrapper rounded mb-4 shadow">
        <Col>
          <h4 className="pt-3 pb-3 ml-2">Kaupungin nimi, Valtio</h4>
        </Col>
      </Row>

      <Row className="dayForecast-wrapper rounded mb-4 shadow">
        <Col >
          <h5 className="pt-3 pb-1 ml-2">Tiistai 26.1 - Tuntiennuste</h5>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
              <Col className="center pt-2 pb-2">00:00</Col>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="weekForecast-wrapper rounded shadow">
        <Col>
          <h5 className="pt-3 pb-1 ml-2">Lähipäivien ennuste</h5>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Ke</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">To</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Pe</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">La</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Su</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Ma</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Ti</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Ke</Col>
              <Col className="center pt-2 pb-2"><Image src={clear} /></Col>
              <Col className="center pt-2 pb-2">0 °C</Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

function Radar() {
  return (
    <Image className="shadow rounded border border-secondary" src={radarPic} fluid />
  );
}

//Sääennustetietoa
function ForecastInfo() {
  return (
    <Col fluid="true" className="forecastInfo-wrapper mb-5 pr-5 pl-5 pt-4 pb-4 rounded shadow">
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
        <hr />
      </Col>
      <Col>
        <p>Lisätietoa:</p>
        <a href="http://www.ilmatieteenlaitos.fi/saaennuste">
          <Col className="img-thumbnail border-link border-primary p-0">
            <a href="http://www.ilmatieteenlaitos.fi/saaennuste"><Image src={forecastinfoPic} fluid />
              <p className="pl-2 pt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                </svg>
                ilmatieteenlaitos.fi
              </p>
            </a>
          </Col>
        </a>
      </Col>
    </Col>
  );
}

//Tietoa sivustosta
function About() {
  return (
    <Col fluid="true">
      <Row>
        <Col fluid="true" className="aboutFirst-wrapper pr-5 pl-5 pt-4 pb-4 rounded shadow">
          <h5>Merkkien selitykset</h5>
          <br />
          <Table>
            <tbody>
              <tr>
                <td><Image src={clear} /></td>
                <td className="align-middle">Aurinkoista</td>
              </tr>
              <tr>
                <td><Image src={clouds} /></td>
                <td className="align-middle">Pilvipoutaa / pilvilauttoja</td>
              </tr>
              <tr>
                <td><Image src={mist} /></td>
                <td className="align-middle">Pilvistä / sumuista</td>
              </tr>
              <tr>
                <td><Image src={rain} /></td>
                <td className="align-middle">Vesisadetta</td>
              </tr>
              <tr>
                <td><Image src={snow} /></td>
                <td className="align-middle">Lumisadetta</td>
              </tr>
              <tr>
                <td><Image src={thunderstorm} /></td>
                <td className="align-middle">Ukkosta</td>
              </tr>
              <tr>
                <td><Image src={night} /></td>
                <td className="align-middle">Yö / pilvetön</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col fluid="true" className="aboutSecond-wrapper pr-5 pl-5 pt-4 pb-4 rounded shadow">
          <h5>Tiedot</h5>
          <hr />
          <h6>Kuvat:</h6>
          <br />
          <p>Säämerkit: <a href="https://www.flaticon.com/authors/iconixar">Flaticon.com - Iconixar</a></p>
          <p>Sadetutka: <a href="https://unsplash.com/photos/qYMlpeQypGU">Unsplash.com - British Libary</a></p>
          <p>Sääennustetietoa: <a href="https://unsplash.com/photos/yZygONrUBe8">Unsplash.com - NASA</a></p>
          <p>Taustakuva: <a href="https://pixabay.com/fi/photos/pilvi%C3%A4-taivas-s%C3%A4%C3%A4-kumpupilvi%C3%A4-3488632/">Pixabay.com - anncapictures</a></p>
          <hr />
          <h6>Teematietoa:</h6>
          <br />
          <p>Ilmatieteen laitos 2021, Sääennuste teematietoa. www.ilmatieteenlaitos.fi/saaennuste</p>
          <hr />
          <h6>Yhteystiedot:</h6>
          <br />
          <p>Osoite: Tekniikkakatu 12, 00000 Helsinki</p>
          <p>Puhelin: 555 555 5555</p>
          <p>Sähköposti: etunimi.sukunimi@esimerkki.com</p>
        </Col>
      </Row>
    </Col>

  );
}

export default App;
