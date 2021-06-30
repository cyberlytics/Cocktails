import React from 'react'
import { Route } from 'react-router-dom';
import StepbyStep from '../MainContainer/StepbyStep/StepbyStep'

const CreateRoutes = props => {
    return (
                 
          props.cocktails.map((cocktail, index) => {
            return (
                <Route key={index} path={ `/${cocktail.name}` }>
                    <StepbyStep data={cocktail}/>
                </Route>
            );
          })
    );
}

export default CreateRoutes;