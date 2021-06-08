//Import modules
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Import own UI-Elements
import LoginForm from '../LoginForm/loginform';
import CocktailsList from '../components/List_Of_Cocktails';

//Import local ressources
import { styles } from './style';


class MainContainer extends Component {
    state = {  }
    render() { 
        return (
            <div style={styles.styleDiv}>
                <h1>MainContainer</h1>
                <BrowserRouter>
                    <Switch>
                        {/* TODO: UserLoggedIn über API prüfen, falls Informationen aus dem Backend abgefragt werden. */}
                        <Route path="/Favourites">
                            <h1>{this.props.userIsLoggedIn ? "FAVORITEN" : "NICHT EINGELOGGT"}</h1>
                        </Route>
                        <Route path="/LastCocktails">
                            <h1>{this.props.userIsLoggedIn ? "LETZTE COCKTAILS" : "NICHT EINGELOGGT"}</h1>
                        </Route>
                        <Route path="/MyCocktails">
                            <h1>{this.props.userIsLoggedIn ? "EIGENE COCKTAILS" : "NICHT EINGELOGGT"}</h1>
                        </Route>
                        <Route path="/CreateCocktail">
                            <h1>{this.props.userIsLoggedIn ? "EIGENEN COCKTAIL ERSTELLEN" : "NICHT EINGELOGGT"}</h1>
                        </Route>
                        <Route path="/Login">
                            <LoginForm/>
                        </Route>

                        <Route path="/">
                            <CocktailsList/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
 
export default MainContainer;