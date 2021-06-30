//Import modules
import React, { Component } from 'react';

//Import own UI-Elements

//Import local ressources
import './style.css';

class LoginElement extends Component {
    state = {  }

    render() {
        if (!this.props.userIsLoggedIn) {
            return (
                <div className="styleDiv" data-testid="LoginButton">
                    <button className="btn navbutton" onClick={this.props.redirect}>Login</button>
                </div>
            );
        }
        else {
            return (
                <div className="styleDiv">
                    <button className="btn navbutton" onClick={this.props.onLogout}>Logout</button>
                </div>
            );   
        }
    }
}
 
export default LoginElement;