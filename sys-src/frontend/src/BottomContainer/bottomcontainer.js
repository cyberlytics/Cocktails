//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import Impressum from './BottomBar/impressumelement';
import Datenschutz from './BottomBar/datenschutzelement'

class BottomContainer extends Component {
    state = {}
    render() {
        return (
            <div className='row g-0' data-testid="BottomContainerId">
                <div className='btn-group col-md-5 w-auto ms-auto'>
                    <Impressum value={"Impressum"} href="#"></Impressum>
                    <Datenschutz value={"Datenschutz"} href="#"></Datenschutz>
                </div>
            </div>
        );
    }
}

export default BottomContainer;