import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Home from './views/Home';
import MyPokemons from './views/MyPokemons';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/mypokemons" exact component={MyPokemons}></Route>
        </BrowserRouter>
    )
}

export default Routes;