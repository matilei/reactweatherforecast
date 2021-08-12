import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function About() {
    return (
        <Col fluid="true">
            <Row>
                <Col fluid="true" className="aboutFirst-wrapper pr-5 pl-5 pt-4 pb-4 rounded shadow">
                    <h4>Merkkien selitykset</h4>
                    <br />
                    
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
                    <Image className="rounded my-3" fluid />
                </Col>
            </Row>
        </Col>

    );
}

/*
<Table>
                        <tbody>
                            <tr>
                                <td><Image src='./Iconixar/clear.png' /></td>
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
*/
export default About;