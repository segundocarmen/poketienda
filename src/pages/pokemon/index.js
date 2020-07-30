import React,{Fragment,useEffect,useState} from 'react';
import {GetAllPokemons} from '../../api/pokemon';
import Loading from '../../components/Loading/Loading';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import PokemonComponent from '../../components/Pokemon/Pokemon';

import './index.css'
const Pokemon = () =>{

    const [ListPokemons,setListPokemons] = useState([]);
    const [IsLoading,setIsLoading] = useState(false);

    //Se llama al useEffect siempre antes de renderizar el componente
    useEffect(()=>{
        async function GetPokemons(){
            try{
                setIsLoading(true);
                const result = await GetAllPokemons();
                setListPokemons(result.data.results);
                setIsLoading(false);
            }catch(error){
                console.log(error)
                setIsLoading(false);
            }
        }
        GetPokemons();
    },[])


    return(
        <Wrapper>
            {
                IsLoading && 
                <Loading />
            }
            <Header />
            <h1>Pokemon</h1>
            <main className="pokemons_list">
                {
                    ListPokemons.map((item,index)=>{
                        return(
                            <PokemonComponent key={index} name={item.name} />
                        )
                    })
                }
            </main>
        </Wrapper>
    )
}

export default Pokemon;
