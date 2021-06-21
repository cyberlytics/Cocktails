//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import Banner from './Banner/banner';
import NavBarElement from './NavigationBar/navbarelement';
import LoginElement from './NavigationBar/loginelement';
import SearchBar from './NavigationBar/searchbarelement';

class TopContainer extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <Banner/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-end">
                            <li className="nav-item">
                                    <SearchBar className="nav-link" href="#" value={"Search"} onSearchFiltered={this.props.onSearchFiltered}/>
                            </li>
                            <li className="nav-item">
                                    <NavBarElement className="nav-link" href="#" value={"Favoriten"} redirect={event => window.location.href='/Favourites'} userIsLoggedIn={this.props.userIsLoggedIn}/>
                            </li>
                            <li className="nav-item">
                                    <NavBarElement className="nav-link" href="#" value={"Letzte Cocktails"} redirect={event => window.location.href='/LastCocktails'} userIsLoggedIn={this.props.userIsLoggedIn}/> 
                            </li>
                            <li className="nav-item">
                                    <NavBarElement className="nav-link" href="#" value={"Meine Cocktails"} redirect={event => window.location.href='/MyCocktails'} userIsLoggedIn={this.props.userIsLoggedIn}/>
                            </li>
                            <li className="nav-item">
                                    <NavBarElement className="nav-link" href="#" value={"Cocktail erstellen"} redirect={event => window.location.href='/CreateCocktail'} userIsLoggedIn={this.props.userIsLoggedIn}/>
                            </li>
                            <li className="nav-item">
                                    <LoginElement className="nav-link" href="#" value={"Login"} redirect={event => window.location.href='/login'} userIsLoggedIn={this.props.userIsLoggedIn} onLogout={this.props.onLogout}/>
                            </li>
                        </ul>
                    </div>              
                </div>
            </nav> 

        );
    }
}
 
export default TopContainer;