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
              <Cocktail name={cocktail.name} ingredients={cocktail.ingredients}/>
              //  <div className="col-lg-4 pb-1">
              //   <div className="card">
              //     <div className="card-body">
              //       <h5 className="card-title">{cocktail.name}</h5>
              //         {
              //           cocktail.ingredients.map( (ingredient, i) => (
              //             <div key={`ingredient-test-${i}`}>
              //               <b>{ingredient.name}</b> : {" "}
              //               {ingredient.quantity.quantity}
              //               {ingredient.quantity.unit}
              //             </div>
              //           ))
              //         }
              //     </div>
              //   </div>
              // </div>
            );
          })
        }
      </div>
    );
}

export default ListOfCocktails;