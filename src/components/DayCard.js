import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { CardWrapper } from "../styles";

const DayCard = props => {
    return (
        <Col>
            <CardWrapper isSelected={props.isSelected} onClick={props.selectDay}>
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
            </CardWrapper>
        </Col>
    )
}

export default DayCard;