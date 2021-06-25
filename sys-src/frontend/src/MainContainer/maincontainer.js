//Import modules
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Import own UI-Elements
import LoginForm from '../LoginForm/loginform';
import CocktailsList from './Cocktailoverview/List_Of_Cocktails';
import FavouritesList from './favouriteslist/favouriteslist';
import CreateRoutes from '../components/CreateRoutes';
import RegisterForm from './RegisterForm/registerform';

class MainContainer extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                <BrowserRouter>
                    <Switch>
                        <Route path="/Favourites">
                            {this.props.userIsLoggedIn ?
                            <FavouritesList cocktails={this.props.cocktails} toggleFavourite={this.props.toggleFavourite} userIsLoggedIn={this.props.userIsLoggedIn}/>
                            :
                            <h1>NICHT EINGELOGGT</h1>
                            }
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
                        <Route exact path="/">
                            <Redirect to="/Cocktailoverview" />
                        </Route>
                        <Route path="/Cocktailoverview">
                            <CocktailsList cocktails={this.props.cocktails} toggleFavourite={this.props.toggleFavourite} userIsLoggedIn={this.props.userIsLoggedIn}/>
                        </Route>
                        <Route path="/register">
                            <RegisterForm/>
                        </Route>                    
                        <CreateRoutes/>
                    </Switch>
                </BrowserRouter>
                </div>
            </div>
        );
    }
}
 
export default MainContainer;