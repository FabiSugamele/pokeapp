import React from "react";
import "./PokemonCard.css";

const PokemonCard = (props) => {
    return (
        <div key={props.id} className="pokemon-card">
            <div  className="pokemon-image"><img src={props.image}></img></div>
            <div className="pokemon-info">
                <h3 className="pokemon-number">Identifier: {props.number}</h3>
                <p className="pokemon-name">Name: {props.name}</p>
                <p className="pokemon-type">Type: </p>
            </div>
            <div className="pokemon-button"></div>
        </div>
    )
}

export default PokemonCard;