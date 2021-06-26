import { useState } from 'react';
import Pagination from './Pagination'
import "./style.css"

const StepbyStep = props => {
    const[currentStep, setCurrentStep] = useState(0);

    const paginate = (stepNumber) => setCurrentStep(stepNumber)

    const increasestep = () => currentStep < (props.data.steps.length)-1 ? setCurrentStep(currentStep+1) : setCurrentStep(currentStep)
    const decreasestep = () => currentStep > 0 ? setCurrentStep(currentStep-1) : setCurrentStep(currentStep)

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
                <button className="btn goldenbtn mb-4 mt-4" onClick={onClick}>How-To-Mix</button>
                { instructionactive ? 
                <div>
                    <Pagination steps={props.data.steps} paginate={paginate} increasestep={increasestep} decreasestep={decreasestep} currentStep={currentStep}></Pagination>
                    
                    <ul className='list-group mb-4'>
                        <div className="text-white">
                            {props.data.steps[currentStep]}
                        </div>
                    </ul>

                
                </div>
                : null 
                }
            </div>
        </div>
    )
}

export default StepbyStep;