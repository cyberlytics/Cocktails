//Import modules
import React, { Component, useState, useEffect } from 'react';


const SearchBar = props => {

    const onChangeSearchCocktail = e => {
        const searchCocktail = e.target.value; 

        const cocktails = props.cocktails;

        const filteredCocktails = cocktails.filter(cocktail => {
            return cocktail.name.toLowerCase().includes( searchCocktail.toLowerCase())
        })
        props.onSearchFiltered(filteredCocktails)
    };

            return (
            <div>
                <form className="d-flex" >
                    <input className="form-control me-2" onChange={onChangeSearchCocktail} type="search" placeholder="Suche" aria-label="Search"></input>
                </form>
            </div>
        );
};

export default SearchBar;