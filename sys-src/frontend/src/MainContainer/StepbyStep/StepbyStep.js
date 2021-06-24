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
                <h2 className="fw-bold mt-4">{props.data.name}</h2>
                <img src={`data:image/png;base64,${props.data.image}`} width="500px" height="500px" alt={props.data.name}></img>
                
                <h3>
                    {                        
                        props.data.ingredients.map( (ingredient, i) => (
                        <div key={`ingredient-test-${i}`}>
                            {ingredient.quantity.quantity}
                            {ingredient.quantity.unit} : {" "}
                            <b>{ingredient.name}</b> 
                        </div>
                    ))
                    }
                    {props.data.calories.amount}
                    {props.data.calories.unit} : {" "}
                    <b>Kalorien</b>
                </h3>
            </div>
            <div className="col">
                <button className="btn btn-primary mb-4 mt-4" onClick={onClick}>How-To-Mix</button>
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