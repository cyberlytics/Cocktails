import { useState } from 'react';
import Pagination from './Pagination'
import "./style.css"

const StepbyStep = props => {
    const [instructionactive, setinstructionactive] = useState(false)
    const onClick = () => setinstructionactive(true)

    return(
        <div className="row">
            <div className="col">
                <h2 className="fw-bold mt-2 text-white ">{props.data.name}</h2>
                <img src={`data:image/png;base64,${props.data.image}`} className="mt-2" width="500px" height="500px" alt={props.data.name}></img>
                
                <h3 className="text-white my-2">
                    {                        
                        props.data.ingredients.map( (ingredient, i) => (
                        <div key={`ingredient-test-${i}`}>
                            {ingredient.quantity.quantity}{" "}
                            {ingredient.quantity.unit} : {" "}
                            <b>{ingredient.name}</b> 
                        </div>
                    ))
                    }
                    {props.data.calories.amount}{" "}
                    {props.data.calories.unit} : {" "}
                    <b>Kalorien</b>
                </h3>
            </div>
            <div className="col">
                <button className="btn goldenbtn mb-4 mt-4" onClick={onClick}>How-To-Mix</button>
                { instructionactive ? 
                <div>
                    <Pagination steps={props.data.steps}/>               
                </div>
                : null 
                }
            </div>
        </div>
    )
}

export default StepbyStep;