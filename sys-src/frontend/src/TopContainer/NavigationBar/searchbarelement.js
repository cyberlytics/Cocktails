//Import modules
import React, { useState, useEffect } from 'react';

/*
*   input:  props.allcocktails     ->   cocktailList with all cocktails
*   input:  onChangeSearchCocktail ->   user input in the searchbar
*   output: filteredCocktails      ->   the filteredCocktail list
*
*   Filter the cocktail list for the user input. The input and the list will transformed in
*   lowerCase for the filtering. The filteredCocktails will pass on to the App.js.
*/
const SearchBar = props => {
  const [cocktails, setCocktails] = useState([])
    const onChangeSearchCocktail = e => {
        const searchCocktail = e.target.value; 
    
        const filteredCocktails = cocktails.filter(cocktail => {
            return cocktail.name.toLowerCase().includes( searchCocktail.toLowerCase())
        })
        props.onSearchFiltered(filteredCocktails)
    };

    useEffect(() => {
      setCocktails(props.allcocktails)
    },[props.allcocktails])

            return (
            <div>
                <form className="d-flex" >
                    <input className="form-control me-2" onChange={onChangeSearchCocktail} type="search" placeholder="Suche" aria-label="Search"></input>
                </form>
            </div>
        );
};

export default SearchBar;