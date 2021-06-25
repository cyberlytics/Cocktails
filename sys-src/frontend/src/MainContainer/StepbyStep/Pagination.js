import React from 'react'
import "./style.css"

const Pagination = props => {

    return(
        <nav>
            <ul className="pagination">

                {

                    props.steps.map( (number,i) => (
                        <li key={number} className={number===props.currentStep? "activated":""}>
                            <button onClick={()=> props.paginate(number)} className="page-link btn goldenbtn text-dark">
                                {i+1}
                            </button>
                        </li>
                    ))
                }

            </ul>
        </nav>
    );
};

export default Pagination;