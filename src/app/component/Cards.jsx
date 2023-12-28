import React from "react";
import { Card, CardBody, CardTitle, CardText } from "react-bootstrap";
import Image from "next/image";

const Cards = (props) => {
    return (
        <Card className={props.cardClass}>
                <Image width={200} height={100} src={props.img} alt="Imagen" className={props.imgClass} />
            <CardBody>
                <CardTitle className={props.titleClass}>{props.title}</CardTitle>
                {props.description ? <CardText className={props.descriptionClass}>{props.description}</CardText> : null}
            </CardBody>
        </Card>
    )
}
export default Cards