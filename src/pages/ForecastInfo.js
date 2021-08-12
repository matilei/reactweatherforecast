import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

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
                <Image fluid />
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

export default ForecastInfo;