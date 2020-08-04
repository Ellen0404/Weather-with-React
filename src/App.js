import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from "reactstrap";
import moment from "moment";
import sampleData from "./data/sample.json";
import SearchBar from "./components/SearchBar";
import DayDetails from "./components/DayDetails";
import DayCard from "./components/DayCard";
import API from "./utils/API";

const App = () => {

  const [weatherinfo, setWeatherInfo] = useState({
    searchTerm: "",
    selectedDay: null,
    days: sampleData.data,
    location: "Denver, CO",
    // days: [],
    // location: ""

  });

  const { searchTerm, selectedDay, days, location } = weatherinfo;

  useEffect(() => {
    API.getWeather("Mount Rushmore")
      .then(res => {
        setWeatherInfo({
          searchTerm: "",
          selectedDay: null,
          days: res.data.data,
          location: res.data.city_name + ", " + res.data.state_code
        })
      }) //use the callback here ! instesd of use in in API.js
      .catch(err => console.log(err));
  }, []);

  const heandleInputChange = event => {
    // name=> WHICH state value you want to change 
    // value=> WHAT  I want to set it to
    const { name, value } = event.target;
    setWeatherInfo({ ...weatherinfo, [name]: value })
  }
  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather Info for {location}</h1>
        </Col>
        <Col md={5}>
          <SearchBar
            searchTerm={searchTerm}
            heandleInputChange={heandleInputChange}
          />
        </Col>
      </Row>
      <Row>
        {days.map(day => (
          <DayCard
            key={day.ts}
            day={moment(day.valid_date, "YYYY-MM-DD").format("dddd")}
            temp={day.temp}
            icon={day.weather.icon}
            description={day.weather.description}
            high={day.high_temp}
            low={day.low_temp}
            precip={day.pop}
            isSelected={day === selectedDay}
            selectDay={() => setWeatherInfo({ ...weatherinfo, selectedDay: day })}
          />
        ))}
      </Row>
      <Row>
        <Col>
          {selectedDay ? (
            <DayDetails
              day={moment(selectedDay.valid_date, "YYYY-MM-DD").format("dddd, MMMM Do,YYYY")}
              temp={selectedDay.temp}
              icon={selectedDay.weather.icon}
              description={selectedDay.weather.description}
              high={selectedDay.high_temp}
              low={selectedDay.low_temp}
              precip={selectedDay.pop}
            />
          ) : (
              <h3>Click on a day above to view details!</h3>
            )}
        </Col>
      </Row>

    </Container>
  );
}

export default App;
