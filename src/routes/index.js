import React from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';

import Pokemon from '../pages/pokemon';
import VerPokemon from '../pages/pokemon/ver';
import Carrito from '../pages/carrito';

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/pokemon" />
                    </Route>
                    <Route exact path="/pokemon" component={Pokemon} />
                    <Route exact path="/pokemon/ver/:name" component={VerPokemon} />
                    <Route exact path="/carrito" component={Carrito} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;