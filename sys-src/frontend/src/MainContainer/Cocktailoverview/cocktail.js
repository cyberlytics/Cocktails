//Import modules
import React, {useState, useEffect} from 'react'
import { apiurl } from '../../api';
import "./style.css";

const Cocktail = props => {
    const [isFavourite, setIsFavourite] = useState();

    useEffect( () => {
        async function fetchCocktailsIDs(){
            let test = await props.isFavourite;
            setIsFavourite(test);
        }        
        fetchCocktailsIDs();
      },[]);

    function outerContainerHandler(e) {
        window.location.href='/'+props.name
    }

    function innerContainerHandler(e) {
        if(props.favouriteDisabled) {
            return;
        }
        e.stopPropagation(); //Stop Parent Element from triggering OnClick event

        setIsFavourite(!isFavourite);

        SetFavouriteCocktailInDB();
    }

    async function SetFavouriteCocktailInDB(){ 
        let userid = localStorage.getItem('isLoggedInId');
            
        try {
            let res = await fetch(apiurl + '/user/setFavourite', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: userid, 
                    cocktail: props.id,
                })
            });
            
            //process result
            let result = await res.json();

            //Successful authenticated
            if (result && result.success) {

            }
            else if (result && result.success === false) {

            }
        } catch (error) {

        }
    }

    return (

        <li key={props.name} className="col-lg-4 pb-1 btn" onClick= {event => outerContainerHandler(event)} id={"OuterContainer"}>
            <div className="card border-dark mb-3 cocktailcontainer" >
            <h5 className="card-title fw-bold ">{props.name}</h5>
            {
                props.userIsLoggedIn ?
                <div className="float-end m-0 btn btn-link"  onClick={event => innerContainerHandler(event)} id={"InnerContainer"}>
                    <i className={isFavourite ? "fa fa-star" : "far fa-star"}/>
                </div> 
                : null
            }

            
            <img src={`data:image/png;base64,${props.image}`} className="card-img-bottom" alt={props.name} />     
                <div className="overlay">
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