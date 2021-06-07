//Import modules
import React, { Component } from 'react';

//Import own UI-Elements

//Import local ressources
import { styles } from './style';

class LoginElement extends Component {
    state = {  }

    render() {
        if (!this.props.userIsLoggedIn) {
            return (
                <div style={styles.styleDiv}>
                    <button class="btn btn-outline-primary" onClick={this.props.redirect}>Login</button>
                </div>
            );
        }
        else {
            return (
                <div style={styles.styleDiv}>
                    <button class="btn btn-outline-primary" onClick={this.props.onLogout}>Logout</button>
                </div>
            );   
        }
    }
}
 
export default LoginElement;