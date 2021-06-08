//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import Banner from './Banner/banner';
import NavBarElement from './NavigationBar/navbarelement';
import LoginElement from './NavigationBar/loginelement';

class TopContainer extends Component {
    state = {  }
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <Banner/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-end">
                            <li class="nav-item">
                                    <NavBarElement class="nav-link" href="#" value={"Favoriten"} redirect={event => window.location.href='/Favourites'} userIsLoggedIn={this.props.userIsLoggedIn}/>
                            </li>
                            <li class="nav-item">
                                    <NavBarElement class="nav-link" href="#" value={"Letzte Cocktails"} redirect={event => window.location.href='/LastCocktails'} userIsLoggedIn={this.props.userIsLoggedIn}/> 
                            </li>
                            <li class="nav-item">
                                    <NavBarElement class="nav-link" href="#" value={"Meine Cocktails"} redirect={event => window.location.href='/MyCocktails'} userIsLoggedIn={this.props.userIsLoggedIn}/>
                            </li>
                            <li class="nav-item">
                                    <NavBarElement class="nav-link" href="#" value={"Cocktail erstellen"} redirect={event => window.location.href='/CreateCocktail'} userIsLoggedIn={this.props.userIsLoggedIn}/>
                            </li>
                            <li class="nav-item">
                                    <LoginElement class="nav-link" href="#" value={"Login"} redirect={event => window.location.href='/login'} userIsLoggedIn={this.props.userIsLoggedIn} onLogout={this.props.onLogout}/>
                            </li>
                        </ul>
                    </div>              
                </div>
            </nav>           
        );
    }
}
 
export default TopContainer;