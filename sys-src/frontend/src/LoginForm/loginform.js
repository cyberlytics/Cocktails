//Import modules
import React, { Component } from 'react';

//Import own UI-Elements
import IconTextField from '../inputs/icontextfield';

//Import local ressources
import { styles } from './styles';
import { apiurl } from '../api.js';

class LoginForm extends Component {
    
    //Initialize username and password field with empty string and enable button
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        };
        this.onKeyUp = this.handleEnter.bind(this);
    }

    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    setInputValue(property, val) {
        this.setState({
            [property] : val
        })
    }

    handleEnter(e) {
        if (e.charCode === 13) {
            this.handleSubmit();
        }
    }

    async handleSubmit() {
        console.log(this.state.username);
        console.log(this.state.password);
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        this.setState({
            buttonDisabled : true
        })

        try {
            let res = await fetch(apiurl + '/login', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username, 
                    password: this.state.password
                })
            });
            
            //process result
            let result = await res.json();

            //Successful authenticated
            if (result && result.success) {
                localStorage.setItem('isLoggedInId', result.id);
                window.location.href='/'
            }
            else if (result && result.success === false) {
                //TODO: USER BENACHRICHTIGEN
                this.resetForm();
            }
        } catch (error) {
            console.log(error.message);
            this.resetForm();
        }
    }

    handleKeypress = e => {
        if (e.key === "Enter") {
          this.handleSubmit();  
        }
    };

    render() { 
        return (
            <div style={styles.styleDiv} className="login-form" onKeyPress={this.handleKeypress}>
                <h1 style={styles.styleHeadline}>Login</h1>
                <div style={styles.styleInputField}><IconTextField type="username" placeholder="Username" iconclass="fas fa-user"
                value={this.state.username ? this.state.username : ''} onChange={ (val) => this.setInputValue('username', val)} /></div>
                <div style={styles.styleInputField}><IconTextField type="password" placeholder="Password" iconclass="fas fa-lock"
                value={this.state.password ? this.state.password : ''} onChange={ (val) => this.setInputValue('password', val)} /></div>
                <div style={styles.styleInputField}><button style={styles.styleButton} variant="contained" type="submit" class="btn btn-primary"
                onClick={() => this.handleSubmit() } disabled={this.state.buttonDisabled}>Login</button></div>
            </div>
        );
    }
}
 
export default LoginForm;