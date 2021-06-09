//Import modules
import React, { useState, useEffect } from 'react';

//Import local ressources
import { apiurl } from '../api';

function FavouritesList() {
    const [state, setState] = useState(0);
    
    //ComponentDidMount
    useEffect( async () => {
      let userid = localStorage.getItem('isLoggedInId');
      try {
          let res = await fetch(apiurl + '/user/' + userid + '/favourites', {
              method: "get",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
          });
          
          //process result
          let result = await res.json();

          //Request successfull
          if (result && result.success) {

          }
          //Request failed
          else if (result && result.success === false) {

          }
        } catch (error) {
            console.log(error.message);
        }
    }, []);



    return (
      //TODO: Change this
      cocktails.map((cocktail) => {
        return (
          <div className="col-lg-4 pb-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{cocktail.name}</h5>
                  {
                    cocktail.ingredients.map( (ingredient, i) => (
                      <div key={`ingredient-test-${i}`}>
                        <b>{ingredient.name}</b> : {" "}
                        {ingredient.quantity.quantity}
                        {ingredient.quantity.unit}
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        );
      })
    );
 }

 export default FavouritesList;