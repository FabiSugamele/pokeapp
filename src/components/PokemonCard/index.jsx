import React from "react";
import "./PokemonCard.css";

function getType(props) {
    let data = []
    props.type.then(function(result){
                
        return result.map(function(type) { return data.push(type.type.name)});
    //return result.map(type => type.type.name)
    
    })

    return data
}

const PokemonCard = (props) => {

    return (
        <div key={props.id} className="pokemon-card">
            <div  className="pokemon-image"><img src={props.image}></img></div>
            <div className="pokemon-info">
                <h3 className="pokemon-number">Identifier: {props.number}</h3>
                <p className="pokemon-name">Name: {props.name}</p>
                
                <p className="pokemon-type">Type: { getType(props) }</p>
            </div>
            <div className="pokemon-button"></div>
        </div>
    )
}

export default PokemonCard;