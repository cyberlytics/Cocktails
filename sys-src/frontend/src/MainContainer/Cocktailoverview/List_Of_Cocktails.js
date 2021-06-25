import React, {useState, useEffect} from 'react'

//Import own UI-Elements
import Cocktail from './cocktail';
import cocktailpic from "./cocktails.png"


const ListOfCocktails = props => {
  const [cocktails, setCocktails] = useState([])

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
              return (

                  <Cocktail key={`Cocktail-${i}`} image={cocktail.image} name={cocktail.name} ingredients={cocktail.ingredients} isFavourite={cocktail.favourite} toggleFavourite={props.toggleFavourite} favouriteDisabled={!props.userIsLoggedIn}/>

              );
            })
          }
        </div>
      </div>
    );
}

export default ListOfCocktails;