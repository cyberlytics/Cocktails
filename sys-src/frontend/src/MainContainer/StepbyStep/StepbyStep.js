import { useState } from 'react';
import Pagination from './Pagination'

const StepbyStep = props => {
    const[currentStep, setCurrentStep] = useState(props.data.steps[0]);

    const paginate = (stepNumber) => setCurrentStep(stepNumber)

    const [instructionactive, setinstructionactive] = useState(false)
    const onClick = () => setinstructionactive(true)

    return(
        <div className="row">
            <div className="col">
                <h2 className="fw-bold">{props.data.name}</h2>
                <img src={`data:image/png;base64,${props.data.image}`} width="500px" height="500px"></img>
                
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
                <h3>
                    <b>Kalorien</b>: {" "}
                    {props.data.calories.amount}
                    {props.data.calories.unit}
                </h3>
            </div>
            <div className="col">
                <button  onClick={onClick}>How-To-Mix</button>
                { instructionactive ? 
                <div>
                    <ul className='list-group mb-4'>
                        <div>
                            {currentStep}
                        </div>
                    </ul>

                <Pagination steps={props.data.steps} paginate={paginate} currentStep={currentStep}></Pagination>
                </div>
                : null 
                }
            </div>
        </div>
    )
}

export default StepbyStep;