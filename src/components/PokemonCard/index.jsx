import React from "react";
import "./PokemonCard.css";

const PokemonCard = (props) => {
    return (
        <div className="pokemon-card">
            <div className="pokemon-image">{props.image}</div>
            <div className="pokemon-info">
                <h3 className="pokemon-number">{props.number}</h3>
                <p className="pokemon-name">{props.name}</p>
                <p className="pokemon-type">{props.type}</p>
            </div>
            <div className="pokemon-button"></div>
        </div>
    )
}

export default PokemonCard;