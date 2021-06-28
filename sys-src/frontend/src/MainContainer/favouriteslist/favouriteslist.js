//Import modules
import React, { useEffect, useState} from 'react';

//Import own UI-Elements
import Cocktail from '../Cocktailoverview/cocktail';
import { apiurl } from '../../api';

const FavouritesList = props => {
  const [favCocktails, setFavCocktails] = useState([]);

  useEffect(() => {
    async function fetchData(){
      let userid = localStorage.getItem('isLoggedInId');
      try {
          let res = await fetch(apiurl + '/user/' + userid + '/favourites', {
              method: "get",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
          });

          let result = await res.json();
          setFavCocktails(result.cocktails);

        } catch (error) {
            console.log(error.message);
        }
    }

    fetchData();
  }, []);

    return (
      <div className="row">
        {
          favCocktails.map((cocktail) => {
            if(cocktail != null){
              return (
                <Cocktail key={cocktail.name}
                          name={cocktail.name}
                          ingredients={cocktail.ingredients}
                          isFavourite={true}
                          toggleFavourite={props.toggleFavourite}
                          favouriteDisabled={!props.userIsLoggedIn}
                          image={cocktail.image}/>
              );
            }
          })
        }
      </div>
    );
}

 export default FavouritesList;