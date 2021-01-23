import React, { useState, useEffect } from "react";
import axios from 'axios';
import PokemonCard from "../../components/PokemonCard";
import Navbar from "../../components/Navbar";
import "./Home.css";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [currentPokemons, setCurrentPokemons] = useState(`https://pokeapi.co/api/v2/pokemon/?${offset}=0&limit=20`);

    const getPokemons = () => {
        axios.get(currentPokemons)
            .then(res => setPokemons(res.data.results))
    };

    useEffect(() => {
        getPokemons();
    }, []);

    function changePokemonsList() {
        setCurrentPokemons(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
        getPokemons(currentPokemons);
    }

    function next() {
        changePokemonsList();
        setOffset(offset + 20)
    }

    function previous() {
        changePokemonsList();
        offset >= 20 ? setOffset(offset - 20) : setOffset(0);
    }

     async function getInfoPokemon(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => {resolve(data)})
        })
    }

    const pokemonsList = pokemons.map((pokemon) => {
        let pokemonId = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
        
        return <PokemonCard name={pokemon.name} 
                image={`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`}
                number={pokemonId}
                type={getInfoPokemon("https://pokeapi.co/api/v2/pokemon/"+pokemonId).then(function(result){return result.types})}
        />
    })

    return (
        <main>
            <Navbar/>
            <section className="cards-conteiner">
                {pokemonsList}
            </section>
            <div className="button-pages">
            <button className="page-btn" onClick={e => { previous() }}>Anterior</button>
            <button className="page-btn" onClick={e => { next() }}>Próximo</button>
            </div>
        </main>
    )

}

export default Home;