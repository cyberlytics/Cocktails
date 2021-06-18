//Import modules
import React, { useState, useEffect } from 'react';

//Import own UI-Elements
import Cocktail from '../Cocktailoverview/cocktail';

//Import local ressources
import { apiurl } from '../../api';


function FavouritesList(props) {
    const [state, setState] = useState(0);
    
    //ComponentDidMount
    useEffect( () => {
      // async function fetchData() {
      // let userid = localStorage.getItem('isLoggedInId');
      // try {
      //     let res = await fetch(apiurl + '/user/' + userid + '/favourites', {
      //         method: "get",
      //         headers: {
      //             'Accept': 'application/json',
      //             'Content-Type': 'application/json'
      //         },
      //     });
          
      //     //process result
      //     let result = await res.json();

      //     //Request successfull
      //     if (result && result.success) {
      //       setState({
      //         dbDataLoaded : result.success,
      //         cocktails : result.cocktails,
      //       });
      //       console.log(state.cocktails);
      //     }
      //     //Request failed
      //     else if (result && result.success === false) {
      //       setState({
      //         dbDataLoaded : result.success,
      //         cocktails : null,
      //       })
      //     }
      //   } catch (error) {
      //       console.log(error.message);
      //   }
      // }
      // fetchData();
    }, []);


    return (
      <div className="row">
        {
          props.cocktails.map((cocktail) => {
            if (cocktail.favourite) {
              return (
                <Cocktail name={cocktail.name} ingredients={cocktail.ingredients} isFavourite={true} toggleFavourite={props.toggleFavourite} favouriteDisabled={!props.userIsLoggedIn}/>
              );
            }
          })
        }
      </div>
    );
}

 export default FavouritesList;