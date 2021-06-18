//Import modules
import React, { useState, useEffect } from 'react';

//Import local ressources
import { apiurl } from '../../api';

function Cocktail(props) {
    const [state, setState] = useState(0);
    
    //ComponentDidMount
    useEffect( async () => {

    }, []);

    function outerContainerHandler(e) {
        window.location.href='/'+props.name
    }

    function innerContainerHandler(e) {
        if(props.favouriteDisabled) {
            return;
        }
        e.stopPropagation(); //Stop Parent Element from triggering OnClick event
        props.toggleFavourite(props.name);
    }



    return (
        <li key={props.name} className="col-lg-4 pb-1 btn with-image" onClick= {event => outerContainerHandler(event)} id={"OuterContainer"}>
            <div className="card" >
                <div className="card-body" >
                    
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
                <div className="float-end m-0 btn btn-link"  onClick={event => innerContainerHandler(event)} id={"InnerContainer"}><i className={props.isFavourite ? "fa fa-star" : "far fa-star"}/></div>
                </div>
            </div>
        </li>
    );
}

export default Cocktail;