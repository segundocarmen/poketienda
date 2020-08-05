import React from 'react';
import {Link} from 'react-router-dom';
import {NameLS} from '../../utils/constants';
import './pokemon.css'
const _ = require("lodash");

const Pokemon = (props) =>{
    const AddPokemon = () =>{
        let detail = {};
        const carrito = localStorage.getItem(NameLS);
        if(carrito === null){
            detail = {
                name:props.name,
                image: props.image,
                qty: 1
            }
            localStorage.setItem(NameLS,JSON.stringify([detail]));
            props.OnAddPokemon(1);
        }else{
            const carritoDecoded = JSON.parse(carrito);
            const exist = _.filter(carritoDecoded,function(o){return o.name == props.name});
            if(exist.length > 0){
                const index = _.map(_.keys(_.pickBy(carritoDecoded, {name:props.name})), Number);
                const qty = exist[0].qty + 1;
                carritoDecoded[index].qty = qty;
                localStorage.setItem(NameLS,JSON.stringify(carritoDecoded));
            }else{
                detail = {
                    name:props.name,
                    image: props.image,
                    qty: 1
                }
                carritoDecoded.push(detail);
                localStorage.setItem(NameLS,JSON.stringify(carritoDecoded));
            }

            let cantidad = 0;
            carritoDecoded.map((item,index)=>{
                const qty = parseInt(item.qty);
                cantidad = cantidad + qty;
            })
            props.OnAddPokemon(cantidad);
        }
        
    }

    return(
        <div className="pokemon" >
            {
                props.image ?
                    <div className="container_pokedex">
                        <figure>
                            <img src={props.image} alt={`${props.name}`} />
                            <figcaption> {props.name} </figcaption>
                        </figure>
                        <button className="btnAdd" onClick={AddPokemon}  >Añadir</button>
                    </div>
                :
                <Link className="name_pokemon" to={`/pokemon/ver/${props.name}`} > {props.name} </Link>
            }
            
        </div>
    )
}

export default Pokemon;