import React, { useState, useEffect } from 'react';
import { Container, Row, Col, } from "reactstrap";
import moment from "moment";
import sampleData from "./data/sample.json";
import SearchBar from "./components/SearchBar";
import DayDetails from "./components/DayDetails";
import DayCard from "./components/DayCard";

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

  return (
    <Container>
      <Row>
        <Col md={7}>
          <h1>Weather Info for {location}</h1>
        </Col>
        <Col md={5}>
          <SearchBar />
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
            precip={day.precip}

          />
        ))}
      </Row>
      <Row>
        <Col>
          <DayDetails />
        </Col>
      </Row>

    </Container>
  );
}

export default App;
