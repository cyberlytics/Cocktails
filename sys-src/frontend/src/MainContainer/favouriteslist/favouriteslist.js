//Import modules
import React from 'react';

//Import own UI-Elements
import Cocktail from '../Cocktailoverview/cocktail';

function FavouritesList(props) {


    return (
      <div className="row">
        {
          props.cocktails.map((cocktail) => {
            if (cocktail.favourite) {
              return (
                <Cocktail image={cocktail.image} name={cocktail.name} ingredients={cocktail.ingredients} isFavourite={true} toggleFavourite={props.toggleFavourite} favouriteDisabled={!props.userIsLoggedIn}/>
              );
            }
          })
        }
      </div>
    );
}

 export default FavouritesList;