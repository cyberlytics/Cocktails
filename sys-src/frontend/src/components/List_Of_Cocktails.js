import React, {useState, useEffect} from 'react'
import CocktailsDataService from "../Service/cocktails"


//Import own UI-Elements
import Cocktail from './cocktail';

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
              <button key={cocktail.name} className="col-lg-4 pb-1" onClick= {event => window.location.href='/'+cocktail.name}>
                <Cocktail name={cocktail.name} ingredients={cocktail.ingredients}/>
              </button>
            );
          })
        }
      </div>
    );
}

export default ListOfCocktails;