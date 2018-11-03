import React from "react";
import { Image } from "react-bootstrap"
import "./Cards.css";

const cards = props => {
    return (
        <Image onClick={()=>props.handleClicked(props.clicked,props.id)} src={props.image} alt="cards" className="border border-dark" responsive />
    )
};
export default cards;