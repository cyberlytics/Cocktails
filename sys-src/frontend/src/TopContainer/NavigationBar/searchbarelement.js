//Import modules
import React, { Component, useState, useEffect } from 'react';
import CocktailsDataService from "../../Service/cocktails"

const SearchBar = props => {
    const [searchCocktail, setSearchCocktail] = useState('');
    const [cocktails, setCocktails] = useState([])

    const onChangeSearchCocktail = e => {
        const searchCocktail = e.target.value; 
        setSearchCocktail(searchCocktail)

        const filteredCocktails = cocktails.filter(cocktail => {
            return cocktail.name.toLowerCase().includes( searchCocktail.toLowerCase())
        })
        props.onSearchFiltered(filteredCocktails)
    };

    useEffect( () => {
      setCocktails(props.cocktails);
    }, [])
  
    const retrieveCocktails = () => {
      CocktailsDataService.getAll()
        .then(response => {
          setCocktails(response.data)
        })
    }

            return (
            <div>
                <form className="d-flex" >
                    <input className="form-control me-2" onChange={onChangeSearchCocktail} type="search" placeholder="Suche" aria-label="Search"></input>
                </form>
            </div>
        );
};

export default SearchBar;