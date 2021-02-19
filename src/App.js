import { React } from 'react';
import { Container, Row, Col, Button, InputGroup, ListGroup, Image, Table, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import radarPic from './pictures/radar.jpg';
import forecastinfoPic from './pictures/forecastinfo.jpg';
import antenna from './pictures/antenna.jpg';
import video from './videos/video.mp4';
import clear from './Iconixar/clear.png';
import clouds from './Iconixar/clouds.png';
import mist from './Iconixar/mist.png';
import night from './Iconixar/night.jpg';
import rain from './Iconixar/rain.png';
import snow from './Iconixar/snow.png';
import thunderstorm from './Iconixar/thunderstorm.png';

//Toimii sivun ympäryksenä, Switch näyttää painetun alasivun
function App() {

  return (
    <Container fluid="true" className="page-wrapper">
      <Router>
        <Header />
        <Row fluid="true" className="content-wrapper">
          <Col xl={1}></Col>
          <Sidebar />
          <Col fluid="true" className="wrapper">
            <Switch>
              <Route exact path="/reactweatherforecast/radar" component={Radar}></Route>
              <Route exact path="/reactweatherforecast/forecastinfo" component={ForecastInfo}></Route>
              <Route exact path="/reactweatherforecast/about" component={About}></Route>
              <Route exact path="/reactweatherforecast/" component={Front}></Route>
            </Switch>
          </Col>
          <Col xl={1}></Col>
        </Row>
      </Router>
    </Container>
  );
}

//Toimii sivun yläpalkkina
function Header() {

  return (
    <Container fluid className="header shadow">
      <Row>
        <Col className="header-paddingFront"></Col>
        <Col className="header-search">
          <Form className="py-3" >
            <InputGroup>
              <Form.Control className="inputSearch" name='cityName' type="text" placeholder="Hae kaupungin sääennuste"></Form.Control>
              <InputGroup.Append>
                <Button>
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
          <NavLink exact to="/reactweatherforecast/">
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Etusivu</h6></ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/reactweatherforecast/radar" >
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Sadetutka</h6></ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/reactweatherforecast/forecastinfo" >
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Sääennustetietoa</h6></ListGroup.Item>
          </NavLink>
        </Col>

        <Col>
          <NavLink exact to="/reactweatherforecast/about" >
            <ListGroup.Item action className="border text-center text-primary rounded"><h6>Tietoa sivustosta</h6></ListGroup.Item>
          </NavLink>
        </Col>
      </Row>

    </Container>
  );
}

function Sidebar() {

  return (
    <Col className="sidebar mr-3" xl={2.5}>
      <Row className="sidebar-navigation">
        <ListGroup className="mb-5 ml-5 mr-5 shadow">
          <NavLink exact to="/reactweatherforecast/" activeClassName="active-sidebar">
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

  return (
    <Col fluid="true" className="front-wrapper">

      <Row className="cityName-wrapper rounded mb-4 shadow">
        <Col>
          <h4 className="pt-3 pb-3 ml-2">Helsinki, Suomi</h4>
        </Col>
      </Row>

      <Row className="dayForecast-wrapper rounded mb-4 shadow">
        <Col>
          <h5 className="pt-3 pb-1 ml-2">Keskiviikko 17.2 - Tuntiennuste</h5>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">13:00</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-13 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">14:00</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-12 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">15:00</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-12 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">16:00</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-12 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">17:00</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-13 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">18:00</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-14 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">19:00</Col>
              <Col className="center pt-2 pb-3"><Image src={night} /></Col>
              <Col className="center pt-2 pb-2">-14 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">20:00</Col>
              <Col className="center pt-2 pb-3"><Image src={night} /></Col>
              <Col className="center pt-2 pb-2">-15 °C</Col>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="weekForecast-wrapper rounded shadow mb-5">
        <Col>
          <h5 className="pt-3 pb-1 ml-2">Lähipäivien ennuste</h5>
          <Row className="my-4 pr-4 pl-4">
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">To 18.2</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-13 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Pe 19.2</Col>
              <Col className="center pt-2 pb-3"><Image src={mist} /></Col>
              <Col className="center pt-2 pb-2">-9 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">La 20.2</Col>
              <Col className="center pt-2 pb-3"><Image src={clouds} /></Col>
              <Col className="center pt-2 pb-2">-7 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Su 21.2</Col>
              <Col className="center pt-2 pb-3"><Image src={rain} /></Col>
              <Col className="center pt-2 pb-2">-2 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Ma 22.2</Col>
              <Col className="center pt-2 pb-3"><Image src={snow} /></Col>
              <Col className="center pt-2 pb-2">-5 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Ti 23.2</Col>
              <Col className="center pt-2 pb-3"><Image src={snow} /></Col>
              <Col className="center pt-2 pb-2">-7 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">Ke 24.2</Col>
              <Col className="center pt-2 pb-3"><Image src={snow} /></Col>
              <Col className="center pt-2 pb-2">-5 °C</Col>
            </Col>
            <Col className="pt-3 pb-3 border">
              <Col className="center pt-2 pb-2">To 25.2</Col>
              <Col className="center pt-2 pb-3"><Image src={rain} /></Col>
              <Col className="center pt-2 pb-2">-1 °C</Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

function Radar() {
  return (
    <Col>
      <Row>
        <Col xl={11} className="radar-wrapper rounded mb-4">
          <h4 className="pt-3 pb-3 ml-4">Sadetutka</h4>
          <Image className="shadow rounded border border-secondary mb-4" src={radarPic} fluid />
        </Col>
      </Row>

      <Row>
        <Col xl={11} className="radar-wrapper rounded mb-4 pb-3">
          <h4 className="pt-3 pb-3 ml-4">Kelikameravideo</h4>
          <video className="p-3 img-fluid" width="1050" controls>
            <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
          </video>
          <a className="ml-3" href="http://www.videezy.com/">Additional Stock Footage Provided By Videezy!</a>
        </Col>
      </Row>
    </Col>
  );
}

//Sääennustetietoa
function ForecastInfo() {
  return (
    <Col xl={11} fluid="true" className="forecastInfo-wrapper mb-5 pr-5 pl-5 pt-4 pb-4 rounded shadow">
      <Row>
        <Col>
          <h3>Sääennustetietoa</h3>
          <br />
          <p>Sääennuste muodostuu meteorologin tekemästä ennustuksesta, jossa käytetään monenlaisia säähavaintoja ja sääennustusmalleja.
          Meteorologilla täytyy olla myös kattava kokemus sään käyttäytymisestä teoreettisesti ja konkreettisesti, jotta sääennusteen osuvuus olisi mahdollisimman osuva. (Ilmatieteen laitos 2021)</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tristique nulla, ac pharetra nulla consectetur nec. Proin molestie nisl non tincidunt lacinia. Phasellus lobortis volutpat
          lacus a vulputate. Aenean euismod ipsum id gravida tincidunt. Suspendisse tempor dolor ex, ac fermentum quam cursus at.</p>
          <br />
          <h5>Säähavainnot</h5>
          <br />
          <p>Säähavaintoja saadaan erilaisten laitteiden ja teknologioiden ansiosta. Säähavaintoja saadaan esimerkiksi sääluotausasemilta, sääsatelliiteista ja säätutkista. Havaintolaitteista saatu mitattu
          tieto tallennetaan tietokantaan. Meteorologi muokkaa näitä tietoja ja tallentaa muokatut tiedot takaisin tietokantaan. Muokatuista tiedoista luodaan lopulta sääennuste. Säähavaintojen avulla voidaan luoda sääennuste pariksi lähitunniksi. (Ilmatieteen laitos 2021)</p>
          <p>Vestibulum fringilla dapibus ligula sit amet fringilla. Proin elementum cursus massa non iaculis. Cras feugiat, velit eu gravida congue, nibh nulla pretium orci, quis egestas lorem nunc in magna. In varius purus turpis, et posuere augue iaculis id. Duis sit amet suscipit ligula.
          Nunc eget euismod mi. Cras pellentesque, turpis quis vestibulum consectetur, nunc diam scelerisque enim, sit amet imperdiet est dolor sed felis. Nulla nec nibh vestibulum velit molestie congue. Integer fermentum nunc quis arcu posuere, quis elementum ligula dapibus. Integer ut rhoncus ligula.
          Nam tempus augue tortor, sit amet pellentesque lacus vehicula eu. Sed tincidunt gravida lobortis. Donec mauris sem, porttitor eu mollis in, tempus sed arcu.</p>
          <br />
          <h5>Sääennustemallit</h5>
          <br />
          <p>Sääennustemalleja käytetään lähihetkiennusteihin ja pisimmillään jopa kuukausiennusteihin. Mallien tarkoituksena on laskea ilmakehän tilaa kolmiulotteisesti ajassa eteenpäin.
          Nämä mallit ovat ilmakehän tilaa kuvaavia fysiikan yhtälöitä, joiden laskemiseen tarvitaan tehokkaita supertietokoneita. (Ilmatieteen laitos 2021)</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tristique nulla, ac pharetra nulla consectetur nec. Proin molestie nisl non tincidunt lacinia. Phasellus lobortis volutpat lacus a vulputate.
          Aenean euismod ipsum id gravida tincidunt. Suspendisse tempor dolor ex, ac fermentum quam cursus at.</p>
          <p>Vestibulum fringilla dapibus ligula sit amet fringilla. Proin elementum cursus massa non iaculis. Cras feugiat, velit eu gravida congue, nibh nulla pretium orci, quis egestas lorem nunc in magna. In varius purus turpis, et posuere augue iaculis id. Duis sit amet suscipit ligula.
          Nunc eget euismod mi. </p>
          <p>Cras pellentesque, turpis quis vestibulum consectetur, nunc diam scelerisque enim, sit amet imperdiet est dolor sed felis. Nulla nec nibh vestibulum velit molestie congue. Integer fermentum nunc quis arcu posuere, quis elementum ligula dapibus. Integer ut rhoncus ligula.
          Nam tempus augue tortor, sit amet pellentesque lacus vehicula eu. Sed tincidunt gravida lobortis. Donec mauris sem, porttitor eu mollis in, tempus sed arcu.</p>
          <br />
          <h5>Meteorologi</h5>
          <br />
          <p>Meteorologi on sääennusteen laatija, kuka yhdistää saamansa tiedon säähavainnoista ja sääennustemalleista ennusteeksi tulevasta säätilasta.
          Meteorologia tarvitaan varsinkin tilanteissa, joissa havainnoista ja malleista saatavat tiedot eivät riitä sääennustuksen luomiseen. Tällaisia tilanteita on mm. voimakkaat sääilmiöt ja nopeasti muuttuvat sääolosuhteet. (Ilmatieteen laitos 2021)</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tristique nulla, ac pharetra nulla consectetur nec. Proin molestie nisl non tincidunt lacinia. Phasellus lobortis volutpat lacus a vulputate.
          Aenean euismod ipsum id gravida tincidunt. Suspendisse tempor dolor ex, ac fermentum quam cursus at.</p>
          <hr />
          <h6 className="pb-2">Lisätietoa:</h6>
          <Col className="img-thumbnail border-link border-primary">
            <a href="http://www.ilmatieteenlaitos.fi/saaennuste">
              <Image src={forecastinfoPic} fluid />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
              </svg>
              ilmatieteenlaitos.fi
            </a>
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

//Tietoa sivustosta
function About() {
  return (
    <Col fluid="true">
      <Row>
        <Col fluid="true" className="aboutFirst-wrapper pr-5 pl-5 pt-4 pb-4 rounded shadow">
          <h4>Merkkien selitykset</h4>
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
          <hr />
        </Col>
        <Col fluid="true" className="aboutSecond-wrapper pr-5 pl-5 pt-4 pb-4 rounded shadow">
          <h4>Sisältö</h4>
          <hr />
          <h6>Multimedia:</h6>
          <br />
          <p>Säämerkit: <a href="https://www.flaticon.com/authors/iconixar">Flaticon.com - Iconixar</a></p>
          <p>Sadetutka-kuva: <a href="https://unsplash.com/photos/qYMlpeQypGU">Unsplash.com - British Libary</a></p>
          <p>Sadetutka-video: <a href="https://www.videezy.com/abstract/48227-a-low-shot-of-a-snowy-path">Videezy.com</a></p>
          <p>Sääennustetietoa: <a href="https://unsplash.com/photos/yZygONrUBe8">Unsplash.com - NASA</a></p>
          <p>Taustakuva: <a href="https://pixabay.com/fi/photos/pilvi%C3%A4-taivas-s%C3%A4%C3%A4-kumpupilvi%C3%A4-3488632/">Pixabay.com - anncapictures</a></p>
          <p>Yhteystiedot-kuva: <a href="https://pixabay.com/fi/photos/antenni-l%C3%A4het%C3%A4-j%C3%A4rjestelm%C3%A4-4179268/">Pixabay.com - u_dg9i01w5</a></p>
          <hr />
          <h6>Teematietoa:</h6>
          <br />
          <p>Ilmatieteen laitos 2021, Sääennuste teematietoa. www.ilmatieteenlaitos.fi/saaennuste</p>
          <hr />
          <h6>Yhteystiedot:</h6>
          <br />
          <p>Osoite: Tekniikkakatu 12, 00000 Helsinki</p>
          <p>Puhelin: +358 555 5555</p>
          <p>Sähköposti: etunimi.sukunimi@esimerkki.com</p>
          <Image className="rounded my-3" src={antenna} fluid />
        </Col>
      </Row>
    </Col>

  );
}

export default App;
