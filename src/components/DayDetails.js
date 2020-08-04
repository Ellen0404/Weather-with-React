import React from "react";
import { DetailsWrapper } from "../styles";

const DayDetails = props => {
    return (
        <DetailsWrapper>

            <h2>Weather info for {props.day}</h2>
            <h3>{props.temp}°</h3>
            <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
            <p><strong>High: {props.high}°</strong></p>
            <p><strong>Low: {props.low}°</strong></p>
            <p><strong>precip: {props.precip}%</strong></p>

        </DetailsWrapper>
    )
}

export default DayDetails;