import React,{Fragment,useEffect,useState} from 'react';
import Loading from '../../../components/Loading/Loading';
import {GetPokemon} from '../../../api/pokemon';
import Wrapper from '../../../components/Wrapper/Wrapper';
import PokemonComponent from '../../../components/Pokemon/Pokemon';
import Header from '../../../components/Header/Header';
import './detail.css'
import {NameLS} from '../../../utils/constants';


const VerPokemon = (props) =>{
    const [PokemonActual,setPokemonActual] = useState({});
    const [IsLoading,setIsLoading] = useState(false);
    const [QtyPokemons,setQtyPokemons] = useState(0);

    //Se llama al useEffect siempre antes de renderizar el componente
    useEffect(()=>{
        async function GetPokemonActual(){
            ObtenerDatosCarrito();
            try{
                setIsLoading(true);
                const result = await GetPokemon(props.match.params.name);
                setPokemonActual(result.data);
                setIsLoading(false);
            }catch(error){
                console.log(error)
                setIsLoading(false);
            }
        }
        GetPokemonActual();
    },[])

    const OnAddPokemon = (data) =>{
        setQtyPokemons(data)
    }

    const ObtenerDatosCarrito = () =>{
        const carrito = localStorage.getItem(NameLS);
        if(carrito != null){
            const carritoDecoded = JSON.parse(carrito);
            let cantidad = 0;
            carritoDecoded.map((item,index)=>{
                const qty = parseInt(item.qty);
                cantidad = cantidad + qty;
            })
            setQtyPokemons(cantidad);
        }else{
            setQtyPokemons(0);
        }
    }

    return(
        <Wrapper>
            <Header qtyPokemons={QtyPokemons} />
            <main className="pokemon_detail">
                {
                    IsLoading && 
                    <Loading />
                }
                {PokemonActual.name && <PokemonComponent name={PokemonActual.name} image={PokemonActual.sprites.front_default} OnAddPokemon={OnAddPokemon} />}
            </main>
        </Wrapper>
    )
}   

export default VerPokemon;