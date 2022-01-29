import React from 'react';
import clear from '../pictures/Iconixar/clear.png'
import clouds from '../pictures/Iconixar/clouds.png'
import mist from '../pictures/Iconixar/mist.png'
import rain from '../pictures/Iconixar/rain.png'
import snow from '../pictures/Iconixar/snow.png'
import thunderstorm from '../pictures/Iconixar/thunderstorm.png'
import night from '../pictures/Iconixar/night.jpg'
import antenna from '../pictures/antenna.jpg';
import { Row, Col, Image, Table } from 'react-bootstrap';

function About() {
    return (
        <Col fluid="true">
            <Row>
                <Col fluid="true"
                    className="aboutFirst-wrapper pr-5 pl-5 pt-4 pb-4 rounded shadow">
                    <h4>Icon info</h4>
                    <br />
                    <IconTable/>
                    <hr />
                </Col>
                <Col fluid="true"
                    className="aboutSecond-wrapper pr-5 pl-5 pt-4 pb-4 rounded shadow">
                    <h4>Contents</h4>
                    <hr />
                    <h6>Multimedia</h6>
                    <br />
                    <p>Background: <a href="https://pixabay.com/fi/photos/pilvi%C3%A4-taivas-s%C3%A4%C3%A4-kumpupilvi%C3%A4-3488632/">Pixabay.com - anncapictures</a></p>
                    <p>Weather icons: <a href="https://www.flaticon.com/authors/iconixar">Flaticon.com - Iconixar</a></p>
                    <p>Weather forecast information: <a href="https://unsplash.com/photos/yZygONrUBe8">Unsplash.com - NASA</a></p>
                    <p>Yhteystiedot-kuva: <a href="https://pixabay.com/fi/photos/antenni-l%C3%A4het%C3%A4-j%C3%A4rjestelm%C3%A4-4179268/">Pixabay.com - u_dg9i01w5</a></p>
                    <hr />
                    <h6>Theme information:</h6>
                    <br />
                    <p>Ilmatieteen laitos 2021, Sääennuste teematietoa. www.ilmatieteenlaitos.fi/saaennuste</p>
                    <hr />
                    <h6>Contact information:</h6>
                    <br />
                    <p>Address: Example, 00000 Example City</p>
                    <p>Phone: +358 000 000</p>
                    <p>Email: etunimi.sukunimi@esimerkki.com</p>
                    <Image className="rounded my-3" fluid  src={antenna}/>
                </Col>
            </Row>
        </Col>

    );
}

const IconTable = () => {
    return (
        <Table>
            <tbody>
                <tr>
                    <td><Image src={clear} /></td>
                    <td className="align-middle">Sunny</td>
                </tr>
                <tr>
                    <td><Image src={clouds} /></td>
                    <td className="align-middle">Cloudy skies</td>
                </tr>
                <tr>
                    <td><Image src={mist} /></td>
                    <td className="align-middle">Cloudy / foggy</td>
                </tr>
                <tr>
                    <td><Image src={rain} /></td>
                    <td className="align-middle">Rain</td>
                </tr>
                <tr>
                    <td><Image src={snow} /></td>
                    <td className="align-middle">Snow</td>
                </tr>
                <tr>
                    <td><Image src={thunderstorm} /></td>
                    <td className="align-middle">Thunderstorms</td>
                </tr>
                <tr>
                    <td><Image src={night} /></td>
                    <td className="align-middle">Night / cloudless</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default About;