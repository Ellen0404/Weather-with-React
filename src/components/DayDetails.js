import React from "react";
import { DetailsWrapper } from "../styles";

const DayDetails = props => {
    return (
        <DetailsWrapper>

            <h2>Weather info for {props.day}</h2>
            <h3>{props.temp}°</h3>
            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
            <p><strong>High temp: {props.high}°</strong></p>
            <p><strong>Low temp: {props.low}°</strong></p>
            <p><strong>Precipitation: {props.precip}%</strong></p>
            <p><strong>UV index: {props.uv.toFixed(2)}</strong></p>

        </DetailsWrapper>
    )
}

export default DayDetails;