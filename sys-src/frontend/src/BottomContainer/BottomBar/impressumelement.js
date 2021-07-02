//Import modules
import React, { Component } from 'react';
import "./style.css"

class Impressum extends Component {
    state = {  }
    render() { 
        return (
            <div className="d-grid gap-2 d-md-flex justify-content-md-center background">
                <button type="button" className="btn me-md-2" onClick={this.props.redirect}>Impressum</button> 
            </div>
        );
    }
}

export default Impressum;