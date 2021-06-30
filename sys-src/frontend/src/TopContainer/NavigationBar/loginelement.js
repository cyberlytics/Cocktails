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
                <div style={styles.styleDiv}>
                    <button data-testid="LoginButton" className="btn btn-outline-primary" onClick={this.props.redirect}>Login</button>
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