export async function fmi(city, setForecast) {
    var parseString = require('xml2js').parseString;
    await fetch(
        `https://opendata.fmi.fi/wfs?request=getFeature&version=2.0.0&storedquery_id=fmi::forecast::hirlam::surface::point::simple&&place=` + city + `&timestep=60&starttime=${new Date(
            Date.now()
        ).toISOString()}&endtime=${new Date(
            Date.now() + 2 * 24 * 60 * 60 * 1000
        ).toISOString()}&parameters=temperature`)
        
        //Response to text
        .then(res => res.text())
        //Response to JSON from XML with xml2js
        .then(data => parseString(data, function (err, result) {
            setForecast(JSON.parse(JSON.stringify(result)));
        }))
        .catch((error) => {
            console.log(error);
        });
}
