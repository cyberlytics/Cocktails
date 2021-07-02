import React from 'react'
import { useState } from 'react';
import "./style.css"


//returns a pagination witch paginate the preparation steps from the current cocktail
//display a specific step by clicking "Weiter"-Button, "Zurück"-Button or a specific number of the pagination
const Pagination = props => {
const[currentStep, setCurrentStep] = useState(0);

const paginate = (stepNumber) => setCurrentStep(stepNumber)

const increasestep = () => currentStep < (props.steps.length)-1 ? setCurrentStep(currentStep+1) : setCurrentStep(currentStep)
const decreasestep = () => currentStep > 0 ? setCurrentStep(currentStep-1) : setCurrentStep(currentStep)

    return(
        <nav>
            <ul className="pagination">
                <button onClick={()=> decreasestep()} className="page-link btn goldenbtn text-dark" data-testid="BackButton">Zurück</button>

                {

                    props.steps.map( (number,i) => (
                        <li key={i} className={i===currentStep? "activated":""}>
                            <button onClick={()=> paginate(i)} className={i===currentStep? "page-link btn text-dark activated":"page-link btn goldenbtn text-dark"}>
                                {i+1}
                            </button>
                        </li>
                    ))
                }

                <button onClick={()=> increasestep()} className="page-link btn goldenbtn text-dark" data-testid="NextButton">Weiter</button>

            </ul>

            <ul className='list-group mb-4'>
                <div className="text-white">
                    {props.steps[currentStep]}
                </div>
            </ul>
        </nav>
    );
};

export default Pagination;