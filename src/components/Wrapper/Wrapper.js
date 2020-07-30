import React from 'react';
import './wrapper.css'
const Wrapper = (props) =>{
    return(
        <div id="app">
            {props.children}
        </div>
    )
}

export default Wrapper;