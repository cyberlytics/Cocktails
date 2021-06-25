import React from 'react'
import "./style.css"

const Pagination = props => {

    return(
        <nav>
            <ul className="pagination">
                <button onClick={()=> props.decreasestep()} className="page-link btn goldenbtn text-dark">Previus</button>

                {

                    props.steps.map( (number,i) => (
                        <li key={i} className={i===props.currentStep? "activated":""}>
                            <button onClick={()=> props.paginate(i)} className={i===props.currentStep? "page-link btn text-dark activated":"page-link btn goldenbtn text-dark"}>
                                {i+1}
                            </button>
                        </li>
                    ))
                }

                <button onClick={()=> props.increasestep()} className="page-link btn goldenbtn text-dark">Next</button>

            </ul>
        </nav>
    );
};

export default Pagination;