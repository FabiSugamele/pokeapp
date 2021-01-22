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
        console.log(currentPokemons)
    }

    function next() {
        changePokemonsList();
        setOffset(offset + 20)
    }

    function previous() {
        changePokemonsList();
        offset >= 20 ? setOffset(offset - 20) : setOffset(0);
    }

    const pokemonsList = pokemons.map((pokemon) => {
        return <PokemonCard name={pokemon.name} />
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