import React, { useState, useEffect } from "react";
import axios from 'axios';
import PokemonCard from "../../components/PokemonCard";
import Navbar from "../../components/Navbar";
import "./Home.css";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const getPokemons =  () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(res => setPokemons(res.data.results));
    };

    useEffect(() => {
        getPokemons();
    }, []);

    const pokemonsList = pokemons.map((pokemon) => {
        console.log(pokemon.url)
        return <PokemonCard name={pokemon.name} />
    })

    return (
        <main>
            <Navbar/>
            <section className="cards-conteiner">
                {pokemonsList}
            </section>
        </main>
    )

}

export default Home;