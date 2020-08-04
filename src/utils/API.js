import axios from "axios";

const gKey = process.env.REACT_APP_GOOGLE_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_KEY;

export default {
    getWeather: function (location) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${gKey}`)
            .then(res => {
                // console.log(res);
                // you can rename the value from the axios responce like this lng:lon;
                const { lat, lng: lon } = res.data.results[0].geometry.location;
                return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&units=I&days=7&key=${weatherKey}
                `) // im gonna use the callback inside my useEffect in App.js insted of here!
            })
            .catch(err => {
                console.log(err)
            })
    }

}
