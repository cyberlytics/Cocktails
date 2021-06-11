//Import modules
import React, { useState, useEffect } from 'react';

//Import local ressources
import { apiurl } from '../api';

function Cocktail(props) {
    const [state, setState] = useState(0);
    
    //ComponentDidMount
    useEffect( async () => {

    }, []);



    return (
        <button key={props.name} className="col-lg-4 pb-1" onClick= {event => window.location.href='/'+props.name}>
            <div className="card">
                <div className="card-body">
                    
                <h5 className="card-title">{props.name}</h5>
                    {
                        props.ingredients.map( (ingredient, i) => (
                            <div key={`ingredient-test-${i}`}>
                            <b>{ingredient.name}</b> : {" "}
                            {ingredient.quantity.quantity}
                            {ingredient.quantity.unit}
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </button>
    );
}

export default Cocktail;