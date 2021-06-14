//Import modules
import React, { useState, useEffect } from 'react';

//Import own UI-Elements
import Cocktail from '../Cocktailoverview/cocktail';

//Import local ressources
import { apiurl } from '../../api';


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
            setState({
              dbDataLoaded : result.success,
              cocktails : result.cocktails,
            });
            console.log(state.cocktails);
          }
          //Request failed
          else if (result && result.success === false) {
            setState({
              dbDataLoaded : result.success,
              cocktails : null,
            })
          }
        } catch (error) {
            console.log(error.message);
        }
    }, []);


    if (state.dbDataLoaded) {
      return (
        <div className="row">
          {
            state.cocktails.map((cocktail) => {
              return (
                <Cocktail name={cocktail.name} ingredients={cocktail.ingredients}/>
              );
            })
          }
        </div>
      );
    }
    else {
        return (
          <h1>Loading...</h1>
        );
    }
}

 export default FavouritesList;