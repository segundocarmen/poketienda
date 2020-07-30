import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {NameLS} from '../../utils/constants';

const Header = () =>{
    useEffect(()=>{
        
    },[localStorage.getItem(NameLS)])

    return(
        <nav>
            <Link to="/pokemon" >Poketienda</Link>
            <div className="resumeOrder">
                <span>Tienes pedido(s)</span>
            </div>
        </nav>
    )
}

export default Header;