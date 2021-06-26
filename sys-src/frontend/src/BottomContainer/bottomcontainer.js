//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import Impressum from './BottomBar/impressumelement';
import Datenschutz from './BottomBar/datenschutzelement'

class BottomContainer extends Component {
    state = {}
    render() {
        return (
            <div class='row g-0'>
                <div class='btn-group col-md-5 w-auto ms-auto'>
                    <Impressum value={"Impressum"} href="#" redirect={event => window.location.href='/Impressum'}></Impressum>
                    <Datenschutz value={"Datenschutz"} href="#" redirect={event => window.location.href='/Datenschutz'}></Datenschutz>
                </div>
            </div>
        );
    }
}

export default BottomContainer;