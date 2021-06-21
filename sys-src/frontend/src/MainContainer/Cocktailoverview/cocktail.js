//Import modules
import React, { useState, useEffect } from 'react';
import "./style.css";

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

        <li key={props.name} className="col-lg-4 pb-1 btn" onClick= {event => outerContainerHandler(event)} id={"OuterContainer"}>
            <div className="card border-dark mb-3 cocktailcontainer">
            <h5 className="card-title fw-bold ">{props.name}</h5>
            <div className="float-end m-0 btn btn-link"  onClick={event => innerContainerHandler(event)} id={"InnerContainer"}><i className={props.isFavourite ? "fa fa-star" : "far fa-star"}/></div>
            
            <img src={`data:image/png;base64,${props.image}`} className="card-img-bottom"/>     
                <div class="overlay">
                    {
                        props.ingredients.map( (ingredient, i) => (
                            <div key={`ingredient-test-${i}`}>
                            {ingredient.name}
                            </div>
                        ))
                    }                   
                </div>
                    
            </div>
        </li>

    );
}

export default Cocktail; 