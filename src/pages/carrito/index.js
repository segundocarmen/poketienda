import React,{Fragment,useEffect,useState} from 'react';
import Loading from '../../components/Loading/Loading';
import Wrapper from '../../components/Wrapper/Wrapper';
import Header from '../../components/Header/Header';
import {NameLS} from '../../utils/constants';
import './carrito.css';
const _ = require("lodash");

const Carrito = () =>{
    const [IsLoading,setIsLoading] = useState(true);
    const [DatosCarrito,setDatosCarrito] = useState([]);
    const [QtyPokemons,setQtyPokemons] = useState(0);

    //Se llama al useEffect siempre antes de renderizar el componente
    useEffect(()=>{
        ObtenerDatosCarrito();
        setIsLoading(false);
    },[])

    const ObtenerDatosCarrito = () =>{
        const carrito = localStorage.getItem(NameLS);
        if(carrito != null){
            const carritoDecoded = JSON.parse(carrito);
            setDatosCarrito(carritoDecoded);

            let cantidad = 0;
            carritoDecoded.map((item,index)=>{
                const qty = parseInt(item.qty);
                cantidad = cantidad + qty;
            })
            console.log(cantidad)
            setQtyPokemons(cantidad);
        }
        
    }

    const RemoverElemento = (name) =>{
        const conf = window.confirm(`Desea eliminar a ${name}`);
        if(conf){
            const carrito = localStorage.getItem(NameLS);
            const carritoDecoded = JSON.parse(carrito);
            const index = _.map(_.keys(_.pickBy(carritoDecoded, {name})), Number);
            const indice = index[0];
            carritoDecoded.splice(indice,1);
            localStorage.setItem(NameLS,JSON.stringify(carritoDecoded));
            ObtenerDatosCarrito();
        }
    }

    return(
        <Wrapper>
            {
                IsLoading && 
                <Loading />
            }
            <Header  qtyPokemons={QtyPokemons}/>
            <main className="carrito_list">
                <h1>Detalle del carrito</h1>
                <table cellSpacing="0" cellPadding="0" width="100%">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DatosCarrito.length > 0 ?
                                DatosCarrito.map((item,index) => {
                                    return(
                                        <tr key={index} >
                                            <td> {index+1} </td>
                                            <td> {item.name} </td>
                                            <td> <img src={item.image} alt={`${item.name}`} /> </td>
                                            <td> {item.qty} </td>
                                            <td> <button onClick={()=>{RemoverElemento(item.name)}} >Remover</button> </td>
                                        </tr>
                                    )
                                })
                            :
                            <tr><td colSpan="5">No existen productos en el carrito</td></tr>
                        }
                    </tbody>
                </table>
            </main>
        </Wrapper>
    )
}

export default Carrito;