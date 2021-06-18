import React, {useState, useEffect} from 'react'

//Import own UI-Elements
import Cocktail from './cocktail';

const ListOfCocktails = props => {
  const [cocktails, setCocktails] = useState([])

  useEffect( () => {
    setCocktails(props.cocktails);
  });

    return (
      <div className="row">
        {
          cocktails.map((cocktail) => {
            return (

                <Cocktail name={cocktail.name} ingredients={cocktail.ingredients} isFavourite={cocktail.favourite} toggleFavourite={props.toggleFavourite} favouriteDisabled={!props.userIsLoggedIn}/>

            );
          })
        }
      </div>
    );
}

export default ListOfCocktails;