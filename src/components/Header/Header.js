import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {NameLS} from '../../utils/constants';

const Header = (props) =>{
    const [QtyPokemons, setQtyPokemons] = useState(0);

    useEffect(()=>{
        const carrito = localStorage.getItem(NameLS);
        const carritoDecoded = JSON.parse(carrito);
        let cantidad = 0;
        if(carrito != null){
            carritoDecoded.map((item,index)=>{
                const qty = parseInt(item.qty);
                cantidad = cantidad + qty;
            });
        }
        setQtyPokemons(cantidad);
    },[])

    useEffect(()=>{
        if(props.qtyPokemons == undefined){
            ObtenerDatosCarrito();
        }else{
            setQtyPokemons(props.qtyPokemons);
        } 
    },[props.qtyPokemons])

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
        <nav>
            <Link to="/pokemon" >Poketienda</Link>
            <div className="resumeOrder">
                <Link to="/carrito" title="Ver carrito" >
                    <span>Tienes {QtyPokemons} pokemon(s)</span>
                </Link>
            </div>
        </nav>
    )
}

export default Header;