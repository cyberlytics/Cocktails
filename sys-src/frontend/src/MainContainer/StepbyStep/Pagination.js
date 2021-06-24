import React from 'react'

const Pagination = props => {

    return(
        <nav>
            <ul className="pagination">

                {

                    props.steps.map( (number,i) => (
                        <li key={number} className={number===props.currentStep? "page-item active":"page-item"}>
                            <button onClick={()=> props.paginate(number)} className="page-link btn">
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