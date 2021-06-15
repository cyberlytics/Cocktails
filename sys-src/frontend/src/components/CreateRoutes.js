import React, {useState, useEffect} from 'react'
import CocktailsDataService from "../Service/cocktails"
import { Route } from 'react-router-dom';
import StepbyStep from '../MainContainer/StepbyStep/StepbyStep'

const CreateRoutes = props => {
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
          cocktails.map((cocktail) => {
            return (
                <Route path={ `/${cocktail.name}` }>
                    <StepbyStep data={cocktail}/>
                </Route>
            );
          })
    );
}

export default CreateRoutes;