import axios from 'axios';

const GetAllPokemons = () =>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=200&offset=0`);
}

const GetPokemon = (name) =>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}

export {
    GetAllPokemons,
    GetPokemon,
}