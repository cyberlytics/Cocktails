//Import modules
import React, { Component } from 'react';

//Import own UI-Elements


class NavBarElement extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <button class="btn btn-outline-primary" onClick={this.props.redirect} disabled={!this.props.userIsLoggedIn}>{this.props.value}</button>
            </div>
        );
    }
}
 
export default NavBarElement;