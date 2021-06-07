import React, {useState, useEffect} from 'react'
import CocktailsDataService from "../Service/cocktails"
import {Link} from "react-router-dom"

const ListOfCocktails = props => {
  const [cocktails, setCocktails] = useState([])
  
  useEffect( () => {
    retrieveCocktails();
  }, [])

  const retrieveCocktails = () => {
    CocktailsDataService.getAll()
      .then(response => {
        console.log(response.data);
        setCocktails(response.data)
      })
  }

    return (
      <div className="row">
        {
          cocktails.map((cocktail) => {
            return (
              <div className="col-lg-4 pb-1">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cocktail.name}</h5>
                  <p className="card-text">
                    <div>
                      {cocktail.ingredients.Vodka}
                    </div>
                    <div>
                      <strong >{"Kaffeebohne: "}</strong>
                      {cocktail.ingredients.Kaffebohne}
                    </div>
                  </p>
                </div>
              </div>
            </div>
            );
          })
        }
      </div>
    );
}

export default ListOfCocktails;