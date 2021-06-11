import { useState } from 'react';
import Pagination from './Pagination'

const StepbyStep = props => {
    const[currentStep, setCurrentStep] = useState(props.data.steps[0]);

    const paginate = (pageNumber) => setCurrentStep(pageNumber)


    return(
        <div>
            <h1>Bild</h1>
            <h2>{props.data.name}</h2>
            <h3>{                        
                props.data.ingredients.map( (ingredient, i) => (
                <div key={`ingredient-test-${i}`}>
                <b>{ingredient.name}</b> : {" "}
                {ingredient.quantity.quantity}
                {ingredient.quantity.unit}
                </div>
            ))
            }
            </h3>
            <button>Start</button>

            <ul className='list-group mb-4'>

                        <li>
                            {currentStep}
                        </li>

            </ul>

            <Pagination steps={props.data.steps} paginate={paginate}></Pagination>
        </div>
    )
}

export default StepbyStep;