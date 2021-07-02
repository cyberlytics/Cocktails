//Import modules
import React, { Component } from 'react';
import "./style.css"

// NavbarElements are only enabled if User is Logged in. If the User is Logged out it still renders though but not clickable.
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