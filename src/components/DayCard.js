import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";

const DayCard = props => {
    return (
        <Col>
            <Card>
                <CardHeader>{props.day}</CardHeader>
                <CardBody>
                    <h3>{props.temp}°</h3>
                    <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description} />
                    <p><strong>High: {props.high}°</strong></p>
                    <p><strong>Low: {props.low}°</strong></p>
                    <p><strong>precip: {props.precip}%</strong></p>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DayCard;