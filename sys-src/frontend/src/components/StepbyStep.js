import { useState } from 'react';
import Pagination from './Pagination'

const StepbyStep = props => {
    const[currentStep, setCurrentStep] = useState(props.data.steps[0]);

    const paginate = (stepNumber) => setCurrentStep(stepNumber)

    const [instructionactive, setinstructionactive] = useState(false)
    const onClick = () => setinstructionactive(true)

    return(
        <div>
            <h1>Bild</h1>
            <h2>{props.data.name}</h2>
            <h3>
                {                        
                    props.data.ingredients.map( (ingredient, i) => (
                    <div key={`ingredient-test-${i}`}>
                        <b>{ingredient.name}</b> : {" "}
                        {ingredient.quantity.quantity}
                        {ingredient.quantity.unit}
                    </div>
                ))
                }
            </h3>
            <button onClick={onClick}>Start</button>
            { instructionactive ? 
            <div>
                <ul className='list-group mb-4'>
                    <li>
                        {currentStep}
                    </li>
                </ul>

            <Pagination steps={props.data.steps} paginate={paginate} currentStep={currentStep}></Pagination>
            </div>
            : null 
            }
        </div>
    )
}

export default StepbyStep;