//Import modules
import React, { Component } from 'react';
import "./style.css"

//Import own UI-Elements


class NavBarElement extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <button className="btn navbutton" onClick={this.props.redirect} disabled={!this.props.userIsLoggedIn}>{this.props.value}</button>
            </div>
        );
    }
}
 
export default NavBarElement;