//Import modules
import React, { Component, useState, useEffect } from 'react';


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
      setCocktails(props.cocktails)
    })

            return (
            <div>
                <form className="d-flex" >
                    <input className="form-control me-2" onChange={onChangeSearchCocktail} type="search" placeholder="Suche" aria-label="Search"></input>
                </form>
            </div>
        );
};

export default SearchBar;