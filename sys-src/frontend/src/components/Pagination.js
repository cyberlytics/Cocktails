import React from 'react'

const Pagination = props => {

    return(
        <nav>
            <ul className='pagination'>

                {

                    props.steps.map( (number,i) => (
                        <li key={number} className='page-item'>
                            <a onClick={()=> props.paginate(number)} className='page-link'>
                                {i+1}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </nav>
    );
};

export default Pagination;