import React, {useState, useEffect} from 'react'

//Import own UI-Elements
import Cocktail from './cocktail';
import { apiurl } from '../../api';
import cocktailpic from "./cocktails.png"

const ListOfCocktails = props => {
  const [cocktails, setCocktails] = useState([])
  const [favouritesIDs, setfavouritesIDs] = useState([])
    
  useEffect( () => {
    async function fetchCocktailsIDs(){
      let userid = localStorage.getItem('isLoggedInId');
      try {
          let res = await fetch(apiurl + '/user/' + userid + '/favouritesid', {
              method: "get",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
          });

          let result = await res.json();

          if(result.cocktailid != undefined){
            setfavouritesIDs(result.cocktailid);
          }
        } catch (error) {
            console.log(error.message);
        }
    }

    fetchCocktailsIDs();
    }, []);

  useEffect( () => {
    setCocktails(props.cocktails);
  },[props.cocktails]);


    return (
      <div>
        <div className="heading">
          <div>
            Keine Ahnung wie man Cocktails mixt?
          </div>
          <div>
            WIR helfen weiter!
          </div>
          <img src={cocktailpic} alt="cocktailpic"/>
          </div>
        <div className="welcoming">
          Hier erhältst DU ausführliche Rezepte für alle gängigen Cocktails für DEINE Party
        </div>
        
        <div className="row">
          {
            cocktails.map((cocktail,i) => {
              //check, if the cocktail is a favourite 
              let fav = false;

              favouritesIDs.forEach(id => {
                if(id === cocktail._id){
                  fav = true;
                }    
              });

              return (
                  <Cocktail key={`Cocktail-${i}`}
                            image={cocktail.image}
                            name={cocktail.name}
                            id={cocktail._id}
                            ingredients={cocktail.ingredients}
                            isFavourite={fav}
                            toggleFavourite={props.toggleFavourite}
                            favouriteDisabled={!props.userIsLoggedIn}
                            userIsLoggedIn={props.userIsLoggedIn}/>
                  );
            })
          }
        </div>
      </div>
    );
}

export default ListOfCocktails;