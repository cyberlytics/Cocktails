//Import modules
import React, { Component } from 'react';
//import Cocktail from '.../components/cocktail';

class SearchBar extends Component {

    state = {  }
    render() { 
        return (
            <div>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Suche" aria-label="Search"></input>
                    <button class="btn btn-outline-primary" type="submit" onClick="onCLickSearch()" >Search</button>
                </form>
            </div>
        );
    }

    
}
export default SearchBar;
