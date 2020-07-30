import React from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';

import Pokemon from '../pages/pokemon';
import VerPokemon from '../pages/pokemon/ver';

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
                </Switch>
            </Router>
        )
    }
}

export default Routes;